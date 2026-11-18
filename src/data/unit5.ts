import type { Unit } from "./types";

export const unit5: Unit = {
  id: "unit5",
  roman: "V",
  title: "Unit V · Interaction, Design & Research Issues",
  subtitle:
    "Interaction operators, operands and spaces, the unified framework, the eight interaction techniques, design steps, misleading visualizations, evaluation, and research issues in data, cognition, hardware and applications.",
  color: "var(--v-pink)",
  questions: [
    {
      id: "u5-operators",
      question:
        "Explain interaction concepts and compare the different interaction operators in data visualization.",
      marks: 10,
      freq: 5,
      papers:
        "Asked in Jan-2025, Jun-2025, Dec-2025/Jan-2026 and RKR21 May-2026.",
      sections: [
        {
          heading: "What interaction is",
          bullets: [
            "In data and information visualization, **interaction** is a mechanism for modifying **what** the user sees and **how** they see it.",
            "A still image can show only one view; interaction lets the user ask further questions without starting over.",
            "The notes name **seven operator classes** plus a **hybrid** class that combines several.",
          ],
        },
        {
          heading: "The seven operators",
          bullets: [
            "**Navigation** (also called exploration): search for a subset of data, change orientation and level of detail. In 3D this means camera location, viewing direction, frustum size and shape, and an LOD indicator.",
            "**Selection**: isolate a subset for another operation such as highlight, delete, mask or move to the centre; a new selection may replace or supplement the old one.",
            "**Filtering**: reduce the data by setting constraints on records, dimensions or both. The best-known form is the **dynamic query slider** (Shneiderman et al.).",
            "**Reconfiguring**: change how the data is arranged, such as sorting rows or columns, swapping axes, or using PCA/MDS to derive positions.",
            "**Encoding**: change graphical attributes such as point size or line colour, or change the type of visualization entirely.",
            "**Connecting**: link views or objects so related items appear together; **linked selection** is the most common example.",
            "**Abstraction/elaboration**: change the level of detail, showing more detail in a subset and less elsewhere; distortion operators are the popular case.",
          ],
        },
        {
          heading: "The hybrid operator",
          bullets: [
            "A **hybrid** combines several classes in one technique.",
            "Example: give a focus area more screen space for detail while keeping the rest at a smaller scale for context.",
          ],
        },
        {
          heading: "How to compare them",
          bullets: [
            "Navigation and filtering change **what data is visible**, while reconfiguring and encoding change **how it is shown**.",
            "Selection and connecting operate **across views and records**, while abstraction/elaboration changes **detail level**.",
            "The best interface usually combines several operators, because one operator cannot support every task.",
          ],
        },
      ],
      table: {
        head: ["Operator", "User controls", "Example"],
        rows: [
          ["Navigation", "pan, rotate, zoom, level of detail", "grand tour of orientations"],
          ["Selection", "which objects or regions are active", "click or paint to select"],
          ["Filtering", "which records or dimensions remain", "dynamic query sliders"],
          ["Reconfiguring", "arrangement and mapping", "sort a table, swap axes"],
          ["Encoding", "graphical attributes", "change point size or colour"],
          ["Connecting", "links between views", "linked brushing across plots"],
          ["Abstraction/elaboration", "level of detail", "fisheye, perspective wall"],
        ],
      },
    },
    {
      id: "u5-spaces",
      question:
        "Explain interaction operands and spaces, and what each operator means in each space.",
      marks: 10,
      freq: 5,
      papers:
        "Asked in Dec-2025/Jan-2026, RKR21 May-2026 and May-2026 as a 5- or 10-mark question.",
      sections: [
        {
          heading: "Operand and space",
          bullets: [
            "An **interaction operand** is the section of space on which an operator is applied.",
            "The same click can mean different things depending on whether it touches a **pixel**, a **data value**, a **tree node** or a **3D object**.",
            "The six spaces name the kind of thing being operated on.",
          ],
        },
        {
          heading: "Screen space",
          bullets: [
            "The operand is a **pixel**. Navigation is pan, zoom and rotate; no new data is used.",
            "Selection marks pixels as selected; filtering crops or masks a region.",
            "Distortion transforms pixel positions while preserving order and continuity; examples are the fisheye lens and the rubber sheet.",
          ],
        },
        {
          heading: "Data value space",
          bullets: [
            "The operand is the set of **multivariate data values**.",
            "Navigation shifts or shrinks the range of values shown; selection is like a database query with ranges for dimensions.",
            "Filtering clips spatial areas or removes records and dimensions; sampling reduces clutter.",
          ],
        },
        {
          heading: "Data structure space and visualization structure space",
          bullets: [
            "**Data structure space** is the organisation of the data: lists, tables, grids, hierarchies and graphs. Navigation moves along the structure, including drill-down and roll-up; filtering selects time ranges, node distances or hierarchy levels.",
            "**Visualization structure space** is the organisation of the picture itself: grids, axes and dashboards. Navigation moves through pages or zooms into one plot of a scatterplot matrix.",
            "This is the pair that students most often mix up: data structure = data; visualization structure = picture.",
          ],
        },
        {
          heading: "Attribute space",
          bullets: [
            "The operand is a **graphical attribute** such as colour, size or shape.",
            "Navigation pans or zooms the range of attribute values; selection chooses entries of a colour map.",
            "Remapping changes which range or attribute is controlled by the data; attribute-based distortion changes one or more attributes of the objects.",
          ],
        },
        {
          heading: "Object space",
          bullets: [
            "The operand is a **3D surface or geometric object** onto which data is mapped.",
            "Navigation moves around the object and provides global and close-up views.",
            "Selection clicks the object or picks it from a list; remapping changes the object, for example mapping geographic data to a plane instead of a sphere.",
          ],
        },
      ],
      table: {
        head: ["Space", "Operand", "Example"],
        rows: [
          ["Screen", "pixels", "zoom, fisheye lens"],
          ["Data value", "multivariate values", "range query, sampling"],
          ["Data structure", "organisation of data", "drill down a tree"],
          ["Attribute", "graphical attributes", "change a colour map"],
          ["Object", "3D surfaces", "rotate a globe"],
          ["Visualization structure", "layout of the display", "zoom one scatterplot cell"],
        ],
      },
    },
    {
      id: "u5-unified",
      question:
        "Explain the unified framework for interaction concepts and the parameters required.",
      marks: 10,
      freq: 4,
      papers:
        "Asked in Dec-2025/Jan-2026 and Jan-2025 as a 5-mark parameter question.",
      sections: [
        {
          heading: "The four parameters",
          bullets: [
            "Every operator applied to a space needs four parameters: **focus, extents, transformation and blender**.",
          ],
        },
        {
          heading: "Focus",
          bullets: [
            "The **focus** is the place in the space at the centre of the user's interest.",
            "There may be several foci at once, but multiple foci in navigation usually need multiple display windows.",
          ],
        },
        {
          heading: "Extents",
          bullets: [
            "The **extents** are the range in the space that bounds the interaction.",
            "In screen space they are pixels; in structure space they may be rows of a table or links in a graph.",
          ],
        },
        {
          heading: "Transformation",
          bullets: [
            "The **transformation** is the function applied inside the extents, usually depending on the distance from the focus, plus its **degree** or scale factor.",
            "For text, a **flat peak** keeps the magnified words equally readable.",
          ],
        },
        {
          heading: "Blender",
          bullets: [
            "The **blender** decides what happens where two interactions overlap.",
            "For selection, the blender is a logical operation such as and/or; for distortion, **Keahey and Robertson** list weighted average, maximal value and composition.",
          ],
        },
        {
          heading: "Examples",
          bullets: [
            "**Fisheye lens**: focus = lens centre, extents = lens radius, transformation = magnification falling with distance, blender = weighted average or maximum.",
            "**Selecting points**: focus = click position, extents = selection rectangle, transformation = mark selected, blender = logical operations on overlapping selections.",
            "**Time-series filter**: focus = chosen date, extents = number of days either side, transformation = keep inside/hide outside, blender = combine two windows.",
          ],
        },
      ],
      table: {
        head: ["Parameter", "Question it answers"],
        rows: [
          ["Focus", "Where is the user interested?"],
          ["Extents", "How far does the interaction reach?"],
          ["Transformation", "What happens inside the extents, and how strong is it?"],
          ["Blender", "What happens where two interactions overlap?"],
        ],
      },
    },
    {
      id: "u5-techniques",
      question:
        "Explain the various interaction techniques in visualization with examples.",
      marks: 10,
      freq: 4,
      papers:
        "Asked as a full question in Jun-2025 and in the May-2026 papers, and as short notes in other papers.",
      sections: [
        {
          heading: "The eight techniques",
          bullets: [
            "The six spaces plus two helpers make eight techniques: **screen space, object space, data space, attribute space, data structure space, visualization structure space, animating transformations and interaction control**.",
          ],
        },
        {
          heading: "1–2 · Screen and object space",
          bullets: [
            "**Screen space** works on pixels: pan, zoom, rotate and distortion; the fisheye lens is the standard example.",
            "**Object space** works on 3D surfaces: move around or remap the object; the perspective wall is the standard example.",
          ],
        },
        {
          heading: "3–4 · Data and attribute space",
          bullets: [
            "**Data space** changes the values, with transformations such as scale, log, sinusoid, absolute value and negation; the viewer must be told about any transformation.",
            "**Attribute space** changes colour, size and opacity, for example contrast enhancement, colour histogram equalisation and attribute-based glyph scaling.",
          ],
        },
        {
          heading: "5–6 · Data and visualization structure space",
          bullets: [
            "**Data structure space** changes how data is organised, such as dimension ordering, drill-down and roll-up.",
            "**Visualization structure space** changes the display layout, such as axis spacing in parallel coordinates, cell size in a scatterplot matrix, or the arrangement of a dashboard.",
          ],
        },
        {
          heading: "7 · Animating transformations",
          bullets: [
            "Use a **smooth transition** between the initial and final view so the user keeps context.",
            "**Linear interpolation** is simplest, but **ease-in, ease-out** (slow start, cruise, slow stop) looks more natural.",
            "A sine-based ease curve is position = 0.5 × (1 − cos(πt)).",
          ],
        },
        {
          heading: "8 · Interaction control",
          bullets: [
            "The controls are **focus selection, extent selection, interaction type selection, interaction level selection and blender type selection**.",
            "Focus and extents are often set by direct manipulation; type is chosen with menus or icons; level with a slider or dial; blender with a menu.",
            "Give the user control over the animation rate, because rapid changes cause confusion and loss of orientation.",
          ],
        },
      ],
      table: {
        head: ["#", "Technique", "Operand", "Example"],
        rows: [
          ["1", "Screen space", "pixels", "fisheye"],
          ["2", "Object space", "3D surfaces", "perspective wall"],
          ["3", "Data space", "data values", "log scale"],
          ["4", "Attribute space", "graphical attributes", "contrast / colour equalisation"],
          ["5", "Data structure space", "data organisation", "drill-down"],
          ["6", "Visualization structure space", "display layout", "zoom one matrix cell"],
          ["7", "Animating transformations", "view change", "ease-in, ease-out"],
          ["8", "Interaction control", "controls", "level slider"],
        ],
      },
      walkthrough: "fisheye",
    },
    {
      id: "u5-screen",
      question:
        "Explain screen space and object space interaction techniques with the fisheye lens and the perspective wall.",
      marks: 10,
      freq: 4,
      papers:
        "Asked as a 4-mark Part-B question in several papers and as part of the full interaction techniques question.",
      sections: [
        {
          heading: "Screen-space distortion",
          bullets: [
            "Screen-space distortion gives **focus + context**: the focus is enlarged while the rest stays visible, squeezed but readable.",
            "For a **fisheye lens**, choose a centre (cx, cy), a lens radius **rl** and a deflection amount **d**.",
            "Convert every pixel to **polar coordinates** around the centre; the lens changes only the **radius**.",
          ],
        },
        {
          heading: "The fisheye algorithm",
          bullets: [
            "Clear the output image.",
            "For each input pixel, compute its polar radius r_old and angle.",
            "If r_old is inside the lens radius, compute the new radius, fetch the colour at the corresponding source position and write it to the output.",
            "Otherwise copy the original pixel unchanged.",
            "Gaps in the output must be filled by **interpolation**; overlaps are harmless and may be averaged.",
          ],
        },
        {
          heading: "Object-space perspective wall",
          bullets: [
            "The **perspective wall** helps navigate large documents and visualizations.",
            "One panel faces the viewer flat; the other panels are turned so they **fade into the distance** by perspective foreshortening.",
            "The front panel is a horizontal scaling; side panels add distance-dependent scaling and a shear.",
            "Users move by sequential page movements, or jump with **index tabs** sticking out of the pages.",
            "More than one page can be in focus, trading detail for a larger undistorted window.",
          ],
        },
        {
          heading: "Comparison",
          bullets: [
            "The fisheye works on **2D pixels** and is cheap and continuous.",
            "The perspective wall works on **3D panels** and uses the geometry of the display to provide context.",
            "Both keep the focus readable and the context visible, which is the central idea of focus + context techniques.",
          ],
        },
      ],
      formula:
        "Fisheye: r_new = s × log(1 + d × r_old)\nCommon scale: s = rl / ln(1 + d × rl)\nExample: rl = 100, d = 0.05 → s ≈ 55.8",
      walkthrough: "fisheye",
    },
    {
      id: "u5-data-spaces",
      question:
        "Explain data space, attribute space, data structure space and visualization structure space interaction techniques.",
      marks: 10,
      freq: 3,
      papers: "Asked as a 5-mark or part of the full interaction question in the May-2026 and RKR21 papers.",
      sections: [
        {
          heading: "Data space",
          bullets: [
            "Data-space interactions operate on the **values** themselves.",
            "Typical transformations are **scale and translate**, **log or exponential**, **sinusoidal**, **absolute value** and **negation**.",
            "The viewer must be **told** that a transformation was applied, by axis labels and a note such as 'log scale'.",
            "After transformation, values must be rescaled to a valid range or objects may fall off the display, colours may wrap around and sizes may become negative.",
          ],
        },
        {
          heading: "Attribute space",
          bullets: [
            "Attribute-space interactions change **colour, size, shape and opacity** without changing the data.",
            "Typical examples are contrast enhancement, brightness control, colour histogram equalisation and glyph scaling.",
            "Enlarging a glyph is an attribute operation; the underlying number is unchanged.",
            "Attribute scaling avoids the blocky look of zooming pixels.",
          ],
        },
        {
          heading: "Data structure space",
          bullets: [
            "Data-structure interactions change how data is **organised**: ordering, grids, grouping, hierarchies and networks.",
            "Navigation moves along the structure, including drill-down and roll-up; filtering selects time ranges, graph distances or hierarchy levels.",
            "Dimension ordering is a good example: drag axes in parallel coordinates or rows and columns in a scatterplot matrix.",
            "In a scatterplot matrix, moving one variable moves a whole row and column to keep the diagonal symmetry.",
          ],
        },
        {
          heading: "Visualization structure space",
          bullets: [
            "Visualization-structure interactions change the **display**, independent of the data values.",
            "Examples are axis spacing in parallel coordinates, cell size in a scatterplot matrix or TableLens, and the arrangement of many views.",
            "A fisheye can be applied to the structure, and clustering or optimisation can organise hundreds of views.",
            "Consistent icons, labels and positions help users learn the available operations.",
          ],
        },
      ],
      table: {
        head: ["Space", "What changes", "Example"],
        rows: [
          ["Data space", "values", "log scaling, negation"],
          ["Attribute space", "colour, size, opacity", "contrast enhancement"],
          ["Data structure space", "organisation of data", "reorder dimensions, drill down"],
          ["Visualization structure space", "layout of the display", "resize matrix cells"],
        ],
      },
    },
    {
      id: "u5-animation",
      question:
        "Define animating transformations and interaction control in visualization systems, with an example.",
      marks: 5,
      freq: 4,
      papers:
        "Asked in Jun-2025 and RKR21 May-2026 as a Part-B question.",
      answer: [
        "**Animating transformations** means gliding smoothly from the old view to the new view, so the user keeps visual context while attention is drawn to the change.",
        "**Linear interpolation** moves at constant speed; **ease-in, ease-out** accelerates from zero, cruises and decelerates to zero, which feels natural and is easier to follow.",
        "A sine-based ease curve is position = 0.5 × (1 − cos(πt)); at t = 0.25 the eased position is 0.15, while the linear position is 0.25.",
        "The interpolated values of interaction parameters should be animated as they change, and the user should control the animation rate.",
        "**Interaction control** is the set of controls the user uses to drive all this: **focus selection, extent selection, interaction type selection, interaction level selection and blender type selection**.",
        "Focus and extents are usually direct manipulation; type selection uses menus or icons; level selection uses a slider or dial; blender selection uses a menu of options.",
      ],
      table: {
        head: ["Control", "Framework parameter"],
        rows: [
          ["Focus selection", "focus"],
          ["Extent selection", "extents"],
          ["Interaction type selection", "which operator and space"],
          ["Interaction level selection", "the degree of the transformation"],
          ["Blender type selection", "blender"],
        ],
      },
    },
    {
      id: "u5-design-steps",
      question:
        "List and explain the steps involved in designing effective visualizations.",
      marks: 10,
      freq: 5,
      papers:
        "Asked in Jan-2025, Jun-2025, Dec-2025/Jan-2026 and May-2026.",
      sections: [
        {
          heading: "What success means",
          bullets: [
            "A successful visualization conveys the desired information **efficiently and accurately** to the target audience for the intended task: **exploration, confirmation or presentation**.",
            "It fails when it confuses, distorts or hides data, when the user cannot change the view or colour map, or when it simply looks unattractive.",
            "The notes give **six steps**: mappings, views, information density, keys/labels/legends, colour and aesthetics.",
          ],
        },
        {
          heading: "(a) Intuitive mappings",
          bullets: [
            "Choose mappings that fit the user's **domain mental model**, such as planets for distance from the sun against orbit time.",
            "Mapping longitude and latitude to screen position is the most natural example.",
            "Match data scales to visual scales: ordered data should not map to an unordered feature such as shape, and unordered data should not map to an ordered feature such as length.",
          ],
        },
        {
          heading: "(b) Selecting and modifying views",
          bullets: [
            "One view is rarely enough; predict the views needed, label each clearly and make switching cheap.",
            "Provide **scrolling and zooming**, **colour-map control**, **mapping control**, **scale control**, **clipping and filtering** and **level-of-detail control**.",
          ],
        },
        {
          heading: "(c) Information density",
          bullets: [
            "**Too little** is gratuitous graphics: a chart of two or three values padded with sums and differences; show numbers as text instead.",
            "**Too much** causes confusion and hides important data; let users turn parts on and off, use multiple panes, filter uninteresting data and rescale skewed distributions.",
          ],
        },
        {
          heading: "(d) Keys, labels and legends",
          bullets: [
            "Give a caption that names the data fields and the mappings.",
            "Label axes with units and show grid and tick marks when absolute values matter.",
            "Provide keys for symbols and a labelled colour bar for colour.",
            "With several windows, keep labels and grids consistent, and update them when a range changes.",
          ],
        },
        {
          heading: "(e) Colour",
          bullets: [
            "Keep the number of distinct levels low for absolute judgement.",
            "Use **redundant mappings** such as colour plus size.",
            "Change both hue and lightness in a numeric colour map, include a labelled key, and use semantically resonant colours where possible.",
            "About **10% of males** have a colour deficiency, so colour must never be the only cue.",
            "A useful discipline is to design in greyscale first and add colour at the end.",
          ],
        },
        {
          heading: "(f) Aesthetics",
          bullets: [
            "Make the design work first, then make it look right.",
            "The three aesthetic guidelines are **focus, balance and simplicity**.",
            "Remove features one by one; keep a feature only if removing it loses information.",
          ],
        },
      ],
      note:
        "The examiner expects the six headings (a) to (f). Under each, two or three lines are enough for 10 marks.",
    },
    {
      id: "u5-aesthetics",
      question: "Explain the importance of aesthetics in visualization.",
      marks: 5,
      freq: 3,
      papers: "Asked in Jun-2025 and RKR21 May-2026 as a 5-mark question.",
      answer: [
        "A visualization must first **function** (convey information accurately) and then **please** (look clean and attractive).",
        "An unattractive visualization reduces the audience's willingness to look at it, so good content can be ignored.",
        "**Focus** directs attention to the most important part and emphasises the key components.",
        "**Balance** uses screen space well, keeps the important parts near the centre and avoids stressing one border.",
        "**Simplicity** avoids crowding and decorative effects; do not use 3D Phong-shaded histograms when a plain bar chart works.",
        "Remove features one by one and keep only those whose removal loses information.",
      ],
    },
    {
      id: "u5-design-problems",
      question:
        "Discuss the common problems in designing effective visualizations, including misleading visualizations, visual nonsense, chart junk and absolute versus relative judgement.",
      marks: 10,
      freq: 5,
      papers:
        "Asked in Jan-2025, Dec-2025/Jan-2026, RKR21 May-2026 and KR20 May/Jun-2026.",
      sections: [
        {
          heading: "Four ways to mislead",
          bullets: [
            "**Data scrubbing**: removing data that does not fit the story, usually by deleting outliers. Remove outliers only when they come from faulty collection, and tell the viewer.",
            "**Unbalanced scaling**: making a trend look stronger or weaker than it is. Tufte's **lie factor** = size of the effect shown / size of the effect in the data; an honest picture has value 1.",
            "**Range distortion**: moving the baseline away from the expected zero; relative judgement then makes small differences look huge. State the baseline clearly if it must move.",
            "**Abusing dimensionality**: mapping numbers to area or volume, which people judge badly; errors rise from length to area to volume.",
          ],
        },
        {
          heading: "Visual nonsense",
          bullets: [
            "Combining unrelated data sets can create structure that is not real, such as stock prices against sunspots; coincidence is mistaken for cause.",
            "Check that time and place ranges match and that units are consistent; convert price per litre and price per kg to a common measure such as price per serving.",
          ],
        },
        {
          heading: "Chart junk",
          bullets: [
            "**Chart junk** is supplementary non-data graphics that are not needed to read the data correctly.",
            "It makes the display complex and can occlude or de-emphasise the real data.",
            "Because displays are dynamic, let users adjust or switch off the supporting graphics.",
          ],
        },
        {
          heading: "Raw versus derived data",
          bullets: [
            "Showing only a smooth fitted curve or surface hides the real scatter; the viewer must trust the fit.",
            "**Resampling** to make data denser makes the data set look bigger than it is.",
            "Best practice is to show **both** the raw data and the model, with the option to hide either.",
          ],
        },
        {
          heading: "Absolute versus relative judgement",
          bullets: [
            "Humans are poor at absolute judgements of position, length and colour.",
            "Design for **relative** judgement using bounding boxes, grids and tick marks.",
            "**Residuals** (value minus mean) turn the question into 'above or below the mean?', which is easier to answer.",
            "Use only a few distinct values per attribute when absolute judgement cannot be avoided.",
          ],
        },
      ],
      table: {
        head: ["Problem", "Example", "Fix"],
        rows: [
          ["Data scrubbing", "delete an inconvenient outlier", "justify and disclose"],
          ["Unbalanced scaling", "lie factor 10", "keep both changes proportional"],
          ["Range distortion", "axis starts at 97 for 98 and 100", "start at a meaningful zero"],
          ["Abusing dimensionality", "double side of a cube", "use length or position"],
          ["Chart junk", "3D shadows behind bars", "make decoration optional"],
          ["Raw vs derived", "only a smooth fit", "show both"],
          ["Absolute judgement", "guess a bar length", "add grid or show residuals"],
        ],
      },
    },
    {
      id: "u5-evaluation",
      question:
        "Define system design evaluation and explain the criteria for measuring the quality of a designed visualization.",
      marks: 10,
      freq: 3,
      papers:
        "Asked in Dec-2025/Jan-2026 and RKR21 May-2026 as a 10-mark evaluation question.",
      sections: [
        {
          heading: "Definition",
          bullets: [
            "**System design evaluation** is the formal measurement of whether a visualization system helps users perform their tasks better than an alternative.",
            "It is part of the wider research issue of **evaluation**, which asks whether visualization actually helps analysis and decisions.",
          ],
        },
        {
          heading: "Why evaluation is needed",
          bullets: [
            "Early research rarely evaluated; it assumed that some visualization is better than none and used a side-by-side image comparison.",
            "Formal evaluation quantifies improvements and proves measurable benefits.",
            "It moves visualization from **ad hoc methods to a science** and can borrow methods from HCI and sociology.",
          ],
        },
        {
          heading: "Criteria",
          bullets: [
            "**Effectiveness**: does the user complete the task and reach the correct insight?",
            "**Efficiency**: how long, and with how much effort, does the task take?",
            "**Accuracy**: how many errors are made, including interpretation errors?",
            "**Usability and learnability**: can a new user understand the controls and the encoding?",
            "**User satisfaction and engagement**: is the display pleasant and trustworthy?",
            "**Expressiveness**: does the display show all the information and nothing extra?",
          ],
        },
        {
          heading: "Methods",
          bullets: [
            "**Controlled experiments** compare task time and error rates across designs.",
            "**Field studies and case studies** observe real users in their domain.",
            "**Heuristic evaluation** checks the design against perception, colour and interaction guidelines.",
            "**Metrics and benchmarks** such as task completion, insight count and recall/precision of visual search make results comparable.",
          ],
        },
      ],
      table: {
        head: ["Criterion", "Question"],
        rows: [
          ["Effectiveness", "Was the task completed correctly?"],
          ["Efficiency", "How fast and with what effort?"],
          ["Accuracy", "How many errors were made?"],
          ["Usability", "Can a new user operate it?"],
          ["Satisfaction", "Does the user trust and enjoy it?"],
          ["Expressiveness", "Is the mapping complete and honest?"],
        ],
      },
    },
    {
      id: "u5-research-data",
      question:
        "Discuss the key issues associated with research directions in visualization, especially the issues of data.",
      marks: 10,
      freq: 4,
      papers:
        "Asked in Jan-2025, Dec-2025/Jan-2026 and RKR21 May-2026 as a research-issues question.",
      sections: [
        {
          heading: "The six research families",
          bullets: [
            "The notes group research issues into **data**, **cognition/perception/reasoning**, **system design**, **evaluation**, **hardware** and **applications**.",
          ],
        },
        {
          heading: "Scale",
          bullets: [
            "Data grows from kilobytes to terabytes; **massive data** does not fit in memory.",
            "Solutions under research are **clustering, sampling and abstraction**.",
          ],
        },
        {
          heading: "Static versus dynamic",
          bullets: [
            "Most techniques assume static data in files or databases.",
            "**Streaming** sources arrive continuously, must be analysed in real time and often cannot be stored.",
            "Analysts care about how the data is **changing**, not only its current state.",
          ],
        },
        {
          heading: "Spatial versus nonspatial",
          bullets: [
            "Many fields have both spatial and nonspatial data, so research focuses on **integrating scientific and information visualization**.",
            "The **links between views** are critical for relating the two.",
          ],
        },
        {
          heading: "Nominal versus ordinal",
          bullets: [
            "Graphical attributes are mostly quantitative, but gene names and addresses are not.",
            "Mapping nominal data must not create a **fake order**; use colours and symbols that impose none, or numbers that preserve similarities.",
          ],
        },
        {
          heading: "Structured versus unstructured",
          bullets: [
            "Tables are highly structured, articles are unstructured and e-mail is **semi-structured**.",
            "Research must extract information from the unstructured part and use the structured part to index it.",
          ],
        },
        {
          heading: "Time and variable quality",
          bullets: [
            "**Time** is a special variable; spatio-temporal databases and pattern similarity involving time are open problems.",
            "**Variable quality** includes missing fields, old information, noisy sensors and typing errors; visualization must show **uncertainty** and keep the analyst informed.",
          ],
        },
      ],
      table: {
        head: ["Data issue", "Hook", "Example"],
        rows: [
          ["Scale", "too big for memory", "terabytes; clustering, sampling"],
          ["Static vs dynamic", "streaming", "real-time analysis"],
          ["Spatial vs nonspatial", "maps plus charts", "linked scientific and information views"],
          ["Nominal vs ordinal", "no fake order", "gene names, addresses"],
          ["Structured vs unstructured", "table vs article", "e-mail is semi-structured"],
          ["Time", "special variable", "spatio-temporal data"],
          ["Variable quality", "missing or noisy", "sensor faults, uncertainty"],
        ],
      },
    },
    {
      id: "u5-research-cognition",
      question:
        "Analyse the influence of perception and cognition on visualization effectiveness, and explain the issues of cognition, system design and evaluation.",
      marks: 10,
      freq: 4,
      papers:
        "Asked in Jan-2025, Jun-2025 and RKR21 May-2026 as an issues-of-cognition or research question.",
      sections: [
        {
          heading: "Perception versus cognition",
          bullets: [
            "**Perception** is how we see colour, size and position; **cognition and reasoning** are how we think about what we see.",
            "Visualization uses perception research heavily, but cognition and reasoning research much less.",
            "The **Gestalt laws** of grouping are the main exception that is widely applied.",
          ],
        },
        {
          heading: "Cognition issues",
          bullets: [
            "Future work should study how humans **solve problems** with interactive visual displays.",
            "Raise the task level: instead of only spotting a cluster, build a **mental model** of the whole phenomenon.",
            "Higher-level discoveries help analysts form, confirm or refute hypotheses and gain confidence in decisions.",
            "Visualization can support **learning** (concrete or abstract, sequential or random) and **memory** (a display as a note to yourself).",
            "The hard measurement problem is **transfer from screen to human**; data-to-screen transfer is easy to measure.",
          ],
        },
        {
          heading: "System design issues",
          bullets: [
            "Integrate **computational analysis** with **interactive visual analysis**; no system yet has a seamless blend.",
            "Develop new **interaction paradigms** for causes, what-if scenarios and non-expert users.",
            "We do not yet have a full **science of visualization**; designs still rest on experience and heuristics.",
            "Automatic generation needs tasks, evaluation and metrics.",
          ],
        },
        {
          heading: "Evaluation issues",
          bullets: [
            "Early work assumed some visualization is better than none and used side-by-side images.",
            "Formal evaluation with measurable benefits is now needed, borrowing methods from **HCI and sociology**.",
            "Evaluation is what turns visualization from an ad hoc craft into a science.",
          ],
        },
        {
          heading: "Effect on effectiveness",
          bullets: [
            "A design that overloads working memory or violates perceptual grouping is measurably slower and more error-prone.",
            "A design that matches perception and supports reasoning produces faster, more accurate and more confident decisions.",
            "Therefore perception and cognition are not background theory; they are the mechanism through which a visualization succeeds or fails.",
          ],
        },
      ],
      note:
        "Structure: perception vs cognition, three cognition issues, three system-design issues, the evaluation gap, then one paragraph on why this determines effectiveness.",
    },
    {
      id: "u5-research-hw",
      question:
        "Discuss the various issues of hardware and applications in visualization.",
      marks: 10,
      freq: 4,
      papers:
        "Asked in Jun-2025 and RKR21 May-2026 as a 5- or 10-mark question.",
      sections: [
        {
          heading: "The five hardware issues",
          bullets: [
            "**Handheld displays**: phones, PDAs, game devices and tablets; most visualization was designed for desktops, so limited display space must be used well. Examples are wiring and plumbing diagrams for technicians, crisis management and border-crossing risk checks.",
            "**Display walls**: multiple panels 10–30 feet wide; porting desktop solutions wastes space, so the environment should be redesigned so many views stay visible, as in control centres.",
            "**Immersive environments**: virtual and augmented reality, with the virtual wind tunnel as an early example; walk-throughs and fly-throughs are used in architecture, medicine and aeronautics. Rendering with **minimal latency** is the key technical problem.",
            "**GPUs**: GPU performance grew faster than CPU performance, driven by games; CPU algorithms usually need a near-total redesign for a GPU.",
            "**Interaction devices**: voice and sound, force-feedback tactile devices, game controllers and gesture wands, head and eye trackers, interactive tables and brain control.",
          ],
        },
        {
          heading: "The two application issues",
          bullets: [
            "**Depth-based innovations** make tools truly useful for **one domain**; designers must understand the domain and the tasks.",
            "Designers who only look at the data format make useless tools, and domain experts who design alone ignore perception and cognition; the best systems come from **tight cooperation**.",
            "**Breadth-based innovations** broaden the number of domains where visualization is used, as visual presentation replaces text in weather, stock-market and health reports.",
            "Breadth requires finding the right **visual representations and interaction metaphors** for each new domain and converting unstructured data into structured form.",
          ],
        },
        {
          heading: "Why these are research issues",
          bullets: [
            "New hardware changes what is possible faster than design guidelines change.",
            "Applications reveal requirements that generic techniques miss.",
            "Together they push visualization research toward new displays, new devices and new domains.",
          ],
        },
      ],
      table: {
        head: ["Hardware", "Keywords", "Example"],
        rows: [
          ["Handheld displays", "small screen, limited interaction", "technician wiring diagrams"],
          ["Display walls", "10–30 feet, redesign the environment", "control centres"],
          ["Immersive environments", "VR, AR, low latency", "virtual wind tunnel"],
          ["GPUs", "faster than CPUs, games-driven", "near-total algorithm redesign"],
          ["Interaction devices", "voice, tactile, controllers, trackers", "force-feedback surgery"],
        ],
      },
    },
  ],
};
