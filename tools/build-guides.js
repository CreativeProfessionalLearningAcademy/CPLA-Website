#!/usr/bin/env node
/* CPLA — Instructor Guide generator.
   Reads the single source of truth (data/lessons-v1.js) and regenerates every
   Guides/Volume-1/instructor-guide-1-XX.html from one template + tools/guide.css.
   Edit a lesson record, then run:  node tools/build-guides.js
   Never hand-edit the generated guide HTML. */
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..');
const { LESSONS, MODULES } = require(path.join(ROOT, 'data', 'lessons-v1.js'));
const CSS = fs.readFileSync(path.join(__dirname, 'guide.css'), 'utf8');

const OUT = path.join(ROOT, 'Guides', 'Volume-1');

function pad(id) { const p = id.split('.'); return p[0] + '-' + ('0' + p[1]).slice(-2); }
function anchor(id) { return 'l' + id.replace('.', '-'); }

// NOTE: field content in the data was extracted verbatim from authored guides,
// including intentional inline HTML (<b>, <em>). It is trusted authored content,
// so it is emitted as-is rather than escaped.
function raw(s) { return s == null ? '' : String(s); }

function sec(icon, head, inner) {
  return `<div class="sec"><div class="sec-h"><i class="ti ti-${icon}"></i> ${head}</div>${inner}</div>`;
}

function buildBody(L) {
  const M = MODULES[L.mod] || MODULES['1'];
  const t = L.teaching, c = L.curriculum;

  const facts = `<ul class="facts">${t.facts.map(f => `<li>${raw(f)}</li>`).join('')}</ul>`;
  const scen = `<div class="scen">${t.scenarios.map(s => `<div class="scard"><h5>${raw(s.h)}</h5><p>${raw(s.p)}</p></div>`).join('')}</div>`;
  const steps = `<div class="steps">${t.steps.map(s =>
    `<div class="step"><div class="num"></div><div class="txt"><h5>${raw(s.h)} <span class="time">${raw(s.time)}</span></h5><p>${raw(s.p)}</p>${s.say ? `<p class="say">${raw(s.say)}</p>` : ''}</div></div>`).join('')}</div>`;
  const fm = `<div class="call fm"><div class="ct"><i class="ti ti-pencil"></i> Running the exercise</div><p class="lead">${raw(t.fmFacilitation.lead)}</p><ul>${t.fmFacilitation.items.map(i => `<li>${raw(i)}</li>`).join('')}</ul></div>`;
  const del = `<div class="call del"><div class="ct"><i class="ti ti-checkbox"></i> What good work looks like</div><p class="lead">${raw(t.deliverableBars.lead)}</p><ul>${t.deliverableBars.items.map(i => `<li>${raw(i)}</li>`).join('')}</ul></div>`;
  const watch = `<ul class="watch">${t.watchFor.map(w => `<li>${raw(w)}</li>`).join('')}</ul>`;
  const disc = `<ul class="disc">${t.discussion.map(d => `<li>${raw(d)}</li>`).join('')}</ul>`;
  const ref = `<div class="ref"><div class="obj"><h6>Lesson objectives</h6><ul>${c.objectives.map(o => `<li>${raw(o)}</li>`).join('')}</ul></div><div class="voc"><h6>Key vocabulary</h6><ul>${c.vocab.map(v => `<li><span class="t">${raw(v[0])}</span> <span class="d">— ${raw(v[1])}</span></li>`).join('')}</ul></div></div>`;

  const lband = `<div class="lband"><div class="lband-top"><a class="gback" href="../../studio-director.html"><i class="ti ti-arrow-left"></i> Studio Director</a><button class="gpdf" onclick="window.print()"><i class="ti ti-file-type-pdf"></i> Save as PDF</button></div><div class="lbl">${M.volume} · ${M.module} · Lesson ${L.id}</div><h2>${raw(L.title)}</h2><div class="sub">${raw(L.tagline)}</div></div>`;

  const lbody = `<div class="lbody">` +
    sec('bulb', 'The Big Idea', `<div class="bigidea">${raw(t.bigIdea)}</div>`) +
    sec('book-2', "What you're really teaching", facts) +
    sec('map-2', 'Scenarios &amp; hooks to open the room', scen) +
    sec('list-numbers', 'Teaching the lesson — step by step', steps) +
    sec('pencil', `Facilitating the Field Manual — <em>${raw(c.fieldManual.title)}</em>`, fm) +
    sec('checkbox', `The Assignment &amp; Deliverable — <em>${raw(c.deliverable.title)}</em>`, del) +
    sec('alert-triangle', 'Watch for', watch) +
    sec('message-2', 'Discussion questions', disc) +
    ref +
    `</div>`;

  return `<section class="lesson" id="${anchor(L.id)}">${lband}${lbody}</section>`;
}

function buildPage(L) {
  const M = MODULES[L.mod] || MODULES['1'];
  const sig = `CPLA · ${M.volume} · ${M.module} — ${M.moduleTitle} · Instructor Guide · Companion to the Studio Director`;
  const footer = `<footer class="foot">
    <div class="note">
      <p><b>A note on authority.</b> This guide is authored teaching support — big ideas, facts, scenarios, and a suggested flow. The student lesson pages remain the <b>source of truth</b> for exact definitions, the precise names and number of process stages, and any figures. Where this guide and the lesson differ, follow the lesson and let us know so we can reconcile the two.</p>
      <p style="margin-top:12px"><b>Timing is a guide, not a rule.</b> The step minutes assume a ~45-minute period and are meant to be compressed or expanded. Trim the case study or discussion first if you're short; they're the most elastic.</p>
      <div class="sig">${sig}</div>
    </div>
  </footer>`;

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>CPLA — Instructor Guide · Lesson ${L.id} ${raw(L.title)}</title>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=DM+Sans:wght@300;400;500;600&family=DM+Mono:wght@400;500&display=swap" rel="stylesheet">
<link href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@2.44.0/tabler-icons.min.css" rel="stylesheet">
<style>${CSS}</style>
</head>
<body>
<div class="wrap" style="padding-top:34px">
${buildBody(L)}
${footer}
</div>
</body>
</html>
`;
}

let n = 0;
LESSONS.forEach(L => {
  const file = path.join(OUT, `instructor-guide-${pad(L.id)}.html`);
  fs.writeFileSync(file, buildPage(L));
  n++;
});
console.log(`Regenerated ${n} guides in Guides/Volume-1/ from data/lessons-v1.js`);
