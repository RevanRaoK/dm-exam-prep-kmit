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
      id: "data-types",
      title: "Data Objects & Attribute Types",
      short: "Data & attribute types",
      description:
        "Start here: what a data object is, how attributes describe it, and why nominal, ordinal, interval, ratio, discrete and continuous types change the way we preprocess and mine the data.",
      mustWrite: [
        "A **data object** is a record, point, sample or instance, and an **attribute** is a property of that object.",
        "**Qualitative** attributes are nominal, binary and ordinal, while **quantitative** attributes are numeric, discrete and continuous.",
        "**Interval** attributes have no true zero, while **ratio** attributes have a true zero and support meaningful ratios.",
      ],
      questions: ["u1-attributes"],
    },
    {
      id: "kdd-architecture",
      title: "Data Mining, KDD & System Architecture",
      short: "KDD & architecture",
      description:
        "The full knowledge discovery pipeline and the six building blocks of a typical data mining system, from the data repository to the graphical user interface.",
      mustWrite: [
        "**KDD** is cleaning → integration → selection → transformation → mining → pattern evaluation → knowledge presentation.",
        "The **data mining engine**, **knowledge base** and **pattern evaluation module** are the core architectural components.",
        "Steps 1–4 of KDD together form **data preprocessing**.",
      ],
      questions: ["u1-kdd", "u1-architecture"],
      diagrams: ["kdd"],
    },
    {
      id: "functionalities",
      title: "Data Mining Functionalities & Descriptions",
      short: "Functionalities",
      description:
        "The kinds of knowledge a data mining system can produce: characterization, discrimination, association, classification, prediction, clustering, outlier analysis and evolution analysis.",
      mustWrite: [
        "**Characterization** summarises a target class, while **discrimination** compares a target class with a contrasting class.",
        "**Association** finds co-occurring items, **classification** predicts labels and **clustering** finds unlabelled groups.",
        "**Outlier analysis** finds rare objects and **evolution analysis** studies trends over time.",
      ],
      questions: ["u1-functionalities", "u1-characterization"],
    },
    {
      id: "interestingness-issues",
      title: "Interestingness of Patterns & Major Issues",
      short: "Interestingness & issues",
      description:
        "Why not every frequent pattern is useful, how support, confidence and lift judge a pattern, and the major methodology, scalability, diversity and societal issues in data mining.",
      mustWrite: [
        "A pattern is **interesting** when it is valid, novel, potentially useful and understandable.",
        "**Support** and **confidence** are objective measures, while **unexpectedness** and **actionability** are subjective.",
        "**Lift** below 1 reveals a negative correlation even when confidence looks high.",
      ],
      questions: ["u1-interestingness", "u1-issues"],
    },
    {
      id: "dm-systems",
      title: "Classification of Data Mining Systems",
      short: "Classification of DM systems",
      description:
        "The four classification dimensions of a mining system: the database mined, the knowledge mined, the technique used and the application domain adapted.",
      mustWrite: [
        "Systems are classified by **database type**, **knowledge type**, **technique** and **application**.",
        "**Database-oriented**, **machine-learning**, **statistical**, **neural-network** and **visualisation** techniques are the main technique groups.",
        "A real system usually belongs to several categories at once.",
      ],
      questions: ["u1-classification-systems"],
    },
    {
      id: "task-primitives",
      title: "Task Primitives & Mining Queries",
      short: "Task primitives",
      description:
        "The five primitives a user specifies to define a mining task, and why a precise mining query prevents an avalanche of irrelevant patterns.",
      mustWrite: [
        "The primitives are **task-relevant data**, **kind of knowledge**, **background knowledge**, **interestingness measures** and **presentation**.",
        "**Concept hierarchies** and constraints are part of the background knowledge.",
        "A **data mining query language** combines the primitives in one request.",
      ],
      questions: ["u1-task-primitives"],
    },
    {
      id: "warehouse",
      title: "Data Warehousing, OLAP & Integration",
      short: "Warehouse & OLAP",
      description:
        "Warehouse fundamentals, the four coupling schemes between a warehouse and a mining system, OLAP operations and how warehousing differs from a normal operational database.",
      mustWrite: [
        "A warehouse is **subject-oriented, integrated, time-variant and non-volatile**.",
        "The coupling ladder is **no coupling → loose → semi-tight → tight**.",
        "**OLAP** supports roll-up, drill-down, slice, dice and pivot, while **data mining** discovers hidden patterns.",
      ],
      questions: ["u1-dw-integration", "u1-dw-vs-db", "u1-olap"],
      diagrams: ["dwdm"],
    },
    {
      id: "preprocessing",
      title: "Data Preprocessing: Importance, Cleaning, Integration, Reduction & Transformation",
      short: "Data preprocessing",
      description:
        "The complete preprocessing toolkit: why dirty data hurts mining, how cleaning fills missing values and smooths noise, how integration resolves conflicts, and how reduction and transformation make the data mineable.",
      mustWrite: [
        "The four tasks are **cleaning**, **integration**, **reduction** and **transformation**.",
        "**Binning**, **regression** and **clustering** smooth noise, while the **mean**, **median**, **class mean** or **most probable value** fill missing entries.",
        "**Min-max** and **z-score** are the two normalisation formulas to quote.",
        "**Dimensionality reduction**, **numerosity reduction** and **compression** are the three reduction families.",
      ],
      questions: ["u1-preprocessing"],
    },
  ],
  unit2: [
    {
      id: "association-basics",
      title: "Association Rule Mining & Market Basket Analysis",
      short: "Association basics",
      description:
        "The anatomy of an association rule, the two-step mining process, market basket analysis and the difference between single-level, multilevel and multidimensional rules.",
      mustWrite: [
        "A rule **A → B** has antecedent A and consequent B, and the two steps are **frequent itemset mining** and **strong rule generation**.",
        "**Market basket analysis** finds products bought together for cross-selling and placement.",
        "**Multilevel** rules use concept hierarchies, while **multidimensional** rules use several attributes.",
      ],
      questions: ["u2-association", "u2-market", "u2-multilevel"],
    },
    {
      id: "support-confidence",
      title: "Support, Confidence, Lift & Correlation",
      short: "Support, confidence & lift",
      description:
        "How to compute support and confidence, why a confident rule can still be misleading, and how lift, chi-square, all-confidence and Kulczynski expose negative correlation.",
      mustWrite: [
        "**Support** = P(A ∪ B), **confidence** = P(B | A) and **lift** = P(A ∪ B) / (P(A)P(B)).",
        "**Lift < 1** means negative correlation, **lift = 1** means independence and **lift > 1** means positive correlation.",
        "The tea–coffee example has 75% confidence but lift 0.94 because coffee is already very common.",
      ],
      questions: ["u2-association", "u2-correlation", "u2-principle"],
    },
    {
      id: "apriori",
      title: "Apriori Algorithm & Candidate Generation",
      short: "Apriori algorithm",
      description:
        "The level-wise Apriori algorithm, the join and prune steps, the T100–T900 worked numerical with min_sup = 2, and the limitations that led to FP-Growth.",
      mustWrite: [
        "**Apriori property**: every subset of a frequent itemset is frequent, and every superset of an infrequent itemset is infrequent.",
        "The **join step** self-joins Lk−1 and the **prune step** removes candidates with an infrequent subset.",
        "For T100–T900, **L1 = {I1, I2, I3, I4, I5}**, **L2 has six itemsets** and **L3 = {I1,I2,I3}, {I1,I2,I5}**.",
        "Apriori scans the database repeatedly and can suffer from **candidate explosion**.",
      ],
      questions: ["u2-apriori", "u2-principle", "u2-apriori-limits"],
      walkthroughs: ["apriori"],
    },
    {
      id: "fpgrowth",
      title: "FP-Growth, FP-Tree & Conditional Pattern Bases",
      short: "FP-Growth",
      description:
        "The Book Mart 101–105 numerical with min_sup = 25%: frequency ordering, compressed FP-tree, conditional pattern base and conditional FP-tree.",
      mustWrite: [
        "FP-Growth scans the database **twice** and builds a prefix-sharing **FP-tree** without candidate generation.",
        "The Book Mart frequent order is **B(4) > P(4) > E(3) > N(2)**, with PN removed.",
        "The conditional pattern base of N is **{B,P,E}:1, {B,E}:1**, and its conditional FP-tree keeps **B:2, E:2**.",
        "All frequent itemsets include **{B,P,E}**, **{B,E,N}** and their subsets.",
      ],
      questions: ["u2-fp", "u2-apriori-limits"],
      walkthroughs: ["fpgrowth"],
    },
    {
      id: "closed-maximal",
      title: "Frequent, Closed & Maximal Itemsets",
      short: "Closed & maximal itemsets",
      description:
        "The difference between frequent, closed and maximal itemsets, with a support table that shows exactly which itemsets survive each definition.",
      mustWrite: [
        "A **closed** itemset has no proper superset with the same support.",
        "A **maximal** frequent itemset has no frequent proper superset.",
        "Every maximal itemset is closed, but not every closed itemset is maximal.",
      ],
      questions: ["u2-frequent"],
    },
    {
      id: "constraint",
      title: "Constraint-Based Association Mining",
      short: "Constraint-based mining",
      description:
        "Antimonotonic, monotonic, succinct and convertible constraints, and how pushing them into the search space prunes candidates early.",
      mustWrite: [
        "An **antimonotonic** constraint prunes a branch as soon as one pattern violates it.",
        "A **monotonic** constraint passes down to all super-patterns.",
        "**Succinct** and **convertible** constraints can be checked or reordered for efficient mining.",
      ],
      questions: ["u2-constraint"],
    },
    {
      id: "graph-patterns",
      title: "Graph Pattern Mining",
      short: "Graph patterns",
      description:
        "Frequent subgraphs, graph isomorphism and the Apriori-based and pattern-growth approaches, including gSpan and its applications.",
      mustWrite: [
        "A **subgraph** is a graph contained in a larger graph, and its support is the number of graphs that contain it.",
        "**Apriori-based** graph mining grows candidates, while **pattern growth** extends a frequent subgraph directly.",
        "**gSpan** uses a canonical representation and depth-first search to avoid duplicates.",
      ],
      questions: ["u2-graph"],
    },
    {
      id: "sequential",
      title: "Sequential Pattern Mining",
      short: "Sequential patterns",
      description:
        "Sequences, itemsets, support, the antimonotonic Apriori property and the GSP, SPADE and PrefixSpan algorithms with an event-folding window.",
      mustWrite: [
        "A sequence is an ordered list of **itemsets**, and its **support** is the number of database sequences containing it.",
        "The Apriori property is **antimonotonic** for sequences, which allows pruning.",
        "**GSP** is Apriori-style, **SPADE** is vertical and **PrefixSpan** uses pattern growth without candidates.",
      ],
      questions: ["u2-sequential"],
    },
  ],
  unit3: [
    {
      id: "classification-basics",
      title: "Classification Basics & the Two-Step Process",
      short: "Classification basics",
      description:
        "The learning and classification steps, supervised versus unsupervised learning, the need for a separate test set and the difference between classification and numeric prediction.",
      mustWrite: [
        "**Step 1** learns a model from a labelled training set, and **step 2** tests it and classifies new tuples.",
        "A **test set** is separate from training data to avoid optimistic accuracy from **overfitting**.",
        "**Classification** predicts a class, while **prediction** predicts a continuous number.",
      ],
      questions: ["u3-twostep", "u3-vs-prediction"],
      diagrams: ["classification"],
    },
    {
      id: "decision-tree",
      title: "Decision Tree Induction (ID3)",
      short: "Decision trees (ID3)",
      description:
        "Root, internal nodes, branches and leaves; the greedy recursive induction procedure; the 14-tuple weather example and the final tree for play-tennis.",
      mustWrite: [
        "An internal node is an **attribute test**, a branch is an **outcome** and a leaf is a **class label**.",
        "Info(D) for the weather data is **0.940**, and **Gain(Outlook) = 0.246** is the largest.",
        "The final tree is **Outlook → Sunny: Humidity, Overcast: yes, Rain: Wind**.",
        "Induction stops when all tuples share a class, no attributes remain or a branch is empty.",
      ],
      questions: ["u3-id3"],
      walkthroughs: ["id3"],
    },
    {
      id: "attribute-measures",
      title: "Entropy, Information Gain, Gain Ratio & Gini",
      short: "Attribute selection measures",
      description:
        "All four attribute-selection measures with their formulas, the multi-valued bias of information gain and how gain ratio and Gini correct it.",
      mustWrite: [
        "**Info(D) = −Σ pᵢ log₂(pᵢ)** and **Gain(A) = Info(D) − Info_A(D)**.",
        "**Gain ratio** divides gain by split information to reduce the multi-valued bias.",
        "**Gini(D) = 1 − Σ pᵢ²**, and the smallest weighted child Gini wins.",
        "ID3 uses information gain, C4.5 uses gain ratio and CART uses the Gini index.",
      ],
      questions: ["u3-measures", "u3-pruning"],
    },
    {
      id: "naive-bayes",
      title: "Naïve Bayes & Bayes' Theorem",
      short: "Naïve Bayes",
      description:
        "Posterior, prior, likelihood and evidence; the class-conditional independence assumption; the fruit numerical and the alarm belief-network example.",
      mustWrite: [
        "**P(Cᵢ | X) = P(X | Cᵢ) P(Cᵢ) / P(X)** and the evidence P(X) is ignored when comparing classes.",
        "**Naïve Bayes** multiplies the attribute likelihoods under class-conditional independence.",
        "For the fruit query, Banana ≈ 0.0219, Others ≈ 0.0741 and Orange = 0, so the class is **Others**.",
        "The alarm network joint probability is **0.000628**, and the conditional probability given all evidence is about **0.558**.",
      ],
      questions: ["u3-nb", "u3-bayes"],
      walkthroughs: ["nb"],
    },
    {
      id: "rule-based",
      title: "Rule-Based Classification & Pruning",
      short: "Rule-based classifiers",
      description:
        "IF-THEN rules, coverage and accuracy, triggered versus fired rules, size and rule ordering, sequential covering, FOIL measures and rule pruning.",
      mustWrite: [
        "**Coverage = n_covers / |D|** and **accuracy = n_correct / n_covers**.",
        "Rules from an unpruned tree are **mutually exclusive** and **exhaustive**.",
        "**Size ordering** lets the most specific rule fire; **rule ordering** uses a ranked decision list.",
        "**FOIL_Gain** rewards both purity and positive coverage, and **FOIL_Prune** decides whether to prune.",
      ],
      questions: ["u3-rules"],
    },
    {
      id: "lazy-knn",
      title: "Lazy Learners, k-NN & Case-Based Reasoning",
      short: "Lazy learners & k-NN",
      description:
        "Eager versus lazy learning, the k-nearest neighbour algorithm, Euclidean distance, normalisation, choosing k and the symbolic case-based reasoning alternative.",
      mustWrite: [
        "**k-NN** stores training tuples and finds the k closest neighbours at classification time.",
        "Use **Euclidean distance** and **min-max normalisation** so that large-range attributes do not dominate.",
        "Classification takes a **majority vote**, and numeric prediction takes the **average**.",
        "**CBR** uses symbolic cases and a domain-specific similarity metric.",
      ],
      questions: ["u3-knn", "u3-eagerlazy", "u3-cbr"],
    },
    {
      id: "evaluation",
      title: "Classifier Evaluation & Accuracy",
      short: "Evaluation & accuracy",
      description:
        "Accuracy, confusion matrix, precision, recall, F1, holdout, random subsampling, cross-validation, bootstrap and ROC-based comparison.",
      mustWrite: [
        "**Accuracy = (TP + TN) / (TP + TN + FP + FN)**.",
        "**Precision = TP / (TP + FP)** and **Recall = TP / (TP + FN)**.",
        "**F1** is the harmonic mean of precision and recall.",
        "**10-fold cross-validation** is the standard reliable evaluation method.",
      ],
      questions: ["u3-eval", "u3-vs-prediction"],
    },
    {
      id: "svm",
      title: "Support Vector Machines & Hyperplanes",
      short: "SVM & hyperplanes",
      description:
        "The maximum-margin hyperplane, support vectors, the kernel trick and when SVM is a good classifier choice.",
      mustWrite: [
        "A **hyperplane** separates the classes, and SVM chooses the one with the **maximum margin**.",
        "The closest tuples that determine the margin are the **support vectors**.",
        "A **kernel function** maps non-linearly-separable data into a higher-dimensional space.",
      ],
      questions: ["u3-svm"],
    },
  ],
  unit4: [
    {
      id: "cluster-basics",
      title: "Cluster Analysis Basics & Method Families",
      short: "Clustering basics",
      description:
        "What clustering is, why it is unsupervised, how data matrices and dissimilarity matrices differ, and the five major clustering families.",
      mustWrite: [
        "A **cluster** has high intra-cluster similarity and low inter-cluster similarity.",
        "Clustering is **unsupervised** because no class labels are given.",
        "The five families are **partitioning, hierarchical, density-based, grid-based and model-based**.",
      ],
      questions: ["u4-basics", "u4-families"],
    },
    {
      id: "kmeans",
      title: "K-Means Clustering",
      short: "K-means",
      description:
        "The assign-and-update loop, the eight-point two-cluster worked example, the convergence round and the strengths and weaknesses of the mean-based method.",
      mustWrite: [
        "K-means repeats **assign to nearest centre** and **recompute the mean** until nothing changes.",
        "The worked example converges at **c1 = (1.75, 1.33)** and **c2 = (4.75, 3.73)**.",
        "K-means needs **k in advance** and is sensitive to initial centres and outliers.",
      ],
      questions: ["u4-kmeans"],
      walkthroughs: ["kmeans"],
    },
    {
      id: "kmedoids",
      title: "K-Medoids & PAM",
      short: "K-medoids",
      description:
        "Medoids as real data points, the swap-based cost minimisation and the example where cost falls from 22 to 20 and the next swap is rejected.",
      mustWrite: [
        "A **medoid** is an actual data point, which makes the method robust to outliers.",
        "A swap is kept only when the new total cost is **lower**.",
        "The example finishes with medoids **(3,4) and (7,4)** and cost **20**.",
      ],
      questions: ["u4-kmedoids"],
    },
    {
      id: "hierarchical",
      title: "Hierarchical Clustering & Dendrograms",
      short: "Hierarchical & dendrograms",
      description:
        "AGNES and DIANA, single/complete/average linkage, the A–E matrix merge heights and how to read a dendrogram.",
      mustWrite: [
        "**Agglomerative** merges bottom-up, while **divisive** splits top-down.",
        "**Single link = min**, **complete link = max**, **average link = mean of pairwise distances**.",
        "The merge heights are **2, 3, 4, 5** for single, **2, 4, 6, 11** for complete and **2, 4, 4.5, 8.17** for average link.",
      ],
      questions: ["u4-hierarchical", "u4-agglo-divisive"],
      diagrams: ["dendrogram"],
    },
    {
      id: "dbscan",
      title: "Density-Based Clustering & DBSCAN",
      short: "DBSCAN",
      description:
        "ε-neighbourhoods, MinPts, core/border/noise points, direct density-reachability and the expansion algorithm that discovers arbitrary-shaped clusters.",
      mustWrite: [
        "**Core**: at least MinPts points within ε; **border**: near a core but not core; **noise**: neither.",
        "Clusters are maximal sets of **density-connected** points.",
        "DBSCAN finds arbitrary shapes and handles noise but struggles with very different densities.",
      ],
      questions: ["u4-dbscan"],
      walkthroughs: ["dbscan"],
    },
    {
      id: "grid",
      title: "Grid-Based Clustering & STING",
      short: "Grid-based clustering",
      description:
        "Why grid methods scale with the number of cells rather than objects, and how STING stores statistics in hierarchical cells and answers queries top-down.",
      mustWrite: [
        "Grid methods divide the space into cells and cluster the **cells**.",
        "**STING** stores count, mean, standard deviation, min, max and distribution type in every cell.",
        "Queries are answered **top-down** through the cell hierarchy.",
      ],
      questions: ["u4-grid"],
    },
    {
      id: "outliers",
      title: "Outlier Analysis & Detection",
      short: "Outlier analysis",
      description:
        "Point, collective and contextual outliers; univariate versus multivariate; Z-score, IQR, density-based and distance-based detection.",
      mustWrite: [
        "An **outlier** deviates significantly from the rest and may be fraud, a fault or a rare genuine event.",
        "**z = (x − μ)/σ**, and |z| > 3 is a common flag.",
        "**IQR fences** are Q1 − 1.5 × IQR and Q3 + 1.5 × IQR.",
        "In DBSCAN, **noise points** are treated as outliers.",
      ],
      questions: ["u4-outlier"],
    },
    {
      id: "proximity",
      title: "Proximity Measures & Clustering for Preprocessing",
      short: "Proximity & applications",
      description:
        "Euclidean, Manhattan, Minkowski, cosine and Jaccard measures, plus how clustering helps preprocessing for association mining and where clustering is applied.",
      mustWrite: [
        "**Euclidean** is straight-line distance and **Manhattan** sums absolute differences.",
        "**Cosine** compares the angle between vectors and **Jaccard** compares set overlap.",
        "Clustering can **reduce**, **clean**, **discretise** and **segment** data before association mining.",
      ],
      questions: ["u4-proximity", "u4-cluster-preprocessing"],
    },
  ],
  unit5: [
    {
      id: "web-taxonomy",
      title: "Web Mining Taxonomy & Web Challenges",
      short: "Web mining taxonomy",
      description:
        "The three branches of web mining, the size, complexity, dynamism and diversity of the web, and the challenges of effective web knowledge discovery.",
      mustWrite: [
        "The three branches are **web content**, **web structure** and **web usage** mining.",
        "The web is **huge, heterogeneous, dynamic and mostly irrelevant** to any one user.",
        "**VIPS** segments a page by visual layout so mining works on meaningful blocks.",
      ],
      questions: ["u5-web", "u5-web-challenges"],
      diagrams: ["webmining"],
    },
    {
      id: "web-content",
      title: "Web Content Mining",
      short: "Web content mining",
      description:
        "Mining page text, images and other content, with classification, clustering and summarisation tasks and the challenges of unstructured markup.",
      mustWrite: [
        "Web content mining works on the **content** of pages rather than on links or logs.",
        "Tasks include **document classification**, **clustering**, **topic discovery** and **summarisation**.",
        "It must handle **unstructured or semi-structured** markup and noisy navigation blocks.",
      ],
      questions: ["u5-web", "u5-web-challenges"],
    },
    {
      id: "web-structure",
      title: "Web Structure Mining & HITS",
      short: "Web structure & HITS",
      description:
        "Hubs, authorities, the mutual-reinforcement iteration of HITS, link analysis for ranking and the problem of link spam.",
      mustWrite: [
        "An **authority** is linked to by good hubs, and a **hub** links to good authorities.",
        "**auth(p) = Σ hub(q)** over incoming links, and **hub(p) = Σ auth(q)** over outgoing links.",
        "HITS is **query-dependent** and can be distorted by **link spam**.",
      ],
      questions: ["u5-hits"],
    },
    {
      id: "web-usage",
      title: "Web Usage Mining & Log Patterns",
      short: "Web usage mining",
      description:
        "Server logs, user and session identification, path completion and the association, sequential, clustering and classification patterns mined from browsing behaviour.",
      mustWrite: [
        "Usage mining analyses **web server logs**, proxy logs, cookies and click streams.",
        "Preprocessing performs **data cleaning**, **user identification**, **session identification** and **path completion**.",
        "Patterns include **association rules**, **sequential navigation paths**, **user clusters** and **user classifications**.",
        "Privacy and anonymisation must be handled carefully.",
      ],
      questions: ["u5-usage"],
    },
    {
      id: "time-series",
      title: "Time-Series Data, Components & Trend Analysis",
      short: "Time series & trends",
      description:
        "The four movements of a time series, additive and multiplicative decomposition, moving averages, least-squares trends, similarity search and mining challenges.",
      mustWrite: [
        "The four components are **trend, cyclic, seasonal and irregular**.",
        "**Trend** is long-term, **seasonal** repeats in a fixed period and **cyclic** has no fixed period.",
        "A **moving average** smooths short-term fluctuations, and **least squares** fits the trend line.",
        "Formula: F(t+1) = (1/k) Σ D(t−i).",
      ],
      questions: ["u5-timeseries"],
      diagrams: ["timeseries"],
    },
    {
      id: "spatial",
      title: "Spatial Data Mining & Spatial Cubes",
      short: "Spatial data mining",
      description:
        "Raster and vector data, spatial autocorrelation, the three dimension types and two measure types of a spatial data cube, aggregation, approximation and applications.",
      mustWrite: [
        "**Spatial autocorrelation** means nearby locations tend to have similar values.",
        "A spatial cube has **nonspatial, spatial-to-nonspatial and spatial-to-spatial** dimensions.",
        "Its measures are **numerical** and **spatial**.",
        "Applications include GIS, traffic, epidemiology, urban planning and location-based services.",
      ],
      questions: ["u5-spatial"],
    },
    {
      id: "multimedia",
      title: "Multimedia Data Mining & Similarity Search",
      short: "Multimedia & similarity",
      description:
        "Description-based versus content-based retrieval, the four signature types, Multimedia Miner, multimedia association rules, video shots and similarity search.",
      mustWrite: [
        "**Description-based** retrieval uses keywords, while **content-based** retrieval uses colour, texture and shape.",
        "The four signatures are **colour histogram, multifeature composed, wavelet-based and region-based**.",
        "**Multimedia Miner** uses a **512-colour histogram**, MFC/MFO and an **8 × 8 layout grid**.",
        "Video is split into **shots** represented by **key frames**, and MPEG-7 describes content.",
      ],
      questions: ["u5-multimedia", "u5-similarity"],
    },
    {
      id: "text-mining",
      title: "Text Mining, Information Retrieval & TF-IDF",
      short: "Text mining & IR",
      description:
        "Pull and push retrieval, precision, recall and F-score, stop lists, stemming, inverted indexes, the vector space model, TF-IDF, synonymy, polysemy and LSI.",
      mustWrite: [
        "**Precision = relevant retrieved / retrieved** and **recall = relevant retrieved / all relevant**.",
        "The **F-score** is the harmonic mean of precision and recall.",
        "**TF-IDF = TF × log(N/df)**, and the **vector space model** compares documents by cosine similarity.",
        "**Synonymy** causes missed results and **polysemy** causes wrong results, while **LSI** uses SVD to reduce dimensions.",
      ],
      questions: ["u5-text"],
    },
    {
      id: "streams-complex",
      title: "Data Streams & Complex Data Challenges",
      short: "Streams & complex data",
      description:
        "One-pass stream algorithms, concept drift, reservoir sampling, sliding windows, sketches, multiresolution methods and the general challenges of mining complex data.",
      mustWrite: [
        "Streams are **continuous, volatile, huge and time-sensitive**, so only one pass is possible.",
        "**Reservoir sampling** keeps the i-th item with probability **m/i**, and a **sliding window** keeps recent items.",
        "**Concept drift** changes the underlying pattern over time.",
        "Complex data challenges include **high dimensionality, noise, heterogeneity, autocorrelation and scalability**.",
      ],
      questions: ["u5-streams", "u5-complex"],
    },
  ],
};

export const allTopics = Object.values(unitTopics).flat();
