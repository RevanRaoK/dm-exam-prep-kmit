export type Topic = {
  id: string;
  title: string;
  short: string;
  description: string;
  mustWrite: string[];
  questions: string[];
  walkthroughs?: string[];
  diagrams?: string[];
};

export const unitTopics: Record<string, Topic[]> = {
  unit1: [
    {
      id: "vis-definition",
      title: "What Data Visualization Is & Why It Matters",
      short: "Definition & importance",
      description:
        "The working definition of visualization, its purpose in analysis and decision making, everyday examples, and its relationship with computer science, data science, design and HCI.",
      mustWrite: [
        "**Visualization** is the communication of information using graphical representations.",
        "Pictures are processed **in parallel** by the visual system, while reading text is **sequential**, so a picture can convey more information faster.",
        "Visualization supports **exploration, confirmation and presentation** of data.",
      ],
      questions: ["u1-vis-definition", "u1-relation-fields"],
    },
    {
      id: "cg-vs-vis",
      title: "Visualization vs Computer Graphics & the Graphics Pipeline",
      short: "Visualization vs graphics",
      description:
        "Why visualization is more than computer graphics: the underlying data model, the goal of communication, and the modelling-to-rendering graphics pipeline.",
      mustWrite: [
        "**Computer graphics** focuses on creating and rendering synthetic images; **visualization** maps data to graphical primitives to communicate information.",
        "The graphics pipeline is **modelling → viewing → clipping → hidden-surface removal → projection → rendering**.",
        "Visualization adds **data, perception, interaction and the user's task** to the graphics pipeline.",
      ],
      questions: ["u1-cg-vs-vis", "u1-graphics-pipeline"],
      diagrams: ["pipeline"],
    },
    {
      id: "vis-process",
      title: "The Visualization Process & Pseudo-code Conventions",
      short: "Visualization process",
      description:
        "The five-stage data/information visualization pipeline and the pseudo-code conventions used throughout the textbook: data, m, n, Normalize, Color, Circle and Polyline.",
      mustWrite: [
        "The five stages are **data modelling, data selection, data-to-visual mapping, scene parameter setting and rendering**.",
        "**Mappings** turn data values into position, size, colour, orientation or shape; many mappings are many-to-many.",
        "Pseudo-code assumes a numeric working table with **m dimensions and n records** and a **Normalize** function to the unit interval.",
      ],
      questions: ["u1-process", "u1-pseudocode"],
      walkthroughs: ["pipeline"],
      diagrams: ["pipeline"],
    },
    {
      id: "scatterplot",
      title: "The Scatterplot",
      short: "Scatterplots",
      description:
        "The oldest and most widely used multivariate display: two axes, one mark per record, optional colour and size dimensions, and the pseudo-code that renders it.",
      mustWrite: [
        "A scatterplot maps two data dimensions to **x and y position** and draws one mark per record.",
        "Extra dimensions can be mapped to **colour, size or shape**; this is dimension embedding.",
        "Scatterplots reveal **trends, clusters, correlations and outliers**, but suffer from **overplotting** in dense data.",
      ],
      questions: ["u1-scatterplot"],
      walkthroughs: ["scatter"],
    },
    {
      id: "data-types",
      title: "Types of Data & Measurement Scales",
      short: "Types of data",
      description:
        "Ordinal versus nominal data, binary/discrete/continuous sub-types, categorical/ranked/arbitrary variables, measurement scales and quantitative versus qualitative representations.",
      mustWrite: [
        "**Ordinal** data is numeric; **nominal** data is non-numeric.",
        "Nominal data is further split into **categorical, ranked and arbitrary** variables.",
        "The three scale attributes are **ordering, distance metric and absolute zero**.",
      ],
      questions: ["u1-data-types", "u1-data-qual-quant"],
      diagrams: ["data-taxonomy"],
    },
    {
      id: "record-structure",
      title: "Structure Within & Between Records",
      short: "Record structure",
      description:
        "Scalars, vectors and tensors; explicit geometry and grids; timestamps and temporal structure; structured and semi-structured data sets such as MRI, CFD, financial, CAD, remote sensing, census and social networks.",
      mustWrite: [
        "A **scalar** is a rank-0 tensor, a **vector** is rank 1 and a tensor of rank M in D dimensions needs **D^M values**.",
        "**Geometry** can be explicit coordinates, a regular grid or an irregular grid.",
        "**Time** may be absolute or relative and uniformly or non-uniformly sampled.",
      ],
      questions: ["u1-structure"],
    },
    {
      id: "preprocessing",
      title: "Data Preprocessing",
      short: "Data preprocessing",
      description:
        "Metadata and statistics, missing values and cleansing, normalization, segmentation, sampling and interpolation, dimension reduction, mapping nominal dimensions to numbers, aggregation, smoothing and raster-to-vector conversion.",
      mustWrite: [
        "Preprocessing turns raw data into a form the visualization technique can use without losing important information.",
        "The common methods are **metadata, cleansing, normalization, segmentation, sampling, dimension reduction, nominal mapping, aggregation, smoothing and raster-to-vector conversion**.",
        "**Normalization** maps values to a common range such as 0 to 1 so unrelated variables can be compared.",
      ],
      questions: ["u1-preprocess", "u1-missing"],
      walkthroughs: ["preprocess"],
    },
    {
      id: "datasets",
      title: "Data Sets & Data Quality",
      short: "Data sets & quality",
      description:
        "Representative visualization data sets and the quality issues that change the design: missing values, noise, outliers, scale, dimensionality and structure.",
      mustWrite: [
        "The book uses **djia-100, colorado_elev, cars, cereal, iris, city_temp and uvw** as running data sets.",
        "Data quality issues are **missing values, erroneous entries, noise, outliers and inconsistent units**.",
        "The structure of the data (scalar, vector, grid, graph, text) decides which visualization techniques are valid.",
      ],
      questions: ["u1-datasets", "u1-data-quality"],
    },
  ],
  unit2: [
    {
      id: "vis-stages",
      title: "Visualization Stages",
      short: "Visualization stages",
      description:
        "The three-stage pipeline from raw data to image: data preprocessing and transformation, mapping for visualization, and rendering transformations, with user interaction possible at every stage.",
      mustWrite: [
        "The stages are **data preprocessing and transformation → mapping for visualization → rendering transformations**.",
        "A transformation or computation can be placed at **any stage**, and user interaction should be possible at every point.",
        "Each link between stages is a **many-to-many mapping**, because one data set can have several visualizations and one visualization can combine several data sets.",
      ],
      questions: ["u2-stages"],
      diagrams: ["pipeline"],
    },
    {
      id: "semiology",
      title: "Semiology of Graphical Symbols",
      short: "Semiology & symbols",
      description:
        "Graphical symbols, preattentive versus attentive recognition, the features and rules of a graphic, and the analysis of a graphic through grouping and special cases.",
      mustWrite: [
        "**Semiology** is the science of graphical symbols and marks.",
        "A good symbol can be recognised **preattentively in one step**; a complex graphic needs attentive effort and pattern extraction.",
        "The aim of a graphic is to discover **groups or orders in x and y formed on z-values**.",
      ],
      questions: ["u2-semiology", "u2-graphics-features"],
    },
    {
      id: "visual-variables",
      title: "The Eight Visual Variables",
      short: "Eight visual variables",
      description:
        "Position, mark/shape, size, brightness, colour, orientation, texture and motion, with what each can encode and its limits; how to choose variables for effective design.",
      mustWrite: [
        "The eight variables are **position, mark (shape), size, brightness, colour, orientation, texture and motion**.",
        "**Position** is the strongest variable because spatial arrangement is read first.",
        "Colour uses **hue and saturation**; brightness is a separate variable, and motion can be attached to any other variable.",
      ],
      questions: ["u2-eight-variables", "u2-visual-variables-design"],
      diagrams: ["visual-variables"],
    },
    {
      id: "history",
      title: "Historical Perspective",
      short: "Historical perspective",
      description:
        "Formal models and milestones: Bertin's Semiology of Graphics, Mackinlay's APT, Bergeron and Grinstein's reference model, Wehrend and Lewis, Robertson, Roth, Casner, Beshers and Feiner, Senay and Ignatius, Hibbard, Golovchinsky, Card, Kamps, Wilkinson and Hoffman.",
      mustWrite: [
        "**Bertin (1967)** published Semiology of Graphics, the first rigorous theory of graphical encoding.",
        "**Mackinlay (1986)** built APT, an automatic presentation tool; **Bergeron and Grinstein (1989)** defined the four-stage visualization reference model.",
        "**Card, Mackinlay and Shneiderman (1999)** described data transformations, visual mappings and view transformations.",
      ],
      questions: ["u2-history"],
    },
    {
      id: "taxonomies",
      title: "Visualization Taxonomies",
      short: "Taxonomies",
      description:
        "Keller and Keller's taxonomy of goals, Shneiderman's data-type-by-task taxonomy, and Keim's three-dimensional classification of data types, techniques and interaction methods.",
      mustWrite: [
        "A **taxonomy** classifies objects and defines relationships between them.",
        "**Shneiderman** classifies data into one-dimensional, two-dimensional, three-dimensional, temporal, multidimensional, tree and network data.",
        "**Keim** classifies by data type, visualization technique and interaction/distortion method.",
      ],
      questions: ["u2-taxonomies", "u2-taxonomy-apply"],
    },
    {
      id: "semiotics",
      title: "Experimental Semiotics Based on Perception",
      short: "Experimental semiotics",
      description:
        "Sensory versus arbitrary symbols, the Peirce/Saussure tradition, pictures as sensory languages, and why perceptual experiments matter for visualization design.",
      mustWrite: [
        "**Semiotics** is the study of symbols and how they convey meaning; **sensory** symbols exploit perception, **arbitrary** symbols must be learned.",
        "Pictures are not purely conventional: some symbols are stable across individuals, cultures and time.",
        "Experimental semiotics tests which graphical encodings people read quickly and accurately.",
      ],
      questions: ["u2-semiotics"],
    },
    {
      id: "affordance",
      title: "Gibson's Affordance Theory",
      short: "Affordance theory",
      description:
        "Ecological optics, affordances and direct perception; how the theory maps to interface design, and the three problems that limit its literal use for visualization.",
      mustWrite: [
        "An **affordance** is a perceivable possibility for action offered by the environment.",
        "Gibson argued that affordances are perceived **directly**, not inferred from sensory evidence.",
        "For interfaces, the design principle is to give controls **clear affordances** such as handles for lifting and rotating.",
      ],
      questions: ["u2-affordance"],
    },
    {
      id: "perception",
      title: "A Model of Perceptual Processing",
      short: "Perceptual processing",
      description:
        "The three-stage model: parallel extraction of low-level features, pattern perception, and sequential goal-directed processing with visual working memory, plus the perceptual limits that constrain design.",
      mustWrite: [
        "Stage 1 extracts **features, orientation, colour, texture and movement** in parallel and very quickly.",
        "Stage 2 is a **slow serial process** that groups the field into regions and patterns using working and long-term memory.",
        "Stage 3 holds only a **few objects in visual working memory** and answers visual queries through attention.",
      ],
      questions: ["u2-perception", "u2-perception-limits"],
      diagrams: ["perception-stages"],
    },
  ],
  unit3: [
    {
      id: "geo-basics",
      title: "Geospatial Data & Spatial Phenomena",
      short: "Geospatial basics",
      description:
        "What geospatial data is, the four kinds of spatial phenomena (point, line, area, surface), and how data kind plus nominal/ordinal measurement selects a map type.",
      mustWrite: [
        "**Geospatial data** describes objects or events with a specific location on Earth.",
        "The four phenomena are **point (0-D), line (1-D), area (2-D) and surface (2.5-D)**.",
        "The basic mapping is **spatial attributes → screen position**, then other attributes → size, colour, shape and texture.",
      ],
      questions: ["u3-geo-def", "u3-geo-types"],
      diagrams: ["geo-types"],
    },
    {
      id: "geo-dimensions",
      title: "1-D, 2-D & 3-D Spatial Data",
      short: "Spatial dimensions",
      description:
        "Line graphs and colour bars for 1-D probes, images/rubber sheets/cityscapes/contours for 2-D data, and explicit surfaces, slicing, isosurfaces and direct volume rendering for 3-D data.",
      mustWrite: [
        "**1-D spatial data** comes from sampling along a path; map position to one screen axis and value to the other axis or to colour.",
        "**2-D data** can become an image, rubber sheet, cityscape, scatterplot, map or contour map.",
        "**Volume data** is visualized by **slicing, isosurfaces or direct volume rendering**.",
      ],
      questions: ["u3-spatial-dim", "u3-3d-dynamic", "u3-volume"],
    },
    {
      id: "geo-dynamic",
      title: "Dynamic Data & Flow Visualization",
      short: "Dynamic data & flow",
      description:
        "Dynamic and unsteady fields, pathlines, streaklines, timelines, streamlines, particle advection, vorticity, arrow glyphs, streamribbons and tubes, line integral convolution and LIC's texture-based flow display.",
      mustWrite: [
        "Flow visualization displays the dynamic behaviour of liquids and gases, either as **displacement vectors, scalar magnitudes or derived paths**.",
        "**Pathline** = trajectory of one particle; **streakline** = simultaneous positions of particles released continuously; **timeline** = positions of a batch released together; **streamline** = curve everywhere tangent to the velocity field.",
        "**Vorticity** is the curl of the velocity field, and **particle advection** is computing particle motion through the field.",
        "Techniques are **arrow glyphs**, **streamlines**, **streamribbons and streamtubes**, **streaklines** and **line integral convolution (LIC)**.",
      ],
      questions: ["u3-dynamic"],
      diagrams: ["flow-viz"],
    },
    {
      id: "geo-combining",
      title: "Combining Visualization Techniques",
      short: "Combining techniques",
      description:
        "Why combined visualizations outperform single techniques: slice plus isosurface, isosurface plus glyphs, and rubber sheet plus contour lines and colour, with the interaction controls that make them work.",
      mustWrite: [
        "Combining techniques adds the **strengths** of each method and supports simultaneous analysis of several data sets, as long as occlusion is controlled.",
        "**Slice + isosurface**: the isosurface shows surface structure and the slice shows detailed 2-D distribution and gradients.",
        "**Isosurface + glyphs**: glyphs add magnitude and direction from a gradient or flow field around the surface.",
        "**Rubber sheet + contours + colour**: height, colour and contour lines are redundant mappings that reveal peaks, valleys and gradients.",
      ],
      questions: ["u3-combine"],
      diagrams: ["combine-viz"],
    },
    {
      id: "geo-projection",
      title: "Map Projections & Visual Variables for Maps",
      short: "Projections & map variables",
      description:
        "Cylindrical, planar and conic projections; conformal, equal-area, equidistant, gnomonic, azimuthal and retroazimuthal properties; and the eight visual variables used on maps.",
      mustWrite: [
        "A **projection** flattens the globe and must distort something.",
        "By preserved property: **conformal, equal-area, equidistant, gnomonic, azimuthal, retroazimuthal**.",
        "By surface: **cylindrical, planar and conic**; map visual variables include size, shape, brightness, colour, orientation, spacing, perspective height and arrangement.",
      ],
      questions: ["u3-projection"],
      diagrams: ["projections"],
    },
    {
      id: "geo-point",
      title: "Point Data: Dot Maps & Pixel Maps",
      short: "Point data",
      description:
        "Dot maps, overplotting and the Ebbinghaus illusion, PixelMap repositioning with a quadtree, and the meaning of discrete/continuous and smooth/abrupt point data.",
      mustWrite: [
        "A **dot map** places a symbol or pixel at each event location; size or colour can encode a value.",
        "Dense data causes **overplotting**; the **PixelMap** moves overlapping points to nearby free pixels.",
        "Perceived symbol size depends on context, so there is **no global formula for perceptual scaling**.",
      ],
      questions: ["u3-point"],
    },
    {
      id: "geo-line",
      title: "Line Data: Networks, Flow Maps & Edge Bundling",
      short: "Line data",
      description:
        "Line segments for linear features, network map systems (Eick and Wills, NCSA, SeeNet, SWIFT-3D), Stanford flow maps and Holten's B-spline edge bundling.",
      mustWrite: [
        "Line data is drawn as segments between latitude–longitude pairs; width, pattern, colour and labels encode values.",
        "**Flow maps** reroute and merge flows to reduce crossings; **edge bundling** bends edges along a hierarchy using **B-splines**.",
        "Edges through the **root** of the hierarchy bend the most; edges inside one sub-hierarchy bend only slightly.",
      ],
      questions: ["u3-line"],
    },
    {
      id: "geo-area",
      title: "Area Data: Choropleths & Cartograms",
      short: "Area data & cartograms",
      description:
        "Choropleth, dasymetric and isarithmic maps; isometric versus isopleth contours; the choropleth bias toward large regions; and the four cartogram types.",
      mustWrite: [
        "A **choropleth** shades fixed regions and assumes the value is evenly spread inside each region.",
        "A **cartogram** resizes regions by a statistical value; types are **noncontinuous, noncontiguous, circular and continuous**.",
        "Large sparse regions dominate a choropleth, while dense small regions are hard to see; cartograms fix this.",
      ],
      questions: ["u3-area", "u3-geo-compare"],
      diagrams: ["geo-types"],
    },
    {
      id: "geo-issues",
      title: "Issues in Geospatial Visualization",
      short: "Geospatial issues",
      description:
        "The design and scale issues of geospatial visualization: aggregation areas, symbol perception, map projections, data quality, multiple linked maps and interaction.",
      mustWrite: [
        "Results depend heavily on the **areas chosen for aggregation**, as the London cholera maps show.",
        "**Symbol perception** is context dependent, so calculated size is not perceived size.",
        "**Linked maps and interaction** let users change classification, query the map and compare parameters.",
      ],
      questions: ["u3-geo-issues"],
    },
    {
      id: "geo-generalization",
      title: "Cartographic Generalisation, Labelling & GIS",
      short: "Generalisation & GIS",
      description:
        "Map generalisation for scale, point/line/polygon simplification, label placement by heuristics and optimisation, and the role of a GIS with layered spatial data.",
      mustWrite: [
        "**Map generalisation** selects and simplifies map information so objects of interest stay visible.",
        "**Map labelling** places labels near points, lines and polygons using heuristics plus optimisation.",
        "A **GIS** supports interactive queries, layered spatial data and presentation of results.",
      ],
      questions: ["u3-generalization"],
    },
  ],
  unit4: [
    {
      id: "mv-point",
      title: "Point-Based Techniques & MDS",
      short: "Point-based & MDS",
      description:
        "Scatterplots, scatterplot matrices, the four strategies for high dimensionality, force-based projection and multidimensional scaling with its stress measure.",
      mustWrite: [
        "A **scatterplot matrix** has **N² cells** for N dimensions; every pair appears twice and the diagonal shows dimension names or histograms.",
        "The four strategies for many dimensions are **subsetting, reduction, embedding and multiple displays**.",
        "**MDS** moves points until the difference between data distances and display distances (**stress**) is small; random jumps escape local minima.",
      ],
      questions: ["u4-scatter", "u4-scatter-matrix", "u4-mds"],
      walkthroughs: ["scatter"],
      diagrams: ["scatter-matrix"],
    },
    {
      id: "mv-line",
      title: "Line-Based Techniques",
      short: "Line-based",
      description:
        "Line graphs, stacked and sorted variants, parallel coordinates, Andrews curves, radial axis techniques, circular charts, radar and star graphs.",
      mustWrite: [
        "In **parallel coordinates** each record is a **polyline** crossing parallel axes, one axis per dimension; introduced by **Inselberg (1985)**.",
        "**Andrews curves** turn a record into one curve: f(t) = d1/√2 + d2 sin t + d3 cos t + d4 sin 2t + d5 cos 2t + …",
        "**Radial** charts are the circular equivalents of ordinary charts, useful for cyclic data.",
      ],
      questions: ["u4-line", "u4-pcp", "u4-andrews", "u4-radial"],
      walkthroughs: ["pcp"],
    },
    {
      id: "mv-region",
      title: "Region-Based Techniques",
      short: "Region-based",
      description:
        "Bar charts, histograms, cityscapes, heatmaps and dimensional stacking: filled shapes that encode values through length, area or colour.",
      mustWrite: [
        "People compare **lengths** more accurately than areas, so bar charts are a natural region-based choice.",
        "A **histogram** counts values in sub-ranges; a **heatmap** replaces table numbers with colours.",
        "**Dimensional stacking** puts grids inside grids so a discrete N-dimensional space maps to a 2-D image with minimal occlusion.",
      ],
      questions: ["u4-region", "u4-dimstack"],
    },
    {
      id: "mv-glyph",
      title: "Glyphs, Icons & Dense Pixel Displays",
      short: "Glyphs & pixels",
      description:
        "Glyph definitions, one-to-one/one-to-many/many-to-one mappings, dimension ordering, uniform/data-driven/structure-driven layouts and Keim's dense pixel displays.",
      mustWrite: [
        "A **glyph** is a graphical entity whose attributes are controlled by one or more data attributes.",
        "The three mappings are **one-to-one, one-to-many (redundant) and many-to-one**.",
        "**Dense pixel displays** map each value to one coloured pixel and can show millions of values on one screen.",
      ],
      questions: ["u4-glyph", "u4-dense"],
    },
    {
      id: "mv-trees",
      title: "Trees & Hierarchical Structures",
      short: "Trees & hierarchies",
      description:
        "Space-filling versus non-space-filling tree displays: treemaps, sunbursts, node-link diagrams, fan-out and depth, and the advantages of hierarchical organisation.",
      mustWrite: [
        "**Space-filling** methods use all the display space and show relations by juxtaposition: **treemap** (rectangular) and **sunburst** (radial, root at the centre).",
        "**Non-space-filling** methods draw edges: the **node-link diagram**, affected mainly by **fan-out and depth**.",
        "In both space-filling layouts, the number of leaf nodes in a subtree decides how much space it gets.",
      ],
      questions: ["u4-trees"],
      walkthroughs: ["treemap"],
    },
    {
      id: "mv-graphs",
      title: "Arbitrary Graphs & Networks",
      short: "Graphs & networks",
      description:
        "Trees as a special case of graphs, force-directed spring layouts, adjacency matrices, planar graph drawing and complex networks.",
      mustWrite: [
        "A **tree** is a connected, unweighted, acyclic graph; general graphs may have cycles, weights or disconnected parts.",
        "**Force-directed** layout uses a **spring force** plus an inverse-square **repulsion** until the energy is minimal.",
        "An **adjacency matrix** removes edge crossings but does not scale to thousands of nodes; reordering reveals structure.",
      ],
      questions: ["u4-graphs"],
      diagrams: ["mv-taxonomy"],
    },
    {
      id: "tx-levels",
      title: "Text, Corpus & Levels of Representation",
      short: "Text levels",
      description:
        "Corpus terminology, metadata, typical text tasks, and the lexical, syntactic and semantic levels that turn unstructured text into structured data.",
      mustWrite: [
        "A **corpus** is a collection of documents; its objects may be words, sentences, paragraphs, documents or collections.",
        "The **lexical** level turns characters into tokens using rules such as finite state machines.",
        "The **syntactic** level tags token functions and named entities; the **semantic** level extracts meaning and relationships.",
      ],
      questions: ["u4-text-levels"],
    },
    {
      id: "tx-vsm",
      title: "Vector Space Model, tf-idf & Zipf's Law",
      short: "VSM & tf-idf",
      description:
        "Term vectors, stop-word filtering and stemming, tf-idf weighting, vector similarity tasks, and Zipf's inverse rank-frequency law.",
      mustWrite: [
        "In the **vector space model** each document is a vector with one weight per word.",
        "**TfIdf(w) = Tf(w) × log(N / Df(w))**; a word in every document has Df = N and therefore weight zero.",
        "**Zipf's law**: frequency ∝ 1/rank, a straight line of slope −1 on a log-log plot.",
      ],
      questions: ["u4-vsm", "u4-zipf"],
    },
    {
      id: "tx-single",
      title: "Single-Document Visualization",
      short: "Single document",
      description:
        "Word clouds and tag clouds, word trees, TextArc, arc diagrams and literature fingerprinting, with the strengths and limits of each.",
      mustWrite: [
        "A **word cloud** sizes each word by frequency; a **word tree** adds context around a chosen root phrase.",
        "**TextArc** places the text around an ellipse and pulls frequent words inward toward their occurrences.",
        "In an **arc diagram**, arc thickness is the length of the repeated piece and height is the distance between repeats.",
      ],
      questions: ["u4-single-doc"],
    },
    {
      id: "tx-collection",
      title: "Document Collections & Extended Text Visualization",
      short: "Collections & extended text",
      description:
        "Self-organising maps, themescapes, document cards, SeeSoft, TileBars, ThemeRiver and Jigsaw for collections, software, search results and time.",
      mustWrite: [
        "**SOM** is an unsupervised grid that moves the closest node and its shrinking neighbourhood toward each input vector.",
        "**SeeSoft** colours lines of code; **TileBars** shows where query terms occur inside each result.",
        "**ThemeRiver** shows theme frequency over time; **Jigsaw** links a calendar view and an entity graph.",
      ],
      questions: ["u4-collection", "u4-seesoft-tilebars", "u4-themeriver-jigsaw"],
      diagrams: ["text-viz"],
    },
  ],
  unit5: [
    {
      id: "int-operators",
      title: "Interaction Concepts & the Seven Operators",
      short: "Interaction operators",
      description:
        "What interaction is, the seven operator classes (navigation, selection, filtering, reconfiguring, encoding, connecting, abstraction/elaboration) and the hybrid class.",
      mustWrite: [
        "**Interaction** is a mechanism for modifying what users see and how they see it.",
        "The seven operators are **navigation, selection, filtering, reconfiguring, encoding, connecting and abstraction/elaboration**.",
        "A **hybrid** operator combines several classes, for example showing a focus in detail while keeping the rest as context.",
      ],
      questions: ["u5-operators"],
    },
    {
      id: "int-spaces",
      title: "Interaction Operands & the Six Spaces",
      short: "Operands & spaces",
      description:
        "Operands, the six spaces (screen, data value, data structure, attribute, object, visualization structure) and what each operator means in each space.",
      mustWrite: [
        "An **operand** is the section of space on which an operator acts.",
        "The six spaces are **screen, data value, data structure, attribute, object and visualization structure**.",
        "Structure space is about **data organisation**; visualization structure space is about the **picture's layout**.",
      ],
      questions: ["u5-spaces"],
    },
    {
      id: "int-unified",
      title: "The Unified Framework",
      short: "Unified framework",
      description:
        "Focus, extents, transformation and blender: the four parameters every operator needs, illustrated with fisheye lenses, selection rectangles and time filters.",
      mustWrite: [
        "The four parameters are **focus, extents, transformation and blender**.",
        "**Focus** is the centre of interest; **extents** bound the interaction; **transformation** is the function inside the extents.",
        "The **blender** decides what happens where two interactions overlap.",
      ],
      questions: ["u5-unified"],
    },
    {
      id: "int-techniques",
      title: "The Eight Interaction Techniques",
      short: "Eight techniques",
      description:
        "Screen, object, data, attribute, data structure and visualization structure spaces, plus animating transformations and interaction control, with fisheye and perspective wall examples.",
      mustWrite: [
        "The eight techniques are **screen, object, data, attribute, data structure, visualization structure, animating transformations and interaction control**.",
        "The **fisheye** changes only the radius: r_new = s × log(1 + d × r_old); gaps are filled by interpolation.",
        "The **perspective wall** keeps a flat front panel and lets side panels fade into the distance.",
      ],
      questions: ["u5-techniques", "u5-screen", "u5-data-spaces", "u5-animation"],
      walkthroughs: ["fisheye"],
    },
    {
      id: "design-steps",
      title: "Designing Effective Visualizations",
      short: "Design steps",
      description:
        "The six design steps: intuitive mappings, selecting and modifying views, information density, keys/labels/legends, colour and aesthetics, plus the role of focus, balance and simplicity.",
      mustWrite: [
        "The six steps are **mappings, views, information density, keys/labels/legends, colour and aesthetics**.",
        "**Intuitive mappings** match data scales to graphical attributes and fit the user's mental model.",
        "For colour: keep levels low for absolute judgement, use redundant mappings, vary hue and lightness, and include a labelled key.",
      ],
      questions: ["u5-design-steps", "u5-aesthetics"],
    },
    {
      id: "design-problems",
      title: "Problems in Visualization Design",
      short: "Design problems",
      description:
        "Misleading visualizations (data scrubbing, unbalanced scaling, range distortion, abusing dimensionality) and the other classic problems: visual nonsense, chart junk, raw versus derived data and absolute versus relative judgement.",
      mustWrite: [
        "The four misleading tricks are **data scrubbing, unbalanced scaling, range distortion and abusing dimensionality**.",
        "Tufte's **lie factor** = size of the effect shown / size of the effect in the data; an honest picture has value 1.",
        "**Chart junk** is non-data graphics that clutter or hide the data; show both raw and derived data and use grids for relative judgement.",
      ],
      questions: ["u5-design-problems"],
    },
    {
      id: "design-evaluation",
      title: "System Design Evaluation",
      short: "Design evaluation",
      description:
        "What system design evaluation means, evaluation criteria for a designed visualization, and why formal evaluation moves visualization from ad hoc craft to science.",
      mustWrite: [
        "**System design evaluation** measures whether a visualization system actually helps users perform their tasks.",
        "Criteria include **effectiveness, efficiency, accuracy, usability and user satisfaction**.",
        "Formal evaluation borrows methods from **HCI and sociology** and is needed to turn visualization into a science.",
      ],
      questions: ["u5-evaluation"],
    },
    {
      id: "research-data",
      title: "Research Issues: Data",
      short: "Research: data",
      description:
        "The seven data issues (scale, static vs dynamic, spatial vs nonspatial, nominal vs ordinal, structured vs unstructured, time, variable quality) and their design consequences.",
      mustWrite: [
        "The seven data issues are **scale, static/dynamic, spatial/nonspatial, nominal/ordinal, structured/unstructured, time and variable quality**.",
        "**Scale** needs clustering, sampling and abstraction; **dynamic** data arrives as a stream and needs real-time analysis.",
        "**Variable quality** requires visualization to show **uncertainty** rather than hide it.",
      ],
      questions: ["u5-research-data"],
    },
    {
      id: "research-cognition",
      title: "Research Issues: Cognition, Perception & Reasoning",
      short: "Research: cognition",
      description:
        "The gap between perception research and cognition/reasoning research, learning and memory, transfer from screen to human, system design and evaluation issues.",
      mustWrite: [
        "Visualization uses perception research heavily but cognition and reasoning research much less; the **Gestalt laws** are the main exception.",
        "Research should support **learning, memory and mental models**, not only low-level cluster finding.",
        "The hard measurement problem is **transfer from screen to human**; system design and formal evaluation remain open issues.",
      ],
      questions: ["u5-research-cognition"],
    },
    {
      id: "research-hardware",
      title: "Research Issues: Hardware & Applications",
      short: "Research: hardware",
      description:
        "Handheld displays, display walls, immersive environments, GPUs and interaction devices; depth-based versus breadth-based application innovation.",
      mustWrite: [
        "The five hardware issues are **handheld displays, display walls, immersive environments, GPUs and interaction devices**.",
        "**Depth-based** innovation means understanding one domain deeply; **breadth-based** innovation means applying visualization to many domains.",
        "A key immersive-environment problem is rendering with **minimal latency**.",
      ],
      questions: ["u5-research-hw"],
    },
  ],
};

export const allTopics = Object.values(unitTopics).flat();
