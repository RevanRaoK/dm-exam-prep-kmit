import type { Unit } from "./types";

export const unit5: Unit = {
  id: "unit5",
  roman: "V",
  title: "Unit V · Mining Complex Data Types",
  subtitle:
    "Web mining taxonomy, HITS, web usage, time series, spatial and multimedia mining, text mining, information retrieval, data streams and complex data.",
  color: "var(--v-pink)",
  questions: [
    {
      id: "u5-web",
      question:
        "Explain web mining and its taxonomy: web content mining, web structure mining and web usage mining.",
      marks: 10,
      freq: 12,
      papers: "Web mining and its taxonomy appear in all 12 papers.",
      sections: [
        {
          heading: "What web mining is and why the web is hard",
          bullets: [
            "**Web mining** applies data mining techniques to discover patterns and useful knowledge from the World Wide Web.",
            "The web is **huge**, **complex**, **dynamic** and used by **diverse users**, and only a small part of it is relevant to any one user.",
            "Web pages are largely **unstructured or semi-structured**, and their content changes constantly.",
            "The three major categories of web mining are **web content mining**, **web structure mining** and **web usage mining**.",
          ],
        },
        {
          heading: "Web content mining and web structure mining",
          bullets: [
            "**Web content mining** mines the text, images, audio and video that appear on web pages.",
            "It includes **text mining**, **multimedia mining**, **topic discovery**, **document classification** and **web page summarisation**.",
            "**Web structure mining** mines the hyperlink graph that connects pages.",
            "It is used to find **authorities**, **hubs**, **communities** and important pages, with algorithms such as **HITS** and **PageRank**.",
          ],
        },
        {
          heading: "Web usage mining",
          bullets: [
            "**Web usage mining** mines **web server logs**, proxy logs and click streams to understand how users navigate a site.",
            "Typical usage-mining outputs are **frequent pages**, **association rules**, **sequential navigation patterns**, **user clusters** and **personalised recommendations**.",
          ],
        },
        {
          heading: "Page segmentation and applications",
          bullets: [
            "**VIPS** is a vision-based page segmentation method that splits a page into visual blocks so that mining can focus on meaningful content instead of menus and advertisements.",
            "The discovered knowledge is used for **personalisation**, **recommendation**, **site redesign**, **caching**, **business intelligence** and **search improvement**.",
          ],
        },
      ],
      table: {
        head: ["Type", "What it mines", "Example task"],
        rows: [
          ["Web content mining", "Text, images, audio and video on pages", "Classify news articles by topic"],
          ["Web structure mining", "Hyperlinks between pages", "Find hubs and authorities with HITS"],
          ["Web usage mining", "Server logs and click streams", "Discover common navigation paths"],
        ],
      },
      diagrams: ["webmining"],
    },
    {
      id: "u5-timeseries",
      question:
        "Explain time-series data and its four components. How are moving averages and trend analysis used?",
      marks: 10,
      freq: 10,
      papers: "Time-series components, trend analysis and moving averages appear in 10 of 12 papers.",
      sections: [
        {
          heading: "Definition and time-series databases",
          bullets: [
            "A **time series** is a sequence of values measured at successive points in time, such as daily stock prices or monthly sales.",
            "A **time-series database** stores time-related data and usually receives a continuous flow of new values.",
            "Time-series mining studies **trends**, **correlations** and **predictions** of the variables over time.",
          ],
        },
        {
          heading: "The four components",
          bullets: [
            "The movement of a time series is decomposed into four components: **trend**, **cyclic**, **seasonal** and **irregular**.",
            "The **trend (T)** is the long-term direction of the series, which may be increasing, decreasing or flat.",
            "The **cyclic component (C)** consists of long-term oscillations around the trend that do not have a fixed period.",
            "The **seasonal component (S)** is a regular pattern that repeats within a fixed period such as a year or a week.",
            "The **irregular component (I)** consists of random, one-off events such as strikes, floods or accidents.",
            "A common decomposition model is **series = trend × cyclic × seasonal × irregular** or the additive form series = T + C + S + I.",
          ],
        },
        {
          heading: "Trend analysis and moving averages",
          bullets: [
            "**Trend analysis** estimates the trend curve so that the other components and the future values can be studied.",
            "A **moving average** smooths short-term fluctuations by averaging the most recent k observations.",
            "A **weighted moving average** gives more weight to recent observations, while the **least-squares method** fits a line with the smallest total squared error.",
          ],
        },
        {
          heading: "Similarity search and main challenges",
          bullets: [
            "**Similarity search** finds time series that behave like a given query series, which is useful for stock or sensor analysis.",
            "The main challenges are **noise**, **missing values**, **large volume**, **high dimensionality** and changing patterns over time.",
          ],
        },
      ],
      formula:
        "Moving average: F(t+1) = (1/k) × Σ D(t−i) for i = 0 to k−1\nWeighted moving average: Σ wᵢ D(t−i), where Σ wᵢ = 1\nLeast-squares line: Y = a + bX\nb = Σ(x−x̄)(y−ȳ) / Σ(x−x̄)², a = ȳ − b x̄",
      table: {
        head: ["Component", "Meaning", "Example"],
        rows: [
          ["Trend", "Long-term direction", "Sales rising over ten years"],
          ["Cyclic", "Long oscillations, no fixed period", "Business cycle"],
          ["Seasonal", "Repeats in a fixed period", "Ice-cream sales peak each summer"],
          ["Irregular", "Random one-off events", "A strike or a flood"],
        ],
      },
      diagrams: ["timeseries"],
    },
    {
      id: "u5-spatial",
      question:
        "Explain spatial data mining, spatial autocorrelation and the spatial data cube.",
      marks: 10,
      freq: 10,
      papers: "Spatial data mining appears in 10 of 12 papers.",
      sections: [
        {
          heading: "Spatial data and spatial autocorrelation",
          bullets: [
            "**Spatial data** describes objects that have locations, shapes and spatial relationships, such as maps, satellite images and medical images.",
            "Spatial data is stored as **raster data** (pixel or bit maps) or **vector data** (points, lines and polygons).",
            "**Spatial data mining** discovers patterns from spatial databases, including **location patterns**, **spatial associations**, **spatial clusters** and **spatial outliers**.",
            "**Spatial autocorrelation** means that nearby locations tend to have similar values, so spatial data cannot be treated as independent tuples.",
            "Positive spatial autocorrelation indicates clustering of similar values, while negative autocorrelation indicates a checkerboard-like pattern.",
          ],
        },
        {
          heading: "The spatial data cube",
          bullets: [
            "A **spatial data cube** extends the data cube model with spatial dimensions and spatial measures.",
            "The three kinds of dimensions are **nonspatial dimensions**, **spatial-to-nonspatial dimensions** and **spatial-to-spatial dimensions**.",
            "The two kinds of measures are **numerical measures** such as area or count, and **spatial measures** such as a region map.",
            "In the BC weather example, the dimensions are region, temperature, time and precipitation, and the measures include region map, area and count.",
          ],
        },
        {
          heading: "Generalisation and mining methods",
          bullets: [
            "**Spatial aggregation** merges nearby regions, while **spatial approximation** replaces complex shapes with simpler shapes such as rectangles.",
            "Spatial mining methods include **spatial clustering**, **spatial classification**, **spatial association rule mining** and **spatial outlier detection**.",
          ],
        },
        {
          heading: "Applications",
          bullets: [
            "Applications include **geographic information systems**, **urban planning**, **traffic analysis**, **environmental monitoring**, **epidemiology** and **location-based services**.",
          ],
        },
      ],
      table: {
        head: ["Spatial cube element", "Type", "Weather example"],
        rows: [
          ["Temperature", "Nonspatial dimension", "Hot, mild, cold"],
          ["City region", "Spatial-to-nonspatial dimension", "Seattle becomes Pacific Northwest"],
          ["Equi-temperature region", "Spatial-to-spatial dimension", "0–5 °C region, 5–10 °C region"],
          ["Monthly revenue", "Numerical measure", "Sum over a region"],
          ["Region map", "Spatial measure", "Pointers to component regions"],
        ],
      },
    },
    {
      id: "u5-multimedia",
      question:
        "Explain multimedia data mining, content-based retrieval and the association rules mined from multimedia data.",
      marks: 10,
      freq: 8,
      papers: "Multimedia data mining appears in 8 of 12 papers.",
      sections: [
        {
          heading: "Description-based and content-based retrieval",
          bullets: [
            "**Multimedia data** includes images, audio, video and text, and it is stored in multimedia databases.",
            "**Description-based retrieval** searches multimedia by keywords, captions or tags that people have attached to the items.",
            "**Content-based retrieval** searches by visual or audio features such as colour, texture, shape and motion.",
          ],
        },
        {
          heading: "Signatures for content-based retrieval",
          bullets: [
            "A content-based system describes each item by a **signature**, which is a compact representation of its features.",
            "The four signature types are **colour histogram**, **multifeature composed**, **wavelet-based** and **region-based wavelet**.",
            "A **colour histogram** ignores shape and texture, so two unrelated images with similar colours may look similar.",
            "A **multifeature composed** signature stores colour, shape, texture and topology with a separate distance function for each feature.",
            "A **wavelet-based** signature uses the dominant wavelet coefficients of the whole image, while a **region-based** signature compares regions and can match moved or scaled objects.",
          ],
        },
        {
          heading: "Multimedia Miner and association rules",
          bullets: [
            "**Multimedia Miner** uses a **512-colour histogram**, finds the **most frequent colours** and **most frequent orientations**, and divides images with an **8 × 8 layout grid**.",
            "Multimedia association rules fall into three categories: rules on image content, rules that combine content with non-content descriptions, and rules on spatial relationships.",
            "These rules differ from transactional rules because the items are not discrete, the position of an object matters and a feature may occur many times in one image.",
          ],
        },
        {
          heading: "Video and similarity search",
          bullets: [
            "**Video** is segmented into **shots**, each represented by a **key frame**, and **MPEG-7** is a standard for describing multimedia content.",
            "Similarity search in multimedia finds items whose signatures are close to a query's signature, and it is used in image search, video retrieval and medical imaging.",
          ],
        },
      ],
      table: {
        head: ["Retrieval type", "Input", "Example"],
        rows: [
          ["Description-based", "Keywords and tags", "Search images tagged 'sunset'"],
          ["Content-based", "Visual features", "Find images with a similar colour histogram"],
          ["Region-based", "Object regions", "Find a building at a different scale"],
        ],
      },
    },
    {
      id: "u5-text",
      question:
        "Explain text mining, information retrieval, precision, recall, TF-IDF and the vector space model.",
      marks: 10,
      freq: 7,
      papers: "Text mining and information retrieval appear in 7 of 12 papers.",
      sections: [
        {
          heading: "Text mining and information retrieval modes",
          bullets: [
            "**Text mining** discovers useful information and patterns from unstructured text documents.",
            "**Information retrieval (IR)** finds documents in a large collection that are relevant to a user's query.",
            "In **pull mode**, the user submits a query, while in **push mode** or **information filtering** the system sends new documents that match a standing interest.",
            "**Boolean retrieval** marks a document as matching or not matching, while **ranking** orders documents by relevance.",
          ],
        },
        {
          heading: "Precision, recall and the F-score",
          bullets: [
            "**Precision** is the fraction of retrieved documents that are relevant.",
            "**Recall** is the fraction of all relevant documents that were retrieved.",
            "The **F-score** is the harmonic mean of precision and recall, so it is high only when both values are high.",
          ],
        },
        {
          heading: "Text preprocessing and indexing",
          bullets: [
            "A **stop list** removes very common words such as the, is and of because they carry little meaning.",
            "**Stemming** reduces words to their root, so running, runs and ran are all treated as run.",
            "An **inverted index** stores, for each term, the list of documents that contain it and makes search fast.",
          ],
        },
        {
          heading: "Vector space model and TF-IDF",
          bullets: [
            "The **vector space model** represents each document as a vector of term weights, and similarity is measured by the cosine of the angle between vectors.",
            "**TF-IDF** weights a term by its term frequency in the document multiplied by its inverse document frequency, which rewards terms that are frequent in one document but rare in the collection.",
          ],
        },
        {
          heading: "Synonymy, polysemy and latent semantic indexing",
          bullets: [
            "**Synonymy** means different words have the same meaning and causes missed results, while **polysemy** means one word has several meanings and causes wrong results.",
            "**Latent semantic indexing** uses **singular value decomposition** to map documents and terms into a smaller concept space.",
          ],
        },
      ],
      formula:
        "Precision = |relevant ∩ retrieved| / |retrieved|\nRecall = |relevant ∩ retrieved| / |relevant|\nF = 2 × P × R / (P + R)\nIDF(t) = log(N / df(t))\nweight(t, d) = TF(t, d) × IDF(t)",
      table: {
        head: ["Technique", "Purpose", "Example"],
        rows: [
          ["Stop list", "Remove common words", "the, is, of"],
          ["Stemming", "Reduce to root form", "running → run"],
          ["Inverted index", "Fast term lookup", "mining → D1, D3, D7"],
          ["TF-IDF", "Weight rare informative terms", "high weight for 'dendrogram'"],
        ],
      },
    },
    {
      id: "u5-usage",
      question:
        "Explain web usage mining and the kinds of patterns mined from web server logs.",
      marks: 10,
      freq: 6,
      papers: "Web usage mining and log patterns appear in 6 of 12 papers.",
      sections: [
        {
          heading: "Logs and preprocessing",
          bullets: [
            "**Web usage mining** analyses the access patterns recorded when users browse a website, in order to understand and improve user experience.",
            "The main data sources are **web server logs**, **proxy server logs**, **client-side logs**, **cookies** and **click streams**.",
            "A server log records the client IP address, request time, requested page, status code, referrer, browser and bytes transferred.",
            "**Data preprocessing** cleans the log, identifies users, identifies sessions and completes missing navigation paths.",
            "**User identification** groups requests that belong to the same visitor, and **session identification** divides a visitor's requests into browsing sessions.",
            "**Path completion** adds pages that were cached or requested indirectly so that the navigation path is complete.",
          ],
        },
        {
          heading: "Pattern types mined from usage data",
          bullets: [
            "**Association rules** find pages that are commonly visited together, such as a product page and its accessories page.",
            "**Sequential patterns** find common navigation paths, such as home → category → product → checkout.",
            "**Clustering** groups users with similar behaviour or pages with similar access patterns.",
            "**Classification** assigns users to known categories such as frequent buyer, window shopper or bot.",
            "**Statistical analysis** reports page views, top entry pages, top exit pages, average session length and bounce rates.",
          ],
        },
        {
          heading: "Applications and privacy",
          bullets: [
            "Web usage mining supports **personalisation**, **recommendation**, **website redesign**, **caching**, **advertising** and **fraud or bot detection**.",
            "Because logs contain personal data, **privacy** and **anonymisation** must be handled carefully.",
          ],
        },
      ],
      table: {
        head: ["Pattern type", "What it reveals", "Example use"],
        rows: [
          ["Association", "Pages visited together", "Cross-sell recommendations"],
          ["Sequential", "Order of navigation", "Simplify the checkout path"],
          ["Clustering", "Groups of similar users", "Personalised home page"],
          ["Classification", "User category", "Identify likely buyers"],
        ],
      },
    },
    {
      id: "u5-hits",
      question:
        "Explain web structure mining and the HITS algorithm for hubs and authorities.",
      marks: 10,
      freq: 5,
      papers: "Web structure mining and HITS appear in 5 of 12 papers.",
      sections: [
        {
          heading: "Links, hubs and authorities",
          bullets: [
            "**Web structure mining** analyses the hyperlink graph formed by web pages and the links between them.",
            "A link from page A to page B is treated as a **vote** of confidence in B.",
            "An **authority** is a page with good content on a topic, and it is recognised by having many incoming links.",
            "A **hub** is a page that links to many good authorities, such as a directory or resource list.",
            "Hubs and authorities reinforce each other, because a good hub points to good authorities and a good authority is pointed to by good hubs.",
          ],
        },
        {
          heading: "The HITS iteration",
          bullets: [
            "**HITS** starts every page with authority score 1 and hub score 1.",
            "In each round, the new authority score of a page is the sum of the hub scores of all pages that link to it.",
            "The new hub score of a page is the sum of the authority scores of all pages that it links to.",
            "The scores are normalised after each round so that they stay comparable.",
            "The iterations stop when the scores stop changing significantly.",
          ],
        },
        {
          heading: "Query dependence, uses and weakness",
          bullets: [
            "HITS is a **query-dependent** method because it is usually applied to the small subgraph of pages relevant to a search query.",
            "Link analysis is useful for **search ranking**, **topic discovery**, **community detection** and **spam detection**.",
            "A weakness of link-based ranking is **link spam**, where artificial links are created to inflate a page's score.",
          ],
        },
      ],
      formula:
        "auth(p) = Σ hub(q) for every page q that links to p\nhub(p) = Σ auth(q) for every page q that p links to\nNormalise both score vectors after each iteration",
      table: {
        head: ["Concept", "Role in the web graph", "Score source"],
        rows: [
          ["Authority", "Receives links from good hubs", "Incoming neighbours"],
          ["Hub", "Links to good authorities", "Outgoing neighbours"],
          ["HITS", "Iterative mutual reinforcement", "Repeated auth and hub updates"],
        ],
      },
    },
    {
      id: "u5-streams",
      question:
        "Explain data streams and the techniques used for mining data streams.",
      marks: 5,
      freq: 3,
      papers: "Data streams and stream mining appear in 3 of 12 papers.",
      answer: [
        "A **data stream** is a continuous, ordered, fast-changing and potentially infinite sequence of data that arrives over time.",
        "Examples include **sensor readings**, **network traffic**, **stock tickers**, **web clicks** and **transaction logs**.",
        "A stream is usually **volatile**, because once an item has passed it cannot be retrieved unless a summary was stored.",
        "Stream algorithms must work in **one pass**, with **limited memory** and often with **approximate answers**.",
        "**Concept drift** means the underlying pattern changes over time, so a model trained on old data may become outdated.",
        "**Sampling** keeps a random subset of the stream, and **reservoir sampling** maintains a fixed-size sample while the stream is still arriving.",
        "In reservoir sampling of size m, the i-th item is kept with probability **m / i** and replaces a random item in the reservoir.",
        "A **sliding window** keeps only the most recent w items, so the answer always describes recent data.",
        "**Sketches and histograms** keep a compact summary of the stream instead of storing every item.",
        "**Multiresolution methods** keep recent data in detail and older data in coarser summaries.",
        "**Randomised algorithms** give approximate answers with probability bounds, often using the **Chebyshev inequality**.",
        "A **data stream management system (DSMS)** consists of the end user, the query processor and the scratch space, and it answers continuous queries.",
      ],
      formula:
        "Reservoir sampling: keep the i-th item with probability m / i\nChebyshev: P(|X − μ| ≥ k) ≤ σ² / k²",
      table: {
        head: ["Technique", "What it keeps", "Advantage"],
        rows: [
          ["Reservoir sampling", "Fixed random sample", "Unbiased sample without storing all data"],
          ["Sliding window", "Most recent w items", "Focuses on current behaviour"],
          ["Histogram or sketch", "Compact summary", "Small memory footprint"],
          ["Multiresolution", "Detail plus summaries", "Efficient long-term analysis"],
        ],
      },
    },
    {
      id: "u5-complex",
      question:
        "Explain the challenges involved in mining complex data types.",
      marks: 5,
      freq: 2,
      papers: "Challenges of mining complex data types appear in 2 of 12 papers.",
      answer: [
        "**Complex data types** include spatial, temporal, multimedia, text, web, graph and stream data, and each has a different structure.",
        "Complex objects may be **set-valued**, **list-valued** or composed of other objects, so ordinary tuple-based mining does not apply directly.",
        "**High dimensionality** makes distance computation, indexing and pattern search much more expensive.",
        "**Noise and uncertainty** are common in multimedia, sensor and web data, so patterns may be unreliable.",
        "**Heterogeneous formats** require data integration, feature extraction and a common representation before mining.",
        "**Spatial and temporal autocorrelation** means nearby objects or time-adjacent values are dependent, which breaks the independence assumptions of many algorithms.",
        "**Scalability** is a major issue because complex data sets are often huge, distributed and continuously growing.",
        "**Interpretability** is difficult because the output may be a graph, an image feature or a trajectory rather than a simple rule.",
        "Generalisation, aggregation, feature construction and specialised similarity measures are used to make complex data mineable.",
      ],
    },
    {
      id: "u5-similarity",
      question:
        "Explain the role of similarity search in multimedia data mining.",
      marks: 5,
      freq: 2,
      papers: "Similarity search in multimedia mining appears in 2 of 12 papers.",
      answer: [
        "**Similarity search** retrieves multimedia objects whose content is close to a query object rather than exactly equal to it.",
        "Each object is represented by a **signature** that captures its important visual or audio features.",
        "The search compares the query signature with stored signatures using an appropriate **distance function**.",
        "A **colour histogram** compares colour distributions, while **texture** and **shape** descriptors compare those features.",
        "**Wavelet-based** signatures compare dominant coefficients, and **region-based** signatures compare matching regions of images.",
        "**Query by example** lets the user submit an image or clip, and the system returns the most similar items.",
        "A good similarity measure must match human perception, because a small pixel difference may not change what people see.",
        "Similarity search is used in **image retrieval**, **video search**, **medical imaging**, **face recognition** and **audio matching**.",
      ],
    },
    {
      id: "u5-web-challenges",
      question:
        "Explain the challenges posed by the World Wide Web for effective resource and knowledge discovery.",
      marks: 5,
      freq: 2,
      papers: "Challenges of the web appear in 2 of 12 papers.",
      answer: [
        "The web is **huge** and continues to grow, so crawling, indexing and mining it require massive scalable systems.",
        "The web is **heterogeneous**, because pages differ in language, format, structure and quality.",
        "The web is **dynamic**, because pages appear, change and disappear continuously, so an index can quickly become stale.",
        "A large portion of the web is **unstructured or semi-structured**, which makes automatic extraction difficult.",
        "The web serves **diverse users** with different backgrounds, goals and levels of expertise.",
        "Only a **small fraction** of the web is relevant to a particular user or query, so ranking and filtering are essential.",
        "Link-based ranking can be distorted by **link spam** and artificial link farms.",
        "The web raises **privacy**, **copyright**, **security** and **ethical** issues that must be handled during mining.",
        "**Coverage** is incomplete because search engines cannot index the deep web or every page behind forms and logins.",
        "These challenges motivate focused crawling, page segmentation, link analysis, usage mining and robust relevance ranking.",
      ],
    },
  ],
};
