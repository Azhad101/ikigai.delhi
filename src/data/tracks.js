/**
 * IKIGAI.DELHI V3 — Field Selection Data
 *
 * The five creative languages (fields) participants can choose between.
 * Mirrors the structure of the Domain Selection cards:
 * a numbered identity, a category label, a title, and a short brief.
 *
 * `detail`, `examples`, and `pairsWith` power the in-depth expansion
 * on each card ("EXPLORE FIELD") and are not shown until expanded.
 */

export const trackSelection = {
  headline: "THE FIVE CREATIVE LANGUAGES",
  japanese: "分野選択",
  romaji: "BUNYA SENTAKU",
  translation: "Field Selection",
  title: "CHOOSE YOUR FIELD",
  subtitle:
    "Five creative languages, each with its own discipline, its own craft, and its own definition of what \"finished\" looks like."
};

export const tracks = [
  {
    number: "01",
    kanji: "造",
    watermark: "構築",
    category: "PRIMARY DELIVERABLE",
    title: "Build",
    deliverable: "Software, App, or Game",
    coreFocus: "Coding, Tech & Digital Products",
    description:
      "Turn logic into something people can use — apps, games, tools, and systems built to hold together under real use.",
    detail:
      "This is the field for people who think in systems — where an idea only feels real once it runs, compiles, or loads. Squads here own the full stack, from architecture decisions to the demo that has to work live in front of judges.",
    examples: [
      "A web or mobile app that solves a real, specific problem",
      "A small game or interactive experience",
      "A tool, API, or piece of infrastructure other builders can use"
    ],
    pairsWith: ["Write", "Visualize"]
  },
  {
    number: "02",
    kanji: "文",
    watermark: "物語",
    category: "PRIMARY DELIVERABLE",
    title: "Write",
    deliverable: "Story, Script, or Manuscript",
    coreFocus: "Stories, Scripts, Poetry & World-Building",
    description:
      "Shape language into meaning — short fiction, scripts, poetry, or the bones of a world worth returning to.",
    detail:
      "This is the field for people who think in language — for whom a sentence, a scene, or a world can carry as much weight as any piece of software. The deliverable is finished writing, not a pitch for writing.",
    examples: [
      "A short story or a collection of flash fiction",
      "A film or game script, or the pilot of something longer",
      "The opening chapters and world-bible of an original universe"
    ],
    pairsWith: ["Build", "Create"]
  },
  {
    number: "03",
    kanji: "創",
    watermark: "創造",
    category: "PRIMARY DELIVERABLE",
    title: "Create",
    deliverable: "Film, Track, or Performance",
    coreFocus: "Film, Music & Performance Media",
    description:
      "Make something meant to be watched, heard, or witnessed — a short film, an original score, or a performance staged live.",
    detail:
      "This is the field for people who think in sound, motion, and presence — where the work only exists once it's performed, screened, or heard. It rewards timing, rhythm, and the courage to put something in front of a live room.",
    examples: [
      "A short film, from script to final cut",
      "An original song, score, or EP",
      "A live performance — theatre, spoken word, or music"
    ],
    pairsWith: ["Write", "Visualize"]
  },
  {
    number: "04",
    kanji: "視",
    watermark: "視覚",
    category: "PRIMARY DELIVERABLE",
    title: "Visualize",
    deliverable: "Artwork, Design, or Photo Series",
    coreFocus: "Art, Design, Photography & Illustration",
    description:
      "Give an idea a shape — paintings, illustrations, photography, or design work built to be seen.",
    detail:
      "This is the field for people who think in image and form — where composition, colour, and craft carry the argument. The work should hold up as a finished piece, not a sketch of one.",
    examples: [
      "An illustrated series or graphic narrative",
      "A brand, product, or interface design system",
      "A photography series with a clear point of view"
    ],
    pairsWith: ["Build", "Create"]
  },
  {
    number: "05",
    kanji: "発",
    watermark: "発明",
    category: "PRIMARY DELIVERABLE",
    title: "Invent",
    deliverable: "Prototype, Concept, or Experiment",
    coreFocus: "Physical Concepts, Social Ideas & Experiments",
    description:
      "Build the thing no category quite fits — a physical prototype, a social experiment, or a concept that doesn't exist yet.",
    detail:
      "This is the field for people who think sideways — where the deliverable doesn't fit neatly into code, prose, film, or image, but is real, tangible, and testable. Physical prototypes, social interventions, and genuine experiments belong here.",
    examples: [
      "A physical prototype or hardware concept",
      "A social experiment or community intervention, run and documented",
      "A working proof-of-concept for an idea nobody's tried yet"
    ],
    pairsWith: ["Build", "Visualize"]
  }
];

export const fieldCollaboration = {
  japanese: "共創",
  romaji: "KYŌSŌ",
  translation: "Co-Creation",
  lines: [
    "The fields are not separate competitions.",
    "They are five creative languages.",
    "A writer may work with a coder.",
    "An artist may work with a filmmaker.",
    "A developer may work with an inventor.",
    "The goal is to create something that neither person could have created alone."
  ]
};
