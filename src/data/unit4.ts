import type { Unit } from "./types";

export const unit4: Unit = {
  id: "unit4",
  roman: "IV",
  title: "Unit IV · Cluster Analysis",
  subtitle:
    "Partitioning, k-means, k-medoids, hierarchical dendrograms, DBSCAN density clusters, grid methods, proximity measures and outlier analysis.",
  color: "var(--v-violet)",
  questions: [
    {
      id: "u4-hierarchical",
      question:
        "Explain hierarchical clustering with the A–E distance matrix and draw the dendrogram for single, complete and average linkage.",
      marks: 10,
      freq: 11,
      papers: "Hierarchical clustering or dendrograms appear in 11 of 12 papers.",
      sections: [
        {
          heading: "Agglomerative and divisive clustering",
          bullets: [
            "**Hierarchical clustering** builds a tree of clusters called a **dendrogram** rather than producing one flat partition.",
            "The **agglomerative** method starts with every object as its own cluster and repeatedly merges the two closest clusters.",
            "The **divisive** method starts with one cluster containing all objects and repeatedly splits a cluster.",
            "A **dendrogram** records the order and height of every merge, and cutting it at a chosen height gives a chosen number of clusters.",
          ],
        },
        {
          heading: "Linkage measures",
          bullets: [
            "The **single link** distance between two clusters is the **smallest** distance between any two members.",
            "The **complete link** distance is the **largest** distance between any two members.",
            "The **average link** distance is the **mean** of all pairwise distances between the two clusters.",
          ],
        },
        {
          heading: "The A–E worked example",
          bullets: [
            "For the A–E matrix, the single-link merge heights are **2, 3, 4 and 5**.",
            "For the same matrix, the complete-link merge heights are **2, 4, 6 and 11**.",
            "For the same matrix, the average-link merge heights are **2, 4, 4.5 and 8.17**.",
            "Single link merges A with B at distance 2, then adds C at distance 3, then merges D with E at distance 4 and joins the two groups at distance 5.",
          ],
        },
        {
          heading: "Chaining, compactness and irreversibility",
          bullets: [
            "Single link can suffer from **chaining**, where a long chain of points is merged into one cluster because only one close pair is needed.",
            "Complete link produces more **compact** clusters, while average link gives a balance between the two extremes.",
            "Once a merge or split is performed it **cannot be undone**, which is both the efficiency and the weakness of hierarchical clustering.",
          ],
        },
      ],
      formula:
        "Single link: d(Cᵢ, Cⱼ) = min{d(a, b) : a ∈ Cᵢ, b ∈ Cⱼ}\nComplete link: d(Cᵢ, Cⱼ) = max{d(a, b) : a ∈ Cᵢ, b ∈ Cⱼ}\nAverage link: d(Cᵢ, Cⱼ) = average of all pairwise distances",
      table: {
        head: ["Linkage", "Merge 1", "Merge 2", "Merge 3", "Merge 4"],
        rows: [
          ["Single", "2", "3", "4", "5"],
          ["Complete", "2", "4", "6", "11"],
          ["Average", "2", "4", "4.5", "8.17"],
        ],
      },
      note:
        "Distance matrix: AB = 2, AC = 6, AD = 11, AE = 9, BC = 3, BD = 9, BE = 8, CD = 7, CE = 5, DE = 4.",
      diagrams: ["dendrogram"],
    },
    {
      id: "u4-dbscan",
      question:
        "Explain density-based clustering and the DBSCAN algorithm with core, border and noise points.",
      marks: 10,
      freq: 10,
      papers: "DBSCAN or density-based clustering appears in 10 of 12 papers.",
      sections: [
        {
          heading: "Idea and parameters",
          bullets: [
            "**Density-based clustering** treats a cluster as a dense region of objects that is separated from other dense regions by sparse regions.",
            "Unlike partitioning methods, density-based methods can find clusters of **arbitrary shape** and can handle **noise**.",
            "**DBSCAN** has two parameters: **ε (eps)**, the neighbourhood radius, and **MinPts**, the minimum number of points required for a dense region.",
            "The **ε-neighbourhood** of a point p is the set of points whose distance from p is at most ε.",
          ],
        },
        {
          heading: "Core, border and noise points",
          bullets: [
            "A **core point** has at least **MinPts** points inside its ε-neighbourhood, including itself.",
            "A **border point** has fewer than MinPts points in its neighbourhood but lies within ε of a core point.",
            "A **noise point** is neither a core point nor a border point, so DBSCAN treats it as an outlier.",
          ],
        },
        {
          heading: "Density reachability",
          bullets: [
            "A point q is **directly density-reachable** from p when p is a core point and q lies in p's ε-neighbourhood.",
            "A point q is **density-reachable** from p when there is a chain of core points from p to q in which each point lies within ε of the next.",
            "Two points are **density-connected** when a third point exists from which both are density-reachable.",
          ],
        },
        {
          heading: "Algorithm, strengths and limitation",
          bullets: [
            "The algorithm picks an unvisited point, and if it is a core point it creates a new cluster and expands it through all density-reachable points.",
            "If the unvisited point is not a core point, it is temporarily marked as noise and may later become a border point of an existing cluster.",
            "DBSCAN does not need the number of clusters **k** in advance and is robust to outliers.",
            "DBSCAN struggles when clusters have **very different densities**, because one global ε and MinPts pair may not fit all clusters.",
          ],
        },
      ],
      formula:
        "Nε(p) = {q ∈ D : dist(p, q) ≤ ε}\nCore point: |Nε(p)| ≥ MinPts\nCluster: a maximal set of density-connected points",
      table: {
        head: ["Point type", "Points in ε-neighbourhood", "Belongs to cluster?"],
        rows: [
          ["Core", "At least MinPts", "Yes, starts or expands a cluster"],
          ["Border", "Fewer than MinPts, but near a core point", "Yes, edge of a cluster"],
          ["Noise", "Fewer than MinPts and not near a core point", "No, treated as an outlier"],
        ],
      },
      walkthrough: "dbscan",
    },
    {
      id: "u4-kmeans",
      question:
        "Explain the k-means clustering algorithm with a suitable example and discuss its strengths and limitations.",
      marks: 10,
      freq: 9,
      papers: "K-means numericals and theory appear in 9 of 12 papers.",
      sections: [
        {
          heading: "The k-means algorithm",
          bullets: [
            "**K-means** is a partitioning method that divides n objects into k clusters so that objects within a cluster are similar.",
            "The algorithm first chooses **k** and selects k initial cluster centres, either randomly or from the data.",
            "Every object is assigned to the cluster whose centre is **closest**, usually by **Euclidean distance**.",
            "Each centre is then **recomputed** as the mean of the objects currently assigned to that cluster.",
            "The assignment and update steps are repeated until the cluster membership or the centroids stop changing.",
          ],
        },
        {
          heading: "Worked example with eight points",
          bullets: [
            "For a worked example, use eight points with k = 2 and initial centres **c1 = (1,1)** and **c2 = (2.5,1.8)**.",
            "In the first assignment, P1 and P2 join c1 and P3 through P8 join c2, giving means **c1 = (1.25,1.25)** and **c2 = (3.92,2.95)**.",
            "In the second assignment, P1 through P4 join c1, while P5 through P8 remain with c2.",
            "The new means become **c1 = (1.75,1.325)** and **c2 = (4.75,3.725)**.",
            "The third assignment produces the same clusters, so the algorithm **converges** with clusters {P1,P2,P3,P4} and {P5,P6,P7,P8}.",
          ],
        },
        {
          heading: "Strengths and limitations",
          bullets: [
            "K-means is **simple and fast**, and it works well when the clusters are compact and roughly spherical.",
            "K-means requires **k in advance**, depends on the initial centres and can get stuck in a **local optimum**.",
            "Because the centre is a **mean**, outliers pull it away and can distort the clusters.",
            "The quality of a k-means result is often measured by the **sum of squared errors** within the clusters.",
          ],
        },
      ],
      formula:
        "SSE = Σⱼ Σ_{x ∈ Cⱼ} dist(x, cⱼ)²\nNew centre: cⱼ = (1/|Cⱼ|) × Σ_{x ∈ Cⱼ} x",
      table: {
        head: ["Round", "Cluster 1 mean", "Cluster 2 mean", "Change"],
        rows: [
          ["Start", "(1.00, 1.00)", "(2.50, 1.80)", "Initial centres"],
          ["1", "(1.25, 1.25)", "(3.92, 2.95)", "Assign and update"],
          ["2", "(1.75, 1.33)", "(4.75, 3.73)", "P3 and P4 move to C1"],
          ["3", "(1.75, 1.33)", "(4.75, 3.73)", "No change, stop"],
        ],
      },
      walkthrough: "kmeans",
    },
    {
      id: "u4-outlier",
      question:
        "Explain outlier analysis and the methods used for outlier detection.",
      marks: 10,
      freq: 7,
      papers: "Outliers and outlier detection appear in 7 of 12 papers.",
      sections: [
        {
          heading: "What an outlier is and why it matters",
          bullets: [
            "An **outlier** is a data object that deviates significantly from the rest of the data, as if it were generated by a different mechanism.",
            "Outliers are important because they may represent **fraud**, **intrusions**, **faults** or rare but valuable events.",
          ],
        },
        {
          heading: "Types of outliers",
          bullets: [
            "A **point outlier** is a single object that is far from the rest of the data.",
            "A **collective outlier** is a group of objects that deviate together even though each object may look normal alone.",
            "A **contextual outlier** is unusual only within a particular context, such as a temperature of 30 °C in winter.",
            "**Univariate outliers** involve one attribute, while **multivariate outliers** involve several attributes together.",
          ],
        },
        {
          heading: "Detection methods",
          bullets: [
            "The **Z-score method** assumes a normal distribution and flags a value when its absolute Z-score is greater than a threshold such as 3.",
            "The **IQR method** uses the interquartile range and flags values below **Q1 − 1.5 × IQR** or above **Q3 + 1.5 × IQR**.",
            "**Density-based detection** treats points that are neither core nor border points in DBSCAN as noise and therefore as outliers.",
            "**Distance-based detection** flags a point when at least a fraction of the other points lie farther than a chosen distance from it.",
            "**Deviation-based detection** compares an object with its neighbours and measures how much its values differ from the expected values.",
          ],
        },
        {
          heading: "Applications and caution",
          bullets: [
            "Outlier detection is applied in **fraud detection**, **network intrusion detection**, **medical monitoring** and **manufacturing fault detection**.",
            "One must be careful not to delete every outlier, because a genuine rare event can be more valuable than the normal pattern.",
          ],
        },
      ],
      formula:
        "Z-score: z = (x − μ) / σ, flag when |z| > 3\nIQR = Q3 − Q1\nLower fence = Q1 − 1.5 × IQR\nUpper fence = Q3 + 1.5 × IQR",
    },
    {
      id: "u4-kmedoids",
      question:
        "Explain k-medoids clustering (PAM) with an example and compare it with k-means.",
      marks: 10,
      freq: 6,
      papers: "K-medoids or PAM appears in 6 of 12 papers.",
      sections: [
        {
          heading: "Medoids and the PAM procedure",
          bullets: [
            "**K-medoids** is a partitioning method in which each cluster is represented by an actual data point called a **medoid**.",
            "The medoid is the most centrally located object of its cluster, so it is less affected by extreme values than a mean.",
            "The algorithm starts by selecting **k objects** as the initial medoids.",
            "Every remaining object is assigned to the nearest medoid, and the cost is the sum of the distances from each object to its medoid.",
            "A swap replaces one medoid with a non-medoid object, and the new total cost is computed.",
            "The swap is **kept** when the new cost is lower than the old cost, and otherwise it is **undone**.",
            "The process repeats until no swap improves the cost.",
          ],
        },
        {
          heading: "The ten-point worked example",
          bullets: [
            "For the ten-point example, medoids (3,4) and (7,3) give cost **22**.",
            "Swapping (7,3) for (7,4) gives cost **20**, so that swap is kept.",
            "Trying (6,4) gives cost **22**, which is higher, so it is rejected and the medoids remain (3,4) and (7,4).",
          ],
        },
        {
          heading: "Comparison with k-means",
          bullets: [
            "K-medoids is more **robust to outliers** than k-means because a medoid must be a real data point.",
            "K-medoids is more expensive on large data sets because many swaps and distance calculations may be required.",
            "The Manhattan distance is often used in k-medoids, although other distance measures can also be applied.",
          ],
        },
      ],
      formula:
        "Manhattan distance: d(P, Q) = |x_P − x_Q| + |y_P − y_Q|\nCost = Σ distance(point, nearest medoid)\nKeep the swap when C_new < C_old",
      table: {
        head: ["Aspect", "K-means", "K-medoids"],
        rows: [
          ["Centre", "Mean of the cluster", "Actual data point (medoid)"],
          ["Outliers", "Sensitive", "Robust"],
          ["Cost", "Generally cheaper", "More expensive on large data"],
          ["Cluster shape", "Compact and round", "More flexible"],
        ],
      },
    },
    {
      id: "u4-families",
      question:
        "Explain the categorization of major clustering methods with examples of each family.",
      marks: 10,
      freq: 5,
      papers: "Categorization of clustering methods appears in 5 of 12 papers.",
      sections: [
        {
          heading: "The five major families",
          bullets: [
            "Clustering methods are broadly categorized as **partitioning**, **hierarchical**, **density-based**, **grid-based** and **model-based** methods.",
            "**Partitioning methods** divide n objects into k groups and improve the partition by moving objects between groups, and examples are **k-means** and **k-medoids**.",
            "**Hierarchical methods** build a tree of clusters, with **AGNES** merging bottom-up and **DIANA** splitting top-down.",
            "**Density-based methods** grow clusters from dense regions and can find arbitrary shapes, and examples are **DBSCAN**, **OPTICS** and **DENCLUE**.",
            "**Grid-based methods** quantise the data space into cells and cluster the cells, and examples are **STING**, **WaveCluster** and **CLIQUE**.",
            "**Model-based methods** fit a mathematical model to the data and choose the best fit, and examples are **EM**, **COBWEB** and **self-organizing maps**.",
          ],
        },
        {
          heading: "Strengths and weaknesses",
          bullets: [
            "Partitioning methods are fast but often assume compact, spherical clusters.",
            "Hierarchical methods give a dendrogram that shows relationships at several granularities but cannot undo a merge or split.",
            "Density-based methods handle noise well but are sensitive to the choice of ε and MinPts.",
            "Grid-based methods are fast on large data because their cost depends on the number of cells rather than the number of objects.",
            "Model-based methods can capture complex cluster shapes but can be computationally expensive.",
          ],
        },
      ],
      table: {
        head: ["Family", "Core idea", "Examples"],
        rows: [
          ["Partitioning", "Split n objects into k groups", "K-means, K-medoids"],
          ["Hierarchical", "Build a tree of clusters", "AGNES, DIANA"],
          ["Density-based", "Grow regions of high density", "DBSCAN, OPTICS, DENCLUE"],
          ["Grid-based", "Cluster cells of a grid", "STING, WaveCluster, CLIQUE"],
          ["Model-based", "Fit a mathematical model", "EM, COBWEB, SOM"],
        ],
      },
    },
    {
      id: "u4-grid",
      question: "Explain grid-based clustering methods with an example of STING.",
      marks: 10,
      freq: 4,
      papers: "Grid-based clustering and STING appear in 4 of 12 papers.",
      sections: [
        {
          heading: "Grid-based idea",
          bullets: [
            "A **grid-based method** divides the data space into a finite number of cells that form a grid and then clusters the cells.",
            "Grid-based clustering is fast because its time depends on the number of grid cells rather than on the number of data objects.",
          ],
        },
        {
          heading: "STING: hierarchical statistical cells",
          bullets: [
            "**STING** divides the space into rectangular cells arranged in a hierarchy, where each higher-level cell is split into smaller cells at the next level.",
            "Each cell stores **statistical information** such as count, mean, standard deviation, minimum, maximum and the distribution type.",
            "A query is answered **top-down**: the algorithm starts at a high level, keeps only relevant cells and descends into their children.",
            "Because the statistics are precomputed, STING is **query-independent** and easy to parallelise.",
          ],
        },
        {
          heading: "WaveCluster and CLIQUE",
          bullets: [
            "**WaveCluster** applies wavelet transforms to the grid cells and finds dense regions in the transformed space.",
            "**CLIQUE** combines grid-based and density-based ideas and can find clusters in subspaces of high-dimensional data.",
          ],
        },
        {
          heading: "Resolution trade-off",
          bullets: [
            "Grid-based methods scale well, but the grid resolution affects both accuracy and speed.",
            "A coarse grid may merge separate clusters, while a fine grid may create too many cells and become expensive.",
          ],
        },
      ],
      table: {
        head: ["Method", "Main idea", "Special feature"],
        rows: [
          ["STING", "Hierarchical statistical cells", "Top-down query answering"],
          ["WaveCluster", "Wavelet transform on cells", "Multiresolution clustering"],
          ["CLIQUE", "Density in grid subspaces", "High-dimensional subspace clusters"],
        ],
      },
    },
    {
      id: "u4-agglo-divisive",
      question:
        "Differentiate agglomerative and divisive hierarchical clustering.",
      marks: 5,
      freq: 3,
      papers: "Agglomerative versus divisive clustering appears in 3 of 12 papers.",
      answer: [
        "**Agglomerative clustering** is a bottom-up method that starts with each object as a separate cluster.",
        "It repeatedly merges the two closest clusters until one cluster remains or a stopping condition is reached.",
        "**AGNES** is the standard agglomerative algorithm.",
        "**Divisive clustering** is a top-down method that starts with one cluster containing all objects.",
        "It repeatedly splits a cluster until every object is alone or a stopping condition is reached.",
        "**DIANA** is the standard divisive algorithm.",
        "Agglomerative methods are more common and usually less expensive, while divisive methods can be more accurate for large and complex data.",
        "Both methods produce a **dendrogram** and cannot undo a previous merge or split.",
        "The split in DIANA usually starts with the cluster that has the largest **diameter**.",
      ],
      table: {
        head: ["Aspect", "Agglomerative", "Divisive"],
        rows: [
          ["Direction", "Bottom-up", "Top-down"],
          ["Start", "One cluster per object", "One cluster with all objects"],
          ["Operation", "Merge closest clusters", "Split a cluster"],
          ["Example", "AGNES", "DIANA"],
        ],
      },
    },
    {
      id: "u4-basics",
      question:
        "Define cluster analysis, explain its data structures and list its applications.",
      marks: 5,
      freq: 3,
      papers: "Cluster analysis definitions, types of data and applications appear in 3 of 12 papers as Part-A and 5-mark questions.",
      answer: [
        "**Cluster analysis** groups a set of data objects into clusters so that objects within a cluster are highly similar and objects in different clusters are dissimilar.",
        "Clustering is **unsupervised learning**, because no class labels are provided during the process.",
        "A **cluster** is a collection of objects that are similar to one another and dissimilar to objects in other clusters.",
        "A **data matrix** stores objects by attributes, with rows representing objects and columns representing attributes.",
        "A **dissimilarity matrix** stores objects by objects, where entry d(i,j) is the difference between objects i and j.",
        "A dissimilarity matrix has **zero** on its diagonal and is **symmetric**, so only its lower triangle is needed.",
        "Common proximity measures are **Euclidean distance**, **Manhattan distance**, **Minkowski distance**, **cosine similarity** and **Jaccard similarity**.",
        "Clustering is used for **market segmentation**, **document grouping**, **image segmentation**, **customer profiling** and **outlier detection**.",
        "Clustering is also used as a preprocessing step before classification or association mining.",
      ],
    },
    {
      id: "u4-proximity",
      question:
        "Explain proximity measures used in clustering: Euclidean, Manhattan, Minkowski, cosine and Jaccard.",
      marks: 5,
      freq: 2,
      papers: "Distance and dissimilarity measures appear in 2 of 12 papers.",
      answer: [
        "A **proximity measure** quantifies how similar or how different two data objects are.",
        "**Euclidean distance** is the straight-line distance between two points and is the most common measure for continuous attributes.",
        "**Manhattan distance** adds the absolute differences along each coordinate and is also called city-block distance.",
        "**Minkowski distance** generalises both Euclidean and Manhattan distance through the parameter h.",
        "**Cosine similarity** measures the angle between two vectors and is widely used for text and document data.",
        "**Jaccard similarity** compares two sets by dividing the size of their intersection by the size of their union.",
        "Nominal attributes use a difference of 0 for equal values and 1 for different values.",
        "Ordinal attributes are first converted to ranks and then treated as interval-scaled values between 0 and 1.",
        "Attributes should be normalised before distance is computed so that large-range attributes do not dominate.",
        "The choice of proximity measure must match the data type and the meaning of similarity in the application.",
      ],
      formula:
        "Euclidean: d = √(Σ (xᵢ − yᵢ)²)\nManhattan: d = Σ |xᵢ − yᵢ|\nMinkowski: d = (Σ |xᵢ − yᵢ|ʰ)^(1/ʰ)\nCosine: cos(X,Y) = (X · Y) / (||X|| × ||Y||)\nJaccard: |A ∩ B| / |A ∪ B|",
    },
    {
      id: "u4-cluster-preprocessing",
      question:
        "How does cluster analysis help in preprocessing data for association mining?",
      marks: 5,
      freq: 1,
      papers: "Asked in KR20 April/May 2024 as a 5-mark question.",
      answer: [
        "Cluster analysis is often used before association mining to **partition**, **summarise** and **clean** the data.",
        "It can group similar transactions or records into segments, so that association rules are mined separately for each meaningful group.",
        "Clustering helps identify and isolate **outliers**, which could otherwise create misleading rare association rules.",
        "It supports **data reduction**, because a cluster can be represented by its centre or medoid instead of all its members.",
        "It can **discretise** continuous values by forming groups that later act as items in association mining.",
        "Clustering can reveal natural **item groups** so that mining can focus on a smaller and more meaningful search space.",
        "The main risk is that clusters may hide associations that cross cluster boundaries, so results must be interpreted carefully.",
      ],
    },
  ],
};
