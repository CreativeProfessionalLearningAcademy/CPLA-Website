/* CPLA — Vocabulary index, v1
 * ---------------------------------------------------------------------------
 * Loaded via <script src="data/vocab-v1.js">, sets window.CPLA_VOCAB.
 * Consumed by vocabulary.html (flip cards, games, spaced-repetition mastery).
 *
 * PROVENANCE
 *   source:"authored" — Volume 1 terms, pulled verbatim from the lesson catalog
 *                       (data/lessons-v1.js -> curriculum.vocab). Authoritative.
 *   source:"starter"  — standard app / photography / color terms authored as a
 *                       STARTER set for the categories that have no lessons yet.
 *                       Accurate but PLACEHOLDER — review & edit before relying on them,
 *                       and replace with authored lesson vocab as those volumes ship.
 *
 * Terms are deduped by name (first, most-foundational occurrence kept).
 * "spot:true" marks terms with a generated SVG example for "Spot it in the wild".
 * Category "source" mirrors the term source so the UI can badge starter shelves.
 * Counts: what-design-is=20, visual-communication=23, principles=20, typography=23, color=12, photography=14, illustrator=14, photoshop=14, indesign=14, output=12  ·  total=166
 * ---------------------------------------------------------------------------
 */
(function (root) {
  var VOCAB = {
    version: "v1",
    categories: [
          {
                "id": "what-design-is",
                "name": "What Design Is",
                "type": "subject",
                "icon": "ti-eye",
                "source": "authored"
          },
          {
                "id": "visual-communication",
                "name": "Visual Communication",
                "type": "subject",
                "icon": "ti-messages",
                "source": "authored"
          },
          {
                "id": "principles",
                "name": "The Principles",
                "type": "subject",
                "icon": "ti-adjustments",
                "source": "authored"
          },
          {
                "id": "typography",
                "name": "Typography",
                "type": "subject",
                "icon": "ti-typography",
                "source": "authored"
          },
          {
                "id": "color",
                "name": "Color",
                "type": "subject",
                "icon": "ti-palette",
                "source": "starter"
          },
          {
                "id": "photography",
                "name": "Photography",
                "type": "subject",
                "icon": "ti-camera",
                "source": "starter"
          },
          {
                "id": "illustrator",
                "name": "Illustrator",
                "type": "app",
                "icon": "ti-vector-bezier",
                "source": "starter"
          },
          {
                "id": "photoshop",
                "name": "Photoshop",
                "type": "app",
                "icon": "ti-photo",
                "source": "starter"
          },
          {
                "id": "indesign",
                "name": "InDesign",
                "type": "app",
                "icon": "ti-layout-columns",
                "source": "starter"
          },
          {
                "id": "output",
                "name": "Print & Output",
                "type": "app",
                "icon": "ti-file-type-pdf",
                "source": "starter"
          }
    ],
    terms: [
          {
                "id": "v001",
                "term": "Design",
                "def": "The intentional arrangement of visual elements to communicate a message or solve a problem for a specific audience.",
                "cat": "what-design-is",
                "level": "foundation",
                "lesson": "1.1",
                "source": "authored",
                "spot": false
          },
          {
                "id": "v002",
                "term": "Visual Communication",
                "def": "The use of images, typography, color, and layout to convey information or emotion — often more efficiently than words alone.",
                "cat": "what-design-is",
                "level": "foundation",
                "lesson": "1.1",
                "source": "authored",
                "spot": false
          },
          {
                "id": "v003",
                "term": "Audience",
                "def": "The specific person or group for whom a design is created; the primary consideration in all design decisions.",
                "cat": "what-design-is",
                "level": "foundation",
                "lesson": "1.1",
                "source": "authored",
                "spot": false
          },
          {
                "id": "v004",
                "term": "Intentionality",
                "def": "Making deliberate, considered choices in design rather than defaulting to habit, personal preference, or accident.",
                "cat": "what-design-is",
                "level": "foundation",
                "lesson": "1.1",
                "source": "authored",
                "spot": false
          },
          {
                "id": "v005",
                "term": "Design Eye",
                "def": "The trained ability to observe and analyze visual decisions in any designed object or environment — seeing choices rather than just experiencing results.",
                "cat": "what-design-is",
                "level": "foundation",
                "lesson": "1.1",
                "source": "authored",
                "spot": false
          },
          {
                "id": "v006",
                "term": "Wayfinding",
                "def": "A category of design focused on helping people navigate physical spaces — signs, maps, symbols, and color coding that guide behavior without requiring instruction.",
                "cat": "what-design-is",
                "level": "foundation",
                "lesson": "1.1",
                "source": "authored",
                "spot": false
          },
          {
                "id": "v007",
                "term": "Decoration",
                "def": "Visual elements added to improve appearance without a specific communicative purpose; ornamentation for its own sake.",
                "cat": "what-design-is",
                "level": "foundation",
                "lesson": "1.2",
                "source": "authored",
                "spot": false
          },
          {
                "id": "v008",
                "term": "Visual Hierarchy",
                "def": "The arrangement of elements so the viewer's eye moves through the design in the intended order — from most to least important.",
                "cat": "what-design-is",
                "level": "foundation",
                "lesson": "1.2",
                "source": "authored",
                "spot": true
          },
          {
                "id": "v009",
                "term": "Restraint",
                "def": "The deliberate practice of using fewer visual elements, each with clear purpose, rather than adding elements to fill space or increase apparent complexity.",
                "cat": "what-design-is",
                "level": "foundation",
                "lesson": "1.2",
                "source": "authored",
                "spot": false
          },
          {
                "id": "v010",
                "term": "Removal Test",
                "def": "A design evaluation method: if removing an element doesn't reduce the effectiveness of the communication, that element is likely decorative rather than functional.",
                "cat": "what-design-is",
                "level": "foundation",
                "lesson": "1.2",
                "source": "authored",
                "spot": false
          },
          {
                "id": "v011",
                "term": "Swiss Design",
                "def": "A mid-20th century design movement emphasizing clean grids, sans-serif typography, photography, and white space — the proof that removing decoration improves communication.",
                "cat": "what-design-is",
                "level": "foundation",
                "lesson": "1.2",
                "source": "authored",
                "spot": false
          },
          {
                "id": "v012",
                "term": "Ornament",
                "def": "A decorative detail added to a design for aesthetic enrichment rather than functional purpose — not always wrong, but always requiring justification.",
                "cat": "what-design-is",
                "level": "foundation",
                "lesson": "1.2",
                "source": "authored",
                "spot": false
          },
          {
                "id": "v013",
                "term": "Design Brief",
                "def": "A document defining the parameters of a design project: message, audience, tone, deliverables, constraints, and timeline. The foundation of every project.",
                "cat": "what-design-is",
                "level": "foundation",
                "lesson": "1.3",
                "source": "authored",
                "spot": false
          },
          {
                "id": "v014",
                "term": "Ideation",
                "def": "The divergent phase of the design process in which as many concepts as possible are generated through rapid sketching before any are evaluated or developed.",
                "cat": "what-design-is",
                "level": "foundation",
                "lesson": "1.3",
                "source": "authored",
                "spot": false
          },
          {
                "id": "v015",
                "term": "Iteration",
                "def": "The cyclical refinement of a design through successive versions, each informed by critique and testing — the primary mechanism of design improvement.",
                "cat": "what-design-is",
                "level": "foundation",
                "lesson": "1.3",
                "source": "authored",
                "spot": false
          },
          {
                "id": "v016",
                "term": "Critique",
                "def": "A structured professional practice of presenting work-in-progress for feedback, evaluated against the brief rather than personal preference.",
                "cat": "what-design-is",
                "level": "foundation",
                "lesson": "1.3",
                "source": "authored",
                "spot": false
          },
          {
                "id": "v017",
                "term": "Thumbnail Sketch",
                "def": "Small, fast, rough sketches made during ideation to explore multiple concepts quickly without committing to any single direction.",
                "cat": "what-design-is",
                "level": "foundation",
                "lesson": "1.3",
                "source": "authored",
                "spot": false
          },
          {
                "id": "v018",
                "term": "Deliverable",
                "def": "The specific file, format, or physical output that the designer is required to produce at the conclusion of a project — defined in the brief.",
                "cat": "what-design-is",
                "level": "foundation",
                "lesson": "1.3",
                "source": "authored",
                "spot": false
          },
          {
                "id": "v019",
                "term": "Divergent Thinking",
                "def": "The cognitive mode of generating many possible ideas without judgment — essential during ideation. Contrasts with convergent thinking, which narrows options toward a single solution.",
                "cat": "what-design-is",
                "level": "foundation",
                "lesson": "1.3",
                "source": "authored",
                "spot": false
          },
          {
                "id": "v020",
                "term": "Production Specifications",
                "def": "Technical parameters for a final design file: resolution, color mode, file format, bleed, trim size, and any requirements for print or digital output.",
                "cat": "what-design-is",
                "level": "foundation",
                "lesson": "1.3",
                "source": "authored",
                "spot": false
          },
          {
                "id": "v021",
                "term": "Communication Channel",
                "def": "One of the five simultaneous visual channels through which design communicates: shape, color, typography, space, and image.",
                "cat": "visual-communication",
                "level": "foundation",
                "lesson": "1.4",
                "source": "authored",
                "spot": false
          },
          {
                "id": "v022",
                "term": "Channel Alignment",
                "def": "The condition in which all five visual channels communicate the same message — producing effortless, trusted communication.",
                "cat": "visual-communication",
                "level": "foundation",
                "lesson": "1.4",
                "source": "authored",
                "spot": false
          },
          {
                "id": "v023",
                "term": "Channel Contradiction",
                "def": "The condition in which two or more channels communicate incompatible messages — producing cognitive dissonance in the viewer.",
                "cat": "visual-communication",
                "level": "foundation",
                "lesson": "1.4",
                "source": "authored",
                "spot": false
          },
          {
                "id": "v024",
                "term": "White Space",
                "def": "Empty areas in a composition — not absence but active communicative choice; generous white space signals quality, confidence, and sophistication.",
                "cat": "visual-communication",
                "level": "foundation",
                "lesson": "1.4",
                "source": "authored",
                "spot": true
          },
          {
                "id": "v025",
                "term": "The Strip Test",
                "def": "A design evaluation method: remove the headline text and ask whether the visual channels still communicate the intended message.",
                "cat": "visual-communication",
                "level": "foundation",
                "lesson": "1.4",
                "source": "authored",
                "spot": false
          },
          {
                "id": "v026",
                "term": "Visual Language",
                "def": "The consistent system of visual choices — shape, color, type, space, image — that defines how a brand communicates across all touchpoints.",
                "cat": "visual-communication",
                "level": "foundation",
                "lesson": "1.4",
                "source": "authored",
                "spot": false
          },
          {
                "id": "v027",
                "term": "Audience Profile",
                "def": "A detailed description of the specific person a design is created for — covering demographics, psychographics, visual vocabulary, context, and prior knowledge.",
                "cat": "visual-communication",
                "level": "foundation",
                "lesson": "1.5",
                "source": "authored",
                "spot": false
          },
          {
                "id": "v028",
                "term": "Psychographics",
                "def": "The values, beliefs, fears, aspirations, and attitudes of an audience — the emotional and motivational layer beneath demographic facts.",
                "cat": "visual-communication",
                "level": "foundation",
                "lesson": "1.5",
                "source": "authored",
                "spot": false
          },
          {
                "id": "v029",
                "term": "Message Statement",
                "def": "A single testable sentence defining what the specific audience should feel, understand, or do after experiencing the design.",
                "cat": "visual-communication",
                "level": "foundation",
                "lesson": "1.5",
                "source": "authored",
                "spot": false
          },
          {
                "id": "v030",
                "term": "Visual Vocabulary",
                "def": "The design language an audience encounters regularly and instinctively trusts — shapes, colors, and type treatments that feel native to their world.",
                "cat": "visual-communication",
                "level": "foundation",
                "lesson": "1.5",
                "source": "authored",
                "spot": false
          },
          {
                "id": "v031",
                "term": "Context of Encounter",
                "def": "Where, when, and how the audience will experience the design — determining required reading speed, contrast, size, and hierarchy.",
                "cat": "visual-communication",
                "level": "foundation",
                "lesson": "1.5",
                "source": "authored",
                "spot": false
          },
          {
                "id": "v032",
                "term": "Specificity",
                "def": "The quality of targeting a precise, well-defined audience — the property that creates resonance rather than generic inoffensiveness.",
                "cat": "visual-communication",
                "level": "foundation",
                "lesson": "1.5",
                "source": "authored",
                "spot": false
          },
          {
                "id": "v033",
                "term": "Visual Weight",
                "def": "The relative ability of an element to attract the eye — determined by size, weight, color, position, and surrounding space.",
                "cat": "visual-communication",
                "level": "foundation",
                "lesson": "1.6",
                "source": "authored",
                "spot": false
          },
          {
                "id": "v034",
                "term": "Squint Test",
                "def": "A hierarchy evaluation technique: squint until elements blur, then ask whether the dominant element is the correct one.",
                "cat": "visual-communication",
                "level": "foundation",
                "lesson": "1.6",
                "source": "authored",
                "spot": false
          },
          {
                "id": "v035",
                "term": "Emphasis Overload",
                "def": "The condition in which too many elements are emphasized — destroying the contrast that makes emphasis meaningful.",
                "cat": "visual-communication",
                "level": "foundation",
                "lesson": "1.6",
                "source": "authored",
                "spot": false
          },
          {
                "id": "v036",
                "term": "Reading Order",
                "def": "The sequence in which a viewer encounters information in a design — created by the hierarchy and ideally matching the sequence that best serves the goal.",
                "cat": "visual-communication",
                "level": "foundation",
                "lesson": "1.6",
                "source": "authored",
                "spot": false
          },
          {
                "id": "v037",
                "term": "Scale Timidity",
                "def": "The beginner's reluctance to make the dominant element dramatically large enough — producing hierarchy that exists technically but is perceptually invisible.",
                "cat": "visual-communication",
                "level": "foundation",
                "lesson": "1.6",
                "source": "authored",
                "spot": false
          },
          {
                "id": "v038",
                "term": "Balance",
                "def": "The distribution of visual weight across a composition — symmetrical for formal stability, asymmetrical for dynamic tension, neither for perceptual discomfort.",
                "cat": "visual-communication",
                "level": "foundation",
                "lesson": "1.7",
                "source": "authored",
                "spot": true
          },
          {
                "id": "v039",
                "term": "Contrast",
                "def": "The degree of difference between elements — in value, color, size, weight, or style; contrast creates visibility, hierarchy, and visual interest.",
                "cat": "visual-communication",
                "level": "foundation",
                "lesson": "1.7",
                "source": "authored",
                "spot": true
          },
          {
                "id": "v040",
                "term": "Alignment",
                "def": "The visual connection between elements through shared edges or centerlines — creating order, professionalism, and a sense of intentional structure.",
                "cat": "visual-communication",
                "level": "foundation",
                "lesson": "1.7",
                "source": "authored",
                "spot": true
          },
          {
                "id": "v041",
                "term": "Repetition",
                "def": "The consistent use of visual elements — colors, type styles, shapes, spacing — creating unity and the foundation of brand recognition.",
                "cat": "visual-communication",
                "level": "foundation",
                "lesson": "1.7",
                "source": "authored",
                "spot": true
          },
          {
                "id": "v042",
                "term": "Proximity",
                "def": "The spatial grouping of related elements and separation of unrelated ones — communicating relationships through position rather than content.",
                "cat": "visual-communication",
                "level": "foundation",
                "lesson": "1.7",
                "source": "authored",
                "spot": true
          },
          {
                "id": "v043",
                "term": "Perceptual Psychology",
                "def": "The scientific study of how humans perceive and interpret visual information — the foundation from which the five principles derive their authority.",
                "cat": "visual-communication",
                "level": "foundation",
                "lesson": "1.7",
                "source": "authored",
                "spot": false
          },
          {
                "id": "v044",
                "term": "Symmetrical Balance",
                "def": "Balance through mirror-image arrangement — equal elements on both sides of a central axis; formal, stable, institutional.",
                "cat": "principles",
                "level": "intermediate",
                "lesson": "1.8",
                "source": "authored",
                "spot": true
          },
          {
                "id": "v045",
                "term": "Asymmetrical Balance",
                "def": "Balance through unequal elements — large balanced by small, dark by light, saturated by neutral; dynamic and expressive.",
                "cat": "principles",
                "level": "intermediate",
                "lesson": "1.8",
                "source": "authored",
                "spot": true
          },
          {
                "id": "v046",
                "term": "Visual Axis",
                "def": "The imaginary line — horizontal, vertical, or diagonal — around which visual weight is distributed.",
                "cat": "principles",
                "level": "intermediate",
                "lesson": "1.8",
                "source": "authored",
                "spot": false
          },
          {
                "id": "v047",
                "term": "Radial Balance",
                "def": "Balance organized around a central point, elements radiating outward equally; used in logos, icons, and decorative compositions.",
                "cat": "principles",
                "level": "intermediate",
                "lesson": "1.8",
                "source": "authored",
                "spot": true
          },
          {
                "id": "v048",
                "term": "Intentional Imbalance",
                "def": "The deliberate use of visual instability to communicate energy, tension, or urgency — distinguished from accidental imbalance by control and intent.",
                "cat": "principles",
                "level": "intermediate",
                "lesson": "1.8",
                "source": "authored",
                "spot": false
          },
          {
                "id": "v049",
                "term": "Value Contrast",
                "def": "The difference between the lightness of two elements — the most fundamental legibility tool, measured as a contrast ratio.",
                "cat": "principles",
                "level": "intermediate",
                "lesson": "1.9",
                "source": "authored",
                "spot": true
          },
          {
                "id": "v050",
                "term": "Contrast Ratio",
                "def": "A numerical measure of value contrast from 1:1 to 21:1; WCAG AA requires 4.5:1 for normal text.",
                "cat": "principles",
                "level": "intermediate",
                "lesson": "1.9",
                "source": "authored",
                "spot": false
          },
          {
                "id": "v051",
                "term": "Productive Contrast",
                "def": "Contrast that communicates a specific intended relationship — size for hierarchy, value for legibility, color for focal points.",
                "cat": "principles",
                "level": "intermediate",
                "lesson": "1.9",
                "source": "authored",
                "spot": false
          },
          {
                "id": "v052",
                "term": "Visual Noise",
                "def": "Random or inconsistent contrast that communicates no relationship — creating confusion rather than clarity.",
                "cat": "principles",
                "level": "intermediate",
                "lesson": "1.9",
                "source": "authored",
                "spot": false
          },
          {
                "id": "v053",
                "term": "Color Contrast",
                "def": "Differentiation through temperature, saturation, or hue — a supplement to value contrast, never a replacement for it.",
                "cat": "principles",
                "level": "intermediate",
                "lesson": "1.9",
                "source": "authored",
                "spot": false
          },
          {
                "id": "v054",
                "term": "Contrast Gradient",
                "def": "The graduated system of contrast levels across a composition — most for the most important element, least for the background.",
                "cat": "principles",
                "level": "intermediate",
                "lesson": "1.9",
                "source": "authored",
                "spot": false
          },
          {
                "id": "v055",
                "term": "Near-Miss",
                "def": "An alignment almost correct but visibly offset — perceptually worse than clear misalignment because it signals attempted-but-failed precision.",
                "cat": "principles",
                "level": "intermediate",
                "lesson": "1.10",
                "source": "authored",
                "spot": true
          },
          {
                "id": "v056",
                "term": "Floating Element",
                "def": "An element with no visual connection to any other — positioned by feel with no shared edge or structural relationship.",
                "cat": "principles",
                "level": "intermediate",
                "lesson": "1.10",
                "source": "authored",
                "spot": false
          },
          {
                "id": "v057",
                "term": "Center Alignment",
                "def": "Alignment around a central vertical axis — right for formal or standalone content, but overused as a default and often weaker than left alignment.",
                "cat": "principles",
                "level": "intermediate",
                "lesson": "1.10",
                "source": "authored",
                "spot": false
          },
          {
                "id": "v058",
                "term": "Edge Alignment",
                "def": "Aligning elements' edges (top, bottom, left, right) to create connections across the layout independent of proximity.",
                "cat": "principles",
                "level": "intermediate",
                "lesson": "1.10",
                "source": "authored",
                "spot": false
          },
          {
                "id": "v059",
                "term": "Invisible Structure",
                "def": "The network of alignment relationships connecting all elements — not visible in the final design but felt as order and intention.",
                "cat": "principles",
                "level": "intermediate",
                "lesson": "1.10",
                "source": "authored",
                "spot": false
          },
          {
                "id": "v060",
                "term": "Intra-group Spacing",
                "def": "The space within a group of related elements, kept tight to signal they belong together.",
                "cat": "principles",
                "level": "intermediate",
                "lesson": "1.11",
                "source": "authored",
                "spot": false
          },
          {
                "id": "v061",
                "term": "Inter-group Spacing",
                "def": "The space between separate groups, kept wide to signal they are distinct.",
                "cat": "principles",
                "level": "intermediate",
                "lesson": "1.11",
                "source": "authored",
                "spot": false
          },
          {
                "id": "v062",
                "term": "Gestalt Grouping",
                "def": "The perceptual principles by which the brain automatically organizes elements into groups by similarity, proximity, and continuity.",
                "cat": "principles",
                "level": "intermediate",
                "lesson": "1.11",
                "source": "authored",
                "spot": false
          },
          {
                "id": "v063",
                "term": "Repetition System",
                "def": "A small defined set of consistent decisions — typefaces, colors, spacing, shape language — applied everywhere to build unity and recognition.",
                "cat": "principles",
                "level": "intermediate",
                "lesson": "1.11",
                "source": "authored",
                "spot": false
          },
          {
                "id": "v064",
                "term": "Serif",
                "def": "A classification with small strokes at the ends of letterforms — communicating tradition, authority, and established credibility.",
                "cat": "typography",
                "level": "intermediate",
                "lesson": "1.12",
                "source": "authored",
                "spot": false
          },
          {
                "id": "v065",
                "term": "Sans-Serif",
                "def": "A classification without serifs — clean stroke endings communicating modernity, clarity, and accessibility.",
                "cat": "typography",
                "level": "intermediate",
                "lesson": "1.12",
                "source": "authored",
                "spot": false
          },
          {
                "id": "v066",
                "term": "Slab Serif",
                "def": "A classification with thick, block-like rectangular serifs — communicating boldness, sturdiness, and confident presence.",
                "cat": "typography",
                "level": "intermediate",
                "lesson": "1.12",
                "source": "authored",
                "spot": false
          },
          {
                "id": "v067",
                "term": "Script",
                "def": "A classification with flowing, connected letterforms imitating handwriting — communicating elegance and personality; never for body text.",
                "cat": "typography",
                "level": "intermediate",
                "lesson": "1.12",
                "source": "authored",
                "spot": false
          },
          {
                "id": "v068",
                "term": "Display Typeface",
                "def": "A highly stylized typeface for large-size impact — logos, posters, headlines — illegible as body text.",
                "cat": "typography",
                "level": "intermediate",
                "lesson": "1.12",
                "source": "authored",
                "spot": false
          },
          {
                "id": "v069",
                "term": "Stress & Contrast",
                "def": "The variation between thick and thin strokes (contrast) and the angle of that variation (stress) — key tells within serif classifications.",
                "cat": "typography",
                "level": "intermediate",
                "lesson": "1.12",
                "source": "authored",
                "spot": false
          },
          {
                "id": "v070",
                "term": "Baseline",
                "def": "The invisible line on which letters sit — the reference for all vertical text alignment.",
                "cat": "typography",
                "level": "intermediate",
                "lesson": "1.13",
                "source": "authored",
                "spot": false
          },
          {
                "id": "v071",
                "term": "X-height",
                "def": "The height of lowercase letters from baseline to the top of the 'x' — the key determinant of perceived size and small-size legibility.",
                "cat": "typography",
                "level": "intermediate",
                "lesson": "1.13",
                "source": "authored",
                "spot": false
          },
          {
                "id": "v072",
                "term": "Counter",
                "def": "The enclosed or partially enclosed space within a letter (the hole in 'o', the space in 'e'); open counters aid legibility.",
                "cat": "typography",
                "level": "intermediate",
                "lesson": "1.13",
                "source": "authored",
                "spot": false
          },
          {
                "id": "v073",
                "term": "Kerning",
                "def": "The adjustment of space between two specific adjacent letters — a fine local fix, used mostly in headlines and logos.",
                "cat": "typography",
                "level": "intermediate",
                "lesson": "1.13",
                "source": "authored",
                "spot": false
          },
          {
                "id": "v074",
                "term": "Tracking",
                "def": "The uniform spacing adjustment across a word, line, or block — tight for body text, positive for all-caps labels.",
                "cat": "typography",
                "level": "intermediate",
                "lesson": "1.13",
                "source": "authored",
                "spot": false
          },
          {
                "id": "v075",
                "term": "Leading",
                "def": "The vertical space between baselines — set at 1.4–1.6× the font size for comfortable body text.",
                "cat": "typography",
                "level": "intermediate",
                "lesson": "1.13",
                "source": "authored",
                "spot": false
          },
          {
                "id": "v076",
                "term": "Type Pairing",
                "def": "The combination of two typefaces — typically display and text — chosen to work together through contrast with compatibility.",
                "cat": "typography",
                "level": "intermediate",
                "lesson": "1.14",
                "source": "authored",
                "spot": false
          },
          {
                "id": "v077",
                "term": "Contrast with Compatibility",
                "def": "The pairing principle: typefaces should be clearly different in role and feel, but share underlying qualities that make them belong together.",
                "cat": "typography",
                "level": "intermediate",
                "lesson": "1.14",
                "source": "authored",
                "spot": false
          },
          {
                "id": "v078",
                "term": "Superfamily",
                "def": "A set of serif and sans-serif typefaces designed by one designer to work together — compatibility guaranteed through shared design logic.",
                "cat": "typography",
                "level": "intermediate",
                "lesson": "1.14",
                "source": "authored",
                "spot": false
          },
          {
                "id": "v079",
                "term": "Display / Text Roles",
                "def": "The two functional roles in a pairing: the display face leads (headlines, impact), the text face supports (body, sustained reading).",
                "cat": "typography",
                "level": "intermediate",
                "lesson": "1.14",
                "source": "authored",
                "spot": false
          },
          {
                "id": "v080",
                "term": "Typeface Limit",
                "def": "The professional guideline of two typefaces — three at most — per design, each with a clear, distinct role.",
                "cat": "typography",
                "level": "intermediate",
                "lesson": "1.14",
                "source": "authored",
                "spot": false
          },
          {
                "id": "v081",
                "term": "Era Matching",
                "def": "Pairing typefaces from the same historical period or movement — giving them shared underlying proportions and sensibility.",
                "cat": "typography",
                "level": "intermediate",
                "lesson": "1.14",
                "source": "authored",
                "spot": false
          },
          {
                "id": "v082",
                "term": "Typographic Hierarchy",
                "def": "The organization of multiple text levels into a clear order of importance using size, weight, style, and space — making a layout navigable at a glance.",
                "cat": "typography",
                "level": "intermediate",
                "lesson": "1.15",
                "source": "authored",
                "spot": false
          },
          {
                "id": "v083",
                "term": "Type Scale",
                "def": "A consistent set of sizes derived from a base size and a ratio — guaranteeing visible, harmonious differences between levels.",
                "cat": "typography",
                "level": "intermediate",
                "lesson": "1.15",
                "source": "authored",
                "spot": false
          },
          {
                "id": "v084",
                "term": "Hierarchy Level",
                "def": "A distinct tier in the typographic order — H1, H2, body, caption — each with defined size, weight, style, and spacing.",
                "cat": "typography",
                "level": "intermediate",
                "lesson": "1.15",
                "source": "authored",
                "spot": false
          },
          {
                "id": "v085",
                "term": "Differentiation",
                "def": "The degree of visible difference between levels — sufficient differentiation makes levels distinguishable without reading; timid differentiation fails.",
                "cat": "typography",
                "level": "intermediate",
                "lesson": "1.15",
                "source": "authored",
                "spot": false
          },
          {
                "id": "v086",
                "term": "Style Variation",
                "def": "Using italic, small caps, or a different family to signal a distinct role — differentiating role rather than just importance.",
                "cat": "typography",
                "level": "intermediate",
                "lesson": "1.15",
                "source": "authored",
                "spot": false
          },
          {
                "id": "v087",
                "term": "Hue",
                "def": "The pure attribute of a color that gives it its name — red, blue, green — independent of lightness or intensity.",
                "cat": "color",
                "level": "foundation",
                "lesson": null,
                "source": "starter",
                "spot": false
          },
          {
                "id": "v088",
                "term": "Saturation",
                "def": "The intensity or purity of a color, from vivid and fully saturated to dull and gray.",
                "cat": "color",
                "level": "foundation",
                "lesson": null,
                "source": "starter",
                "spot": false
          },
          {
                "id": "v089",
                "term": "Value (Color)",
                "def": "The relative lightness or darkness of a color — the single most important property for legibility.",
                "cat": "color",
                "level": "foundation",
                "lesson": null,
                "source": "starter",
                "spot": false
          },
          {
                "id": "v090",
                "term": "Color Wheel",
                "def": "A circular arrangement of hues showing their relationships, used to build harmonious color schemes.",
                "cat": "color",
                "level": "foundation",
                "lesson": null,
                "source": "starter",
                "spot": false
          },
          {
                "id": "v091",
                "term": "Complementary Colors",
                "def": "Colors opposite each other on the wheel; paired for maximum contrast and energy.",
                "cat": "color",
                "level": "foundation",
                "lesson": null,
                "source": "starter",
                "spot": false
          },
          {
                "id": "v092",
                "term": "Analogous Colors",
                "def": "Colors adjacent on the wheel; paired for calm, cohesive, low-contrast harmony.",
                "cat": "color",
                "level": "intermediate",
                "lesson": null,
                "source": "starter",
                "spot": false
          },
          {
                "id": "v093",
                "term": "RGB",
                "def": "The additive color model of light (red, green, blue) used for all screens and digital display.",
                "cat": "color",
                "level": "foundation",
                "lesson": null,
                "source": "starter",
                "spot": false
          },
          {
                "id": "v094",
                "term": "CMYK",
                "def": "The subtractive color model of ink (cyan, magenta, yellow, black) used for physical printing.",
                "cat": "color",
                "level": "foundation",
                "lesson": null,
                "source": "starter",
                "spot": false
          },
          {
                "id": "v095",
                "term": "Color Temperature",
                "def": "The perceived warmth or coolness of a color, from warm reds and oranges to cool blues.",
                "cat": "color",
                "level": "intermediate",
                "lesson": null,
                "source": "starter",
                "spot": false
          },
          {
                "id": "v096",
                "term": "Tint / Shade",
                "def": "A tint is a hue lightened with white; a shade is a hue darkened with black.",
                "cat": "color",
                "level": "foundation",
                "lesson": null,
                "source": "starter",
                "spot": false
          },
          {
                "id": "v097",
                "term": "Monochromatic",
                "def": "A scheme built from a single hue using variations of value and saturation.",
                "cat": "color",
                "level": "intermediate",
                "lesson": null,
                "source": "starter",
                "spot": false
          },
          {
                "id": "v098",
                "term": "Color Accessibility",
                "def": "Designing so color choices remain legible and distinguishable for viewers with color-vision deficiency.",
                "cat": "color",
                "level": "advanced",
                "lesson": null,
                "source": "starter",
                "spot": false
          },
          {
                "id": "v099",
                "term": "Aperture",
                "def": "The adjustable opening in a lens (f-stop) controlling how much light enters and the depth of field.",
                "cat": "photography",
                "level": "foundation",
                "lesson": null,
                "source": "starter",
                "spot": false
          },
          {
                "id": "v100",
                "term": "Shutter Speed",
                "def": "The length of time the sensor is exposed to light — controls motion blur and exposure.",
                "cat": "photography",
                "level": "foundation",
                "lesson": null,
                "source": "starter",
                "spot": false
          },
          {
                "id": "v101",
                "term": "ISO",
                "def": "The sensor's sensitivity to light; higher ISO brightens images but adds noise.",
                "cat": "photography",
                "level": "foundation",
                "lesson": null,
                "source": "starter",
                "spot": false
          },
          {
                "id": "v102",
                "term": "Exposure Triangle",
                "def": "The interplay of aperture, shutter speed, and ISO that together determine a photo's exposure.",
                "cat": "photography",
                "level": "foundation",
                "lesson": null,
                "source": "starter",
                "spot": false
          },
          {
                "id": "v103",
                "term": "Depth of Field",
                "def": "The range of distance in a photo that appears acceptably sharp — shallow to deep.",
                "cat": "photography",
                "level": "intermediate",
                "lesson": null,
                "source": "starter",
                "spot": false
          },
          {
                "id": "v104",
                "term": "Focal Length",
                "def": "The lens measurement (in mm) that determines angle of view and magnification.",
                "cat": "photography",
                "level": "intermediate",
                "lesson": null,
                "source": "starter",
                "spot": false
          },
          {
                "id": "v105",
                "term": "White Balance",
                "def": "The adjustment that renders whites neutral under different light sources, correcting color casts.",
                "cat": "photography",
                "level": "intermediate",
                "lesson": null,
                "source": "starter",
                "spot": false
          },
          {
                "id": "v106",
                "term": "Rule of Thirds",
                "def": "A composition guideline placing key elements along a 3×3 grid's lines and intersections.",
                "cat": "photography",
                "level": "foundation",
                "lesson": null,
                "source": "starter",
                "spot": false
          },
          {
                "id": "v107",
                "term": "Leading Lines",
                "def": "Lines within a frame that guide the viewer's eye toward the subject or into the scene.",
                "cat": "photography",
                "level": "intermediate",
                "lesson": null,
                "source": "starter",
                "spot": false
          },
          {
                "id": "v108",
                "term": "RAW",
                "def": "An unprocessed image file that preserves maximum data for non-destructive editing.",
                "cat": "photography",
                "level": "intermediate",
                "lesson": null,
                "source": "starter",
                "spot": false
          },
          {
                "id": "v109",
                "term": "Bokeh",
                "def": "The aesthetic quality of the out-of-focus areas produced by a shallow depth of field.",
                "cat": "photography",
                "level": "advanced",
                "lesson": null,
                "source": "starter",
                "spot": false
          },
          {
                "id": "v110",
                "term": "Golden Hour",
                "def": "The warm, soft, directional light shortly after sunrise or before sunset.",
                "cat": "photography",
                "level": "foundation",
                "lesson": null,
                "source": "starter",
                "spot": false
          },
          {
                "id": "v111",
                "term": "Metering",
                "def": "How the camera measures scene brightness to recommend an exposure.",
                "cat": "photography",
                "level": "advanced",
                "lesson": null,
                "source": "starter",
                "spot": false
          },
          {
                "id": "v112",
                "term": "Composition",
                "def": "The intentional arrangement of visual elements within the frame.",
                "cat": "photography",
                "level": "foundation",
                "lesson": null,
                "source": "starter",
                "spot": false
          },
          {
                "id": "v113",
                "term": "Vector Graphic",
                "def": "An image defined by mathematical paths, so it scales to any size without losing quality.",
                "cat": "illustrator",
                "level": "foundation",
                "lesson": null,
                "source": "starter",
                "spot": false
          },
          {
                "id": "v114",
                "term": "Anchor Point",
                "def": "A point defining the start, end, or a bend of a vector path.",
                "cat": "illustrator",
                "level": "foundation",
                "lesson": null,
                "source": "starter",
                "spot": false
          },
          {
                "id": "v115",
                "term": "Path",
                "def": "A line or shape connecting anchor points — the fundamental object in vector art.",
                "cat": "illustrator",
                "level": "foundation",
                "lesson": null,
                "source": "starter",
                "spot": false
          },
          {
                "id": "v116",
                "term": "Bézier Curve",
                "def": "A curve shaped by direction handles on its anchor points, giving precise control.",
                "cat": "illustrator",
                "level": "intermediate",
                "lesson": null,
                "source": "starter",
                "spot": false
          },
          {
                "id": "v117",
                "term": "Pen Tool",
                "def": "The core tool for drawing and editing precise vector paths point by point.",
                "cat": "illustrator",
                "level": "foundation",
                "lesson": null,
                "source": "starter",
                "spot": false
          },
          {
                "id": "v118",
                "term": "Stroke",
                "def": "The visible outline applied along a path, with adjustable weight, color, and style.",
                "cat": "illustrator",
                "level": "foundation",
                "lesson": null,
                "source": "starter",
                "spot": false
          },
          {
                "id": "v119",
                "term": "Fill",
                "def": "The color or gradient applied to the interior of a closed path.",
                "cat": "illustrator",
                "level": "foundation",
                "lesson": null,
                "source": "starter",
                "spot": false
          },
          {
                "id": "v120",
                "term": "Artboard",
                "def": "The defined canvas area within a document that becomes the exported design.",
                "cat": "illustrator",
                "level": "foundation",
                "lesson": null,
                "source": "starter",
                "spot": false
          },
          {
                "id": "v121",
                "term": "Pathfinder",
                "def": "A set of operations that combine, subtract, or intersect shapes into new forms.",
                "cat": "illustrator",
                "level": "intermediate",
                "lesson": null,
                "source": "starter",
                "spot": false
          },
          {
                "id": "v122",
                "term": "Clipping Mask",
                "def": "A shape used to hide everything outside its boundary, revealing artwork through a 'window'.",
                "cat": "illustrator",
                "level": "intermediate",
                "lesson": null,
                "source": "starter",
                "spot": false
          },
          {
                "id": "v123",
                "term": "Image Trace",
                "def": "The feature that converts a raster image into editable vector paths.",
                "cat": "illustrator",
                "level": "intermediate",
                "lesson": null,
                "source": "starter",
                "spot": false
          },
          {
                "id": "v124",
                "term": "Gradient",
                "def": "A gradual blend between two or more colors across a fill or stroke.",
                "cat": "illustrator",
                "level": "foundation",
                "lesson": null,
                "source": "starter",
                "spot": false
          },
          {
                "id": "v125",
                "term": "Stacking Order",
                "def": "The front-to-back arrangement of objects that determines what overlaps what.",
                "cat": "illustrator",
                "level": "foundation",
                "lesson": null,
                "source": "starter",
                "spot": false
          },
          {
                "id": "v126",
                "term": "Compound Path",
                "def": "Two or more paths combined so overlapping areas become transparent holes.",
                "cat": "illustrator",
                "level": "advanced",
                "lesson": null,
                "source": "starter",
                "spot": false
          },
          {
                "id": "v127",
                "term": "Raster Image",
                "def": "An image made of a grid of pixels; it loses quality when enlarged beyond its resolution.",
                "cat": "photoshop",
                "level": "foundation",
                "lesson": null,
                "source": "starter",
                "spot": false
          },
          {
                "id": "v128",
                "term": "Pixel",
                "def": "The smallest individual unit of a raster image — a single square of color.",
                "cat": "photoshop",
                "level": "foundation",
                "lesson": null,
                "source": "starter",
                "spot": false
          },
          {
                "id": "v129",
                "term": "Resolution (PPI)",
                "def": "The pixel density of an image, in pixels per inch, determining detail and print size.",
                "cat": "photoshop",
                "level": "foundation",
                "lesson": null,
                "source": "starter",
                "spot": false
          },
          {
                "id": "v130",
                "term": "Layer",
                "def": "An independent, stackable level of an image that can be edited without affecting others.",
                "cat": "photoshop",
                "level": "foundation",
                "lesson": null,
                "source": "starter",
                "spot": false
          },
          {
                "id": "v131",
                "term": "Layer Mask",
                "def": "A grayscale attachment that hides or reveals parts of a layer non-destructively.",
                "cat": "photoshop",
                "level": "intermediate",
                "lesson": null,
                "source": "starter",
                "spot": false
          },
          {
                "id": "v132",
                "term": "Selection",
                "def": "An isolated region of an image defined for editing, moving, or masking.",
                "cat": "photoshop",
                "level": "foundation",
                "lesson": null,
                "source": "starter",
                "spot": false
          },
          {
                "id": "v133",
                "term": "Adjustment Layer",
                "def": "A non-destructive layer that applies a color or tonal change to layers beneath it.",
                "cat": "photoshop",
                "level": "intermediate",
                "lesson": null,
                "source": "starter",
                "spot": false
          },
          {
                "id": "v134",
                "term": "Smart Object",
                "def": "A container that preserves a source file so transforms and filters stay editable.",
                "cat": "photoshop",
                "level": "advanced",
                "lesson": null,
                "source": "starter",
                "spot": false
          },
          {
                "id": "v135",
                "term": "Non-destructive Editing",
                "def": "Editing techniques that preserve the original pixels so changes can be undone or revised.",
                "cat": "photoshop",
                "level": "intermediate",
                "lesson": null,
                "source": "starter",
                "spot": false
          },
          {
                "id": "v136",
                "term": "Blend Mode",
                "def": "A setting that controls how a layer's pixels combine with the layers below.",
                "cat": "photoshop",
                "level": "advanced",
                "lesson": null,
                "source": "starter",
                "spot": false
          },
          {
                "id": "v137",
                "term": "Channel",
                "def": "A grayscale image storing the color information for one component (e.g., red) or a saved selection.",
                "cat": "photoshop",
                "level": "advanced",
                "lesson": null,
                "source": "starter",
                "spot": false
          },
          {
                "id": "v138",
                "term": "Histogram",
                "def": "A graph of an image's tonal distribution from shadows to highlights.",
                "cat": "photoshop",
                "level": "intermediate",
                "lesson": null,
                "source": "starter",
                "spot": false
          },
          {
                "id": "v139",
                "term": "Feather",
                "def": "A softening of a selection's edge for a gradual, natural transition.",
                "cat": "photoshop",
                "level": "intermediate",
                "lesson": null,
                "source": "starter",
                "spot": false
          },
          {
                "id": "v140",
                "term": "Healing Brush",
                "def": "A retouching tool that blends sampled pixels to remove blemishes seamlessly.",
                "cat": "photoshop",
                "level": "foundation",
                "lesson": null,
                "source": "starter",
                "spot": false
          },
          {
                "id": "v141",
                "term": "Frame",
                "def": "A container that holds text or an image and can be positioned and styled on a page.",
                "cat": "indesign",
                "level": "foundation",
                "lesson": null,
                "source": "starter",
                "spot": false
          },
          {
                "id": "v142",
                "term": "Master Page",
                "def": "A reusable page template whose elements repeat automatically across document pages.",
                "cat": "indesign",
                "level": "intermediate",
                "lesson": null,
                "source": "starter",
                "spot": false
          },
          {
                "id": "v143",
                "term": "Baseline Grid",
                "def": "A set of evenly spaced horizontal lines that align text across columns for consistency.",
                "cat": "indesign",
                "level": "advanced",
                "lesson": null,
                "source": "starter",
                "spot": false
          },
          {
                "id": "v144",
                "term": "Bleed",
                "def": "Artwork extended past the trim edge so no white slivers appear after cutting.",
                "cat": "indesign",
                "level": "intermediate",
                "lesson": null,
                "source": "starter",
                "spot": false
          },
          {
                "id": "v145",
                "term": "Trim",
                "def": "The final cut size of a printed piece.",
                "cat": "indesign",
                "level": "foundation",
                "lesson": null,
                "source": "starter",
                "spot": false
          },
          {
                "id": "v146",
                "term": "Slug",
                "def": "An area outside the bleed holding printer instructions and marks, discarded after printing.",
                "cat": "indesign",
                "level": "advanced",
                "lesson": null,
                "source": "starter",
                "spot": false
          },
          {
                "id": "v147",
                "term": "Gutter",
                "def": "The space between columns, or the inner margins where facing pages meet.",
                "cat": "indesign",
                "level": "foundation",
                "lesson": null,
                "source": "starter",
                "spot": false
          },
          {
                "id": "v148",
                "term": "Paragraph Style",
                "def": "A saved set of formatting applied to whole paragraphs for consistency and fast updates.",
                "cat": "indesign",
                "level": "intermediate",
                "lesson": null,
                "source": "starter",
                "spot": false
          },
          {
                "id": "v149",
                "term": "Character Style",
                "def": "A saved set of formatting applied to selected characters within a paragraph.",
                "cat": "indesign",
                "level": "intermediate",
                "lesson": null,
                "source": "starter",
                "spot": false
          },
          {
                "id": "v150",
                "term": "Text Threading",
                "def": "Linking text frames so a story flows continuously from one frame to the next.",
                "cat": "indesign",
                "level": "intermediate",
                "lesson": null,
                "source": "starter",
                "spot": false
          },
          {
                "id": "v151",
                "term": "Facing Pages",
                "def": "A spread of left and right pages viewed together as they appear in a bound document.",
                "cat": "indesign",
                "level": "foundation",
                "lesson": null,
                "source": "starter",
                "spot": false
          },
          {
                "id": "v152",
                "term": "Preflight",
                "def": "An automated check for errors (missing fonts, low-res images) before output.",
                "cat": "indesign",
                "level": "advanced",
                "lesson": null,
                "source": "starter",
                "spot": false
          },
          {
                "id": "v153",
                "term": "Package",
                "def": "Collecting the document with its fonts and linked images into one folder for handoff.",
                "cat": "indesign",
                "level": "intermediate",
                "lesson": null,
                "source": "starter",
                "spot": false
          },
          {
                "id": "v154",
                "term": "Column",
                "def": "A vertical division of a page that structures where text and images sit.",
                "cat": "indesign",
                "level": "foundation",
                "lesson": null,
                "source": "starter",
                "spot": false
          },
          {
                "id": "v155",
                "term": "PDF",
                "def": "A portable, widely viewable file format that preserves layout, fonts, and images for sharing or print.",
                "cat": "output",
                "level": "foundation",
                "lesson": null,
                "source": "starter",
                "spot": false
          },
          {
                "id": "v156",
                "term": "Press-ready PDF",
                "def": "A PDF exported to a print standard with bleed, marks, and correct color for a commercial printer.",
                "cat": "output",
                "level": "advanced",
                "lesson": null,
                "source": "starter",
                "spot": false
          },
          {
                "id": "v157",
                "term": "DPI",
                "def": "Dots per inch — the resolution of a printing device, often conflated with an image's PPI.",
                "cat": "output",
                "level": "intermediate",
                "lesson": null,
                "source": "starter",
                "spot": false
          },
          {
                "id": "v158",
                "term": "Crop Marks",
                "def": "Thin lines outside the trim indicating where the printed sheet should be cut.",
                "cat": "output",
                "level": "intermediate",
                "lesson": null,
                "source": "starter",
                "spot": false
          },
          {
                "id": "v159",
                "term": "Color Profile",
                "def": "A data set (e.g., sRGB, CMYK) describing how color values map to actual appearance.",
                "cat": "output",
                "level": "advanced",
                "lesson": null,
                "source": "starter",
                "spot": false
          },
          {
                "id": "v160",
                "term": "Overprint",
                "def": "A setting where one ink prints on top of another rather than knocking it out.",
                "cat": "output",
                "level": "advanced",
                "lesson": null,
                "source": "starter",
                "spot": false
          },
          {
                "id": "v161",
                "term": "Rasterize",
                "def": "Converting vector art or type into pixels, fixing its resolution.",
                "cat": "output",
                "level": "intermediate",
                "lesson": null,
                "source": "starter",
                "spot": false
          },
          {
                "id": "v162",
                "term": "Vector vs Raster",
                "def": "The core distinction: vectors scale infinitely via math; rasters are fixed pixel grids.",
                "cat": "output",
                "level": "foundation",
                "lesson": null,
                "source": "starter",
                "spot": false
          },
          {
                "id": "v163",
                "term": "Bleed (Print)",
                "def": "Extra image area beyond the trim that prevents unprinted edges after cutting.",
                "cat": "output",
                "level": "foundation",
                "lesson": null,
                "source": "starter",
                "spot": false
          },
          {
                "id": "v164",
                "term": "Trim Size",
                "def": "The finished dimensions of a printed piece after cutting.",
                "cat": "output",
                "level": "foundation",
                "lesson": null,
                "source": "starter",
                "spot": false
          },
          {
                "id": "v165",
                "term": "Export",
                "def": "Producing a final file in a delivery format (PDF, PNG, JPG) from the working document.",
                "cat": "output",
                "level": "foundation",
                "lesson": null,
                "source": "starter",
                "spot": false
          },
          {
                "id": "v166",
                "term": "Compression",
                "def": "Reducing a file's size, either losslessly or lossily (as in JPG), affecting quality.",
                "cat": "output",
                "level": "intermediate",
                "lesson": null,
                "source": "starter",
                "spot": false
          }
    ]
  };
  root.CPLA_VOCAB = VOCAB;
  root.CPLA_VOCAB_VERSION = "v1";
})(window);
