/* CPLA — Inspiration Vault, v1  ("Today's Professional Insight")
 * ---------------------------------------------------------------------------
 * A curated collection of professional insights for the Student Workspace.
 * Loaded via <script src="data/insights-v1.js">, which sets window.CPLA_INSIGHTS.
 *
 * VERIFICATION STATUS — verified pass, 2026-08-03
 * Every entry below has been checked against a primary source, an authoritative
 * estate/primary-document, or a dated published citation. Five previously
 * "attributed" entries that could NOT be confirmed were removed in this pass
 * (Eames — disputed wording/no clean primary; Ansel Adams — no traceable source;
 * Cartier-Bresson — apocryphal "10,000 photographs" soundbite; Vince Lombardi —
 * the popular one-liner is a paraphrase, his verified words differ; Robert
 * Collier — could not confirm against his writings).
 *
 * If you add NEW entries, keep the standard: confirm against a PRIMARY source
 * (the actual book, letter, speech, or interview) or a reputable tracer such as
 * Quote Investigator (quoteinvestigator.com) BEFORE publishing. Do NOT treat AI
 * attribution as final.
 *
 *   status:"public-domain" — author long-deceased; wording/source documented.
 *   status:"verified"      — confirmed against a cited primary/authoritative
 *                            source (see each entry's `source`).
 *
 * Fields: id, quote, author, profession, theme, source, status, reflection
 * Themes draw from the CPLA category set (Creativity, Craftsmanship, Discipline,
 * Excellence, Simplicity, Persistence, Curiosity, Consistency, Learning,
 * Character, Design Thinking, Detail, Function, Seeing, Professionalism).
 * ---------------------------------------------------------------------------
 */
(function (root) {
  var INSIGHTS = [
    { id:"ins-001", quote:"Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away.",
      author:"Antoine de Saint-Exupéry", profession:"Writer & aviator", theme:"Simplicity",
      source:"Terre des hommes (Wind, Sand and Stars), 1939", status:"public-domain",
      reflection:"What could you remove from today's work to make it stronger?" },

    { id:"ins-002", quote:"We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
      author:"Will Durant", profession:"Historian & philosopher", theme:"Excellence",
      source:"The Story of Philosophy, 1926 (interpreting Aristotle — commonly misattributed to Aristotle himself)", status:"public-domain",
      reflection:"Excellence isn't one big win — it's the standard you keep every single day." },

    { id:"ins-003", quote:"Form ever follows function.",
      author:"Louis Sullivan", profession:"Architect", theme:"Design Thinking",
      source:"“The Tall Office Building Artistically Considered,” 1896", status:"public-domain",
      reflection:"Before you style it, ask what this design is actually for." },

    { id:"ins-004", quote:"Have nothing in your houses that you do not know to be useful, or believe to be beautiful.",
      author:"William Morris", profession:"Designer & craftsman", theme:"Craftsmanship",
      source:"Lecture, “The Beauty of Life,” 1880", status:"public-domain",
      reflection:"Does every element you've placed earn its spot — useful, beautiful, or both?" },

    { id:"ins-005", quote:"Nothing great was ever achieved without enthusiasm.",
      author:"Ralph Waldo Emerson", profession:"Essayist", theme:"Persistence",
      source:"Essays: First Series, “Circles,” 1841", status:"public-domain",
      reflection:"Bring real energy to the work — it shows up in the result." },

    { id:"ins-006", quote:"To be great is to be misunderstood.",
      author:"Ralph Waldo Emerson", profession:"Essayist", theme:"Creativity",
      source:"“Self-Reliance,” 1841", status:"public-domain",
      reflection:"A bold, original idea won't please everyone at first. Make it anyway — then make it clear." },

    { id:"ins-007", quote:"Great things are not done by impulse, but by a series of small things brought together.",
      author:"Vincent van Gogh", profession:"Painter", theme:"Consistency",
      source:"Letter to Theo van Gogh, 1882", status:"public-domain",
      reflection:"Today's small, careful choices are what add up to great work." },

    { id:"ins-008", quote:"I am always doing what I cannot do yet, in order to learn how to do it.",
      author:"Vincent van Gogh", profession:"Painter", theme:"Learning",
      source:"Van Gogh letters (vangoghletters.org)", status:"public-domain",
      reflection:"Growth lives just past comfortable. Attempt the hard thing today." },

    { id:"ins-009", quote:"Excellence is to do a common thing in an uncommon way.",
      author:"Booker T. Washington", profession:"Educator", theme:"Excellence",
      source:"Popular paraphrase of a line in Up from Slavery, 1901 (“…learned to do a common thing in an uncommon manner”)", status:"public-domain",
      reflection:"Take one ordinary task today and do it with uncommon care." },

    { id:"ins-010", quote:"Nothing in life is to be feared, it is only to be understood.",
      author:"Marie Curie", profession:"Scientist", theme:"Curiosity",
      source:"Widely documented; Curie era, public domain", status:"public-domain",
      reflection:"Meet the tool or technique you're avoiding with curiosity, not fear." },

    { id:"ins-011", quote:"Well done is better than well said.",
      author:"Benjamin Franklin", profession:"Statesman & printer", theme:"Craftsmanship",
      source:"Poor Richard's Almanack, 1737", status:"public-domain",
      reflection:"Let the finished work speak louder than the pitch." },

    { id:"ins-012", quote:"Diligence is the mother of good luck.",
      author:"Benjamin Franklin", profession:"Statesman & printer", theme:"Discipline",
      source:"Poor Richard's Almanack", status:"public-domain",
      reflection:"The “lucky” break usually follows steady, unglamorous effort." },

    { id:"ins-013", quote:"Genius is one percent inspiration and ninety-nine percent perspiration.",
      author:"Thomas Edison", profession:"Inventor", theme:"Discipline",
      source:"Edison confirmed authorship — Harper's Monthly Magazine, Sept. 1932 (and his 1927 letter)", status:"verified",
      reflection:"Ideas are cheap; the work is where they become real." },

    { id:"ins-014", quote:"Knowing is not enough; we must apply. Willing is not enough; we must do.",
      author:"Johann Wolfgang von Goethe", profession:"Writer", theme:"Discipline",
      source:"Wilhelm Meister's Apprenticeship (public domain)", status:"public-domain",
      reflection:"Turn what the lesson taught into something you actually make today." },

    { id:"ins-015", quote:"It's not what you look at that matters, it's what you see.",
      author:"Henry David Thoreau", profession:"Writer & naturalist", theme:"Seeing",
      source:"Journal, 5 Aug. 1851 (public domain)", status:"public-domain",
      reflection:"Look at today's subject twice — the second time, really see it." },

    { id:"ins-016", quote:"Waste no more time arguing about what a good man should be. Be one.",
      author:"Marcus Aurelius", profession:"Emperor & philosopher", theme:"Character",
      source:"Meditations (trans. George Long, 1862, public domain)", status:"public-domain",
      reflection:"Less talking about being a professional — be one today." },

    { id:"ins-017", quote:"Good design is as little design as possible.",
      author:"Dieter Rams", profession:"Industrial designer", theme:"Simplicity",
      source:"Ten Principles for Good Design (principle 10) — Rams's official documentation, Vitsœ (vitsoe.com)", status:"verified",
      reflection:"Simplify until only what matters remains." },

    { id:"ins-018", quote:"Don't try to be original; just try to be good.",
      author:"Paul Rand", profession:"Graphic designer", theme:"Excellence",
      source:"Paul Rand (adapting Mies van der Rohe's “I don't want to be interesting, I want to be good”) — Paul Rand estate, paulrand.design", status:"verified",
      reflection:"Chase quality, not novelty — originality tends to follow good work." },

    { id:"ins-019", quote:"It's not just what it looks like and feels like. Design is how it works.",
      author:"Steve Jobs", profession:"Entrepreneur", theme:"Design Thinking",
      source:"The New York Times Magazine, “The Guts of a New Machine,” 30 Nov. 2003", status:"verified",
      reflection:"Judge your work by how well it works, not only how it looks." },

    { id:"ins-020", quote:"The camera is an instrument that teaches people how to see without a camera.",
      author:"Dorothea Lange", profession:"Photographer", theme:"Seeing",
      source:"Dorothea Lange, quoted in the Los Angeles Times, 13 Aug. 1978", status:"verified",
      reflection:"Practice seeing like a designer even when the tools are put away." },

    { id:"ins-021", quote:"Form follows function — that has been misunderstood. Form and function should be one, joined in a spiritual union.",
      author:"Frank Lloyd Wright", profession:"Architect", theme:"Design Thinking",
      source:"Frank Lloyd Wright, 1908 — his restatement of Louis Sullivan's maxim (widely documented)", status:"verified",
      reflection:"Let how it looks and how it works become the same decision." },

    { id:"ins-022", quote:"The life of a designer is a life of fight against the ugliness.",
      author:"Massimo Vignelli", profession:"Designer", theme:"Professionalism",
      source:"Massimo Vignelli, one of his “five phrases”; collected in Vignelli: From A to Z", status:"verified",
      reflection:"Bring order and clarity to something disordered today." },

    { id:"ins-023", quote:"I have no special talent. I am only passionately curious.",
      author:"Albert Einstein", profession:"Physicist", theme:"Curiosity",
      source:"Letter to Carl Seelig, 11 Mar. 1952 (Einstein Archives 39-013)", status:"verified",
      reflection:"You don't need to be a prodigy — stay curious and keep asking why." }
  ];

  root.CPLA_INSIGHTS = INSIGHTS;
  root.CPLA_INSIGHTS_VERSION = "v1";
})(window);
