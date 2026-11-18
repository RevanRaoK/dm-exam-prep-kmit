import type { Unit } from "./types";

export const unit3: Unit = {
  id: "unit3",
  roman: "III",
  title: "Unit III · Geospatial Data Visualization",
  subtitle:
    "Spatial phenomena and map types, 1-D/2-D/3-D spatial data, dynamic data and flow visualization, combining techniques, map projections, point data and PixelMaps, line data and edge bundling, area data and cartograms, cartographic generalisation, labelling and GIS.",
  color: "var(--v-teal)",
  questions: [
    {
      id: "u3-geo-def",
      question: "Define geospatial data visualization and give examples.",
      marks: 2,
      freq: 4,
      papers:
        "A repeated Part-A definition in the Jan-2025, Dec-2025/Jan-2026 and RKR21 May-2026 papers.",
      answer: [
        "**Geospatial data visualization** is the use of visual representations to make spatial contexts and problems visible, mapping data that has a location on Earth onto a map.",
        "Examples are credit-card payments, telephone calls, health statistics, environmental records, crime data, census demographics, roads and weather.",
        "A map reduces the world to **points, lines and areas**, and then uses size, colour, shape and texture to show extra attributes.",
      ],
    },
    {
      id: "u3-geo-types",
      question:
        "Explain the four kinds of spatial phenomena and the map types used for geospatial data.",
      marks: 5,
      freq: 4,
      papers:
        "Asked as a 5-mark question in several papers and as the basis of the geospatial long questions.",
      answer: [
        "A **point** phenomenon is 0-D: one longitude and latitude pair plus descriptors, with no spatial extent. Examples are a city, an oil well, an ATM or a telephone call.",
        "A **line** phenomenon is 1-D: length but no width, stored as an unclosed series of coordinates. Examples are a road, a railway, a river or a country border.",
        "An **area** phenomenon is 2-D: length and width enclosed by a series of coordinates. Examples are a lake, a park, a county or a state.",
        "A **surface** phenomenon is 2.5-D: a height value at every longitude–latitude pair. Examples are elevation, temperature and pressure.",
        "Map types follow the data kind and measurement scale: **symbol maps** for nominal points, **dot maps** for ordinal points, **land-use maps** for nominal areas, **choropleth maps** for ordinal areas, **line diagrams** for lines, **isoline maps** for surfaces and **surface maps** for volumes.",
        "Other spatial views are **cartograms** for area data and **flow or network maps** for line data.",
      ],
      table: {
        head: ["Kind", "Dimension", "Definition", "Examples"],
        rows: [
          ["Point", "0-D", "one coordinate pair plus descriptors", "city, oil well, ATM"],
          ["Line", "1-D", "length but no width", "road, border, railway"],
          ["Area", "2-D", "length and width, closed outline", "lake, park, state"],
          ["Surface", "2.5-D", "a height for each coordinate pair", "elevation, temperature"],
        ],
      },
      diagrams: ["geo-types"],
    },
    {
      id: "u3-spatial-dim",
      question:
        "Define spatial data visualization and explain one-dimensional and two-dimensional spatial data with respect to visualization techniques.",
      marks: 5,
      freq: 3,
      papers:
        "Asked in Jan-2025 (one-dimensional and two-dimensional spatial data) and repeated in the May-2026 papers.",
      answer: [
        "**Spatial data visualization** assumes that the data has an implicit or explicit spatial or spatio-temporal attribute, so data attributes can be mapped to the spatial attributes of the screen.",
        "**One-dimensional spatial data** often comes from sampling along a path, such as a drill-hole sample recording mineral content with distance from the top.",
        "For 1-D data, map the spatial position to one screen axis and the value to the other axis (a **line graph**) or to **colour** along a colour bar.",
        "**Two-dimensional data** is displayed mainly by mapping the two spatial attributes to screen x and y. The possible views are an **image, rubber sheet, cityscape, scatterplot, map or contour map**.",
        "An **image** maps one value per location to colour and interpolates intermediate pixels; a **rubber sheet** maps values to height and triangulates the surface.",
        "A **cityscape** draws 3D boxes on a plane; a **scatterplot** draws a mark per location; a **map** adds linear and area features; a **contour map** joins points of equal value.",
        "Two-dimensional data can also be probed with **frequency histograms, row and column aggregations and linear probes**, then displayed with 1-D techniques.",
      ],
    },
    {
      id: "u3-3d-dynamic",
      question:
        "Explain the methods used for visualizing three-dimensional data.",
      marks: 6,
      freq: 4,
      papers:
        "Asked in Jun-2025 as a 6-mark question and revised in the updated Unit-3 notes.",
      answer: [
        "Three-dimensional spatial data may be **discrete samples of a continuous phenomenon** or a structure described by vertices, edges and polygons.",
        "**Explicit surfaces** are defined by a vertex/edge/patch list or by parametric equations plus an interconnection grid; step size controls the smoothness.",
        "**Volume data** uses voxels and is visualized by **slicing** (cut plane), **isosurfaces** (surface at a chosen value) or **direct volume rendering**.",
        "Direct volume rendering either projects voxels forward onto the projection plane or casts rays backwards through the volume and accumulates the values.",
        "**Implicit surfaces** are the zero contour of a function; **metaballs** combine density fields and are useful for blending clouds of data into smooth surfaces.",
        "For **dynamic data**, the extra time dimension is handled by animating the view, cycling through time slices, or using flow techniques such as arrow glyphs, streamlines and LIC.",
      ],
    },
    {
      id: "u3-dynamic",
      question:
        "Explain dynamic data and flow visualization techniques, including the definitions used for flow fields.",
      marks: 10,
      freq: 4,
      papers:
        "New in the updated Unit-3 notes and a strong candidate for the 'three-dimensional and dynamic data' question in the Jun-2025 and Dec-2025 papers.",
      sections: [
        {
          heading: "Dynamic data and flow",
          bullets: [
            "**Dynamic data** changes with time; **flow visualization** is the study of methods for displaying the dynamic behaviour of liquids and gases.",
            "The field goes back to Leonardo da Vinci's sketches of sand and wood shavings in flowing liquids.",
            "**Computational fluid dynamics (CFD)** produces a 2-D or 3-D grid of velocity vectors, uniformly or non-uniformly spaced.",
            "The analysis goal is to identify **turbulence, vortices, saddle points and other structure** in the vector field.",
          ],
        },
        {
          heading: "Field variations",
          bullets: [
            "A **static field** has one unchanging velocity field.",
            "A **time-varying field** may have fixed positions with changing vectors, or both changing positions and changing vectors.",
            "The latter type, such as rotating turbine blades or pitching airfoils, is called **unsteady**.",
          ],
        },
        {
          heading: "Definitions",
          bullets: [
            "**Pathline**: the trajectory of a particle released into the flow; it assumes multiple time instances.",
            "**Streakline**: the simultaneous positions of a set of particles continuously released from one or more locations.",
            "**Timeline**: the positions at one instant of a batch of particles released simultaneously.",
            "**Streamline**: a line through the velocity field that is tangent to the field at every point.",
            "**Steady flow**: a field that does not change with time; for steady flow, streaklines, pathlines and streamlines coincide.",
            "**Particle advection**: computing the motion of particles through the field. **Vorticity** is the curl of the velocity field, giving angular velocity magnitude and direction.",
          ],
        },
        {
          heading: "Visualization techniques",
          bullets: [
            "Display the velocity field directly as **displacement vectors with arrow glyphs**, or as magnitude scalars using image, surface or volume techniques.",
            "The number and placement of flow components is crucial: too many cause **occlusion**, too few miss features; interactive density control helps.",
            "**Streamlines** are computed from seed locations through a static field, keeping a continuous tangent to the flow.",
            "**Streamribbons and streamtubes** are planar or solid versions of streamlines; magnitude or vorticity can map to colour, size or twist.",
            "**Streaklines** show a continuous stream of particles, with colour coding to distinguish related points in high-velocity regions.",
            "**Line integral convolution (LIC)** by Cabral and Leedom (1993) uses a random texture field and a vector field to create a dense flow display; each output pixel is a weighted average along a streamline through the corresponding random-field pixel.",
          ],
        },
      ],
      table: {
        head: ["Term", "Meaning"],
        rows: [
          ["Pathline", "trajectory of one particle over time"],
          ["Streakline", "simultaneous positions of continuously released particles"],
          ["Timeline", "positions of a batch released together"],
          ["Streamline", "curve tangent to the velocity field"],
          ["Vorticity", "curl of the velocity field"],
          ["LIC", "texture-based dense flow display"],
        ],
      },
      diagrams: ["flow-viz"],
    },
    {
      id: "u3-combine",
      question:
        "Explain the combination of visualization techniques with suitable examples.",
      marks: 10,
      freq: 3,
      papers:
        "New in the updated Unit-3 notes; combines with the 3-D data question in the Jun-2025 and May-2026 papers.",
      sections: [
        {
          heading: "Why combine techniques",
          bullets: [
            "Each technique has strengths and weaknesses, so a combination can produce results that are the **sum of the strengths** if occlusion is minimised.",
            "Many problems need the simultaneous analysis of multiple data sets, such as weather forecasting with temperature, wind, humidity and surface data.",
          ],
        },
        {
          heading: "Slice plus isosurface",
          bullets: [
            "The **isosurface** conveys surface structure, which slicing cannot show even with animation.",
            "The **slice** gives detailed 2-D information, including regions of uniformity, significant change and nested ranges of a value.",
            "Design requirements are rapid isosurface-value change, control of slice position and orientation, camera control, a carefully chosen colour map and the ability to hide either component or vary opacity.",
          ],
        },
        {
          heading: "Isosurface plus glyphs",
          bullets: [
            "The isosurface shows 3-D surface detail but does not show other data aspects.",
            "**Glyphs** such as arrows display the magnitude and direction of change, either as a gradient in static data or a flow in dynamic data.",
            "Glyphs are placed near the isosurface, a known region of interest, or at separately controlled positions.",
            "Controls include glyph density, glyph size, glyph colour and base positions computed from regions of interest.",
          ],
        },
        {
          heading: "Rubber sheet plus contour lines and colour",
          bullets: [
            "A **rubber sheet** maps a 2-D field to height, creating a virtual landscape that reveals peaks and valleys.",
            "Mapping **colour** to elevation makes widely separated regions of similar height easier to identify.",
            "Superimposing **contour lines** makes the gradient much more apparent.",
            "This is a **redundant mapping** of the same data to several attributes, and each addition improves understanding.",
            "The design lesson is to let users show and hide components so they can build their mental model incrementally.",
          ],
        },
      ],
      diagrams: ["combine-viz"],
    },
    {
      id: "u3-volume",
      question:
        "Explain slicing techniques in visualizing volume data.",
      marks: 2,
      freq: 3,
      papers:
        "Asked in Dec-2025/Jan-2026 as a Part-A short question.",
      answer: [
        "**Volume data** is a 3D grid of voxels; **slicing** cuts the volume with a plane and displays the extracted 2D slice using a 2D spatial visualization method.",
        "The cut plane may be **axis-aligned** (x, y or z) or **arbitrarily oriented**, and the user can move it through the volume.",
        "Slicing is fast and simple, but it shows only one cross-section at a time, so it is often combined with isosurfaces or direct volume rendering.",
      ],
    },
    {
      id: "u3-projection",
      question:
        "Explain map projections and the visual variables used for spatial data.",
      marks: 5,
      freq: 3,
      papers:
        "Asked as a Part-B projection question in Jan-2025 and as a supporting topic in the geospatial questions.",
      answer: [
        "A **map projection** transforms positions on the spherical Earth into positions on a flat map; every projection distorts something, so the designer protects the property that matters most.",
        "By preserved property: **conformal** keeps local angles and shapes, **equal-area** keeps area, **equidistant** keeps distance from chosen points or lines, and **gnomonic** makes great circles straight.",
        "**Azimuthal** projections keep direction from the central point, and **retroazimuthal** projections keep direction from any point to one fixed place.",
        "By the surface used: **cylindrical** for the whole world, **planar/azimuthal** for directions from the centre, and **conic** for mid-latitude regions such as Europe or the USA.",
        "The visual variables for maps are **size, shape, brightness, colour, orientation, spacing (texture), perspective height and arrangement**.",
        "The choice of projection and visual variables must fit the task: finding a place, seeing a pattern or comparing several maps.",
      ],
      table: {
        head: ["Projection", "Keeps correct", "Gives up"],
        rows: [
          ["Conformal", "local angles and shapes", "area"],
          ["Equal-area", "area", "shape or angles"],
          ["Equidistant", "distance from chosen points/lines", "other distances"],
          ["Gnomonic", "great circles as straight lines", "use beyond navigation"],
          ["Azimuthal", "direction from the centre", "other directions"],
          ["Retroazimuthal", "direction to one fixed place", "other directions"],
        ],
      },
      diagrams: ["projections"],
    },
    {
      id: "u3-point",
      question:
        "Discuss the various techniques for visualization of point data related to geospatial data.",
      marks: 10,
      freq: 5,
      papers:
        "Asked in Jan-2025, RKR21 May-2026 and KR20 May/Jun-2026 as a 5- or 10-mark question.",
      sections: [
        {
          heading: "What point data is",
          bullets: [
            "**Point data** is discrete, but it may describe a continuous phenomenon, such as temperature measured at specific weather stations.",
            "The designer must choose whether to show the data as **discrete or continuous** and as **smooth or abrupt**.",
            "Examples are credit-card payments, telephone calls, health statistics, crime data and census demographics.",
          ],
        },
        {
          heading: "Dot maps",
          bullets: [
            "A **dot map** places a symbol or pixel at the location where each event occurred; circles are the most common symbol.",
            "A quantitative value can be mapped to the **size** or **colour** of the symbol.",
            "The main problem is **overplotting**: spatial data is highly non-uniform, so dense areas become a blob while sparse areas are nearly empty.",
            "If size encodes a value, calculated size is not perceived size: the **Ebbinghaus illusion** shows that perception depends on the local neighbourhood, so no global perceptual scaling formula exists.",
          ],
        },
        {
          heading: "PixelMaps",
          bullets: [
            "A **PixelMap** shows point data without aggregation and prevents overlap by repositioning points.",
            "The data is recursively partitioned into four subsets matching four display sub-regions, using a **quadtree-like** structure.",
            "The first points stay at their true positions; overlapping points move to nearby unoccupied pixels while the region boundaries are adjusted.",
            "Every point stays visible even in dense areas, but in very dense areas the final position depends on the **order** of the points in the data set.",
            "The U.S. telephone-call-volume example shows expected daily patterns plus unexpected night-time hot spots over Kansas City and Omaha, which were call centres.",
          ],
        },
        {
          heading: "Other point techniques",
          bullets: [
            "Multiple maps can show several parameters; if all maps use the same visual conventions, local correlations and dependencies become visible.",
            "**Symbol maps** show nominal point data, while dot maps usually show ordinal point data.",
            "Interaction can add zooming, linked views, querying and classification changes, which plain paper maps cannot provide.",
          ],
        },
      ],
      table: {
        head: ["Technique", "Strength", "Weakness"],
        rows: [
          ["Dot map", "simple, exact location, familiar map", "overplotting in dense areas"],
          ["PixelMap", "all points visible, no aggregation", "placement depends on point order"],
          ["Symbol map", "nominal categories are clear", "size ambiguity"],
          ["Multiple linked maps", "compares several parameters", "screen space and eye switching"],
        ],
      },
    },
    {
      id: "u3-line",
      question:
        "Discuss the different techniques used for the visualization of line data in geospatial contexts, highlighting their significance and applications.",
      marks: 10,
      freq: 5,
      papers:
        "Asked in RKR21 May-2026 and repeated as a 5-mark line-based comparison in Dec-2025/Jan-2026 and Jan-2025.",
      sections: [
        {
          heading: "Line data and its encoding",
          bullets: [
            "Line data represents linear features with **length but no width**, drawn as line segments joining latitude–longitude pairs.",
            "Values can be shown by the **width, pattern, colour or a label** of the line; endpoints and intersections can vary in size, shape and colour.",
            "Lines need not be straight: **polylines** or smooth curves reduce clutter.",
          ],
        },
        {
          heading: "Network maps",
          bullets: [
            "**Network maps** show how components are connected so users can understand the structure and behaviour of a network.",
            "**Eick and Wills** used aggregation, hierarchical information, node positioning and linked displays; colour and shape show node properties and colour and width show link information.",
            "**NCSA** used 3D graphics to animate Internet traffic through the network backbone.",
            "**SeeNet** (Becker, Eick and Wilks) adds a link matrix that gives equal visual importance to all connections.",
            "**SWIFT-3D** by AT&T combines statistical graphics, pixel overviews, interactive 3D network maps and drag-and-drop querying.",
          ],
        },
        {
          heading: "Flow maps",
          bullets: [
            "A **flow map** uses curved lines to reduce the overlap of straight edges.",
            "The **Stanford flow map** uses graph layout that reduces edge crossings while keeping relative node positions; hierarchical clustering of nodes and flows decides how flows are merged and rerouted.",
            "Examples are tourist flows in Berlin, migration from California, and the much clearer Stanford output compared with earlier computer-generated flow maps.",
          ],
        },
        {
          heading: "Edge bundling",
          bullets: [
            "**Edge bundling** (Danny Holten) requires a hierarchy on the nodes and connects edges with **B-splines**.",
            "Edges that pass through the **root** bend the most; edges inside the same sub-hierarchy bend only slightly.",
            "Bundling greatly reduces visual clutter and works on maps, tree diagrams, circular trees and treemaps.",
            "The notes show IP traffic from external nodes to internal treemap nodes; the bundled version is far clearer than the straight-line version.",
          ],
        },
      ],
      note:
        "The exam line: width/pattern/colour/label for values; network maps for connectivity; flow maps and edge bundling use curves; bundling bends root-crossing edges most.",
    },
    {
      id: "u3-area",
      question:
        "Explain with respect to geospatial data: (a) choropleth maps and (b) cartograms.",
      marks: 10,
      freq: 4,
      papers:
        "Asked directly in the Dec-2025/Jan-2026 papers and as part of the area-data comparison in several other papers.",
      sections: [
        {
          heading: "Thematic maps",
          bullets: [
            "Area data belongs to whole regions and is shown with **thematic maps**.",
            "A **choropleth map** shades each fixed region by its value and assumes the value is evenly spread inside the region.",
            "A **dasymetric map** is used when the value is not even; it creates areas from the attribute itself rather than from fixed regions.",
            "An **isarithmic map** uses contours of a continuous phenomenon such as temperature or elevation.",
            "If the contours come from measurements at specific points they are **isometric**; if they come from regional averages at centroids they are **isopleth**.",
          ],
        },
        {
          heading: "The choropleth problem",
          bullets: [
            "Interesting values are often concentrated in **dense areas with small polygons**, which are hard to see.",
            "Less interesting values are spread over **sparse areas with large polygons**, which dominate the picture.",
            "So a choropleth tends to highlight large areas that may be less important, for example the thinly populated states in a U.S. census map.",
            "The two key design decisions are the **normalisation** of the data and the **colour or greyscale mapping**.",
          ],
        },
        {
          heading: "Cartograms",
          bullets: [
            "A **cartogram** distorts geography by resizing regions according to a statistical value, avoiding the choropleth bias.",
            "Applications are population demographics, election results and epidemiology.",
            "Cartograms cannot satisfy both shape and area perfectly, so generating one is an **optimisation problem**.",
          ],
        },
        {
          heading: "The four cartogram types",
          bullets: [
            "**Noncontinuous**: area and shape are exact, but topology is not preserved because scaled polygons are drawn inside the original regions.",
            "**Noncontiguous**: area is perfect and shape is mostly kept, but topology is highly relaxed, so the result is harder to see as a map.",
            "**Circular**: each region becomes a circle, so shape is ignored completely and area and topology are relaxed.",
            "**Continuous**: topology is preserved perfectly, while area and shape are relaxed; it is hard to generate but looks most like the original map.",
          ],
        },
      ],
      table: {
        head: ["Type", "Area", "Shape", "Topology"],
        rows: [
          ["Noncontinuous", "exact", "exact", "not preserved"],
          ["Noncontiguous", "perfect", "mostly kept", "highly relaxed"],
          ["Circular", "relaxed", "ignored", "relaxed"],
          ["Continuous", "relaxed", "relaxed", "perfect"],
        ],
      },
      diagrams: ["geo-types"],
      note:
        "A complete answer defines the map, gives the choropleth bias, then lists all four cartogram types with the area/shape/topology trade-off.",
    },
    {
      id: "u3-geo-compare",
      question:
        "Compare visualization methods for point data and area data in the case of geospatial data.",
      marks: 10,
      freq: 4,
      papers:
        "Asked as a 10-mark comparison in the KR20 May/Jun-2026 and RKR21 May-2026 papers.",
      sections: [
        {
          heading: "The data",
          bullets: [
            "**Point data** is 0-D: each record is one location plus descriptors, such as a city, a call or a crime.",
            "**Area data** is 2-D: each record is a whole region plus a value, such as a state, district or lake.",
          ],
        },
        {
          heading: "Methods for point data",
          bullets: [
            "**Dot maps** place a symbol at each location, with size or colour for a value.",
            "**Symbol maps** distinguish nominal categories.",
            "**PixelMaps** move overlapping points to nearby free pixels to keep every point visible.",
            "Point maps are strong for exact locations, clusters and local density; they suffer from overplotting.",
          ],
        },
        {
          heading: "Methods for area data",
          bullets: [
            "**Choropleth maps** shade fixed regions by value but assume an even distribution inside each region.",
            "**Dasymetric maps** create regions from the attribute when the assumption fails.",
            "**Isarithmic maps** use contours for continuous surfaces; **cartograms** resize regions by value.",
            "Area maps are strong for regional aggregates but can hide within-region variation and can let large sparse regions dominate.",
          ],
        },
        {
          heading: "The comparison",
          bullets: [
            "Point methods preserve **exact location and individual events**; area methods aggregate to regions and lose the individual event.",
            "Point methods struggle with **overplotting**; area methods struggle with the **modifiable area unit problem** and the large-region bias.",
            "A dot map can become a choropleth by counting dots inside areas, and a choropleth can become a cartogram by resizing areas; the three are a progression from detail to aggregate.",
            "The choice depends on the question: where did it happen (point), how many per region (choropleth), or which region matters most (cartogram).",
          ],
        },
      ],
      table: {
        head: ["Aspect", "Point data", "Area data"],
        rows: [
          ["Dimension", "0-D", "2-D"],
          ["Typical display", "dot map, symbol map, PixelMap", "choropleth, dasymetric, cartogram"],
          ["Preserves", "individual locations", "regional aggregates"],
          ["Main problem", "overplotting", "aggregation bias and area dependence"],
        ],
      },
    },
    {
      id: "u3-geo-issues",
      question:
        "What are the different issues in geospatial data visualization? Explain them.",
      marks: 10,
      freq: 4,
      papers:
        "Asked in RKR21 May-2026 and as a supporting Part-B question in other DVT papers.",
      sections: [
        {
          heading: "Aggregation and the area unit",
          bullets: [
            "Results depend heavily on the **areas chosen for aggregation**, as the London cholera maps show.",
            "The same data can produce very different patterns when the boundaries change, which is the modifiable-area-unit problem.",
          ],
        },
        {
          heading: "Symbol and size perception",
          bullets: [
            "Calculated symbol size is not perceived size; the **Ebbinghaus illusion** makes the same circle look larger or smaller depending on its neighbours.",
            "Because perception is local, there is **no global formula for perceptual scaling**.",
          ],
        },
        {
          heading: "Map projection",
          bullets: [
            "Every projection distorts shape, area, distance or direction, so the choice of projection changes the message.",
            "The projection must match the task and the region: conic for mid-latitudes, planar for direction from a centre, cylindrical for the whole world.",
          ],
        },
        {
          heading: "Data quality and scale",
          bullets: [
            "Spatial data is highly non-uniform, with dense clusters and empty regions, so overplotting and sparse regions appear together.",
            "Missing values, geocoding errors, inconsistent boundaries and mixed time periods all distort the map.",
          ],
        },
        {
          heading: "Generalisation, labelling and interaction",
          bullets: [
            "**Map generalisation** must remove detail without losing objects of interest.",
            "**Map labelling** is a hard optimisation problem because labels must not overlap.",
            "Interactive **GIS** adds zoom, query, layers, linked maps and classification changes, which paper maps cannot provide.",
          ],
        },
      ],
      note:
        "Five issue families: aggregation, perception, projection, data quality/scale and cartographic production. Add one concrete example to each.",
    },
    {
      id: "u3-generalization",
      question:
        "Explain map generalisation, map labelling and GIS in geospatial visualization.",
      marks: 5,
      freq: 2,
      papers:
        "Asked as a short-note or supporting Part-B question in the geospatial papers.",
      answer: [
        "**Map generalisation** selects and abstracts map information so that a small-scale map can be derived from a more detailed large-scale map.",
        "**Points** are removed or combined if they are not relevant or not separately visible; **lines** lose small bends or are collapsed to centrelines; **polygons** lose bends but keep their essential shape and may merge adjacent areas.",
        "The goal is that objects of interest remain **visible and recognisable**, even at the cost of detail.",
        "**Map labelling** places text or symbols near points, lines and polygons; most algorithms use rules followed by optimisation such as local search, greedy search, simulated annealing or a genetic algorithm.",
        "**Label-EZ** by MapText and **Maplex** by ESRI are named labelling tools.",
        "A **GIS** supports interactive queries, comparison and editing of spatial data in layers, and presentation of results; geospatial visualization is a part of GIS.",
        "Web APIs such as Google Maps have made fast interactive map tools available to a wide audience.",
      ],
    },
  ],
};
