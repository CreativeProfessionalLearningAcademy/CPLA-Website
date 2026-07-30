#!/usr/bin/env node
/* CPLA — one-time extractor.
   Builds data/lessons-v1.js (the single source of truth for instructor-facing
   artifacts) by lifting:
     - curriculum fields from studio-director.html's LESSONS[] array, and
     - the teaching layer from each Guides/Volume-1 guide's HTML.
   Run: node tools/extract-lessons.js  */
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..');
const SD = path.join(ROOT, 'studio-director.html');
const GUIDES = path.join(ROOT, 'Guides', 'Volume-1');

/* ---- 1. curriculum from LESSONS[] (it is valid JSON) ---- */
const sd = fs.readFileSync(SD, 'utf8');
const arrText = sd.slice(sd.indexOf('var LESSONS=[') + 'var LESSONS='.length);
const jsonText = arrText.slice(0, arrText.indexOf('];') + 1);
const LESSONS = JSON.parse(jsonText);

/* module metadata from the MODULES map */
const MODULES = {};
const mmRe = /"(\d+)":\{volume:"([^"]+)",module:"([^"]+)",moduleTitle:"([^"]+)"\}/g;
let mm;
while ((mm = mmRe.exec(sd)) !== null) {
  MODULES[mm[1]] = { volume: mm[2], module: mm[3], moduleTitle: mm[4] };
}

/* ---- helpers ---- */
const clean = s => s.replace(/\s+/g, ' ').trim();
function guideFile(id) {
  const p = id.split('.');
  return path.join(GUIDES, `instructor-guide-${p[0]}-${('0' + p[1]).slice(-2)}.html`);
}
// grab the section body that follows a sec-h containing `label`
function section(html, label) {
  const re = new RegExp('<div class="sec-h">[^<]*<i[^>]*></i>\\s*' + label + '[\\s\\S]*?</div>([\\s\\S]*?)</div>\\s*</div>', 'i');
  // simpler: locate the sec-h, then take until the next `<div class="sec">` or ref grid
  return null; // (unused – see block-based parse below)
}
function inner(re, html) { const m = re.exec(html); return m ? m[1] : null; }
function all(re, html) { const out = []; let m; while ((m = re.exec(html)) !== null) out.push(m); return out; }

/* ---- 2. teaching layer per guide ---- */
function extractGuide(id) {
  const html = fs.readFileSync(guideFile(id), 'utf8');
  const body = html.slice(html.indexOf('<div class="lbody">'), html.indexOf('</section>'));

  const tagline = clean(inner(/<div class="lband"[\s\S]*?<div class="sub">([\s\S]*?)<\/div>/, html) || '');
  const bigIdea = clean(inner(/<div class="bigidea">([\s\S]*?)<\/div>/, body) || '');

  const factsBlock = inner(/<ul class="facts">([\s\S]*?)<\/ul>/, body) || '';
  const facts = all(/<li>([\s\S]*?)<\/li>/g, factsBlock).map(m => clean(m[1]));

  const scenBlock = inner(/<div class="scen">([\s\S]*?)<\/div>\s*<\/div>\s*<div class="sec">/, body)
    || inner(/<div class="scen">([\s\S]*?)<\/div><\/div>/, body) || '';
  const scenarios = all(/<div class="scard"><h5>([\s\S]*?)<\/h5><p>([\s\S]*?)<\/p><\/div>/g, scenBlock)
    .map(m => ({ h: clean(m[1]), p: clean(m[2]) }));

  const stepsBlock = inner(/<div class="steps">([\s\S]*?)<\/div>\s*<\/div>\s*<div class="sec">/, body) || '';
  const steps = all(/<div class="step"><div class="num"><\/div><div class="txt"><h5>([\s\S]*?)<span class="time">([\s\S]*?)<\/span><\/h5><p>([\s\S]*?)<\/p>(<p class="say">([\s\S]*?)<\/p>)?<\/div><\/div>/g, stepsBlock)
    .map(m => { const o = { h: clean(m[1]), time: clean(m[2]), p: clean(m[3]) }; if (m[5]) o.say = clean(m[5]); return o; });

  const fmBlock = inner(/<div class="call fm">([\s\S]*?)<\/div>\s*<\/div>/, body) || '';
  const fmLead = clean(inner(/<p class="lead">([\s\S]*?)<\/p>/, fmBlock) || '');
  const fmItems = all(/<li>([\s\S]*?)<\/li>/g, inner(/<ul>([\s\S]*?)<\/ul>/, fmBlock) || '').map(m => clean(m[1]));

  const delBlock = inner(/<div class="call del">([\s\S]*?)<\/div>\s*<\/div>/, body) || '';
  const delLead = clean(inner(/<p class="lead">([\s\S]*?)<\/p>/, delBlock) || '');
  const delItems = all(/<li>([\s\S]*?)<\/li>/g, inner(/<ul>([\s\S]*?)<\/ul>/, delBlock) || '').map(m => clean(m[1]));

  const watchBlock = inner(/<ul class="watch">([\s\S]*?)<\/ul>/, body) || '';
  const watch = all(/<li>([\s\S]*?)<\/li>/g, watchBlock).map(m => clean(m[1]));

  const discBlock = inner(/<ul class="disc">([\s\S]*?)<\/ul>/, body) || '';
  const disc = all(/<li>([\s\S]*?)<\/li>/g, discBlock).map(m => clean(m[1]));

  return { tagline, bigIdea, facts, scenarios, steps,
    fm: { lead: fmLead, items: fmItems },
    del: { lead: delLead, items: delItems }, watch, disc };
}

/* ---- 3. merge into one record set ---- */
const records = LESSONS.map(L => {
  const mod = L.mod || '1';
  const g = extractGuide(L.id);
  return {
    id: L.id,
    mod,
    title: L.title,
    tagline: g.tagline,
    // provenance: curriculum = authored & authoritative
    curriculum: {
      objectives: L.objectives,
      vocab: L.vocab,
      fieldManual: L.fm,      // {title, summary}
      deliverable: L.del      // {title, summary}
    },
    // provenance: teaching = authored teaching guidance
    teaching: {
      bigIdea: g.bigIdea,
      facts: g.facts,
      scenarios: g.scenarios,
      steps: g.steps,
      fmFacilitation: g.fm,   // {lead, items[]}
      deliverableBars: g.del, // {lead, items[]}
      watchFor: g.watch,
      discussion: g.disc
    }
  };
});

/* sanity: objectives/vocab in the guide ref grid must match curriculum */
let mismatch = 0;
records.forEach(r => {
  const html = fs.readFileSync(guideFile(r.id), 'utf8');
  const objs = all(/<div class="obj"><h6>[^<]*<\/h6><ul>([\s\S]*?)<\/ul>/g, html);
  if (objs.length) {
    const gobj = all(/<li>([\s\S]*?)<\/li>/g, objs[0][1]).map(m => clean(m[1]));
    if (gobj.length !== r.curriculum.objectives.length) { mismatch++; console.warn('  objective count differs in', r.id); }
  }
});

const out = `/* CPLA — Volume 1 lesson data (single source of truth).
 * GENERATED by tools/extract-lessons.js on ${new Date().toISOString().slice(0,10)} — then hand-maintained.
 *
 * This file is the authoritative source for INSTRUCTOR-FACING artifacts:
 *   - studio-director.html  (operational panel)
 *   - Guides/Volume-1/*.html (regenerated by tools/build-guides.js)
 * The authored student lesson pages remain the source of truth for exact
 * definitions and figures; edit those there, then reconcile here.
 *
 * PROVENANCE
 *   curriculum : authored & authoritative (objectives, vocab, field manual, deliverable)
 *   teaching   : authored teaching guidance (big idea, facts, scenarios, steps, watch-fors)
 * Do not edit the generated guide HTML by hand — edit a record here and run
 *   node tools/build-guides.js
 */
(function (root) {
  var MODULES = ${JSON.stringify(MODULES, null, 2)};
  var LESSONS = ${JSON.stringify(records, null, 2)};
  root.CPLA_MODULES = MODULES;
  root.CPLA_LESSONS = LESSONS;
  if (typeof module !== 'undefined' && module.exports) module.exports = { MODULES: MODULES, LESSONS: LESSONS };
})(typeof window !== 'undefined' ? window : this);
`;

fs.mkdirSync(path.join(ROOT, 'data'), { recursive: true });
fs.writeFileSync(path.join(ROOT, 'data', 'lessons-v1.js'), out);
console.log(`Wrote data/lessons-v1.js — ${records.length} lessons, ${Object.keys(MODULES).length} modules, ${mismatch} mismatches.`);
