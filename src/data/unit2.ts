import type { Unit } from "./types";

export const unit2: Unit = {
  id: "unit2",
  roman: "II",
  title: "Unit II · Foundations for Visualization",
  subtitle:
    "Visualization stages, the semiology of graphical symbols, the eight visual variables, the historical perspective, taxonomies, experimental semiotics, Gibson's affordance theory and the model of perceptual processing.",
  color: "var(--v-blue)",
  questions: [
    {
      id: "u2-stages",
      question:
        "Explain the stages of the visualization process with a neat illustration and the role of interaction.",
      marks: 5,
      freq: 5,
      papers:
        "Asked as 'define visualization stages' in Part A and as an explanatory question in Jan-2025, Jun-2025 and May-2026.",
      answer: [
        "The visualization pipeline has three stages: **data preprocessing and transformation → mapping for visualization → rendering transformations**.",
        "**Data preprocessing** converts raw data to fundamental computer types and handles missing values, errors, noise and data that is too large; interpolation, sampling, filtering, aggregation or partitioning may be used.",
        "**Mapping for visualization** chooses a visual representation: geometry, colour and sound. A bad mapping creates a nonsense picture or the wrong message, so expressiveness and effectiveness must be judged.",
        "**Rendering transformations** map geometry to the image using the graphics API, view parameters, shading and device transformations.",
        "Any transformation or computation can be placed at **any stage**, user interaction should be possible at **every point**, and every link is a **many-to-many mapping**.",
        "Many systems show several visualizations at once, so there are multiple representation mappings and corresponding renderings.",
      ],
      table: {
        head: ["Stage", "Main job", "Typical operations"],
        rows: [
          ["Preprocessing", "Make raw data usable", "cleansing, interpolation, sampling, filtering, aggregation"],
          ["Mapping", "Choose the visual form", "geometry, colour, sound, position, size, shape"],
          ["Rendering", "Generate the image", "view transform, shading, device transform, output"],
        ],
      },
      diagrams: ["pipeline"],
    },
    {
      id: "u2-semiology",
      question:
        "Explain the semiology of graphical symbols and their significance in data visualization.",
      marks: 10,
      freq: 4,
      papers:
        "Asked in Jan-2025 Q4(a), May-2026 and RKR21 May-2026 as a 5- or 10-mark question.",
      sections: [
        {
          heading: "What semiology is",
          bullets: [
            "A **visual object** used in a display is a **graphical symbol**; arrows, labels, marks and icons are all symbols.",
            "**Semiology** is the science of graphical symbols and marks, and every construction in the Euclidean plane is a graphical representation made of symbols.",
            "Semiology uses the qualities of the plane and its objects to create **similarity, ordering and proportionality** features that humans can see.",
          ],
        },
        {
          heading: "Symbols and preattentive recognition",
          bullets: [
            "A good symbol, such as a yield sign, is **universally recognisable** and is perceived **preattentively in one step** as a simple association of meaning.",
            "A complex figure needs **attentive effort**: first the major elements are identified, then the relationships between them, and finally the most interesting patterns or objects.",
            "Without external cognitive identification, a graphic is unusable; the identification must be directly readable and understandable.",
          ],
        },
        {
          heading: "Features of graphics",
          bullets: [
            "Graphics have **three or more dimensions**: a position in x, a position in y and a value in z encoded by size, colour or another attribute.",
            "A 3D view with height and a 2D view with size can carry the same z value, but the interpretation differs.",
            "The set of points in the image represents the relations among the dimensions, so a pattern in the picture implies a pattern in the data.",
          ],
        },
        {
          heading: "Bertin's rules of a graphic",
          bullets: [
            "The aim is to discover **groups or orders in x and in y** that are formed on z-values.",
            "The (x, y, z) construction makes these groups discoverable; permutations and classifications handle the upper level of information.",
            "A graphic with more than three factors that departs from the (x, y, z) construction destroys the unity of the graphic.",
            "Pictures must be readable and understandable by a human, which is why perception matters as much as the data.",
          ],
        },
        {
          heading: "Analysis of a graphic",
          bullets: [
            "First we perceive groups **preattentively**, then we characterise them **cognitively**, and finally we examine special cases and relationships between groups.",
            "This can happen at many levels and with many different visualizations.",
            "Supporting computation, such as clustering and showing the result, speeds up the perception of groups.",
          ],
        },
      ],
      note:
        "Bertin's key separation is between the **content** (information to encode) and the **container** (properties of the graphic system). The eight visual variables are the vocabulary of that container.",
    },
    {
      id: "u2-graphics-features",
      question:
        "Write short notes on (i) symbols and visualization and (ii) features of graphics.",
      marks: 5,
      freq: 3,
      papers: "Asked in the Jan-2025 paper as a short-note question.",
      answer: [
        "A **graphical symbol** is any visual object used to carry meaning; symbols range from a single mark to an icon, a label or a complex glyph.",
        "Symbols can be **preattentive** (recognised in one step, such as a warning sign) or require **attentive pattern extraction** (such as a dense technical diagram).",
        "A graphic has at least **three dimensions**: x-position, y-position and a z-value encoded by size, brightness, colour or another attribute.",
        "The **rules of a graphic** state that groups and orders in x and y formed on z-values are the target, and that a construction with more than three factors must preserve the unity of the graphic.",
        "**Analysis** proceeds from preattentive grouping to cognitive characterisation and then to special cases and relationships between groups.",
        "The practical consequence is that a visualization must be designed around how people read symbols and groups, not only around the data.",
      ],
    },
    {
      id: "u2-eight-variables",
      question:
        "List and explain the eight visual variables used in visualization. Give an example of each.",
      marks: 10,
      freq: 6,
      papers:
        "The single most repeated Unit-II question: asked in Jan-2025, Jun-2025, Dec-2025/Jan-2026, RKR21 May-2026 and KR20 May/Jun-2026.",
      sections: [
        {
          heading: "The eight variables",
          bullets: [
            "**Position**: the placement of a mark in 1D, 2D or 3D display space, and the most important variable because spatial arrangement is read first.",
            "**Mark or shape**: the graphical primitive used for a record, such as a point, line, area, volume, letter or icon.",
            "**Size**: length, area or volume of a mark; it maps naturally to interval and continuous data but only to categories with very small cardinality.",
            "**Brightness or luminance**: how light or dark a mark is; a perceptually linear brightness scale is recommended because the eye cannot distinguish every pair of levels.",
            "**Colour**: defined by hue and saturation; colour maps relate value ranges to colours and suit interval and continuous variables.",
            "**Orientation**: how a mark is rotated; it works best for marks with a natural single axis and cannot be used for a circle.",
            "**Texture**: a combination of marks, colour and orientation, as in dashed or dotted lines and patterned regions.",
            "**Motion**: change over time, including speed, direction and flashing; it can be attached to any other variable.",
          ],
        },
        {
          heading: "Position and mark",
          bullets: [
            "The best positioning scheme gives each graphic a **unique position** so nothing overlaps; the worst maps everything to the same point and only the last draw is visible.",
            "Marks must be **easy to distinguish** and should have similar area and complexity so one mark is not accidentally emphasised.",
          ],
        },
        {
          heading: "Size, brightness and colour",
          bullets: [
            "Size supports gradual increments over a range, but near-equal sizes are hard to distinguish, so size is poor for many categories.",
            "Brightness is limited by perception; a reduced, sampled brightness scale gives accurate mark distinction.",
            "Colour maps are useful for interval and continuous data, but colour perception changes with the surrounding colours and about 10% of males have a colour deficiency.",
          ],
        },
        {
          heading: "Orientation, texture and motion",
          bullets: [
            "Orientation is tied to preattentive vision and is used in stick-figure icons, wind arrows and direction fields.",
            "Texture is common on polygons, regions and surfaces; a modest number of distinct textures can be distinguished.",
            "Motion draws attention through behaviour and outliers, and the direction of motion can encode a variable.",
          ],
        },
      ],
      table: {
        head: ["#", "Variable", "What it encodes", "Example"],
        rows: [
          ["1", "Position", "x, y, z values", "scatterplot location"],
          ["2", "Mark / shape", "category or identity", "triangle = school"],
          ["3", "Size", "interval / continuous value", "bigger circle = bigger city"],
          ["4", "Brightness", "relative magnitude", "darker = higher rainfall"],
          ["5", "Colour", "hue and saturation", "blue = water, green = forest"],
          ["6", "Orientation", "direction or angle", "wind arrow"],
          ["7", "Texture", "pattern or region value", "close hatching = dense population"],
          ["8", "Motion", "change over time", "flashing alarm, moving particle"],
        ],
      },
      diagrams: ["visual-variables"],
      note:
        "Never write fewer than eight. Position first, then mark, size, brightness, colour, orientation, texture and motion. Add one example to each line.",
    },
    {
      id: "u2-visual-variables-design",
      question:
        "Explain the importance of visual variables in the design of graphics.",
      marks: 10,
      freq: 4,
      papers:
        "Asked as a full question in Jun-2025, Jan-2025 and the May-2026 papers.",
      sections: [
        {
          heading: "The design problem",
          bullets: [
            "A visual variable is a feature of a picture that can be changed to encode data: position, shape, size, brightness, colour, orientation, texture and motion.",
            "The designer chooses a **mapping** from each data dimension to one or more visual variables.",
            "No single visualization is best for every task, so the mapping must fit the **data type, the task and the user**.",
          ],
        },
        {
          heading: "Matching data scales to visual scales",
          bullets: [
            "Ordered data should map to **ordered visual variables** such as position, size, brightness or saturation.",
            "Nominal data should map to **unordered cues** such as hue, shape or texture, so the picture does not imply a fake order.",
            "Mapping a nominal field such as country to bar length is a design error because length is ordered.",
            "Position is the most accurate variable, followed by length and angle; area, volume and colour are less accurate, so important comparisons should use position or length.",
          ],
        },
        {
          heading: "Expressiveness and effectiveness",
          bullets: [
            "**Expressiveness** means the graphic encodes all the information and only the information in the data.",
            "**Effectiveness** means the viewer can read the intended relationship quickly and accurately.",
            "Redundant mappings, such as colour plus size for the same field, improve accuracy and accessibility.",
            "Too many variables on one mark create clutter and make the individual encodings hard to separate.",
          ],
        },
        {
          heading: "Perceptual limits",
          bullets: [
            "Brightness and colour discrimination is limited, so only a modest number of levels should be used for absolute judgement.",
            "Colour deficiency affects a large fraction of males, so colour must be reinforced by another cue.",
            "Gestalt grouping principles, such as proximity, similarity and closure, decide how marks are grouped and therefore how the mapping is read.",
            "Motion and orientation are strong for preattentive search but cannot be used on every mark.",
          ],
        },
        {
          heading: "Practical checklist",
          bullets: [
            "Choose **position** for the two most important dimensions.",
            "Use **size or length** for a third ordered dimension and **hue or shape** for categories.",
            "Keep the number of levels low, label the mapping and provide a key or colour bar.",
            "Check the design in greyscale and with a colour-blind simulation before adding decorative colour.",
          ],
        },
      ],
      diagrams: ["visual-variables"],
    },
    {
      id: "u2-history",
      question:
        "Explain the historical perspective of visualization and the formal models proposed over the years.",
      marks: 10,
      freq: 3,
      papers:
        "Asked as a 10-mark historical question in May-2026 and as a 5-mark short note in RKR21 May-2026.",
      sections: [
        {
          heading: "Why formal models matter",
          bullets: [
            "Robertson first proposed the need for formal models as a foundation for visualization systems.",
            "The history of visualization is a history of attempts to formalise the mapping from data to graphics.",
          ],
        },
        {
          heading: "Semiology and automatic design",
          bullets: [
            "**Bertin (1967)**, Semiology of Graphics, gave the first rigorous attempt to define graphics and its application to information, with a strict separation of content and container.",
            "**Mackinlay (1986)** introduced **APT (A Presentation Tool)**, an automatic graphical presentation designer that extracts information from a database and renders a graphical design.",
            "**Bergeron and Grinstein (1989)** defined the **Visualization Reference Model**, a four-stage pipeline: source, model transformation, view specification and association.",
          ],
        },
        {
          heading: "Task- and scene-based models",
          bullets: [
            "**Wehrend and Lewis (1990)** built a two-dimensional catalog of encoding techniques classified by objects and operations.",
            "**Robertson (1990)** proposed the **Natural Scene Paradigm**, using realistic scenes with height, material, density, phase and wetness.",
            "**Roth (1991)** created **Visage** with **SAGE**, a knowledge-based automatic graphic design tool and an information-centric environment.",
          ],
        },
        {
          heading: "Perceptual and constraint models",
          bullets: [
            "**Casner (1991)** developed **BOZ**, which replaces logical task descriptions with perceptually equivalent tasks to make inferences visually.",
            "**Beshers and Feiner (1992)** built **AutoVisual** for the n-Vision system using worlds-within-worlds and a hierarchy of interactors.",
            "**Senay and Ignatius (1994)** developed **VISTA**, a knowledge-based scientific visualization designer using perceptual experiments and heuristics.",
          ],
        },
        {
          heading: "Data- and grammar-based models",
          bullets: [
            "**Hibbard (1994)** proposed the **lattice model**, focusing on data-to-display transformations rather than graphic primitives.",
            "**Golovchinsky (1995)** built **AVE**, generating diagrams as rectangles and relations as lines or arrows.",
            "**Card, Mackinlay and Shneiderman (1999)** described data transformations, visual mappings and view transformations, with the spatial substrate as the key visual structure.",
          ],
        },
        {
          heading: "Later formalisations",
          bullets: [
            "**Kamps (1999)** extended AVE into **EAVE** with a language for defining diagrams and user preferences.",
            "**Wilkinson (1999)** published the **Grammar of Graphics** for statistical graphics.",
            "**Hoffman (2000)** formalised **table visualizations**, combining survey plots, scatterplots, RadViz and parallel coordinates.",
          ],
        },
      ],
      table: {
        head: ["Year", "Researcher", "Contribution"],
        rows: [
          ["1967", "Bertin", "Semiology of Graphics"],
          ["1986", "Mackinlay", "APT automatic presentation tool"],
          ["1989", "Bergeron & Grinstein", "Visualization Reference Model"],
          ["1990", "Wehrend & Lewis", "Catalog of objects and operations"],
          ["1991", "Roth", "Visage and SAGE"],
          ["1991", "Casner", "BOZ perceptual task design"],
          ["1994", "Hibbard", "Lattice model"],
          ["1999", "Card, Mackinlay & Shneiderman", "Reference model with spatial substrate"],
          ["1999", "Wilkinson", "Grammar of Graphics"],
        ],
      },
      note:
        "A 10-mark answer does not need every name in detail. Give Bertin, Mackinlay, Bergeron–Grinstein, Card et al. and Wilkinson in full, then two or three names briefly.",
    },
    {
      id: "u2-taxonomies",
      question:
        "Discuss the different forms of taxonomies used in visualization and explain the major classification schemes.",
      marks: 10,
      freq: 4,
      papers:
        "Asked in Dec-2025/Jan-2026, RKR21 May-2026 and May-2026 as a 5- or 10-mark question.",
      sections: [
        {
          heading: "What a taxonomy is",
          bullets: [
            "A **taxonomy** is a means to convey a classification; it is often hierarchical and groups similar objects while defining relationships.",
            "In visualization, taxonomies classify **data, techniques, tasks and interaction methods**.",
          ],
        },
        {
          heading: "Keller and Keller (1994)",
          bullets: [
            "Classifies techniques by the **type of data** and the **user's task**.",
            "Data types: **scalar or scalar field, nominal, direction field, shape, position and spatially extended region or object (SERO)**.",
            "The task list is a useful starting point for designing a visualization for a particular application.",
          ],
        },
        {
          heading: "Shneiderman (1996)",
          bullets: [
            "Classifies by **data type by task**.",
            "Data types: **one-dimensional linear, two-dimensional map, three-dimensional world, temporal, multidimensional, tree and network**.",
            "Tasks focus on the behaviour of analysts as they extract knowledge from the data.",
          ],
        },
        {
          heading: "Keim (2002)",
          bullets: [
            "Classifies visualization systems along **three dimensions**: data types, visualization techniques and interaction/distortion methods.",
            "**Six data types**: one-dimensional, two-dimensional, multidimensional, text and hypertext, hierarchies and graphs, and algorithm/software.",
            "**Five technique classes**: standard 2D/3D displays, geometrically transformed displays, iconic displays, dense pixel displays and stacked displays.",
            "**Five interaction classes**: dynamic projection, interactive filtering, interactive zooming, interactive distortion, and interactive linking and brushing.",
          ],
        },
      ],
      table: {
        head: ["Data type (Keim)", "Example", "Technique example"],
        rows: [
          ["One-dimensional", "time series, stock prices, text", "line graph, color bar"],
          ["Two-dimensional", "maps, floor plans", "image, map, contour"],
          ["Multidimensional", "spreadsheets, relational tables", "scatterplot matrix, PCP"],
          ["Text and hypertext", "news, web documents", "word cloud, TileBars"],
          ["Hierarchies and graphs", "network traffic, organisation", "treemap, node-link"],
          ["Algorithm and software", "code, execution traces", "SeeSoft"],
        ],
      },
      note:
        "For the 'apply taxonomy' version, take three techniques (say scatterplot, treemap and theme river) and classify each by data type, technique class and interaction class.",
    },
    {
      id: "u2-taxonomy-apply",
      question:
        "Apply taxonomy techniques to classify different visualization methods for suitable applications.",
      marks: 4,
      freq: 3,
      papers: "Asked in the Dec-2025/Jan-2026 and RKR21 May-2026 papers as a 4- or 5-mark application question.",
      answer: [
        "Use **Keim's three axes**: data type, visualization technique and interaction method.",
        "A **scatterplot** is multidimensional data, a standard 2D display or geometrically transformed display, with interactive linking and brushing for selection.",
        "A **treemap** is hierarchical data, a stacked or space-filling display, with drill-down and filtering interactions.",
        "A **parallel coordinates plot** is multidimensional data, a geometrically transformed display, with reordering and brushing.",
        "A **word cloud** is text data, an iconic/standard display, with simple filtering by frequency.",
        "A **ThemeRiver** is temporal text data, a stacked display, with selection and time filtering.",
        "The classification shows why the method suits its application: the data structure and the task, not the visual style alone, decide the choice.",
      ],
    },
    {
      id: "u2-semiotics",
      question:
        "Explain experimental semiotics based on perception and justify the need for experimental semiotics in visualization design.",
      marks: 5,
      freq: 4,
      papers:
        "Asked in Jan-2025, May-2026 and RKR21 May-2026 as a short note or justification question.",
      answer: [
        "**Semiotics** is the study of symbols and how they convey meaning; it began with C.S. Peirce in the United States and was developed in Europe by Ferdinand de Saussure.",
        "The traditional semiotic view says diagrams are **arbitrary** like words: we learn the conventions, and one diagram is as good as another once the code is learned.",
        "The perceptual view says many symbols are **sensory**: their power comes from the early stages of neural processing, so they are stable across individuals, cultures and time.",
        "A cave drawing of a hunt still conveys meaning after millennia, which supports the sensory view; the written word 'dog' has no perceptual relation to the animal, which supports the arbitrary view.",
        "Real graphical languages are neither purely sensory nor purely arbitrary, so **experiments** are needed to find which encodings are read quickly and accurately.",
        "Experimental semiotics therefore supplies evidence-based guidelines for visualization design, instead of relying only on convention or opinion.",
      ],
      note:
        "Key contrast for the exam: sensory = understood through perception; arbitrary = understood through learned convention.",
    },
    {
      id: "u2-affordance",
      question:
        "Explain Gibson's Affordance Theory with an example and discuss its significance and limitations for visualization.",
      marks: 10,
      freq: 5,
      papers:
        "Asked as a Part-A definition and as a Part-B significance/explanation question in Jan-2025, Dec-2025/Jan-2026, RKR21 May-2026 and KR20 May/Jun-2026.",
      sections: [
        {
          heading: "The theory",
          bullets: [
            "Gibson assumed that we perceive **in order to operate on the environment**: perception is designed for action.",
            "An **affordance** is a perceivable possibility for action offered by the environment: a surface affords walking, a handle affords pulling, a tool affords manipulating.",
            "Gibson claimed that affordances are perceived **directly and immediately**, not inferred by piecing together sensory evidence.",
            "His approach is **top-down** and ecological; he rejected the atomistic idea that we first perceive points of light and build up the world from them.",
          ],
        },
        {
          heading: "Evidence",
          bullets: [
            "Warren (1984) showed that people accurately judge the **climbability of staircases**, and the judgement depends on their own leg length.",
            "This supports the idea that perception is tuned to the **relationship between the observer and the environment**, not to abstract geometry.",
          ],
        },
        {
          heading: "Application to interfaces",
          bullets: [
            "The interface principle is to create controls with **appropriate affordances** so the user's task is easy.",
            "For a 3D object-manipulation task, the object should show **handles** for lifting and rotating.",
            "Houde's (1992) design makes the handles even clearer by adding illustrations of gripping hands.",
          ],
        },
        {
          heading: "Problems for visualization",
          bullets: [
            "Visualization of data through graphics is **indirect**: many processing layers sit between the data and its representation, and the source may be invisible or abstract.",
            "A screen button has **no clear physical affordance**; we must learn that pressing a picture of a button does something.",
            "Gibson rejected the study of visual mechanisms, but colour perception and display technology depend on understanding those mechanisms.",
            "For visualization, the useful idea is not literal direct perception but the design habit of making actions and possibilities **visible and obvious**.",
          ],
        },
      ],
      note:
        "Write the definition, one supporting experiment, one interface example and the three problems. The three problems are the marks that most students miss.",
    },
    {
      id: "u2-perception",
      question:
        "Explain the three-stage model of perceptual processing with suitable examples.",
      marks: 10,
      freq: 5,
      papers:
        "Asked in Jan-2025, Jun-2025, Dec-2025/Jan-2026 and May-2026.",
      sections: [
        {
          heading: "Stage 1 · Parallel feature extraction",
          bullets: [
            "Visual information is first processed by large arrays of neurons in the eye and the primary visual cortex.",
            "Individual neurons are selectively tuned to features such as **edge orientation** or the **colour of a patch**.",
            "Billions of neurons work **in parallel**, extracting features from every part of the visual field simultaneously.",
            "The process is rapid, largely independent of attention and briefly held in an **iconic store**.",
            "Features include **orientation, colour, texture and movement**; this is a bottom-up, data-driven stage.",
          ],
        },
        {
          heading: "Stage 2 · Pattern perception",
          bullets: [
            "Rapid active processes divide the visual field into **regions and simple patterns**: continuous contours, regions of the same colour and regions of the same texture.",
            "This stage is slower and serial compared with Stage 1, and it uses both **working memory and long-term memory**.",
            "It places more emphasis on the **arbitrary aspects of symbols**, because learned meaning enters here.",
            "Processing combines **bottom-up feature information and top-down attention**.",
            "Different pathways handle object recognition and visually guided motion.",
          ],
        },
        {
          heading: "Stage 3 · Sequential goal-directed processing",
          bullets: [
            "At the highest level, only a few objects are held in **visual working memory** by active attention.",
            "The viewer constructs a sequence of **visual queries** and answers them through visual search strategies.",
            "Example: reading a road map for a route means searching for connected red contours between two city symbols.",
            "Because working memory is limited, a display with too many objects or labels forces repeated searching and slows the user.",
          ],
        },
        {
          heading: "Design consequences",
          bullets: [
            "Make important features detectable by **Stage 1**: strong position, clear colour difference, distinct orientation or motion.",
            "Support **Stage 2** grouping with Gestalt principles such as proximity, similarity, continuity, closure and connectedness.",
            "Do not exceed the capacity of **Stage 3**: limit the number of objects, provide external memory aids and keep labels stable.",
            "Animation and interaction should guide attention without forcing the viewer to rebuild the whole scene.",
          ],
        },
      ],
      table: {
        head: ["Stage", "Speed and mode", "What happens", "Design implication"],
        rows: [
          ["1 · Feature extraction", "fast, parallel", "orientation, colour, texture, motion", "encode important data in strong low-level features"],
          ["2 · Pattern perception", "slow, serial", "contours, regions, grouping, memory", "use Gestalt grouping and clear structure"],
          ["3 · Goal-directed", "serial, limited", "few objects in working memory, visual queries", "keep the display simple and support search"],
        ],
      },
      diagrams: ["perception-stages"],
      note:
        "The three headings and their characteristics are the core. Finish with one design implication per stage, which is what the higher-mark questions reward.",
    },
    {
      id: "u2-perception-limits",
      question:
        "How do limitations in human perception influence visualization design?",
      marks: 3,
      freq: 3,
      papers: "Asked in the Dec-2025/Jan-2026 and RKR21 May-2026 papers as a short-answer question.",
      answer: [
        "People distinguish only a limited number of **brightness and colour levels**, so absolute judgements need a small number of distinct values.",
        "**Colour deficiency** affects a large fraction of males, so colour must be paired with a redundant cue such as size, shape or labels.",
        "Judgement accuracy falls from **position and length** to angle, area and volume, so important comparisons should use the more accurate variables.",
        "**Working memory** holds only a few objects at a time, so crowded displays and too many labels slow search and cause errors.",
        "Perception is relative and context dependent: a moved axis, neighbouring marks or an Ebbinghaus illusion can change the perceived value.",
        "Design responses are simple: use position and length for important values, keep levels low, label clearly, avoid chart junk and test in greyscale.",
      ],
    },
  ],
};
