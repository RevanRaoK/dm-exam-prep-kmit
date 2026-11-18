import type { Unit } from "./types";

export const unit1: Unit = {
  id: "unit1",
  roman: "I",
  title: "Unit I · Introduction & Data Foundation",
  subtitle:
    "The definition and importance of visualization, its relationship with other fields, the visualization process, pseudo-code conventions, scatterplots, types of data, structure within and between records, preprocessing and data sets.",
  color: "var(--v-violet)",
  questions: [
    {
      id: "u1-vis-definition",
      question:
        "Define data visualization and explain its importance in data analysis with suitable examples.",
      marks: 10,
      freq: 5,
      papers:
        "Asked as a Part-A definition and as a Part-B fundamentals question in the Jan-2025, Jun-2025, Dec-2025/Jan-2026 and May-2026 DVT papers.",
      sections: [
        {
          heading: "Definition",
          bullets: [
            "**Visualization** is the communication of information using **graphical representations**.",
            "It is the application of graphics to display data by **mapping data to graphical primitives** (points, lines, areas and volumes) and rendering the display.",
            "A visualization connects an **underlying data set** to a picture, so the picture is not just decoration: every mark has a data meaning.",
          ],
        },
        {
          heading: "Why pictures beat tables",
          bullets: [
            "A single picture can contain a wealth of information that is processed **much more quickly** than a comparable page of words.",
            "Image interpretation is performed **in parallel** in the human perceptual system, whereas text analysis is limited by the **sequential process of reading**.",
            "Visualization supplies **qualitative and quantitative views** at different levels of detail, so a viewer can move from an overview to a specific value.",
          ],
        },
        {
          heading: "Role in data analysis",
          bullets: [
            "Visualization supports **exploration**, to find patterns, anomalies, trends, relationships and outliers.",
            "It supports **confirmation**, to check a hypothesis or a model against the data.",
            "It supports **presentation**, to communicate findings efficiently and accurately to technical and non-technical audiences.",
            "It is part of the larger process of **exploratory data analysis, knowledge discovery and visual analytics**.",
          ],
        },
        {
          heading: "Examples",
          bullets: [
            "Everyday examples are a newspaper data table, a subway map, a route map, a weather chart, a stock-market graph, a bicycle instruction manual and a highway sign.",
            "Professional examples are financial analysis, engineering design, a breast-cancer MRI, comet-path analysis, population smoking behaviour, actuarial data, physical simulation and a Facebook friendship graph.",
            "A subway map deliberately **distorts geography** to make the network easier to read, showing that the goal is effective communication rather than visual realism.",
          ],
        },
        {
          heading: "Key idea",
          bullets: [
            "Visualization is **more than computer graphics**: it includes human-computer interaction, perceptual psychology, databases, statistics and data mining.",
            "The measure of success is how **effectively and accurately** the intended information reaches the target user for the intended task.",
          ],
        },
      ],
      table: {
        head: ["Question", "Visualization answer"],
        rows: [
          ["What is shown?", "Data values mapped to graphics"],
          ["Why use pictures?", "Parallel visual processing and fast pattern detection"],
          ["What is the goal?", "Effective communication, insight and decision making"],
          ["How is it judged?", "Accuracy, expressiveness, effectiveness and user task fit"],
        ],
      },
      note:
        "A safe long answer: define visualization, give the parallel-versus-sequential argument, list exploration/confirmation/presentation, give two everyday and two professional examples, then close with the 'more than graphics' line.",
    },
    {
      id: "u1-relation-fields",
      question:
        "Explain the relationship between data visualization and other fields such as computer graphics, data science, design, statistics and human-computer interaction.",
      marks: 5,
      freq: 4,
      papers:
        "Asked directly in the Jan-2025 and RKR21 May-2026 papers as a 5-mark relationship question.",
      answer: [
        "**Computer science and IT** supply the algorithms, graphics APIs, image processing and interaction technology used to build visualizations.",
        "**Computer graphics** provides the modelling, projection and rendering pipeline; visualization adds the data model and communication goal.",
        "**Data science and analytics** use visualization to explore large data sets and to communicate trends, outliers and correlations to mixed audiences.",
        "**Design and UX** contribute layout, typography, colour, interaction and accessibility so the display is usable and pleasing.",
        "**Statistics and data mining** provide the computations, models and measures that are then displayed and checked visually.",
        "**Human-computer interaction** contributes interaction operators, controls and evaluation methods.",
        "**Perceptual psychology** explains which encodings people read quickly and accurately, and which ones mislead.",
        "The field is therefore **multidisciplinary**: it uses graphics as the medium but draws its rules from data, people and the task.",
      ],
      note:
        "Use the six named fields and give one contribution each; that is enough for the 5-mark version.",
    },
    {
      id: "u1-cg-vs-vis",
      question:
        "Differentiate data visualization from computer graphics. Why is visualization considered more than computer graphics?",
      marks: 5,
      freq: 4,
      papers:
        "A recurring Part-A and Part-B comparison in the Jan-2025, Dec-2025/Jan-2026 and RKR21 May-2026 papers.",
      answer: [
        "**Computer graphics** focuses mainly on the creation of interactive synthetic images and animations of 3D objects, often with **visual realism** as a goal.",
        "**Visualization** does not emphasise visual realism; it emphasises the **effective communication of information** from an underlying data set.",
        "Graphics focuses on **graphical objects and the organisation of primitives**; visualization starts from **data** with semantics such as spatial position, population or a physical measure.",
        "Graphics supplies the tools: programming languages such as OpenGL and DirectX, graphics hardware, rendering algorithms, and output formats.",
        "Visualization uses those tools, but also draws on **HCI, perceptual psychology, databases, statistics and data mining**.",
        "A simple test: a photorealistic rendering of a cube is graphics; a scatterplot whose position, colour and size represent variables is visualization.",
      ],
      table: {
        head: ["Aspect", "Computer graphics", "Data visualization"],
        rows: [
          ["Starting point", "Geometry and graphical primitives", "Data and its semantics"],
          ["Main goal", "Realistic or aesthetic image", "Effective, accurate communication"],
          ["Key question", "How do I render this object?", "What does this data mean and how should it be shown?"],
          ["Evaluation", "Image quality and performance", "Insight, accuracy, task effectiveness"],
          ["Disciplines", "Graphics, mathematics", "Graphics + HCI + perception + statistics + data"],
        ],
      },
    },
    {
      id: "u1-graphics-pipeline",
      question: "Explain the computer graphics pipeline with its stages.",
      marks: 5,
      freq: 3,
      papers: "Asked as a Part-B question in the Jan-2025 paper and as supporting material in later papers.",
      answer: [
        "**Modelling** creates a 3D model from planar polygons defined by vertices and surface properties in a world coordinate system.",
        "**Viewing** defines a virtual camera by its location, direction and orientation, and transforms all vertices into the viewing coordinate system.",
        "**Clipping** removes objects outside the selected image bounds and clips objects that are only partly visible.",
        "**Hidden-surface removal** removes polygons facing away from the camera or hidden behind others.",
        "**Projection** projects the 3D polygons onto the 2D plane of projection, usually with a perspective transformation.",
        "**Rendering** computes the final pixel colours from material properties, light sources, occlusion, reflections, textures and shading, then writes the image.",
        "The visualization pipeline reuses these ideas but starts from **data**, selects a subset, maps data to graphics and then renders the scene.",
      ],
      diagrams: ["pipeline"],
    },
    {
      id: "u1-process",
      question:
        "Describe the visualization process with a neat diagram. Explain the stages and the role of user interaction.",
      marks: 10,
      freq: 5,
      papers:
        "A high-frequency long question: asked in Jan-2025 Q2, Jun-2025 Q2, Dec-2025/Jan-2026 and May-2026 in different forms.",
      sections: [
        {
          heading: "The pipeline idea",
          bullets: [
            "Visualization starts with **data** and ends with the **user**; the path is traditionally described as a **pipeline** of stages.",
            "Each stage can be studied independently in terms of algorithms, data structures and coordinate systems.",
            "The graphics, visualization and knowledge-discovery pipelines overlap but have different goals.",
          ],
        },
        {
          heading: "1 · Data modelling",
          bullets: [
            "The data is structured so that it can be visualized: the **name, type, range and semantics** of each attribute must be available.",
            "The format must allow **rapid access and easy modification**.",
          ],
        },
        {
          heading: "2 · Data selection",
          bullets: [
            "The subset of data that will actually be visualized is identified, by the user or by an algorithm.",
            "Selection can cycle through time slices or automatically detect features of interest, like clipping in graphics.",
          ],
        },
        {
          heading: "3 · Data-to-visual mapping",
          bullets: [
            "This is the **heart** of the pipeline: data values are mapped to graphical entities and their attributes.",
            "One record component may control size, another position and another colour.",
            "The mapping often requires **scaling, shifting, filtering, interpolation or subsampling** before drawing.",
          ],
        },
        {
          heading: "4 · Scene parameter setting",
          bullets: [
            "The user sets attributes that are relatively independent of the data: the **colour map**, an optional **sound map**, and **lighting** for 3D scenes.",
            "Colour choices must respect domain conventions, because some colours already have fixed meanings.",
          ],
        },
        {
          heading: "5 · Rendering",
          bullets: [
            "The visual objects are projected and rendered with shading or texture mapping where needed.",
            "Axes, keys, labels and annotations are added so the picture can be interpreted.",
            "User interaction should ideally be possible at **any stage**, and each link is a **many-to-many mapping**.",
          ],
        },
        {
          heading: "Overlay with knowledge discovery",
          bullets: [
            "The knowledge-discovery pipeline is: **data → integration/cleaning/warehousing/selection → data mining → pattern evaluation → rendering/visualization**.",
            "The visualization pipeline can be overlaid on it, and interactive visualization can be used at every step, which is called **computational steering**.",
          ],
        },
      ],
      table: {
        head: ["Stage", "Input", "Output"],
        rows: [
          ["Data modelling", "Raw files or databases", "Structured attribute table"],
          ["Data selection", "Structured table", "Subset chosen for display"],
          ["Data-to-visual mapping", "Selected data", "Graphical entities and attributes"],
          ["Scene parameter setting", "Mappings", "Colour, sound and lighting choices"],
          ["Rendering", "Scene description", "Image with axes, keys and labels"],
        ],
      },
      diagrams: ["pipeline"],
      walkthrough: "pipeline",
      note:
        "Draw the five boxes in order and add the user arrow below the whole pipeline. State that mappings are many-to-many and that interaction may occur at any stage.",
    },
    {
      id: "u1-pseudocode",
      question: "Write short notes on the pseudo-code conventions used in the DVT textbook.",
      marks: 5,
      freq: 3,
      papers: "Asked in Jan-2025 Q3(a) as a short note on pseudo-code conventions and scatter plots.",
      answer: [
        "The pseudo-code aims to convey the **essence of an algorithm**, leaving out interaction details, graphics nuances and data management.",
        "**data** is the working data table and is assumed to contain **numeric values only**; non-numeric dimensions must be converted.",
        "**m** is the number of dimensions (columns) and **n** is the number of records (rows); j and i are the usual running indices.",
        "**Normalize(record, dimension, min, max)** maps a value to a range, or to 0–1 when min and max are omitted; linear normalization local to one dimension is the default.",
        "**Color(color)** sets the drawing colour and **MapColor(record, dimension)** applies the global colour map to a normalized value.",
        "**Circle(x, y, radius)** fills a circle, and **Polyline(xs, ys)** draws connected line segments; the plotting space is the unit square.",
        "Geographic helpers are **GetLatitudes, GetLongitudes, ProjectLatitudes and ProjectLongitudes**, and graph data uses **GetConnections(record)**.",
        "Arrays are indexed from **zero**, and code must allow several normalization types within one visualization.",
      ],
      formula:
        "Draw-Line-Graph(data, dataCount, xMin, xMax, yMin, yMax)\n1 dataMin ← computeMin(data, dataCount)\n2 dataMax ← computeMax(data, dataCount)\n3 for i ← 1 to dataCount\n4   draw a line from the previous point to worldToScreen(data[i])\n\nworldToScreenY(value) = yMin + (value − dataMin)(yMax − yMin)/(dataMax − dataMin)",
    },
    {
      id: "u1-scatterplot",
      question:
        "Explain the role and effectiveness of scatter plots in visualization with an example. Give the pseudo-code and discuss how they reveal trends and outliers.",
      marks: 10,
      freq: 5,
      papers:
        "Asked as a Part-A role question and as a Part-B effectiveness/analysis question in the Jan-2025, Dec-2025/Jan-2026 and May-2026 papers.",
      sections: [
        {
          heading: "What a scatterplot is",
          bullets: [
            "A **scatterplot** is one of the earliest and most widely used visualizations, based on the **Cartesian coordinate system**.",
            "Each record becomes a **dot or mark**; its horizontal and vertical position gives the values of two numeric variables.",
            "The horizontal variable is usually the **independent variable** and the vertical variable the **dependent variable**.",
          ],
        },
        {
          heading: "Why it works",
          bullets: [
            "People are very good at judging **relative position within a bounded space**, so position is the strongest visual variable.",
            "The dots report individual data points, and the pattern of all dots reports the relationship between the variables.",
            "Relationships can be described as **positive or negative, strong or weak, linear or nonlinear**.",
          ],
        },
        {
          heading: "Pseudo-code",
          bullets: [
            "For each record i, normalize the chosen x dimension and assign it to x.",
            "Normalize the chosen y dimension and assign it to y.",
            "Optionally normalize a radius dimension between rMin and rMax, and map a colour dimension through the colour map.",
            "Draw a **Circle(x, y, r)** at the computed position.",
            "The signature is **Scatterplot(xDim, yDim, cDim, rDim, rMin, rMax)**.",
          ],
        },
        {
          heading: "Effectiveness",
          bullets: [
            "Scatterplots reveal **clusters, trends, correlations, gaps and outliers** at a glance and are excellent for exploratory analysis.",
            "Adding colour or size embeds extra dimensions, but only a few extra dimensions fit before the picture becomes hard to read.",
            "With many records the marks **overlap (overplotting)**; transparency, jitter, smaller marks or aggregation reduce this.",
            "A scatterplot shows association, **not causation**, and a moved axis can exaggerate or hide a trend.",
          ],
        },
      ],
      formula:
        "Scatterplot(xDim, yDim, cDim, rDim, rMin, rMax)\n1 for each record i\n2   x ← Normalize(i, xDim)\n3   y ← Normalize(i, yDim)\n4   r ← Normalize(i, rDim, rMin, rMax)\n5   MapColor(i, cDim)\n6   Circle(x, y, r)",
      walkthrough: "scatter",
      note:
        "For a 10-mark answer: definition, why position works, the pseudo-code loop, then three uses (trend, cluster, outlier) and two limits (overplotting, correlation is not causation).",
    },
    {
      id: "u1-data-types",
      question:
        "List and explain the types of data used in visualization, including measurement scales and independent/dependent variables.",
      marks: 5,
      freq: 4,
      papers: "Asked as a Part-A list and as a Part-B types-of-data question in several DVT papers.",
      answer: [
        "Data is a list of **n records**, each with **m observations or variables**; a variable may be **independent** (not controlled by another, such as time) or **dependent** (affected by other variables, such as temperature).",
        "**Ordinal** data takes numeric values: **binary** (0/1), **discrete** (integer or a specific subset) or **continuous** (real values in an interval).",
        "**Nominal** data takes non-numeric values: **categorical** (a short list such as red, blue, green), **ranked** (ordered categories such as small, medium, large) or **arbitrary** (unbounded and unordered, such as addresses).",
        "The three **scale attributes** are an **ordering relation**, a **distance metric** and the existence of an **absolute zero**.",
        "Weight has an absolute zero because all four arithmetic operations make sense; bank balance does not.",
        "The data type decides what graphical encoding is valid: ordered data can use position or size, while nominal data must not be given a fake order.",
      ],
      table: {
        head: ["Data type", "Sub-type", "Example", "Valid visual cue"],
        rows: [
          ["Ordinal", "Binary", "yes / no", "shape or position"],
          ["Ordinal", "Discrete", "number of children", "position or size"],
          ["Ordinal", "Continuous", "temperature, height", "position, size, colour map"],
          ["Nominal", "Categorical", "red / blue / green", "hue, shape"],
          ["Nominal", "Ranked", "small / medium / large", "ordered size or brightness"],
          ["Nominal", "Arbitrary", "addresses", "labels or glyphs"],
        ],
      },
      diagrams: ["data-taxonomy"],
    },
    {
      id: "u1-data-qual-quant",
      question:
        "Compare quantitative and qualitative data representations in visualization.",
      marks: 5,
      freq: 3,
      papers: "Asked in the Dec-2025/Jan-2026 paper as a 5-mark comparison.",
      answer: [
        "**Quantitative data** is ordinal and numeric: it supports ordering, distance and often an absolute zero, so it can be mapped to **position, length, size, brightness or a continuous colour scale**.",
        "**Qualitative data** is nominal and non-numeric: it describes a kind or category and has no natural distance, so it should map to **hue, shape, texture or labels** that impose no order.",
        "A quantitative representation can show **trends, magnitudes and rates**, while a qualitative representation shows **which category, group or type** each record belongs to.",
        "Ranked nominal data is in between: it has an order but no meaningful distance, so ordered colour or size is acceptable but arithmetic comparison is not.",
        "The main design rule is to **match the scale of the data to the scale of the visual variable**: ordered data to ordered attributes, unordered data to unordered attributes.",
        "Quantitative and qualitative views are often combined: a scatterplot carries the numeric relation, while colour or shape carries the category.",
      ],
      table: {
        head: ["Aspect", "Quantitative", "Qualitative"],
        rows: [
          ["Nature", "Numeric / ordinal", "Non-numeric / nominal"],
          ["Operations", "Order, distance, often zero", "Grouping and naming only"],
          ["Best cues", "Position, length, size, brightness", "Hue, shape, texture, labels"],
          ["Example", "Age, income, temperature", "Country, colour name, gene name"],
        ],
      },
    },
    {
      id: "u1-structure",
      question:
        "Explain the structure within and between records in data sets, with examples of structured data.",
      marks: 10,
      freq: 4,
      papers:
        "Asked as a Part-B question in the May-2026, Dec-2025/Jan-2026 and Jan-2025 papers.",
      sections: [
        {
          heading: "Syntax and semantics",
          bullets: [
            "Data sets have structure in **syntax**, the means of representation, and in **semantics**, the relationships within a record and between records.",
            "A record may contain a single number, a symbol, a string or a much more complex structure.",
          ],
        },
        {
          heading: "Scalars, vectors and tensors",
          bullets: [
            "A **tensor** is defined by its rank and by the dimensionality of the space in which it is defined, and is usually stored as an array or matrix.",
            "A **scalar** is a tensor of rank 0 and a **vector** is a tensor of rank 1.",
            "A tensor of rank M in D-dimensional space requires **D^M data values**.",
            "A local coordinate-system transformation matrix is an example of a tensor found inside a data record.",
          ],
        },
        {
          heading: "Geometry and grids",
          bullets: [
            "The simplest geometric structure is an **explicit coordinate** for each record, for example longitude and latitude with a temperature value.",
            "3D models store vertices, edges and polygon patches; parametric equations plus a grid can define a smooth surface.",
            "Grid data may use **Cartesian, spherical or hyperbolic** coordinates, and the grid may be **uniform or irregular**.",
          ],
        },
        {
          heading: "Time and other attributes",
          bullets: [
            "A **timestamp** is an important attribute with a huge range, from picoseconds to millennia, and may be **absolute or relative**.",
            "Temporal data may be **uniformly spaced** (sampling a continuous phenomenon) or **non-uniformly spaced** (business transactions).",
          ],
        },
        {
          heading: "Examples of structured data",
          bullets: [
            "**MRI**: density as a scalar with three spatial attributes and 3D grid connectivity.",
            "**CFD**: three displacement dimensions plus temporal and spatial attributes and a uniform or non-uniform 3D grid.",
            "**Financial data**: no geometry, several possibly independent components, nominal and ordinal values, plus time.",
            "**CAD**: three spatial attributes with edge and polygon connections and surface properties.",
            "**Remote sensing, census and social networks** add multiple channels, spatial or temporal attributes and connectivity implied by similarity or group membership.",
          ],
        },
      ],
      note:
        "The answer moves from small to large: scalar → vector → tensor → geometry/grid → time → complete real data sets.",
    },
    {
      id: "u1-preprocess",
      question:
        "Define data preprocessing and explain the common methods of data preprocessing with an example of preparing a raw data set for visualization.",
      marks: 10,
      freq: 5,
      papers:
        "The most frequent Unit-I long question: asked in Jan-2025, Jun-2025, Dec-2025/Jan-2026, RKR21 May-2026 and KR20 May/Jun-2026.",
      sections: [
        {
          heading: "Definition and need",
          bullets: [
            "**Data preprocessing** transforms raw data into a form that satisfies the requirements of the chosen visualization technique without losing important information.",
            "It is needed because raw data has **missing values, errors, noise, inconsistent units, very large size and mixed data types**.",
            "In many domains, such as medical imaging, the analyst prefers to **view the raw data** first, because filtering can hide problems or add deceptive artifacts.",
          ],
        },
        {
          heading: "Metadata and statistics",
          bullets: [
            "**Metadata** gives the field formats, the base reference point, the units, the missing-value symbol and the acquisition resolution.",
            "Statistics such as the minimum, maximum, mean and distribution guide the choice of preprocessing and its parameters.",
          ],
        },
        {
          heading: "Missing values and data cleansing",
          bullets: [
            "Missing data can come from a **malfunctioning sensor, a blank survey entry or a data-entry omission**.",
            "Erroneous data is usually caused by human error and is hard to detect.",
            "Strategies are to remove the record, remove the field, impute a value (mean, interpolation or a model) or keep a missing-value marker and show it in the visualization.",
          ],
        },
        {
          heading: "Normalization",
          bullets: [
            "**Normalization** transforms a data set so that it satisfies a statistical property, for example mapping each variable to the range 0.0–1.0 or giving each dimension a common mean and standard deviation.",
            "It lets seemingly unrelated variables be compared on the same visual scale.",
          ],
        },
        {
          heading: "Segmentation, sampling and reduction",
          bullets: [
            "**Segmentation** divides data into contiguous regions or maps value ranges to categories, such as bone, muscle, fat and skin in an MRI.",
            "**Sampling and subsetting** change spatial resolution; **interpolation** estimates values between samples.",
            "**Dimension reduction** uses PCA, MDS, SOMs or LLE, or lets the user choose the most important dimensions.",
          ],
        },
        {
          heading: "Nominal values, aggregation and smoothing",
          bullets: [
            "Nominal dimensions can be mapped to numbers or to non-ordered visual cues, but the mapping must not create relationships that do not exist in the data.",
            "**Aggregation and summarization** group similar points and replace the group with a mean, a count, extents or other descriptors.",
            "**Smoothing and filtering** reduce noise with convolution and weighted neighbourhood averaging.",
            "**Raster-to-vector conversion** extracts lines or structures from image data when a vector representation is more useful.",
          ],
        },
      ],
      table: {
        head: ["Problem in raw data", "Preprocessing method"],
        rows: [
          ["Missing or blank entries", "Cleansing, imputation or a missing-value marker"],
          ["Different units and ranges", "Normalization / scaling"],
          ["Too many records", "Sampling, aggregation or summarization"],
          ["Too many dimensions", "PCA, MDS, SOM or dimension selection"],
          ["Noisy measurements", "Smoothing / filtering"],
          ["Nominal categories", "Categorical mapping to non-ordered cues"],
          ["Image or scan data", "Segmentation or raster-to-vector conversion"],
        ],
      },
      walkthrough: "preprocess",
      note:
        "For the applied version, walk one small table through missing-value imputation, normalization to 0–1, mapping a nominal column and aggregating two records. Then state the trade-off: preprocessing helps the technique but can hide raw problems.",
    },
    {
      id: "u1-missing",
      question:
        "Explain the significance of handling missing data and describe the common techniques used.",
      marks: 5,
      freq: 3,
      papers: "Asked in the Dec-2025/Jan-2026 paper as a 5-mark question.",
      answer: [
        "Missing data is common in real data sets because of sensor failure, blank survey entries and data-entry omissions, and it can bias every later statistic and visual impression.",
        "The analyst must first **detect** the missing-value symbol from the metadata and decide whether the value is missing at random or for a systematic reason.",
        "A first option is to **remove** the record or the dimension, which is simple but can lose information and introduce bias.",
        "A second option is **imputation**: substitute the mean, a median, a regression prediction or a value obtained by interpolation from neighbours.",
        "A third option is to **keep a missing-value marker** and encode it explicitly in the visualization, so the viewer sees the gap rather than a false value.",
        "Erroneous entries need separate **data cleansing**; the correction rule and the number of changed values should be disclosed.",
        "The sign of good handling is that the visualization remains honest: uncertainty and gaps are visible, not hidden.",
      ],
      note:
        "Name at least four techniques: deletion, mean/median imputation, interpolation or model-based imputation, and explicit missing-value encoding.",
    },
    {
      id: "u1-datasets",
      question: "Describe the typical data sets used in visualization and what each one demonstrates.",
      marks: 5,
      freq: 2,
      papers: "Asked as a supporting Part-B question in the Jan-2025 and May-2026 papers.",
      answer: [
        "**djia-100** is a univariate, non-spatial time series of more than 100 years of daily Dow Jones averages; it demonstrates line graphs, time series and trend analysis.",
        "**colorado_elev** is a two-dimensional uniform scalar grid of elevations; it demonstrates images, contour maps, rubber sheets and surface visualization.",
        "**cars, detroit and cereal** are multivariate, non-spatial data sets commonly used to demonstrate scatterplots, scatterplot matrices, parallel coordinates and glyphs.",
        "**iris** contains size measurements for iris plants classified by type; it is the standard example for clustering, Andrews curves, parallel coordinates and dimension reduction.",
        "**city_temp** is a two-dimensional non-uniform geospatial scalar data set of average January temperatures; it demonstrates interpolation, contours and map labeling.",
        "**uvw** is a three-dimensional uniform grid vector field from a turbulent channel-flow simulation; it demonstrates vector and flow visualization.",
        "**Health-related and census data** add multivariate spatial attributes and demonstrate GIS and linked views.",
      ],
    },
    {
      id: "u1-data-quality",
      question:
        "Discuss how data quality and data structure issues affect visualization performance and design.",
      marks: 10,
      freq: 3,
      papers:
        "Asked in the Jun-2025 paper as a full question and revisited in the Dec-2025/Jan-2026 and RKR21 papers.",
      sections: [
        {
          heading: "Why quality changes the design",
          bullets: [
            "Visualization is only as trustworthy as the data behind it; missing, noisy or inconsistent values can make a correct chart communicate a false message.",
            "Quality problems are not only technical, because the **viewer must be told** when data is incomplete, estimated or transformed.",
          ],
        },
        {
          heading: "Missing and erroneous values",
          bullets: [
            "Missing entries create gaps and bias summary statistics; the design must either impute them transparently or show them explicitly.",
            "Errors and outliers can dominate a scale and hide the normal structure; they should be checked before removal, because a real outlier may be the interesting finding.",
          ],
        },
        {
          heading: "Scale, precision and units",
          bullets: [
            "Large ranges compress small differences; logarithmic or normalized scales may be needed, but they must be labelled.",
            "Mismatched units, such as price per litre against price per kilogram, make a comparison meaningless until normalized to a common measure.",
          ],
        },
        {
          heading: "Structure and dimensionality",
          bullets: [
            "The data structure decides the possible techniques: scalars suit line graphs and images, vectors suit flow displays, grids suit slices and isosurfaces, trees suit treemaps, and graphs suit node-link or matrix views.",
            "High dimensionality forces a choice between subsetting, reduction, embedding and multiple displays.",
            "Nominal, semi-structured and unstructured data need preprocessing before a quantitative visual encoding is valid.",
          ],
        },
        {
          heading: "Performance consequences",
          bullets: [
            "Large data sets stress memory, rendering and interaction latency, so sampling, aggregation, level-of-detail and GPU methods become necessary.",
            "Too much data causes occlusion and clutter; too little can mislead just as badly.",
            "The design should therefore state the data quality, expose uncertainty and provide interaction so the user can inspect subsets and raw values.",
          ],
        },
      ],
      note:
        "Structure the answer as three effects: quality (values), structure (data model) and scale (performance). Add one example for each.",
    },
  ],
};
