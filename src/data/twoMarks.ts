import type { TwoMark } from "./types";

export const twoMarks: TwoMark[] = [
  {
    id: "t1-define-dv",
    unit: "Unit I",
    question: "Define data visualization.",
    freq: 6,
    answer: [
      "Data visualization is the **communication of information using graphical representations**.",
      "It maps data values to graphical primitives such as points, lines, areas and volumes, so patterns can be seen quickly.",
      "It connects an underlying data set to a picture, and its goal is insight and effective communication.",
    ],
  },
  {
    id: "t1-preprocess-need",
    unit: "Unit I",
    question: "What is the need for data preprocessing before visualization?",
    freq: 5,
    answer: [
      "Raw data often has **missing values, errors, noise, inconsistent units and mixed types** that a visualization cannot handle directly.",
      "Preprocessing cleans, normalizes and structures the data so the chosen technique produces a correct and readable display.",
      "The analyst must still avoid hiding real data problems; preserving and disclosing raw values is important.",
    ],
  },
  {
    id: "t1-data-types",
    unit: "Unit I",
    question: "List the types of data used in visualization.",
    freq: 4,
    answer: [
      "**Ordinal** data is numeric and splits into **binary, discrete and continuous**.",
      "**Nominal** data is non-numeric and splits into **categorical, ranked and arbitrary**.",
      "Variables may also be classified as **independent** or **dependent**.",
    ],
  },
  {
    id: "t1-structured-unstructured",
    unit: "Unit I",
    question: "Differentiate structured data from non-structured data.",
    freq: 3,
    answer: [
      "**Structured data** follows a fixed schema, such as a table with named rows and columns.",
      "**Unstructured data** has no fixed schema, such as free text in an article or an image.",
      "**Semi-structured data**, such as e-mail, has a structured header plus an unstructured body.",
    ],
  },
  {
    id: "t1-cg-tools",
    unit: "Unit I",
    question: "What are the tools used in computer graphics for visualizing data and images?",
    freq: 2,
    answer: [
      "Graphics APIs and languages such as **OpenGL, DirectX, Processing and Java3D**.",
      "Graphics hardware such as **NVIDIA or AMD/ATI graphics cards**.",
      "Rendering methods such as **flat, Gouraud, Phong, ray tracing and radiosity**, and output formats such as JPEG, TIFF, AVI and MPEG.",
    ],
  },
  {
    id: "t1-examples",
    unit: "Unit I",
    question: "Give examples for data visualization.",
    freq: 4,
    answer: [
      "Everyday examples are newspaper data tables, subway maps, route maps, weather charts, stock-market graphs and a bicycle instruction manual.",
      "Professional examples are financial analysis charts, engineering design views, a breast-cancer MRI, comet-path analysis and a social-network graph.",
    ],
  },
  {
    id: "t1-vis-stages",
    unit: "Unit I",
    question: "Define visualization stages.",
    freq: 4,
    answer: [
      "The stages are **data preprocessing and transformation → mapping for visualization → rendering transformations**.",
      "Preprocessing makes the data usable, mapping chooses the visual representation, and rendering produces the image.",
      "User interaction should be possible at any stage, and each link is a many-to-many mapping.",
    ],
  },
  {
    id: "t1-pseudocode",
    unit: "Unit I",
    question: "What are the pseudo-code conventions used in the DVT textbook?",
    freq: 3,
    answer: [
      "The working table is **data**, with **m** dimensions and **n** records and numeric values only.",
      "**Normalize** maps a value into a range, **Color/MapColor** set colours, and **Circle/Polyline** draw marks.",
      "Arrays are indexed from zero and specialized geographic and graph helpers are provided.",
    ],
  },
  {
    id: "t1-independent-dependent",
    unit: "Unit I",
    question: "What are independent and dependent variables?",
    freq: 3,
    answer: [
      "An **independent variable** is not controlled or affected by another variable, such as time in a time series.",
      "A **dependent variable** is affected by one or more independent variables, such as temperature depending on date, time and location.",
    ],
  },
  {
    id: "t1-nominal-ordinal",
    unit: "Unit I",
    question: "Define nominal and ordinal data.",
    freq: 4,
    answer: [
      "**Ordinal** data takes numeric values that support order and distance, such as age or temperature.",
      "**Nominal** data takes non-numeric values that name a category, such as red, blue or green; ranked nominal data has an order but no distance.",
    ],
  },
  {
    id: "t1-pipeline",
    unit: "Unit I",
    question: "What is the visualization pipeline?",
    freq: 4,
    answer: [
      "It is the sequence **data modelling → data selection → data-to-visual mapping → scene parameter setting → rendering**.",
      "It starts with data and ends with a rendered image for the user, with interaction possible at every stage.",
    ],
  },

  {
    id: "t2-semiology",
    unit: "Unit II",
    question: "Define semiology of graphical symbols.",
    freq: 5,
    answer: [
      "**Semiology** is the science of graphical symbols and marks and of how they convey meaning.",
      "It uses the qualities of the plane and its objects to create similarity, ordering and proportionality features that people can perceive.",
      "Bertin's Semiology of Graphics is its foundational work.",
    ],
  },
  {
    id: "t2-eight-variables",
    unit: "Unit II",
    question: "Name the eight visual variables.",
    freq: 6,
    answer: [
      "**Position, mark (shape), size, brightness, colour, orientation, texture and motion**.",
      "Position is the strongest variable, and motion can be combined with any other variable.",
    ],
  },
  {
    id: "t2-colour-variable",
    unit: "Unit II",
    question: "What is the use of colour as a visual variable?",
    freq: 4,
    answer: [
      "Colour is defined by **hue and saturation**, and colour maps relate value ranges to colours.",
      "It suits interval and continuous variables, distinguishes categories and supports grouping through similarity.",
      "It must be used with care because about 10% of males have a colour deficiency and perceived colour depends on context.",
    ],
  },
  {
    id: "t2-taxonomy",
    unit: "Unit II",
    question: "Define taxonomy in the context of visualization.",
    freq: 4,
    answer: [
      "A **taxonomy** is a classification that groups similar objects and defines relationships between them.",
      "In visualization it classifies data types, techniques, tasks and interaction methods, as in Keim's three-dimensional classification.",
    ],
  },
  {
    id: "t2-perceptual-processing",
    unit: "Unit II",
    question: "What is meant by perceptual processing?",
    freq: 4,
    answer: [
      "It is how the visual system turns light into structured information: feature extraction, pattern perception and goal-directed visual queries.",
      "The three-stage model separates fast parallel feature extraction from slower serial grouping and limited working-memory reasoning.",
    ],
  },
  {
    id: "t2-affordance",
    unit: "Unit II",
    question: "Explain Gibson's affordance theory.",
    freq: 5,
    answer: [
      "An **affordance** is a perceivable possibility for action offered by the environment, such as a surface for walking.",
      "Gibson argued that affordances are perceived **directly**, and that perception is designed for action.",
      "In interfaces, controls should have clear affordances that make their use obvious.",
    ],
  },
  {
    id: "t2-contrast",
    unit: "Unit II",
    question: "Why is contrast important in visualization?",
    freq: 3,
    answer: [
      "Contrast separates marks from the background and from each other, so features can be detected quickly.",
      "It supports preattentive search and grouping, and inadequate contrast makes values unreadable for low-vision users.",
      "Contrast must be used with restraint: too much competing contrast creates clutter.",
    ],
  },
  {
    id: "t2-preattentive",
    unit: "Unit II",
    question: "What is meant by preattentive processing?",
    freq: 3,
    answer: [
      "Preattentive processing is the fast, parallel, bottom-up extraction of low-level features such as colour, orientation and size before conscious attention.",
      "It lets a viewer detect a target in one step, which is why strong visual variables make important marks easy to find.",
    ],
  },
  {
    id: "t2-three-stages",
    unit: "Unit II",
    question: "What are the three stages of perception?",
    freq: 4,
    answer: [
      "**Stage 1**: parallel extraction of low-level features such as orientation, colour, texture and motion.",
      "**Stage 2**: slower serial pattern perception that groups the scene into regions and contours using memory.",
      "**Stage 3**: sequential goal-directed processing in which a few objects are held in visual working memory to answer visual queries.",
    ],
  },
  {
    id: "t2-symbol",
    unit: "Unit II",
    question: "What is a graphical symbol?",
    freq: 3,
    answer: [
      "A graphical symbol is any visual object used to carry meaning in a graphic, such as a mark, icon, arrow or label.",
      "Symbols can be preattentive and immediately recognisable, or arbitrary and learned through convention.",
    ],
  },
  {
    id: "t2-perception-limits",
    unit: "Unit II",
    question: "How do limitations in human perception influence visualization design?",
    freq: 3,
    answer: [
      "Limited colour and brightness discrimination means only a few levels should be used for absolute judgement.",
      "Limited working memory means the display must be simple and well grouped.",
      "Colour deficiency and context effects require redundant cues and careful axis and symbol design.",
    ],
  },

  {
    id: "t3-geo-def",
    unit: "Unit III",
    question: "What is geospatial data visualization?",
    freq: 5,
    answer: [
      "Geospatial data visualization makes data with a location on Earth visible by mapping its spatial attributes to a map.",
      "It handles point, line, area and surface phenomena and maps other attributes to size, colour, shape and texture.",
    ],
  },
  {
    id: "t3-choropleth-uses",
    unit: "Unit III",
    question: "Mention the uses of choropleth maps.",
    freq: 4,
    answer: [
      "Choropleth maps shade fixed regions by a value to show spatial distribution, such as election results, literacy or population.",
      "They are used when the value is roughly evenly spread inside each region and when regional comparison is the task.",
    ],
  },
  {
    id: "t3-contour",
    unit: "Unit III",
    question: "Explain the importance of a contour map.",
    freq: 4,
    answer: [
      "A **contour or isoline map** joins points of equal value and shows the boundary between values above and below a threshold.",
      "It makes continuous surfaces such as elevation, temperature and pressure readable, and supports interpolation between measured points.",
    ],
  },
  {
    id: "t3-four-phenomena",
    unit: "Unit III",
    question: "What are the four kinds of spatial phenomena?",
    freq: 4,
    answer: [
      "**Point** (0-D), **line** (1-D), **area** (2-D) and **surface** (2.5-D).",
      "A surface is 2.5-D because each coordinate pair has one height rather than a full 3D volume.",
    ],
  },
  {
    id: "t3-slicing",
    unit: "Unit III",
    question: "Explain slicing techniques in visualizing volume data.",
    freq: 4,
    answer: [
      "Slicing cuts a 3D volume with a plane and displays the extracted 2D slice using a 2D visualization method.",
      "The plane may be axis-aligned or arbitrary; slicing is fast but shows only one cross-section at a time.",
    ],
  },
  {
    id: "t3-pixelmap",
    unit: "Unit III",
    question: "What is a PixelMap?",
    freq: 3,
    answer: [
      "A **PixelMap** visualizes point data without aggregation by moving overlapping points to nearby unoccupied pixels.",
      "It recursively partitions the data into four sub-regions like a quadtree, so every point remains visible.",
      "Its limitation is that in dense areas the placement depends on the order of points.",
    ],
  },
  {
    id: "t3-edge-bundling",
    unit: "Unit III",
    question: "What is edge bundling?",
    freq: 3,
    answer: [
      "Edge bundling is a clutter-reduction technique that bends edges along a node hierarchy using **B-splines**.",
      "Edges through the root bend the most, while edges within one sub-hierarchy bend only slightly.",
      "It is applied to maps, trees, circular trees and treemaps.",
    ],
  },
  {
    id: "t3-generalization",
    unit: "Unit III",
    question: "What is map generalisation?",
    freq: 3,
    answer: [
      "Map generalisation selects and simplifies information so a small-scale map can be derived from a detailed large-scale map.",
      "Points are removed or merged, lines lose small bends and polygons keep essential shapes.",
      "The goal is to keep objects of interest visible and recognisable.",
    ],
  },
  {
    id: "t3-labeling",
    unit: "Unit III",
    question: "What is map labelling?",
    freq: 3,
    answer: [
      "Map labelling places text or symbols near points, lines and polygons without overlap.",
      "Most algorithms use rule-based placement followed by optimisation such as local search or simulated annealing.",
    ],
  },
  {
    id: "t3-cartogram",
    unit: "Unit III",
    question: "Define a cartogram.",
    freq: 4,
    answer: [
      "A **cartogram** is a thematic map in which regions are resized according to a statistical value, so area represents the value.",
      "Types are noncontinuous, noncontiguous, circular and continuous.",
      "It avoids the large-region bias of a choropleth.",
    ],
  },
  {
    id: "t3-gis",
    unit: "Unit III",
    question: "What is a GIS?",
    freq: 3,
    answer: [
      "A **Geographic Information System** lets users run interactive queries, compare and edit spatial data across layers, and present the results.",
      "Geospatial visualization is a part of GIS, and advances in both reinforce each other.",
    ],
  },
  {
    id: "t3-pathline",
    unit: "Unit III",
    question: "Define pathline and streakline.",
    freq: 3,
    answer: [
      "A **pathline** is the trajectory of one particle released into a flow field, so it assumes multiple time instances.",
      "A **streakline** is the set of simultaneous positions of particles continuously released from one or more locations.",
    ],
  },
  {
    id: "t3-streamline",
    unit: "Unit III",
    question: "Define streamline and timeline.",
    freq: 3,
    answer: [
      "A **streamline** is a line through the velocity field that is tangent to the velocity field at every point.",
      "A **timeline** is the position at one instant of time of a batch of particles released simultaneously.",
    ],
  },
  {
    id: "t3-steady-flow",
    unit: "Unit III",
    question: "What is steady flow?",
    freq: 2,
    answer: [
      "**Steady flow** is a flow field that does not change with time.",
      "For steady flow, **streaklines, pathlines and streamlines coincide**.",
    ],
  },
  {
    id: "t3-vorticity",
    unit: "Unit III",
    question: "What is vorticity?",
    freq: 2,
    answer: [
      "**Vorticity** is the curl of the velocity field.",
      "It gives the magnitude and direction of angular velocity for each particle in the field.",
    ],
  },
  {
    id: "t3-lic",
    unit: "Unit III",
    question: "What is line integral convolution (LIC)?",
    freq: 3,
    answer: [
      "LIC is a texture-based flow visualization developed by **Cabral and Leedom in 1993**.",
      "Each output pixel is a weighted average of adjacent pixels in a random texture field along a streamline through that pixel.",
      "It produces a dense, continuous display of flow direction.",
    ],
  },
  {
    id: "t3-combining",
    unit: "Unit III",
    question: "Why combine visualization techniques?",
    freq: 3,
    answer: [
      "Each technique has strengths and weaknesses, so a combination can produce the **sum of the strengths** as long as occlusion is minimised.",
      "Many problems require several data sets at once, such as weather forecasting with temperature, wind and humidity.",
      "Examples are slice + isosurface, isosurface + glyphs, and rubber sheet + contours + colour.",
    ],
  },

  {
    id: "t4-point-techniques",
    unit: "Unit IV",
    question: "List any two point-based techniques.",
    freq: 4,
    answer: [
      "**Scatterplots** draw one mark per record at a position defined by two dimensions.",
      "**Scatterplot matrices** repeat scatterplots for every pair of dimensions in an N × N grid.",
      "**MDS** is a related point-placement technique that preserves similarity distances.",
    ],
  },
  {
    id: "t4-multivariate",
    unit: "Unit IV",
    question: "What is multivariate data?",
    freq: 4,
    answer: [
      "**Multivariate data** has more than one variable (dimension) per record, such as a table with height, weight, age and income.",
      "Each record is a point in n-dimensional data space that must be projected to a 2D or 3D display.",
    ],
  },
  {
    id: "t4-region",
    unit: "Unit IV",
    question: "Explain region-based techniques in multivariate data visualization.",
    freq: 4,
    answer: [
      "Region-based techniques use filled polygons whose size, shape or colour conveys values.",
      "Examples are bar charts, histograms, stacked bars, cityscapes, heatmaps and dimensional stacking.",
      "They are good for summaries and distributions; bar length is judged more accurately than area.",
    ],
  },
  {
    id: "t4-scatter-matrix",
    unit: "Unit IV",
    question: "What is a scatterplot matrix?",
    freq: 4,
    answer: [
      "It is a grid of scatterplots with **N² cells** for N dimensions, showing every pairwise combination.",
      "Each pair appears twice, rotated by 90°, and the diagonal shows dimension names or histograms.",
    ],
  },
  {
    id: "t4-pcp",
    unit: "Unit IV",
    question: "What are parallel coordinates?",
    freq: 4,
    answer: [
      "Parallel coordinates use one parallel vertical axis per dimension, introduced by Inselberg in 1985.",
      "Each record is a polyline crossing every axis at a height proportional to its value.",
      "Bundles of similar lines show groups and departing lines show outliers.",
    ],
  },
  {
    id: "t4-andrews",
    unit: "Unit IV",
    question: "What are Andrews curves?",
    freq: 3,
    answer: [
      "Andrews curves (David F. Andrews, 1972) map each multivariate record to one curve using sine and cosine waves.",
      "The formula is f(t) = d1/√2 + d2 sin t + d3 cos t + d4 sin 2t + …",
      "Similar records produce similar curves, and the dimension order affects the shape.",
    ],
    formula: "f(t) = d1/√2 + d2 sin t + d3 cos t + d4 sin 2t + d5 cos 2t + …",
  },
  {
    id: "t4-dimstack",
    unit: "Unit IV",
    question: "What is dimensional stacking?",
    freq: 3,
    answer: [
      "Dimensional stacking maps a discrete N-dimensional data space to a 2D image using grids inside grids.",
      "It minimises occlusion and preserves much spatial information; the dependent variable sets the colour of the smallest cell.",
    ],
  },
  {
    id: "t4-glyph",
    unit: "Unit IV",
    question: "What is a glyph?",
    freq: 4,
    answer: [
      "A glyph is a graphical entity whose attributes are controlled by one or more data attributes.",
      "Examples are a box whose width and height show two marks and whose colour shows a category.",
      "Glyphs can use one-to-one, one-to-many or many-to-one mappings.",
    ],
  },
  {
    id: "t4-dense-pixel",
    unit: "Unit IV",
    question: "What are dense pixel displays?",
    freq: 3,
    answer: [
      "Dense pixel displays, pioneered by Keim, map each data value to one coloured pixel.",
      "They can show millions of values on one screen and are a hybrid of point-based and region-based methods.",
      "The layout and ordering of pixels are the key design choices.",
    ],
  },
  {
    id: "t4-vsm",
    unit: "Unit IV",
    question: "What is the vector space model in document visualization?",
    freq: 5,
    answer: [
      "The vector space model represents a document as a vector with one weight per word.",
      "Stop words are removed and stems merged before weighting; similarity between vectors finds related documents.",
      "The best-known weighting is tf-idf.",
    ],
  },
  {
    id: "t4-tfidf",
    unit: "Unit IV",
    question: "What is tf-idf?",
    freq: 4,
    answer: [
      "tf-idf weights a word by its frequency in the document and its rarity in the collection.",
      "**TfIdf(w) = Tf(w) × log(N / Df(w))**.",
      "A word appearing in every document has Df = N and therefore weight zero.",
    ],
    formula: "TfIdf(w) = Tf(w) × log(N / Df(w))",
  },
  {
    id: "t4-zipf",
    unit: "Unit IV",
    question: "State Zipf's law.",
    freq: 4,
    answer: [
      "In natural language, the frequency of a word is inversely proportional to its rank in the frequency table.",
      "frequency ∝ 1 / rank, and on a log-log plot the curve is a straight line with slope −1.",
    ],
  },
  {
    id: "t4-lexical",
    unit: "Unit IV",
    question: "What is meant by the lexical level of text representation?",
    freq: 4,
    answer: [
      "The lexical level turns a string of characters into a sequence of **tokens** using rules.",
      "Tokens may be characters, n-grams, words, stems, lexemes or phrases, produced with finite state machines or regular expressions.",
    ],
  },
  {
    id: "t4-single-doc",
    unit: "Unit IV",
    question: "Describe single document visualization.",
    freq: 5,
    answer: [
      "Single-document visualization shows the structure, vocabulary or style of one document.",
      "Examples are word clouds, word trees, TextArc, arc diagrams and literature fingerprints.",
      "Each technique shows a different property: frequency, context, position, repetition or style change.",
    ],
  },
  {
    id: "t4-word-cloud",
    unit: "Unit IV",
    question: "What are the advantages of visualizing a single document using word clouds or tag clouds?",
    freq: 3,
    answer: [
      "A word cloud shows the main vocabulary of a document at a glance, with size proportional to frequency.",
      "It is compact, intuitive and needs no training, which makes it useful for quick summaries and presentations.",
      "The trade-off is that it loses word order and context.",
    ],
  },
  {
    id: "t4-tilebars",
    unit: "Unit IV",
    question: "What is TileBars?",
    freq: 3,
    answer: [
      "TileBars, by Marti Hearst, visualizes search results as rectangles whose width is relative document length.",
      "Stacked squares are text segments, rows are query term sets and darkness shows term frequency.",
    ],
  },
  {
    id: "t4-seesoft",
    unit: "Unit IV",
    question: "What is SeeSoft?",
    freq: 3,
    answer: [
      "SeeSoft, by Eick et al., visualizes software by drawing each line of code as a pixel-thin row.",
      "Each column is a file and colour shows the call count: red for hot spots and blue for rarely called lines.",
    ],
  },
  {
    id: "t4-themeriver",
    unit: "Unit IV",
    question: "What is ThemeRiver?",
    freq: 3,
    answer: [
      "ThemeRiver, or a stream graph, shows how themes in a document collection rise and fall over time.",
      "Each theme is a coloured band, and the vertical thickness is the frequency of that theme at that time.",
    ],
  },
  {
    id: "t4-treemap",
    unit: "Unit IV",
    question: "What is a treemap?",
    freq: 3,
    answer: [
      "A treemap is a space-filling tree layout that divides a rectangle repeatedly into slices based on subtree sizes.",
      "It uses all display space and shows hierarchy proportions well, but hides edges and exact depth.",
    ],
  },
  {
    id: "t4-adjacency",
    unit: "Unit IV",
    question: "What is an adjacency matrix in graph visualization?",
    freq: 3,
    answer: [
      "An adjacency matrix is an N × N grid where cell (i, j) shows whether nodes i and j are linked.",
      "It removes crossing edges but does not scale to thousands of nodes; reordering rows and columns reveals clusters.",
    ],
  },

  {
    id: "t5-operators",
    unit: "Unit V",
    question: "List the interaction operators used in visualization.",
    freq: 6,
    answer: [
      "**Navigation, selection, filtering, reconfiguring, encoding, connecting and abstraction/elaboration**.",
      "A hybrid operator combines several of these classes.",
    ],
  },
  {
    id: "t5-spaces",
    unit: "Unit V",
    question: "List the types of interaction spaces.",
    freq: 5,
    answer: [
      "**Screen space, data value space, data structure space, attribute space, object space and visualization structure space**.",
    ],
  },
  {
    id: "t5-operands",
    unit: "Unit V",
    question: "What are interaction operands?",
    freq: 4,
    answer: [
      "An **interaction operand** is the section of space on which an interactive operator is applied.",
      "The same operation can act on a pixel, a data value, a data structure, an attribute, a 3D object or the visualization structure.",
    ],
  },
  {
    id: "t5-navigation",
    unit: "Unit V",
    question: "What is the use of navigation operators? Illustrate.",
    freq: 4,
    answer: [
      "Navigation controls the subset of data viewed, the orientation of the view and the level of detail.",
      "In a map app it is pinch-to-zoom, drag-to-pan and rotate; in 3D it is the camera location, direction, frustum and LOD.",
      "Drill-down and roll-up are navigation in a hierarchy, and the grand tour is automatic navigation through orientations.",
    ],
  },
  {
    id: "t5-unified-params",
    unit: "Unit V",
    question: "What are the parameters required for the unified framework?",
    freq: 4,
    answer: [
      "**Focus, extents, transformation and blender**.",
      "Focus is the centre of interest, extents bound the interaction, transformation is the function and its degree, and the blender combines overlapping interactions.",
    ],
  },
  {
    id: "t5-fisheye",
    unit: "Unit V",
    question: "What is a fisheye lens?",
    freq: 4,
    answer: [
      "A fisheye lens is a screen-space distortion that magnifies the area around a focus while keeping context visible.",
      "It changes only the radius: r_new = s × log(1 + d × r_old).",
      "Pixels outside the lens radius are copied unchanged, and gaps are filled by interpolation.",
    ],
    formula: "r_new = s × log(1 + d × r_old)",
  },
  {
    id: "t5-perspective-wall",
    unit: "Unit V",
    question: "What is a perspective wall?",
    freq: 3,
    answer: [
      "A perspective wall is an object-space technique for navigating large documents.",
      "The front panel faces the viewer and side panels fade into the distance by perspective foreshortening, keeping focus and context together.",
    ],
  },
  {
    id: "t5-animating",
    unit: "Unit V",
    question: "Define animating transformations.",
    freq: 4,
    answer: [
      "Animating transformations means smoothly interpolating between the old and new view so the user keeps visual context.",
      "Linear interpolation is simplest, but ease-in, ease-out looks more natural.",
    ],
  },
  {
    id: "t5-control",
    unit: "Unit V",
    question: "What is interaction control?",
    freq: 3,
    answer: [
      "Interaction control is the set of controls the user uses to drive an interaction: focus, extent, interaction type, interaction level and blender type.",
      "The controls should match the precision and scale of the space being used.",
    ],
  },
  {
    id: "t5-density",
    unit: "Unit V",
    question: "What is the importance of information density in designing a visualization?",
    freq: 4,
    answer: [
      "Too little information produces gratuitous graphics that waste space; a table of numbers would be better.",
      "Too much information causes confusion and hides the important data.",
      "The designer must balance density by filtering, multiple panes, rescaling and letting users turn parts on or off.",
    ],
  },
  {
    id: "t5-evaluation",
    unit: "Unit V",
    question: "Define system design evaluation.",
    freq: 4,
    answer: [
      "System design evaluation measures whether a visualization system helps users complete tasks effectively, efficiently and accurately.",
      "It compares designs using task performance, error rates, usability and user satisfaction, borrowing methods from HCI and sociology.",
    ],
  },
  {
    id: "t5-cognition-issues",
    unit: "Unit V",
    question: "What are the issues of cognition in visualization design?",
    freq: 4,
    answer: [
      "Visualization relies on perception research but much less on how people reason, learn and remember with displays.",
      "The field needs higher-level tasks, mental models, support for hypothesis formation and measurement of transfer from screen to human.",
    ],
  },
  {
    id: "t5-design-problems",
    unit: "Unit V",
    question: "List common problems in designing visualizations.",
    freq: 4,
    answer: [
      "**Data scrubbing, unbalanced scaling, range distortion and abusing dimensionality** are the four misleading tricks.",
      "Other problems are **visual nonsense, chart junk, raw versus derived data and absolute versus relative judgement**.",
    ],
  },
  {
    id: "t5-data-scrubbing",
    unit: "Unit V",
    question: "What is data scrubbing?",
    freq: 3,
    answer: [
      "Data scrubbing is removing data that does not support the intended message, most commonly deleting outliers.",
      "It is misleading unless the removed data came from faulty collection, and even then the removal must be disclosed.",
    ],
  },
  {
    id: "t5-chart-junk",
    unit: "Unit V",
    question: "What is chart junk?",
    freq: 3,
    answer: [
      "Chart junk is supplementary non-data graphics that are not needed to read the data correctly.",
      "It can clutter the display and occlude the real data, so it should be optional or removed.",
    ],
  },
  {
    id: "t5-lie-factor",
    unit: "Unit V",
    question: "What is the lie factor?",
    freq: 3,
    answer: [
      "The lie factor is Tufte's ratio of the size of the effect shown in the picture to the size of the effect in the data.",
      "A value of 1 is honest; a value far from 1 means the picture exaggerates or understates the change.",
    ],
  },
  {
    id: "t5-hardware",
    unit: "Unit V",
    question: "List the five hardware issues in visualization.",
    freq: 3,
    answer: [
      "**Handheld displays, display walls, immersive environments, GPUs and interaction devices**.",
    ],
  },
  {
    id: "t5-depth-breadth",
    unit: "Unit V",
    question: "Differentiate depth-based and breadth-based application innovations.",
    freq: 3,
    answer: [
      "**Depth-based** innovation makes a tool truly useful for one domain by close cooperation between domain and visualization experts.",
      "**Breadth-based** innovation applies visualization to many new domains by finding suitable representations and interaction metaphors.",
    ],
  },
];
