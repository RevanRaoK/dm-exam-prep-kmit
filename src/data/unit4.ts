import type { Unit } from "./types";

export const unit4: Unit = {
  id: "unit4",
  roman: "IV",
  title: "Unit IV · Multivariate, Text & Document Visualization",
  subtitle:
    "Point-, line- and region-based techniques, glyphs and dense pixels, trees and arbitrary graphs, then text representation, the vector space model, Zipf's law, single-document views, document collections and extended text visualization.",
  color: "var(--v-amber)",
  questions: [
    {
      id: "u4-scatter",
      question:
        "Explain scatterplots and scatterplot matrices in the context of point-based techniques for visualizing multivariate data.",
      marks: 10,
      freq: 5,
      papers:
        "Asked in Dec-2025/Jan-2026, RKR21 May-2026 and the KR20 May/Jun-2026 papers.",
      sections: [
        {
          heading: "Point-based techniques",
          bullets: [
            "Point plots project records from an **n-dimensional data space** to a **k-dimensional display space**, so each record becomes a k-dimensional point.",
            "A mark is drawn at that point; point plots can show individual records or summary records.",
            "**Scatterplots** are among the oldest and most used techniques because people judge **relative position** very well.",
          ],
        },
        {
          heading: "Scatterplot matrices",
          bullets: [
            "A **scatterplot matrix** is a grid of scatterplots with **N² cells** for N dimensions.",
            "Every pairwise plot appears twice, rotated by 90°, so the matrix is symmetric about the diagonal.",
            "The dimension order is the same for rows and columns, and the diagonal usually shows the **dimension names** or a histogram of that dimension.",
            "The matrix lets an analyst scan all pairwise relationships in one view.",
          ],
        },
        {
          heading: "Handling high dimensionality",
          bullets: [
            "**Dimension subsetting**: let the user or an algorithm choose the most useful dimensions.",
            "**Dimension reduction**: use PCA or MDS to project to fewer dimensions while preserving relationships.",
            "**Dimension embedding**: map extra dimensions to colour, size or shape, up to a limited number.",
            "**Multiple displays**: show several plots, superimposed or juxtaposed, each containing some dimensions; the scatterplot matrix is the standard example.",
          ],
        },
        {
          heading: "Strengths and limits",
          bullets: [
            "Scatterplots reveal **trends, clusters, correlations, gaps and outliers** quickly.",
            "They show association, not causation; a moved axis can exaggerate a trend.",
            "Many records cause **overplotting**, and a large matrix becomes visually overwhelming, so interaction and linked selection are needed.",
          ],
        },
      ],
      table: {
        head: ["N dimensions", "Cells in matrix", "Unique pairwise plots"],
        rows: [
          ["2", "4", "1"],
          ["3", "9", "3"],
          ["4", "16", "6"],
          ["5", "25", "10"],
        ],
      },
      walkthrough: "scatter",
      diagrams: ["scatter-matrix"],
    },
    {
      id: "u4-scatter-matrix",
      question:
        "How many cells does a scatterplot matrix have for N dimensions, and why is every pair shown twice?",
      marks: 5,
      freq: 3,
      papers: "Asked as a Part-B explanation in the multivariate visualization questions.",
      answer: [
        "For N dimensions the matrix has **N² cells**, because the grid has N rows and N columns.",
        "Cell (i, j) plots dimension j on the horizontal axis and dimension i on the vertical axis.",
        "Cell (j, i) plots the same two dimensions with the axes exchanged, which is the same plot rotated by 90°.",
        "The matrix is therefore **symmetric about the diagonal**, and every unique pair appears exactly twice.",
        "The N diagonal cells would plot a variable against itself, so they show the **dimension name** or a histogram instead.",
        "The number of unique pairwise plots is **N(N−1)/2**; for N = 4 that is 6 plots in 16 cells.",
      ],
      formula:
        "Cells = N²\nUnique pairwise plots = N(N − 1) / 2\nExample for N = 4: cells = 16, unique plots = 6",
      diagrams: ["scatter-matrix"],
    },
    {
      id: "u4-mds",
      question: "Explain force-based methods and multidimensional scaling (MDS).",
      marks: 5,
      freq: 3,
      papers: "Asked in the multivariate data questions in Jan-2025 and May-2026.",
      answer: [
        "Projecting high-dimensional points into 2D or 3D should preserve the **relationships** of the original data, but this is not always possible and can create **artifacts**.",
        "**MDS** is a dimension-reduction method that places points in K dimensions so their distances match the original similarities.",
        "Step 1: build an **M × M matrix Ds** of similarities between every pair of records, for example Euclidean distance.",
        "Step 2: choose K (usually 1–3) and create an **M × K matrix L** of initial locations, randomly or from PCA.",
        "Step 3: compute **Ls**, the pairwise similarities between the current points, and the **stress S**, which measures the difference between Ds and Ls.",
        "Step 4: if stress is small or unchanged, stop; otherwise shift each point in the direction that lowers stress, then repeat.",
        "A force analogy explains it: points are joined by springs and repulsion, and the layout settles when the energy is low.",
        "The weakness is a **local minimum**; an occasional random jump or several random starts help escape it.",
      ],
      formula:
        "Ds = M × M matrix of data similarities\nL = M × K matrix of display locations\nLs = M × M matrix of display similarities\nS = stress(Ds, Ls) → minimise S",
    },
    {
      id: "u4-line",
      question:
        "Compare the line-based techniques used in the visualization of multivariate data.",
      marks: 10,
      freq: 4,
      papers:
        "Asked in Dec-2025/Jan-2026 and RKR21 May-2026 as a 5-mark comparison and in other papers as part of the multivariate question.",
      sections: [
        {
          heading: "The idea of line-based techniques",
          bullets: [
            "Point methods draw each value as a small mark; **line-based** methods join the points of a record or a dimension with lines.",
            "The lines expose **slope, curvature and crossings**, which marks alone do not show.",
          ],
        },
        {
          heading: "Line graphs",
          bullets: [
            "A **line graph** is univariate: the vertical axis is the value range and the horizontal axis is an ordering of the records, often time.",
            "Several variables can be superimposed on the same axes using colour, line style or width.",
            "With many variables the lines overlap; a **stacked line chart** reduces occlusion but makes exact values harder to read, and **sorting records** by one dimension exposes patterns.",
          ],
        },
        {
          heading: "Parallel coordinates",
          bullets: [
            "**Parallel coordinates** (Inselberg, 1985) use **parallel vertical axes**, one per dimension, instead of orthogonal axes.",
            "Each record is a **polyline** crossing every axis at a height proportional to its value.",
            "A bundle of lines following the same path is a group of similar records; a line that runs away is an outlier.",
            "The order of the axes strongly changes what patterns are visible.",
          ],
        },
        {
          heading: "Andrews curves",
          bullets: [
            "**Andrews curves** (David F. Andrews, 1972) turn a record D = (d1, …, dN) into one curve f(t).",
            "f(t) = d1/√2 + d2 sin t + d3 cos t + d4 sin 2t + d5 cos 2t + …",
            "Similar records produce similar curves, and an outlier produces a curve that stands apart.",
            "The order of the dimensions matters, because the first dimensions sit on the slowest waves.",
          ],
        },
        {
          heading: "Radial axis techniques",
          bullets: [
            "Radial charts are the circular equivalents of ordinary charts and suit **cyclic** data such as months, hours or days.",
            "A **circular line graph** draws a line offset from a circular base; a long graph can be cut and nested on rings of different radii.",
            "A **radar** or **star** graph places one axis per variable around a centre; circular bar charts, circular area graphs and circular bar graphs are related variants.",
          ],
        },
      ],
      table: {
        head: ["Technique", "One line is", "Best for"],
        rows: [
          ["Line graph", "one dimension over an ordering", "time series, trends"],
          ["Parallel coordinates", "one record across all axes", "many dimensions, groups, outliers"],
          ["Andrews curves", "one record as a wave", "group separation, outlier detection"],
          ["Radial chart", "a circular version of a chart", "cyclic events"],
        ],
      },
      walkthrough: "pcp",
    },
    {
      id: "u4-pcp",
      question: "Explain parallel coordinates with a neat diagram.",
      marks: 5,
      freq: 3,
      papers: "Asked as a short-note question in the multivariate data papers.",
      answer: [
        "**Parallel coordinates** were introduced by **Inselberg in 1985** and are also written **||-coords** or **PCP**.",
        "The axes are parallel, not at right angles: evenly spaced vertical lines, one per dimension.",
        "Each data record is a **polyline** that crosses every axis at a height proportional to its value for that dimension.",
        "It can be seen as a line graph after rotating the data: values of one **record** are linked, instead of values of one dimension.",
        "Groups appear as bundles of roughly parallel lines, and outliers appear as lines that depart from the bundle.",
        "Reordering the axes can reveal or hide correlations, so axis order is an important interaction.",
      ],
      formula:
        "For record i: point on axis j = (x_j, Normalize(value[i][j]))\nJoin the points (x_1, y_1) → (x_2, y_2) → … → (x_N, y_N)",
      walkthrough: "pcp",
    },
    {
      id: "u4-andrews",
      question: "Explain Andrews curves with the formula and the effect of dimension order.",
      marks: 5,
      freq: 3,
      papers: "Asked in the line-based technique questions and as a short note.",
      answer: [
        "**Andrews curves** were developed by **David F. Andrews in 1972**.",
        "Each multivariate record D = (d1, d2, …, dN) is mapped to one curve f(t), so N numbers become one smooth line.",
        "The formula is **f(t) = d1/√2 + d2 sin t + d3 cos t + d4 sin 2t + d5 cos 2t + …**",
        "For odd N the last term is dN cos((N−1)t/2); for even N it is dN sin(Nt/2).",
        "Similar records produce similar curves, and an outlier produces a curve that stands apart.",
        "The dimension order matters: the first dimension sits on the slowest wave and has the largest influence, so reordering can make outliers easier or harder to see.",
      ],
      formula:
        "f(t) = d1/√2 + d2 sin t + d3 cos t + d4 sin 2t + d5 cos 2t + …\nOdd N: last term dN cos((N−1)t/2)\nEven N: last term dN sin(Nt/2)",
    },
    {
      id: "u4-radial",
      question: "Explain radial axis techniques and circular charts with examples.",
      marks: 3,
      freq: 2,
      papers: "Asked as a short-answer definition in the multivariate visualization papers.",
      answer: [
        "Radial axis techniques are the **circular equivalents** of charts that use horizontal and vertical axes.",
        "A **circular line graph** draws the plotted line offset from a circular base; a long graph can be cut into equal segments and placed on rings of different radii to study **cyclic events**.",
        "A **radar** or **star** graph gives each variable its own axis spreading from the centre and joins the values into a star-like shape.",
        "A **circular bar chart** has straight bars on a curved base; a **circular bar graph** has curved bars on a straight base.",
        "A **circular area graph** fills the area under a circular line.",
      ],
    },
    {
      id: "u4-region",
      question:
        "Describe region-based techniques in multivariate data visualization, including bar charts, histograms, cityscapes and heatmaps.",
      marks: 10,
      freq: 4,
      papers:
        "Asked as a Part-A short question and a Part-B region-based question in the Dec-2025/Jan-2026 and RKR21 May-2026 papers.",
      sections: [
        {
          heading: "The idea",
          bullets: [
            "In **region-based** techniques, filled polygons convey values through their size, shape or colour.",
            "People judge **area** less accurately than **length**, but region techniques remain useful for summaries and distributions.",
            "Pie charts and bar charts were first made for one variable; multivariate versions add stacking, adjacency or colour.",
          ],
        },
        {
          heading: "Bar charts",
          bullets: [
            "A **bar chart** uses rectangular bars, and people compare bar **length** very accurately.",
            "Horizontal bars make long text labels easier; angled labels help vertical bars.",
            "**Stacked bars** put shorter bars on top of each other, spreading information in two directions and saving space.",
            "**Adjacent bars** share a baseline and are easier to compare, but they need more space.",
          ],
        },
        {
          heading: "Histograms and cityscapes",
          bullets: [
            "A **histogram** shows how many data values fall in each sub-range; the number of bars and the break points are the key decisions.",
            "**Cityscapes** are 3D bar graphs: two dimensions place each bar on a grid and other variables control its size and colour.",
            "If every grid cell is filled, the cityscape is called a **3D histogram**.",
            "3D occlusion is reduced by **rotating** the view, making bars **thinner** and varying **opacity**.",
          ],
        },
        {
          heading: "Tables and heatmaps",
          bullets: [
            "Multivariate data often lives in tables, so some techniques copy the table layout.",
            "A **heatmap** replaces numbers with **colour**: all values are mapped into one normalised colour space and each becomes a coloured square.",
            "Users can change the colour map or stretch and compress colours to emphasise or hide values.",
            "Heatmaps scale well to large tables but depend on a correct colour mapping and a clear colour key.",
          ],
        },
      ],
      table: {
        head: ["Technique", "Encodes value by", "Best for"],
        rows: [
          ["Bar chart", "length", "comparing categories"],
          ["Histogram", "bar height over sub-ranges", "distribution shape"],
          ["Stacked bar", "component lengths", "parts of a whole"],
          ["Cityscape", "3D height and colour", "two keys plus a value"],
          ["Heatmap", "colour", "large numeric tables"],
        ],
      },
    },
    {
      id: "u4-dimstack",
      question: "Explain dimensional stacking with a neat diagram.",
      marks: 5,
      freq: 2,
      papers: "Asked as a definition and diagram question in the multivariate visualization papers.",
      answer: [
        "**Dimensional stacking** (LeBlanc et al.) maps data from a discrete N-dimensional space to a 2D image while minimising occlusion and preserving much spatial information.",
        "Pick two dimensions and draw them as a **grid** of rows and columns.",
        "Inside **each cell**, draw a smaller grid for the next two dimensions, and repeat until every dimension is used.",
        "Each data point lands in exactly **one unique spot**, and the dependent variable sets the **colour or intensity** of the smallest cell.",
        "Each dimension changes at its own rate, like the digits of an **odometer**: the innermost dimensions change fastest, the outermost slowest.",
        "Which dimensions sit on the outside matters; the most important dimensions should be placed on the outer levels.",
      ],
      note:
        "Draw a large grid with one cell expanded into a smaller grid, and colour the smallest cells by the dependent variable.",
    },
    {
      id: "u4-glyph",
      question:
        "Explain glyphs and icons, the three data-to-attribute mappings, and the ordering and layout of glyphs.",
      marks: 5,
      freq: 3,
      papers: "Asked as Part-A short notes and as a Part-B explanation of glyph techniques.",
      answer: [
        "A **glyph** is a visual representation of a piece of data where a graphical entity and its attributes are controlled by one or more data attributes.",
        "The definition is broad: markers in a scatterplot, bars in a histogram and even a whole line plot can count as glyphs; glyphs are a hybrid of point, line and region techniques.",
        "Graphical attributes available include **position, size, shape, orientation, colour, texture, line style and motion**.",
        "**One-to-one** mapping gives each data value a different visual feature, ideally using intuitive pairs such as colour for temperature and direction for flow.",
        "**One-to-many** mapping shows the same value with several cues (redundant mapping), which reduces misreading.",
        "**Many-to-one** mapping makes several values share one visual attribute, such as the heights of bars inside one glyph, to compare values within a record.",
        "Dimension order matters: there are **N!** possible orderings. Strategies are by correlation, to promote symmetry, sorted by one record, or manual/domain-based.",
        "Layout strategies are **uniform** (equal spacing, fills the screen), **data-driven** (data, PCA or MDS positions) and **structure-driven** (cyclic or hierarchical structure positions).",
      ],
    },
    {
      id: "u4-dense",
      question: "Explain dense pixel displays.",
      marks: 5,
      freq: 3,
      papers: "Asked as a 2-mark short note and a 5-mark explanation in the multivariate papers.",
      answer: [
        "**Dense pixel displays**, also called **pixel-oriented techniques**, were pioneered by **Keim** and colleagues.",
        "Each data value is mapped to the colour of an **individual pixel**, and a filled polygon is created for each data dimension.",
        "They are a **hybrid** of point-based and region-based methods.",
        "They make maximal use of the screen, so data sets with **millions of values** can fit on one screen.",
        "The two remaining design choices are the **layout of the records** (row by row, snake or spiral) and their **ordering**.",
        "Changing the colour map can reveal new features, but the display depends heavily on pixel order and resolution.",
      ],
    },
    {
      id: "u4-trees",
      question:
        "Differentiate space-filling methods from non-space-filling methods for displaying hierarchical structures, with examples.",
      marks: 10,
      freq: 4,
      papers:
        "Asked in Jun-2025 as a 10-mark tree question and in RKR21 May-2026 as a 5-mark comparison.",
      sections: [
        {
          heading: "Why trees matter",
          bullets: [
            "**Trees or hierarchies** are one of the most common structures for relational information.",
            "The two algorithm classes are **space-filling** and **non-space-filling**.",
          ],
        },
        {
          heading: "Space-filling methods",
          bullets: [
            "Space-filling methods use the display space fully and show relationships by **juxtaposition** instead of drawing edges.",
            "The two common approaches are **rectangular** and **radial** layouts.",
            "A **treemap** divides a rectangle repeatedly into slices, alternating horizontal and vertical, based on subtree sizes.",
            "A **sunburst** places the root at the centre and uses nested rings for layers; each ring is divided by the number of nodes at that level.",
            "In both, the number of **leaf nodes** in a subtree decides how much space it receives.",
          ],
        },
        {
          heading: "Non-space-filling methods",
          bullets: [
            "The **node-link diagram** is the most common tree drawing: organisation charts, family trees and tournament pairings.",
            "Drawing difficulty depends mainly on the **fan-out** (number of children per parent) and the **depth** (furthest node from the root).",
            "Trees limited in fan-out or depth, such as binary trees or trees with three or four levels, are easier to draw.",
            "Node-link drawings show the parent–child relation explicitly but waste space and suffer from edge crossings when the tree is large.",
          ],
        },
        {
          heading: "Comparison",
          bullets: [
            "Space-filling views show **size and proportion** well but hide edges and exact depth.",
            "Node-link views show **structure and ancestry** well but scale poorly in width and depth.",
            "The choice depends on the task: compare subtree sizes (treemap), see hierarchy levels (sunburst) or follow parent links (node-link).",
          ],
        },
      ],
      table: {
        head: ["Method", "Space use", "Shows relations by", "Examples"],
        rows: [
          ["Space-filling", "full", "juxtaposition / nesting", "treemap, sunburst"],
          ["Non-space-filling", "partial", "explicit edges", "node-link diagram"],
        ],
      },
      walkthrough: "treemap",
    },
    {
      id: "u4-graphs",
      question:
        "How do you display arbitrary graphs and networks? Explain force-directed layout and adjacency matrices.",
      marks: 10,
      freq: 4,
      papers:
        "Asked in Dec-2025/Jan-2026 and RKR21 May-2026 as a 4- or 5-mark question and included in the multivariate long questions.",
      sections: [
        {
          heading: "Trees versus graphs",
          bullets: [
            "A **tree** is a connected, unweighted, acyclic graph, so it is one special kind of graph.",
            "General graphs may have weighted edges, cycles, directed or undirected edges, or disconnected components.",
            "For an arbitrary graph the notes give two approaches: **node-link diagrams** and **matrix displays**.",
          ],
        },
        {
          heading: "Force-directed node-link drawing",
          bullets: [
            "Force-directed methods use a **spring analogy** for the links and refine node positions until the **energy or stress** is minimal.",
            "Connected nodes feel a spring force fij; all nodes also feel an inverse-square electrical repulsion gij that prevents crowding.",
            "Each step sums all forces on each node and moves the node in proportion; start with large moves and reduce them to avoid oscillation.",
            "It can end in a local minimum, so run it several times from different random starts and keep the best drawing.",
          ],
        },
        {
          heading: "Adjacency matrix",
          bullets: [
            "An **adjacency matrix** is an N × N grid where position (i, j) shows whether nodes i and j are linked; it may be binary or hold a weight.",
            "It removes **crossing edges**, the biggest problem of node-link drawings, but it does not scale to thousands of nodes.",
            "**Bertin** showed that reordering rows and columns reveals structure such as clusters and cliques.",
          ],
        },
        {
          heading: "Other graph ideas",
          bullets: [
            "**Planar graph drawing** assumes no edges cross; a planar graph with n vertices has at most **3n − 6 edges**.",
            "Crossings can be removed by adding dummy nodes and routing edges around them.",
            "**Complex networks** often show a small-world appearance, a scale-free power-law degree distribution and a high clustering coefficient.",
          ],
        },
      ],
      formula:
        "Spring force: fij = kij × (d(i,j) − sij) × (xi − xj) / d(i,j)\nRepulsion: gij = (rij / d(i,j)²) × (xi − xj) / d(i,j)\nPlanar graph edge bound: E ≤ 3n − 6",
      diagrams: ["mv-taxonomy"],
    },
    {
      id: "u4-text-levels",
      question:
        "What are the different levels of text representation? Explain the lexical, syntactic and semantic levels.",
      marks: 5,
      freq: 4,
      papers:
        "Asked in Jan-2025, Jun-2025, RKR21 May-2026 and May-2026.",
      answer: [
        "A **corpus** is a collection of documents; its objects may be words, sentences, paragraphs, documents or collections of documents.",
        "Text is only loosely structured but has **metadata** such as author, creation date, modification date and size.",
        "The **lexical level** turns a string of characters into a sequence of **tokens** using rules, such as finite state machines defined by regular expressions.",
        "Tokens can be characters, n-grams, words, word stems, lexemes or phrases; filtering removes stop words and stemming merges variants.",
        "The **syntactic level** identifies and tags the function of each token: noun, adjective, conjunction, sentence position, plus richer tags such as date, money, place, person, organisation and time.",
        "Extracting those richer tags is **named entity recognition (NER)**.",
        "The **semantic level** extracts the meaning and relationships between the pieces found at the syntactic level, aiming at an interpretation of the full text.",
      ],
    },
    {
      id: "u4-vsm",
      question:
        "Explain the vector space model used in text visualization with suitable examples.",
      marks: 10,
      freq: 4,
      papers:
        "Asked in RKR21 May-2026, Jun-2025 and the KR20 May/Jun-2026 papers.",
      sections: [
        {
          heading: "Term vectors",
          bullets: [
            "A **term vector** is a vector for a paragraph, document or collection, with one dimension per word holding that word's **weight**.",
            "Computing term vectors is an essential step for document analysis and visualization.",
            "Noise is reduced by **filtering stop words** such as 'the' and 'a' and by **stemming** words that share a stem.",
          ],
        },
        {
          heading: "Counting terms",
          bullets: [
            "The algorithm walks the token stream, ignores stop words and increments a hash-table count for each remaining term.",
            "The notes' example: a paragraph on genetically engineered food has **98 string tokens**, **74 terms** and **48 terms** after stop-word removal.",
          ],
        },
        {
          heading: "tf-idf weighting",
          bullets: [
            "**Tf(w)** is the number of times word w occurs in the document; **Df(w)** is the number of documents containing w; **N** is the total number of documents.",
            "**TfIdf(w) = Tf(w) × log(N / Df(w))**.",
            "A larger Tf makes the word more important in this document; a smaller Df makes it more important because it separates documents.",
            "A word that appears in every document has Df = N, so log(1) = 0 and its weight is **zero**.",
          ],
        },
        {
          heading: "Tasks using the model",
          bullets: [
            "With a distance metric, the model finds documents **similar to a given document**, documents relevant to a collection or documents relevant to a query.",
            "The document whose term vector is most similar to the target vector is returned as the best match.",
            "The visualization pipeline fits: get the corpus, transform it into vectors, run similarity or clustering, then draw the result.",
          ],
        },
      ],
      formula:
        "TfIdf(w) = Tf(w) × log( N / Df(w) )\nTf(w) = occurrences of w in this document\nDf(w) = number of documents containing w\nN = total number of documents",
    },
    {
      id: "u4-zipf",
      question: "Demonstrate Zipf's law and describe its importance.",
      marks: 5,
      freq: 3,
      papers: "Asked in Jan-2025 and RKR21 May-2026.",
      answer: [
        "Many large data sets follow a **power law** rather than a normal or uniform distribution.",
        "**Pareto** observed that a company's revenue is inversely proportional to its rank, giving the **80-20 rule**.",
        "**George Kingsley Zipf** found the same pattern for words: the frequency of a word is inversely proportional to its rank in the frequency table.",
        "The formula is **frequency ∝ 1 / rank**; on a log-log plot it is a straight line with slope **−1**.",
        "A small number of words describes most of the key concepts in a document, so text summarisation can work with just a few words.",
        "The distribution is visible in large collections such as Wikipedia and explains why word clouds and frequency-based summaries are useful.",
      ],
      formula:
        "frequency ∝ 1 / rank\nLog-log plot: straight line with slope −1\nExample: if rank 1 occurs 1000 times, rank 4 occurs about 250 times",
    },
    {
      id: "u4-single-doc",
      question:
        "Illustrate the different types of visualization of a single document, including word clouds, word trees, TextArc, arc diagrams and fingerprinting.",
      marks: 10,
      freq: 5,
      papers:
        "Asked in Jan-2025, Dec-2025/Jan-2026, RKR21 May-2026 and the KR20 May/Jun-2026 papers.",
      sections: [
        {
          heading: "Word clouds and tag clouds",
          bullets: [
            "A **word cloud** or **tag cloud** shows the raw tokens of one document, with the **size** and often the darkness of each word proportional to its frequency.",
            "Typical steps: split into tokens, remove stop words, count, then size each word by its count.",
            "Examples named in the notes are **Wordle** and **tagCrowd**.",
            "A word cloud is compact and immediately shows the main vocabulary, but it loses word order and context.",
          ],
        },
        {
          heading: "Word trees",
          bullets: [
            "A **word tree** shows both **term frequency and context**.",
            "The **root** is a word or phrase chosen by the user; the **branches** are the different contexts in which it appears.",
            "Size shows the frequency of the term or phrase.",
            "The notes show a word tree made with **ManyEyes**.",
          ],
        },
        {
          heading: "TextArc",
          bullets: [
            "**TextArc** shows how terms relate to the lines of text where they appear.",
            "Every word of the text is drawn **in order around an ellipse** as small lines, with frequent words larger and brighter.",
            "Frequent words are placed **inside** the ellipse, pulled toward the places where they occur on the circle, similar to **RadViz**.",
            "Words spread evenly through the text sit in the centre; words found only in one section sit near the edge.",
            "The user can probe and animate the 'reading' of the text.",
          ],
        },
        {
          heading: "Arc diagrams",
          bullets: [
            "**Arc diagrams** show **repetition** in text or any sequence.",
            "Repeated subsequences are found and joined by **semicircular arcs**.",
            "The **thickness** of an arc is the **length** of the repeated piece; the **height** is the **distance** between the two copies.",
          ],
        },
        {
          heading: "Literature fingerprinting",
          bullets: [
            "Normally a text gets one feature value or vector; **literature fingerprinting** computes a **sequence of feature values** along the text.",
            "The sequence is shown as a characteristic fingerprint, so the user can see how style changes inside the document.",
            "Structural information such as chapters and paragraphs allows viewing at different resolutions.",
            "Its main application is **authorship attribution**, where it tests how well style measures separate authors.",
          ],
        },
      ],
      table: {
        head: ["Technique", "What it shows", "Weakness"],
        rows: [
          ["Word cloud", "word frequency", "no order or context"],
          ["Word tree", "frequency + context", "only around one root"],
          ["TextArc", "word position in the text", "hard to read exact values"],
          ["Arc diagram", "repetition and distance", "limited to repeated sequences"],
          ["Fingerprint", "style change along the text", "needs a meaningful feature sequence"],
        ],
      },
    },
    {
      id: "u4-collection",
      question:
        "Explain document collection visualization with SOM, themescapes and document cards.",
      marks: 5,
      freq: 3,
      papers: "Asked in RKR21 May-2026 and Jan-2025 as a document-collection question.",
      answer: [
        "For a collection, the aim is to place **similar documents close** and dissimilar documents far apart.",
        "This is a minimisation problem, typically **O(n²)** because every pair of documents must be compared.",
        "Common approaches are graph spring layouts, multidimensional scaling, clustering (k-means, hierarchical, EM, SVM) and **self-organising maps**.",
        "A **SOM** is an unsupervised learning algorithm with a grid of nodes; each node has a vector of the same size as the document vectors.",
        "Training picks a random input, finds the **closest node**, and moves that node and its neighbours toward the input; the neighbourhood **radius shrinks** over time.",
        "A **themescape** summarises the corpus as an abstract **3D landscape**, where height and colour show the density of similar documents; tall mountains are frequent themes.",
        "A **document card** is a compact view of a document's key meaning using images and key terms, like a Top Trumps card; images are sorted into photo, diagram and table classes.",
      ],
    },
    {
      id: "u4-seesoft-tilebars",
      question: "Write short notes on SeeSoft and TileBars.",
      marks: 5,
      freq: 3,
      papers: "Asked as short notes in the text and document visualization questions.",
      answer: [
        "**SeeSoft** was made by **Eick et al.** for software visualization; it shows statistics for each line of code such as age, modifications, programmer and date.",
        "Each **column** is one source file, height shows file size, and each line of code is a **pixel-thin row**.",
        "**Colour** shows the call count: **red** lines are called often (hot spots), **blue** lines rarely; colour can also show last-change time or modification count.",
        "On a 1K × 1K screen it can show up to **50,000 lines** of code.",
        "**TileBars** was made by **Marti Hearst** for search-result visualization.",
        "Each document is a **rectangle** whose width is its relative length; stacked squares are text segments, and each **row** stands for a set of query terms.",
        "The **darker** a square, the more often the query term set occurs in that segment, so the user can see document length, term frequency and term distribution at once.",
      ],
    },
    {
      id: "u4-themeriver-jigsaw",
      question: "Explain ThemeRiver and Jigsaw for extended text visualization.",
      marks: 5,
      freq: 3,
      papers: "Asked as a short note or diagram question in the text visualization papers.",
      answer: [
        "**ThemeRiver**, also called a **stream graph**, shows **thematic changes in a document collection over time**.",
        "It assumes the data moves forward in time; each theme is a **coloured horizontal band**.",
        "The **vertical thickness** of a band at a point on the time axis is the frequency of that theme at that time.",
        "The notes' example is the election-night speeches of several Canadian candidates.",
        "**Jigsaw** is a tool for visualizing and exploring **text corpora**.",
        "Its **calendar view** places documents on a calendar using the **date entities** found in their text; highlighting a document shows its entities.",
        "Its **entity graph view** lets the user navigate a graph of related **entities and documents**, expanding the graph step by step rather than showing the whole collection.",
      ],
      diagrams: ["text-viz"],
    },
  ],
};
