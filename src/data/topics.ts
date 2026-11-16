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
      id: "definition-objectives",
      title: "Definition, Objectives, Precision & Recall",
      short: "Definition & objectives",
      description:
        "What an Information Retrieval System is, the four overhead steps it must minimise, and the precision/recall pair with the exact 100% conditions.",
      mustWrite: [
        "An **IRS** performs storage, retrieval and maintenance of information and minimises the overhead of locating needed information.",
        "**Precision** = retrieved relevant / total retrieved, and **recall** = retrieved relevant / possible relevant.",
        "**100% precision** means every retrieved item is relevant, and **100% recall** means every relevant item is retrieved.",
      ],
      questions: ["u1-definition-objectives"],
    },
    {
      id: "functional-processes",
      title: "The Four Major Functional Processes",
      short: "Four functional processes",
      description:
        "Item normalization, selective dissemination, document database search and index database search with automatic file build, drawn as one integrated architecture.",
      mustWrite: [
        "The four processes are **item normalization**, **SDI**, **document database search** and **index database search**.",
        "**Automatic file build** supports index files and produces candidate index records.",
        "**SDI** is push, while document and index search are pull.",
      ],
      questions: ["u1-processes"],
      diagrams: ["processes"],
    },
    {
      id: "normalization-pipeline",
      title: "Item Normalization Pipeline",
      short: "Item normalization",
      description:
        "Standardize input, zone the item, identify processing tokens, apply the stop algorithm, characterize tokens, stem and create the searchable structure.",
      mustWrite: [
        "**Zoning** splits an item into title, author, abstract, main text, conclusion and references.",
        "The three token classes are **valid word symbols**, **inter-word symbols** and **special processing symbols**.",
        "**Stemming** reduces variants to one stem and improves recall at the cost of precision.",
      ],
      questions: ["u1-normalization"],
      diagrams: ["normalization"],
    },
    {
      id: "search-capabilities",
      title: "Search Capabilities",
      short: "Search capabilities",
      description:
        "Query term sets, Boolean logic, proximity, phrases, fuzzy search, masking, ranges, thesaurus expansion and natural language queries.",
      mustWrite: [
        "**Boolean precedence** is NOT, then AND, then OR.",
        "**Proximity and phrase search** raise precision, while **thesaurus expansion** raises recall.",
        "**Term masking** uses fixed or variable wildcards and can add noise.",
      ],
      questions: ["u1-search-capabilities"],
    },
    {
      id: "browse-misc",
      title: "Browse & Miscellaneous Capabilities",
      short: "Browse & misc",
      description:
        "Interactive browsing, ranking, zoning, highlighting, vocabulary browse, iterative search, canned queries and SDI.",
      mustWrite: [
        "**Browsing** is interactive and relies on immediate feedback from the system.",
        "**Vocabulary browse** lists unique tokens in alphabetical order with item counts and supports spelling correction.",
        "**Iterative search** refines the previous result instead of starting from scratch.",
      ],
      questions: ["u1-browse-misc"],
    },
    {
      id: "irs-dbms",
      title: "IRS vs DBMS & Data vs Information Retrieval",
      short: "IRS vs DBMS",
      description:
        "Structured data versus ambiguous information, exact matching versus iterative best-match search, and the practical integration of DBMS and IRS.",
      mustWrite: [
        "A **DBMS** handles structured data and exact requests, while an **IRS** handles information items and best-match search.",
        "Language **diversity and ambiguity** make information retrieval iterative.",
        "The **INQUIRE DBMS** is an early integrated database and information retrieval system.",
      ],
      questions: ["u1-irs-dbms"],
    },
    {
      id: "digital-libraries",
      title: "Digital Libraries & Data Warehouses",
      short: "Digital libraries & warehouses",
      description:
        "Networked digital libraries, library software and standards, data warehouses, data marts, OLAP and the overlap with IRS.",
      mustWrite: [
        "A **digital library** supports search and display of items from organized collections across a network.",
        "A **data warehouse** is subject-oriented, integrated, time-variant and non-volatile.",
        "Digital libraries, warehouses and IRSs all aim to satisfy user information needs.",
      ],
      questions: ["u1-digital-libraries"],
    },
    {
      id: "index-files",
      title: "Public/Private Index Files & Database Searches",
      short: "Index files & DB search",
      description:
        "Public and private index files, document database search, index database search, combined file search and multimedia database search.",
      mustWrite: [
        "**Public index files** are maintained by library staff and index every item.",
        "**Private index files** reference a small user-specific subset and improve precision.",
        "A **combined file search** searches the index and then the referenced items.",
      ],
      questions: ["u1-index-files"],
    },
  ],
  unit2: [
    {
      id: "cataloging-indexing",
      title: "Cataloguing & the Indexing Process",
      short: "Cataloguing & indexing",
      description:
        "Author, title and subject catalogues; indexing objectives; text-processing phases; exhaustivity, specificity, pre-coordination and linkages.",
      mustWrite: [
        "The four catalogue types are **author**, **title**, **author/title** and **subject**.",
        "**Exhaustivity** is how many concepts are indexed, and **specificity** is how precise each term is.",
        "**Pre-coordination** fixes term relationships at index time, while **post-coordination** combines terms at search time.",
      ],
      questions: ["u2-indexing-process"],
    },
    {
      id: "automatic-indexing",
      title: "Automatic Indexing & Its Classes",
      short: "Automatic indexing",
      description:
        "Weighted and unweighted indexing, statistical and natural-language indexing, concept indexing, hypertext linkage indexing and the data flow.",
      mustWrite: [
        "The four classes are **statistical**, **natural language**, **concept** and **hypertext linkage** indexing.",
        "**Weighted indexing** normalizes term values between 0 and 1 and ranks results.",
        "The data flow ends with **create searchable data structure** and **create hit list**.",
      ],
      questions: ["u2-automatic-indexing"],
    },
    {
      id: "information-extraction",
      title: "Information Extraction & Summarization",
      short: "Information extraction",
      description:
        "Fact extraction into structured fields, automatic file build, extraction precision and recall, overgeneration, fallout and summarization.",
      mustWrite: [
        "The two extraction processes are **facts into structured fields** and **text into a summary**.",
        "**Automatic file build** produces candidate index records.",
        "**Overgeneration** measures irrelevant extracted information, and **fallout** measures incorrect slot fillers.",
      ],
      questions: ["u2-information-extraction"],
    },
    {
      id: "stemming",
      title: "Stemming Algorithms & Porter Rules",
      short: "Stemming & Porter",
      description:
        "The purpose of stemming, table-lookup, Porter, dictionary/K-stem and successor stemmers, plus the full Porter rule walkthrough.",
      mustWrite: [
        "**Stemming** raises recall, reduces diversity and increases efficiency but can reduce precision.",
        "The **Porter measure m** is the number of VC sequences in **C(VC)ᵐV**.",
        "The four Porter conditions are ***<X>**, ***v***, ***d** and ***o**.",
      ],
      questions: ["u2-stemming"],
      walkthroughs: ["porter"],
    },
    {
      id: "inverted-file",
      title: "Inverted File Structure",
      short: "Inverted file",
      description:
        "Document file, dictionary, inversion lists, posting-list intersection, B-tree dictionaries and the strengths and limits of inversion.",
      mustWrite: [
        "The three files are the **document file**, **dictionary** and **inversion lists**.",
        "The **dictionary** stores term, document frequency and a pointer to the posting list.",
        "**Computer AND Memory** intersects [1,3,4] and [1,2,4] to give [1,4].",
      ],
      questions: ["u2-inverted-file"],
      diagrams: ["inverted"],
    },
    {
      id: "ngram",
      title: "N-gram Data Structure",
      short: "N-grams",
      description:
        "Fixed-length character fragments, bigram and trigram examples, the n-gram count formula and the semantic weakness of n-grams.",
      mustWrite: [
        "An **n-gram** is a fixed-length consecutive series of n characters.",
        "For *sea colony* the bigrams are **se, ea, co, ol, lo, on, ny**.",
        "N-grams have **no semantic meaning** and are a poor representation of concepts.",
      ],
      questions: ["u2-ngram"],
    },
    {
      id: "pat",
      title: "PAT Tree & Sistrings",
      short: "PAT tree",
      description:
        "Practical Algorithm To Retrieve Information Coded in Alphanumerics, sistrings, bit-position branching and the PAT tree walkthrough.",
      mustWrite: [
        "A **sistring** is a semi-infinite suffix starting at a text position.",
        "A PAT tree branches **0 left, 1 right** and stores the **bit position** at each internal node.",
        "A text of n characters has **n leaves** and at most **n − 1** internal nodes.",
      ],
      questions: ["u2-pat"],
      walkthroughs: ["pat"],
    },
    {
      id: "signature",
      title: "Signature File Structure & Superimposed Coding",
      short: "Signature files",
      description:
        "Word signatures, ORed block signatures, query templates, false drops and the exact PYQ text with h(made) = 001100.",
      mustWrite: [
        "A **word signature** is a fixed-length code with a fixed number of 1 bits chosen by a hash function.",
        "The **block signature** is the bitwise OR of all word signatures.",
        "A **false drop** passes the bit test even though the item does not contain the query words.",
      ],
      questions: ["u2-signature"],
      walkthroughs: ["signature"],
    },
    {
      id: "hypertext-xml",
      title: "Hypertext, XML & Hidden Markov Models",
      short: "Hypertext & XML",
      description:
        "Nodes and links, HTML anchor tags, XML DTD/DOM/XSL, the graph-versus-tree contrast and the HMM noisy-channel model.",
      mustWrite: [
        "Hypertext is a **graph of nodes and links**, while XML is a **hierarchical element tree**.",
        "The HTML link tag is `<a href=\"URL\">anchor text</a>`.",
        "An **HMM** uses Bayes' rule to model the noisy channel between query and relevant documents.",
      ],
      questions: ["u2-hypertext-xml"],
      diagrams: ["hypertext"],
    },
  ],
  unit3: [
    {
      id: "indexing-classes",
      title: "Classes of Automatic Indexing",
      short: "Automatic indexing classes",
      description:
        "Statistical, natural language, concept and hypertext linkage indexing, with the indexing data flow and the benefit of each class.",
      mustWrite: [
        "The four classes are **statistical**, **natural language**, **concept** and **hypertext linkage** indexing.",
        "**Statistical** indexing uses frequencies, **NLP** uses syntax and semantics, and **concept** indexing generalizes to concepts.",
        "**Hypertext linkage** indexing adds a third retrieval dimension through links.",
      ],
      questions: ["u3-indexing-classes"],
    },
    {
      id: "statistical-indexing",
      title: "Statistical Indexing & Weighting",
      short: "Statistical indexing",
      description:
        "WF, DF, IDF, logarithmic TF, TF-IDF, vector weighting, probabilistic log odds, Bayesian models and the problems of weighting.",
      mustWrite: [
        "**IDF = log(N / DF)** and **TF-IDF = TF × log(N / DF)**.",
        "**Logarithmic TF** is **1 + log(tf)** and dampens very large counts.",
        "The **Probability Ranking Principle** ranks by decreasing probability of relevance.",
      ],
      questions: ["u3-statistical-indexing"],
    },
    {
      id: "nlp-concept",
      title: "Natural Language & Concept Indexing",
      short: "NLP & concept",
      description:
        "Semantic indexing, cohesion, phrase generation, thematic representations, Convectis, latent semantic indexing and the cost of semantics.",
      mustWrite: [
        "**NLP** adds semantic information to statistical indexing and improves precision.",
        "**Cohesion = Size-factor × PAIR-FREQ / (TOTFₖ × TOTFₕ)**.",
        "**Concept indexing** generalizes words to concepts and improves recall.",
      ],
      questions: ["u3-nlp-concept"],
    },
    {
      id: "clustering-basics",
      title: "Clustering: Process, Types & Guidelines",
      short: "Clustering basics",
      description:
        "Term, document and item clustering, the four clustering steps, four guidelines for good classes and why clustering helps retrieval.",
      mustWrite: [
        "**Term clustering** builds a thesaurus for query expansion, and **document clustering** supports result-set expansion.",
        "The four steps are **domain → attributes → relationships → algorithm**.",
        "Classes should have a clear meaning, similar sizes and no dominating object.",
      ],
      questions: ["u3-clustering"],
    },
    {
      id: "thesaurus",
      title: "Thesaurus Generation: KWOC, KWIC, KWAC",
      short: "Thesaurus generation",
      description:
        "Word relationships, manual KWOC/KWIC/KWAC listings, automatic term clustering and the manual-versus-automatic comparison.",
      mustWrite: [
        "**KWOC** shows term, frequency and item IDs; **KWIC** shows the term in a rotated phrase; **KWAC** shows the keyword plus its context.",
        "**Collocation** links words that co-occur, and **paradigmatic** links words with the same semantic base.",
        "Automatic thesaurus classes have **no natural names**.",
      ],
      questions: ["u3-thesaurus"],
    },
    {
      id: "item-clustering",
      title: "Item Clustering & Term-Term Matrix",
      short: "Item clustering",
      description:
        "The item similarity formula, the threshold rule and the exact JNTUH Feb-2023 6 × 6 matrix solved with clique, star and single-link clustering.",
      mustWrite: [
        "**SIM(Itemᵢ, Itemⱼ) = Σₖ (termᵢ,ₖ)(termⱼ,ₖ)**.",
        "The default threshold is **10**: values of 10 or more become 1.",
        "Cliques are **{T1,T5,T6}** and **{T2,T3,T4}**, star classes are **{T1,T2,T5,T6}** and **{T2,T3,T4}**, and single link gives **one class**.",
      ],
      questions: ["u3-term-matrix"],
      walkthroughs: ["termcluster"],
    },
    {
      id: "hierarchy",
      title: "Hierarchy of Clusters & Dendrograms",
      short: "Cluster hierarchy",
      description:
        "HAC and divisive clustering, the objectives of a hierarchy, reading a dendrogram and the cost of hierarchical methods.",
      mustWrite: [
        "**HAC** is bottom-up and **divisive** is top-down.",
        "A **dendrogram** is the tree picture of the hierarchy, and a cut gives the clusters at that height.",
        "A hierarchy reduces search overhead, gives a visual space and expands retrieval.",
      ],
      questions: ["u3-hierarchy"],
      diagrams: ["dendrogram"],
    },
    {
      id: "hypertext-linkages",
      title: "Hypertext Linkage Indexing",
      short: "Hypertext linkages",
      description:
        "Virtual concept threads between items, the three internet finding mechanisms and the benefits and risks of link indexing.",
      mustWrite: [
        "**Hypertext linkage indexing** adds a third retrieval dimension through virtual concept threads.",
        "The three internet mechanisms are **manual indexes**, **automatic indexes with crawlers** and **hypertext linkage indexes**.",
        "**Link spam** can distort ranking when links are trusted blindly.",
      ],
      questions: ["u3-hypertext-linkages"],
    },
  ],
  unit4: [
    {
      id: "search-statements",
      title: "Search Statements & Three Levels of Binding",
      short: "Search statements",
      description:
        "User, system and collection binding, the role of Boolean and natural language, and why each level is necessary.",
      mustWrite: [
        "The three levels are **user vocabulary**, **system meta language** and **collection statistics**.",
        "**Statistical systems** weight terms by frequency, **NL systems** parse syntax and **concept systems** map to concepts.",
        "Longer search statements generally make it easier to find relevant items.",
      ],
      questions: ["u4-search-statements"],
    },
    {
      id: "similarity",
      title: "Similarity Measures: Cosine, Dice & Jaccard",
      short: "Similarity measures",
      description:
        "Simple term product, cosine normalization, Dice, Jaccard, dissimilarity and the threshold that decides the hit file.",
      mustWrite: [
        "**Cosine = Σdᵢqᵢ / (√Σdᵢ² · √Σqᵢ²)**.",
        "**Dice = 2Σdᵢqᵢ / (Σdᵢ² + Σqᵢ²)** and **Jaccard = Σdᵢqᵢ / (Σdᵢ² + Σqᵢ² − Σdᵢqᵢ)**.",
        "**Jaccard ≤ Dice** for the same vectors, and dissimilarity = 1 − similarity.",
      ],
      questions: ["u4-similarity"],
    },
    {
      id: "ranking",
      title: "Ranking Algorithms & Thresholds",
      short: "Ranking",
      description:
        "Similarity, TF-IDF and probabilistic ranking, with the precision/recall trade-off of a high or low threshold.",
      mustWrite: [
        "**Ranking** orders the hit file by estimated relevance, and the **threshold** decides membership.",
        "**TF-IDF** gives rare query terms more weight than common ones.",
        "A high threshold raises precision, while a low threshold raises recall.",
      ],
      questions: ["u4-ranking"],
    },
    {
      id: "relevance-feedback",
      title: "Relevance Feedback & Vector Shift",
      short: "Relevance feedback",
      description:
        "Positive and negative feedback, the Rocchio-style formula, vector movement in term space and the ambiguities of judging relevance.",
      mustWrite: [
        "**Q_new = Q_old + α·centroid(relevant) − β·centroid(non-relevant)**.",
        "**Positive feedback** raises recall and **negative feedback** raises precision.",
        "Hypertext boundaries make relevance feedback ambiguous because a linked item is not clearly part of the original item.",
      ],
      questions: ["u4-relevance-feedback"],
      diagrams: ["feedback"],
    },
    {
      id: "sdi",
      title: "Selective Dissemination of Information",
      short: "SDI / dissemination",
      description:
        "Push versus pull, profiles, mail files, LMDS and the difference between SDI and ad hoc search.",
      mustWrite: [
        "**SDI** is a push system that compares new items with standing profiles.",
        "A **profile** contains a broad search statement and a list of mail files.",
        "**LMDS** was an early dissemination system designed for thousands of profiles.",
      ],
      questions: ["u4-sdi"],
    },
    {
      id: "weighted-boolean",
      title: "Weighted Searches of Boolean Systems",
      short: "Weighted Boolean",
      description:
        "Why strict Boolean lacks ranking, fuzzy set membership, min/max operators and the practical use of weighted Boolean search.",
      mustWrite: [
        "Strict **AND** is too restrictive and strict **OR** is too general.",
        "Fuzzy **AND = min**, fuzzy **OR = max** and fuzzy **NOT = 1 − membership**.",
        "**Zadeh** introduced fuzzy sets in 1965.",
      ],
      questions: ["u4-weighted-boolean"],
    },
    {
      id: "internet-agents",
      title: "Internet, Hypertext & Intelligent Agents",
      short: "Internet & agents",
      description:
        "Lycos versus AltaVista, URL storage, hypertext search and the six characteristics of intelligent agents.",
      mustWrite: [
        "**Lycos** indexes home pages, while **AltaVista** indexes all text at a site.",
        "The six agent characteristics are **autonomy, communication, cooperation, reasoning, adaptive behaviour and trustworthiness**.",
        "Hypertext search follows links and can display the result as a network diagram.",
      ],
      questions: ["u4-internet-agents"],
    },
    {
      id: "visualization",
      title: "Information Visualization",
      short: "Visualization",
      description:
        "Cognition, perception, Gestalt principles such as proximity and closure, and technologies from cone trees to cityscapes.",
      mustWrite: [
        "**Visualization** transforms information into a visual form that helps the user observe and understand it.",
        "The Gestalt principles are **proximity, similarity, continuity, closure and connectedness**.",
        "Technologies include **cone trees, perspective walls, tree maps, Envision, DCARS and cityscapes**.",
      ],
      questions: ["u4-visualization"],
    },
  ],
  unit5: [
    {
      id: "text-streaming",
      title: "Text Streaming Architecture",
      short: "Text streaming",
      description:
        "Database, term detector, query resolver and user interface, with the immediate-hit advantage of sequential scanning.",
      mustWrite: [
        "The four components are **database**, **term detector**, **query resolver** and **user interface**.",
        "Hits can be shown **as soon as an item matches** instead of waiting for the full search.",
        "Software search struggles with **many terms at once** and **I/O speed**.",
      ],
      questions: ["u5-text-streaming"],
      diagrams: ["hardware"],
    },
    {
      id: "brute-force",
      title: "Brute Force String Matching",
      short: "Brute force",
      description:
        "The simplest matcher, its expected comparison formula, the O(nm) worst case and when it is still useful.",
      mustWrite: [
        "Brute force shifts **one position** after every mismatch and restarts the comparison.",
        "**Nc = c/(c−1)(1 − 1/cᵐ)(n − m + 1) + O(1)**.",
        "The worst case is **O(nm)**, with T = aaa…ah and P = aaah.",
      ],
      questions: ["u5-brute-force"],
    },
    {
      id: "boyer-moore",
      title: "Boyer–Moore & the Exact PYQ Scenario",
      short: "Boyer–Moore",
      description:
        "The looking-glass and character-jump heuristics applied to pattern abcac in text ababdcabcdacabcac.",
      mustWrite: [
        "Boyer–Moore compares **right to left** and uses **bad-character** and **good-suffix** shifts.",
        "The shifts in the PYQ are **5, 5, 2**, followed by a hit at **position 13**.",
        "If the mismatching character is absent, align **P[0] with T[i+1]**.",
      ],
      questions: ["u5-boyer-moore"],
      walkthroughs: ["boyer"],
    },
    {
      id: "kmp",
      title: "Knuth–Morris–Pratt",
      short: "KMP",
      description:
        "The failure function, the jump table and the guarantee that the text pointer never moves backwards.",
      mustWrite: [
        "KMP pre-processes the **pattern**, not the text, into a **failure or jump table**.",
        "After j matches, the pattern shifts by **j − π[j]**.",
        "KMP is **O(n + m)** and never moves backwards in the text.",
      ],
      questions: ["u5-kmp"],
    },
    {
      id: "hardware",
      title: "Hardware Text Search: GESCAN & FDF",
      short: "Hardware search",
      description:
        "Why hardware search exists, its advantages, the GESCAN text array processor and the Fast Data Finder comparator pipeline.",
      mustWrite: [
        "Hardware search eliminates the **index**, which is typically **70%** of item size.",
        "**GESCAN** uses a text array processor with 4 to 128 query processors.",
        "The **Fast Data Finder** is a pipeline of programmable comparator cells.",
      ],
      questions: ["u5-hardware"],
    },
    {
      id: "fsa",
      title: "Finite State Automata & Hardware Term Detection",
      short: "FSA term detector",
      description:
        "The 5-tuple FSA, the transition table for abcac and the state-by-state scan used by hardware term detectors.",
      mustWrite: [
        "An FSA is the 5-tuple **(Q, Σ, δ, q0, F)**.",
        "For pattern abcac, **q0 is the start** and **q5 is accepting**.",
        "The text ababdcabcdacabcac reaches q5 at **position 17**, so the hit starts at position 13.",
      ],
      questions: ["u5-fsa"],
      walkthroughs: ["fsa"],
    },
    {
      id: "evaluation",
      title: "Information System Evaluation & TREC",
      short: "Evaluation & TREC",
      description:
        "Precision, recall, fallout, URR, novelty, coverage, sought recall, response time and the TREC/Cranfield test collections.",
      mustWrite: [
        "**Fallout** = retrieved non-relevant / possible non-relevant.",
        "**URR** compares relevant items found by one algorithm but not by the others.",
        "**TREC** was created by **DARPA and NIST** and uses **user-need** search topics.",
      ],
      questions: ["u5-evaluation"],
    },
    {
      id: "multimedia",
      title: "Multimedia Retrieval: Audio, Graph, Image & Video",
      short: "Multimedia retrieval",
      description:
        "Spoken and non-speech audio, Sagebook graph retrieval, CBIR features and video shots, key frames and motion.",
      mustWrite: [
        "**Speech retrieval** returns a ranked list of spoken documents, and **SUR** retrieves utterances.",
        "**CBIR** uses **colour, texture and shape**, while video adds **motion and spatial-temporal composition**.",
        "Video is split into **shots** represented by **key frames**.",
      ],
      questions: ["u5-multimedia"],
    },
  ],
};

export const allTopics = Object.values(unitTopics).flat();
