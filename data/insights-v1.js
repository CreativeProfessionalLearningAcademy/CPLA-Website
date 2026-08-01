/* CPLA — Inspiration Vault, v1  ("Today's Professional Insight")
 * ---------------------------------------------------------------------------
 * A curated collection of professional insights for the Student Workspace.
 * Loaded via <script src="data/insights-v1.js">, which sets window.CPLA_INSIGHTS.
 *
 * ⚠ VERIFICATION POLICY — READ BEFORE PUBLISHING
 * This is an AI-curated DRAFT. Misattribution of famous quotations is rampant,
 * and CPLA's authoritative-sourcing standard applies here too. Every entry must
 * be confirmed by a human against a PRIMARY source (the actual book, letter,
 * speech, or interview) or a reputable tracer such as Quote Investigator
 * (quoteinvestigator.com) or Bartlett's Familiar Quotations BEFORE it is shown
 * to students. Do NOT treat AI attribution as final.
 *
 *   status:"public-domain" — author long-deceased; wording/source well documented.
 *   status:"attributed"    — believed correct and sourced, but CONFIRM wording +
 *                            source (and licensing) before publication.
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
      source:"Attributed; Washington era, public domain", status:"public-domain",
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
      source:"Attributed, widely documented, c. 1903", status:"attributed",
      reflection:"Ideas are cheap; the work is where they become real." },

    { id:"ins-014", quote:"Knowing is not enough; we must apply. Willing is not enough; we must do.",
      author:"Johann Wolfgang von Goethe", profession:"Writer", theme:"Discipline",
      source:"Wilhelm Meister's Apprenticeship (public domain)", status:"public-domain",
      reflection:"Turn what the lesson taught into something you actually make today." },

    { id:"ins-015", quote:"It's not what you look at that matters, it's what you see.",
      author:"Henry David Thoreau", profession:"Writer & naturalist", theme:"Seeing",
      source:"Journal/letters (public domain)", status:"public-domain",
      reflection:"Look at today's subject twice — the second time, really see it." },

    { id:"ins-016", quote:"Waste no more time arguing about what a good man should be. Be one.",
      author:"Marcus Aurelius", profession:"Emperor & philosopher", theme:"Character",
      source:"Meditations (trans. George Long, 1862, public domain)", status:"public-domain",
      reflection:"Less talking about being a professional — be one today." },

    { id:"ins-017", quote:"The details are not the details. They make the design.",
      author:"Charles Eames", profession:"Designer", theme:"Detail",
      source:"Attributed to Charles Eames — confirm exact wording/source", status:"attributed",
      reflection:"The small adjustments you're tempted to skip are the design." },

    { id:"ins-018", quote:"Good design is as little design as possible.",
      author:"Dieter Rams", profession:"Industrial designer", theme:"Simplicity",
      source:"Ten Principles for Good Design — confirm before publishing (living author)", status:"attributed",
      reflection:"Simplify until only what matters remains." },

    { id:"ins-019", quote:"Don't try to be original; just try to be good.",
      author:"Paul Rand", profession:"Graphic designer", theme:"Excellence",
      source:"Attributed to Paul Rand — confirm source", status:"attributed",
      reflection:"Chase quality, not novelty — originality tends to follow good work." },

    { id:"ins-020", quote:"Design is not just what it looks like and feels like. Design is how it works.",
      author:"Steve Jobs", profession:"Entrepreneur", theme:"Design Thinking",
      source:"The New York Times Magazine, “The Guts of a New Machine,” 2003", status:"attributed",
      reflection:"Judge your work by how well it works, not only how it looks." },

    { id:"ins-021", quote:"You don't take a photograph, you make it.",
      author:"Ansel Adams", profession:"Photographer", theme:"Craftsmanship",
      source:"Attributed to Ansel Adams — confirm source", status:"attributed",
      reflection:"Compose deliberately — you're making an image, not just capturing one." },

    { id:"ins-022", quote:"The camera is an instrument that teaches people how to see without a camera.",
      author:"Dorothea Lange", profession:"Photographer", theme:"Seeing",
      source:"Attributed to Dorothea Lange — confirm source", status:"attributed",
      reflection:"Practice seeing like a designer even when the tools are put away." },

    { id:"ins-023", quote:"Your first ten thousand photographs are your worst.",
      author:"Henri Cartier-Bresson", profession:"Photographer", theme:"Persistence",
      source:"Attributed to Henri Cartier-Bresson — confirm source", status:"attributed",
      reflection:"Every rough attempt moves you toward the good ones. Keep making them." },

    { id:"ins-024", quote:"Perfection is not attainable, but if we chase perfection we can catch excellence.",
      author:"Vince Lombardi", profession:"Coach", theme:"Excellence",
      source:"Attributed to Vince Lombardi — confirm source", status:"attributed",
      reflection:"Aim higher than you can reach today; you'll land on your best work." },

    { id:"ins-025", quote:"Success is the sum of small efforts, repeated day in and day out.",
      author:"Robert Collier", profession:"Author", theme:"Consistency",
      source:"Attributed to Robert Collier — confirm source", status:"attributed",
      reflection:"Professionals aren't made by one project — but by quality work, every day." },

    { id:"ins-026", quote:"Form and function should be one, joined in a spiritual union.",
      author:"Frank Lloyd Wright", profession:"Architect", theme:"Design Thinking",
      source:"Attributed to Frank Lloyd Wright — confirm source", status:"attributed",
      reflection:"Let how it looks and how it works become the same decision." },

    { id:"ins-027", quote:"The life of a designer is a life of fight — against the ugliness.",
      author:"Massimo Vignelli", profession:"Designer", theme:"Professionalism",
      source:"Attributed to Massimo Vignelli — confirm source", status:"attributed",
      reflection:"Bring order and clarity to something disordered today." },

    { id:"ins-028", quote:"I have no special talent. I am only passionately curious.",
      author:"Albert Einstein", profession:"Physicist", theme:"Curiosity",
      source:"Letter to Carl Seelig, 1952 — confirm wording", status:"attributed",
      reflection:"You don't need to be a prodigy — stay curious and keep asking why." }
  ];

  root.CPLA_INSIGHTS = INSIGHTS;
  root.CPLA_INSIGHTS_VERSION = "v1";
})(window);
