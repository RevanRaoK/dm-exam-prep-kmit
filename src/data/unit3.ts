import type { Unit } from "./types";

export const unit3: Unit = {
  id: "unit3",
  roman: "III",
  title: "Unit III · Automatic Indexing & Clustering",
  subtitle:
    "Classes of automatic indexing, statistical indexing and weighting, natural language and concept indexing, clustering, thesaurus generation, item clustering, hierarchy of clusters and hypertext linkages.",
  color: "var(--v-blue)",
  questions: [
    {
      id: "u3-indexing-classes",
      question:
        "Explain the different classes of automatic indexing in detail with their data flow.",
      marks: 10,
      freq: 3,
      papers:
        "Asked in the IRS question bank and the NR20 model paper as 'different classes of automatic indexing'; also Part A in JNTUH Feb 2023 as the basis for concept indexing.",
      sections: [
        {
          heading: "Automatic indexing and its data flow",
          bullets: [
            "**Automatic indexing** is the process of analysing an item to extract the information that will be permanently kept in an index.",
            "It is associated with the generation of the **searchable data structure** for the item.",
            "The indexing process starts with **standardize input**, **logical subsetting (zoning)** and **identify processing tokens**.",
            "It then applies **stop lists**, **characterizes tokens**, **applies stemming** and **creates the searchable data structure**.",
            "The searchable structure updates the document file and later supports the creation of the **hit list**.",
          ],
        },
        {
          heading: "Class 1 · statistical indexing",
          bullets: [
            "**Statistical indexing** uses the frequency of occurrence of processing tokens to calculate a number that indicates the relevance of an item.",
            "It covers the broadest range of indexing techniques and is the most prevalent class in commercial systems.",
            "It stores statistics such as **document frequency** and **term frequency** and uses them to rank the output of a Boolean search.",
            "The main sub-approaches are **vector weighting**, **probabilistic weighting**, the **Bayesian model** and the **neural network model**.",
          ],
        },
        {
          heading: "Class 2 · natural language indexing",
          bullets: [
            "**Natural language indexing** uses semantic information in addition to statistical information to enhance the index.",
            "It performs more complex parsing to identify **phrases**, **syntactic roles** and **discourse semantics**.",
            "The semantic information is extracted by processing the language rather than treating each word as an independent entity.",
            "The simplest output is a set of **phrases** that become indexes to the item, and the strongest output is a **thematic representation**.",
          ],
        },
        {
          heading: "Class 3 · concept indexing",
          bullets: [
            "**Concept indexing** uses the words within an item to correlate to the **concepts** discussed in the item.",
            "It generalizes specific words to the concept values used to index the item.",
            "When concept classes are generated automatically, a class may have no natural name and only a statistical significance.",
            "Concept indexing improves **recall** and can use **neural networks** to determine concept classes.",
          ],
        },
        {
          heading: "Class 4 · hypertext linkage indexing",
          bullets: [
            "**Hypertext linkage indexing** creates hypertext linkages that provide **virtual threads of concepts** between items.",
            "It indexes relationships between items instead of directly defining every concept within one item.",
            "Traditional items are two-dimensional constructs, and hypertext linkages add a third retrieval dimension.",
            "The internet uses manually generated indexes, automatically generated indexes with web crawlers, and hypertext linkage indexes.",
          ],
        },
      ],
      table: {
        head: ["Class", "Main information used", "Output", "Main benefit"],
        rows: [
          ["**Statistical**", "term and document frequency", "weights and ranks", "simple and fast"],
          ["**Natural language**", "syntax, semantics and phrases", "phrases and thematic concepts", "higher precision"],
          ["**Concept**", "concept classes and neural networks", "concept values", "higher recall"],
          ["**Hypertext linkage**", "links between items", "virtual concept threads", "new retrieval dimension"],
        ],
      },
      note:
        "The four-class list is short. Write the data-flow diagram first, then one paragraph per class, and finish with the benefit each class gives.",
    },
    {
      id: "u3-statistical-indexing",
      question:
        "Explain statistical indexing in detail. Discuss term frequency, document frequency, inverse document frequency, vector weighting, probabilistic and Bayesian weighting and their problems.",
      marks: 10,
      freq: 3,
      papers:
        "Asked in the IRS question bank and as Part A in JNTUH Feb 2023 ('what is logarithmic term frequency?'); the weighting theory is repeated across all sources.",
      sections: [
        {
          heading: "Basis of statistical indexing",
          bullets: [
            "**Statistical indexing** uses the frequency of occurrence of events to calculate a number that indicates the relevance of an item.",
            "The events are usually occurrences of **processing tokens** within documents and within the database.",
            "The words and phrases are the domain of searchable values, and their frequencies become the raw evidence for ranking.",
            "A simple statistical system stores one statistic, such as how often each word occurs in an item, and uses it after a standard **Boolean search**.",
          ],
        },
        {
          heading: "The frequency family",
          bullets: [
            "**Word frequency (WF)** is the number of times a term occurs in an item.",
            "**Total frequency (TF)** is the total number of term occurrences in the whole database or collection.",
            "**Document frequency (DF)** is the number of documents that contain the term.",
            "**Inverse document frequency (IDF)** rewards rare terms because a term that appears in every document has little discriminating power.",
            "The standard weight combines the two ideas as **TF-IDF = TF × log(N / DF)**.",
            "**Logarithmic term frequency** dampens the effect of very large raw counts, typically as **1 + log(tf)** or **log(1 + tf)**, so the tenth occurrence adds less than the first.",
          ],
        },
        {
          heading: "Vector weighting",
          bullets: [
            "One of the earliest statistical approaches was the **SMART system** at Cornell University, which implemented vector weighting.",
            "Every item is represented as a **vector** whose positions correspond to processing tokens.",
            "The binary approach stores **0 or 1**, where 1 means the token exists in the item.",
            "The weighted approach stores a positive real number that represents the importance of the term in the item.",
            "Search is performed by calculating the distance or similarity between the query vector and each document vector.",
          ],
        },
        {
          heading: "Probabilistic weighting",
          bullets: [
            "The **probabilistic approach** applies probability theory directly to information retrieval.",
            "It stores the information used to calculate the probability that an item is relevant to a query.",
            "The approach is summarized by the **Probability Ranking Principle (PRP)**, which ranks items by decreasing probability of relevance.",
            "A common representation is the log-odds form: **log O(R | Q, D, tₖ) = C₀ + C₁V₁ + … + CₙVₙ**.",
            "The logarithm of the odds of relevance for a document and query is the sum of the log odds for all terms present.",
          ],
        },
        {
          heading: "Bayesian and neural models",
          bullets: [
            "The **Bayesian model** uses conditional probabilities and provides a complete conceptual model for information systems.",
            "It stresses the information used to generate a **relative confidence level** of an item's relevance rather than an absolute probability.",
            "A Bayesian network uses nodes for random variables and arcs for probabilistic dependencies; a two-level network has query concepts **c** and item concepts **f**.",
            "The **neural network model** is a dynamic learning structure used to determine concept classes and improve recall.",
            "Concept class hierarchies and domain-specific systems are the best examples of the neural approach.",
          ],
        },
        {
          heading: "Need and importance of weighting",
          bullets: [
            "**Weighting** is needed because not every term in an item is equally important for describing its content.",
            "It turns a Boolean presence test into a **ranked relevance score**, so the most useful items can be shown first.",
            "Weights let the system combine term frequency, document frequency and collection size in a single relevance value.",
            "Without weighting, a long document that repeats common words can outrank a short focused document.",
            "The importance of weighting is therefore both **effectiveness** and **efficiency** of the search.",
          ],
        },
        {
          heading: "Problems with weighting schemes",
          bullets: [
            "Frequent terms can dominate the vector unless they are normalized or weighted by IDF.",
            "Term weights depend on collection statistics, so a change in the database can change the ranking of the same query.",
            "The vector model assumes term independence, which is not true for phrases and related terms.",
            "Weighting can create a false sense of precision when the underlying index has poor terms or noisy text.",
          ],
        },
      ],
      formula:
        "WF = occurrences of a term in an item\nDF = number of documents containing the term\nIDF = log(N / DF)\nTF-IDF = TF × log(N / DF)\nLogarithmic TF = 1 + log(tf)\nLog odds = C₀ + C₁V₁ + … + CₙVₙ",
      table: {
        head: ["Weight", "Formula or meaning", "Effect"],
        rows: [
          ["**WF**", "raw count in one item", "favours long or repeated mentions"],
          ["**DF**", "documents containing the term", "measures commonness"],
          ["**IDF**", "log(N / DF)", "rewards rare discriminating terms"],
          ["**TF-IDF**", "TF × log(N / DF)", "balances frequency and rarity"],
          ["**Log TF**", "1 + log(tf)", "dampens very large counts"],
        ],
      },
      note:
        "The 2023 Part A asks only for logarithmic term frequency, but the 10-mark answer needs WF, DF, IDF, vector, probabilistic and Bayesian subheadings.",
    },
    {
      id: "u3-nlp-concept",
      question:
        "Explain natural language processing and concept indexing in detail. Discuss cohesion, phrase generation, the Convectis system and latent semantic indexing.",
      marks: 10,
      freq: 2,
      papers:
        "Asked in the IRS question bank as 'explain natural language processing' and 'explain concept indexing'; also Part A on the basis of concept indexing.",
      sections: [
        {
          heading: "Goal of natural language processing",
          bullets: [
            "**Natural language processing (NLP)** aims to use **semantic information** in addition to statistical information to enhance the indexing of an item.",
            "Semantic analysis captures the meaning of text while taking into account context, logical structure and grammatical roles.",
            "NLP improves the **precision** of searches by reducing the number of false hits a user must review.",
            "The semantic information is extracted by processing the language rather than treating each word as an independent entity.",
          ],
        },
        {
          heading: "Phrase generation and cohesion",
          bullets: [
            "The simplest NLP output is a set of **phrases** that become indexes to an item.",
            "Statistical approaches use **proximity** as the basis for determining the strength of word relationships in a phrase.",
            "One of the earliest statistical methods was the **cohesion factor** between terms.",
            "The formula is **Cohesion = Size-factor × (PAIR-FREQₖ,ₕ / (TOTFₖ × TOTFₕ))**, where PAIR-FREQ is the co-occurrence count and TOTF is the total frequency of a term.",
            "Term phrases allow additional specification and focusing of a concept, which improves precision and reduces the user's overhead of reading non-relevant items.",
          ],
        },
        {
          heading: "Thematic representations",
          bullets: [
            "NLP can combine concepts into higher-level concepts called **thematic representations**.",
            "A thematic representation captures what a passage is about rather than only which words it contains.",
            "This helps retrieval when the query and the document use different words for the same theme.",
            "The trade-off is greater processing cost and dependence on the quality of the parser and lexicon.",
          ],
        },
        {
          heading: "Concept indexing",
          bullets: [
            "**Concept indexing** uses the words within an item to correlate to the concepts discussed in the item.",
            "It is a generalization of the specific words to the values used to index the item.",
            "When concept classes are generated automatically, a class may not have a name and may be known only by its statistical significance.",
            "Concept indexing improves **recall** and can be combined with **neural networks** to determine concept classes.",
            "An example is the **Convectis** system, which uses a neural network algorithm and terms in a similar context to other terms.",
          ],
        },
        {
          heading: "Latent semantic indexing",
          bullets: [
            "**Latent semantic indexing (LSI)** determines a canonical set of concepts from a test set of terms and uses them to index all items.",
            "It uses the strength of word relationships, such as synonymy, and generates **context vectors**.",
            "Two neural networks are used: one generates stem context vectors and the other performs the query.",
            "The interpretation of the resulting values is the same as term weights.",
            "LSI reduces the dimension of the term space and can retrieve items that share concepts even when they do not share exact words.",
          ],
        },
        {
          heading: "Strengths and limits",
          bullets: [
            "NLP and concept indexing improve semantic matching and recall, especially for synonym-rich collections.",
            "They are computationally expensive and require dictionaries, parsers and training data.",
            "Concept classes can be hard to name and hard to explain to the user, which reduces transparency.",
            "The mapping from a term to a concept is complex because one term can represent several concepts to different degrees.",
          ],
        },
      ],
      formula:
        "Cohesion = Size-factor × (PAIR-FREQₖ,ₕ / (TOTFₖ × TOTFₕ))\nLSI: terms × documents matrix → reduced concept space\nConcept map: specific term → concept class → index value",
      table: {
        head: ["Approach", "Unit of indexing", "Strength", "Cost"],
        rows: [
          ["**Statistical**", "word or phrase frequency", "fast and broad", "term independence"],
          ["**NLP**", "syntax, semantics and phrases", "higher precision", "parser and lexicon"],
          ["**Concept**", "concept class or context vector", "higher recall", "training and ambiguity"],
          ["**LSI**", "reduced latent dimensions", "handles synonymy", "matrix computation"],
        ],
      },
      note:
        "Link the topic to the previous question: statistical indexing uses frequency, NLP adds semantics and concept indexing adds generalization. The cohesion formula is the formula to quote.",
    },
    {
      id: "u3-clustering",
      question:
        "Define clustering and explain the clustering process, its types, guidelines and the difference between term clustering, document clustering and item clustering.",
      marks: 10,
      freq: 3,
      papers:
        "Asked in the IRS question bank and the NR20 model paper as 'define clustering and explain the process and its types'; Part A asks for the steps of clustering.",
      sections: [
        {
          heading: "Definition and purpose",
          bullets: [
            "**Clustering** partitions the documents of a collection into **classes** so that items associated with each other are assigned to the same **cluster**.",
            "It improves both the **efficiency** and the **effectiveness** of retrieval.",
            "A cluster provides a grouping of similar objects under a more general title, and clustering also allows **links between clusters** to be specified.",
            "An information database can be viewed as independent items indexed by terms, and clustering adds a grouping on top of that structure.",
          ],
        },
        {
          heading: "Two types of clustering",
          bullets: [
            "**Term clustering** groups terms to create a **statistical thesaurus**, which is then used for **query expansion**.",
            "Term clustering increases **recall** by expanding a search with related terms.",
            "**Document clustering** groups documents by the terms they contain and supports **result-set expansion**.",
            "Document clustering lets a search retrieve items similar to an item of interest even when the original query would not have retrieved them.",
            "**Item clustering** groups any item type, including a phrase, word, sentence, diagram or picture.",
          ],
        },
        {
          heading: "The four steps of clustering",
          bullets: [
            "**Define the domain** for clustering; for a thesaurus the domain may be medical or education, and the terms must be relevant to it.",
            "**Determine the attributes** of the objects to be clustered; for a thesaurus these are the specific words, and for documents it may be a specific zone.",
            "**Determine the relationships** between attributes, because co-occurrence of attributes suggests that two objects belong in the same class.",
            "**Apply an algorithm** that decides which class each object goes into.",
          ],
        },
        {
          heading: "Guidelines for good classes",
          bullets: [
            "Every class needs a **well-defined semantic definition**, although the name given to the class can still be misleading.",
            "The sizes of the classes should be within the **same order of magnitude**.",
            "Within a class, **one object should not dominate** the class.",
            "It must be decided at creation time whether an object can belong to **multiple classes** or only one.",
          ],
        },
        {
          heading: "Manual versus automatic clustering",
          bullets: [
            "**Manual clustering** requires large space, time and computational overhead because a human analyst makes the decisions.",
            "**Automatic clustering** is very efficient and gives one **primary category** and several **secondary categories**.",
            "Manual thesaurus generation uses **KWOC**, **KWIC** and **KWAC** listings to help the analyst.",
            "Automatic term clustering is based on the idea that the more frequently two terms co-occur in the same items, the more likely they are about the same concept.",
          ],
        },
        {
          heading: "Why clustering helps retrieval",
          bullets: [
            "It reduces the search space because the system can search cluster representatives first.",
            "It supports **query expansion** through related terms and **result-set expansion** through similar documents.",
            "It provides a **visual representation** of the information space through a hierarchy or dendrogram.",
            "The user can move to child clusters for more specific items or to parent clusters for more general items.",
          ],
        },
      ],
      table: {
        head: ["Type", "Objects clustered", "Main use", "Expansion"],
        rows: [
          ["**Term clustering**", "words or phrases", "statistical thesaurus", "query expansion"],
          ["**Document clustering**", "whole documents", "similar-item retrieval", "result-set expansion"],
          ["**Item clustering**", "phrases, sentences, diagrams, pictures", "general grouping", "similar-item browsing"],
        ],
      },
      note:
        "Remember the two-type answer: term clustering builds a thesaurus for query expansion, and document clustering supports result-set expansion. Add the four steps and four guidelines.",
    },
    {
      id: "u3-thesaurus",
      question:
        "Explain thesaurus generation in detail. Describe KWOC, KWIC and KWAC, automatic term clustering and the word relationships used in a thesaurus.",
      marks: 10,
      freq: 3,
      papers:
        "Asked in the IRS question bank as 'thesaurus generation' and as Part A on KWOC, KWIC and KWAC; the manual/automatic comparison is repeated.",
      sections: [
        {
          heading: "What a thesaurus is",
          bullets: [
            "A **thesaurus** comes from the Latin word for *treasure* and is similar to a dictionary because it stores words.",
            "It also stores the **relationships** between words, so it can support query expansion and concept navigation.",
            "The collection of terms can be generated manually or automatically.",
            "Automatically generated thesauri contain classes that reflect the actual use of words in the collection.",
          ],
        },
        {
          heading: "Word relationships",
          bullets: [
            "The **word coordination approach** decides whether phrases as well as individual terms are clustered.",
            "**Equivalence** links words with the same meaning, such as *car* and *automobile*.",
            "**Hierarchical** links a broader term to a narrower term, such as *vehicle → car*.",
            "**Non-hierarchical** links related terms where neither is above or inside the other, such as *doctor–hospital*.",
            "**Parts-wholes** covers aggregation and composition, such as *wheel–car*.",
            "**Collocation** is a statistical measure that relates words co-occurring in the same sentence, phrase or paragraph, such as *heavy–rain*.",
            "**Paradigmatic** relates words with the same semantic base, such as *formula–equation*.",
          ],
        },
        {
          heading: "Manual clustering with KWOC",
          bullets: [
            "**KWOC (Keyword Out of Context)** shows each term with its **frequency** and the **IDs of the items** that contain it.",
            "For the notes example, *chips* has frequency 3 and item IDs DOC1, DOC3 and DOC4.",
            "*Computer* has frequency 3 and IDs DOC1, DOC3 and DOC4, *design* has frequency 2 and IDs DOC2 and DOC3, and *memory* has frequency 3 and IDs DOC1, DOC2 and DOC4.",
            "The corrected memory list is DOC1, DOC2 and DOC4, because DOC3 contains computer, chips and design but not memory.",
          ],
        },
        {
          heading: "KWIC and KWAC",
          bullets: [
            "**KWIC (Keyword In Context)** displays the term inside its phrase context, and the sentence is rotated so the keyword comes first.",
            "The character **/** marks the end of the phrase in KWIC, for example *chips/ computer design contains memory*.",
            "**KWAC (Keyword And Context)** lists the keyword first and then the whole phrase it came from.",
            "KWIC and KWAC help determine the meaning of **homographs**, because they show which sense of the word is being used.",
          ],
        },
        {
          heading: "Automatic term clustering",
          bullets: [
            "The basis for automatic generation is a set of items that represents the **vocabulary** to be included in the thesaurus.",
            "The **processing tokens** in those items are the attributes used to create the clusters.",
            "All methods share the concept that the more frequently two terms co-occur in the same items, the more likely they are about the same concept.",
            "The methods differ in the **completeness** with which they correlate terms.",
            "The resulting classes reflect the use of words in the database but do not have natural names.",
          ],
        },
        {
          heading: "Manual versus automatic",
          bullets: [
            "Manual clustering uses a human analyst, who gives the classes meaningful names and judges the strength of relationships.",
            "Automatic clustering is efficient but produces statistically similar groups without natural names.",
            "The **complete term relation method**, clustering using existing clusters and one-pass assignment are the main automatic techniques.",
            "The complete term relation method compares all term pairs and therefore has a higher computational cost.",
          ],
        },
      ],
      table: {
        head: ["Listing", "Shows", "Example", "Best use"],
        rows: [
          ["**KWOC**", "term + frequency + item IDs", "chips · 3 · DOC1, DOC3, DOC4", "counting and locating terms"],
          ["**KWIC**", "term inside a rotated phrase", "chips/ computer design contains memory", "homograph disambiguation"],
          ["**KWAC**", "term + whole context phrase", "chips │ computer design contains memory chips", "seeing the full usage"],
        ],
      },
      note:
        "The examiner often asks only for KWOC, KWIC and KWAC. Add one example each, then write two lines on automatic clustering and the co-occurrence principle.",
    },
    {
      id: "u3-term-matrix",
      question:
        "Explain item clustering and the term-term matrix. For the JNTUH Feb-2023 Q7 matrix with threshold 10, determine the Term Relationship matrix and the clique, star and single-link clusters.",
      marks: 10,
      freq: 3,
      papers:
        "Asked directly in JNTUH Feb 2023 Q7 and repeated in the IRS question bank as item clustering and the similarity matrix.",
      sections: [
        {
          heading: "Item clustering and similarity",
          bullets: [
            "**Item clustering** groups items such as phrases, words, sentences, diagrams or pictures.",
            "Similarity between two items is based on the terms they have in common, and the function is calculated between **rows of the item matrix**.",
            "The similarity formula is **SIM(Itemᵢ, Itemⱼ) = Σₖ (termᵢ,ₖ)(termⱼ,ₖ)**.",
            "The results form an **item-item relationship matrix**, which is converted to a binary matrix using a threshold.",
            "The default threshold in the notes is **10**: values of 10 or more become 1, and values below 10 become 0.",
          ],
        },
        {
          heading: "The exact 6 × 6 matrix",
          bullets: [
            "The JNTUH Feb-2023 matrix has six terms **T1 to T6**, and the diagonal is empty because a term is not correlated with itself.",
            "The upper-triangle values are **T1–T2 15, T1–T3 6, T1–T4 8, T1–T5 12, T1–T6 14, T2–T3 12, T2–T4 10, T2–T5 6, T2–T6 8, T3–T4 16, T3–T5 4, T3–T6 10, T4–T5 9, T4–T6 4 and T5–T6 13**.",
            "The matrix is symmetric, so the lower triangle repeats the upper triangle.",
          ],
        },
        {
          heading: "Term Relationship matrix at threshold 10",
          bullets: [
            "Replace every value **≥ 10** with 1 and every value **< 10** with 0.",
            "The 1 pairs are **T1–T2, T1–T5, T1–T6, T2–T3, T2–T4, T3–T4, T3–T6 and T5–T6**.",
            "The 0 pairs are **T1–T3, T1–T4, T2–T5, T2–T6, T3–T5, T4–T5 and T4–T6**.",
            "The diagonal remains blank because a term is not compared with itself.",
          ],
        },
        {
          heading: "Clique technique",
          bullets: [
            "A **clique** is a maximal complete subgraph in which every pair of terms is directly connected.",
            "The first maximal clique is **{T1, T5, T6}**, because T1–T5, T1–T6 and T5–T6 all pass the threshold.",
            "The second maximal clique is **{T2, T3, T4}**, because T2–T3, T2–T4 and T3–T4 all pass the threshold.",
            "T1 and T2 are not in the same clique because T1–T3 and T1–T4 are below threshold.",
          ],
        },
        {
          heading: "Star technique",
          bullets: [
            "Start with the lowest-numbered term **T1** and place it in a class with every term directly similar to it.",
            "The first star is **{T1, T2, T5, T6}**.",
            "The next seed is the smallest term not already in a class, which is **T3**.",
            "The second star is **{T3, T2, T4}**, so **T2 appears in both classes** and star clusters may overlap.",
          ],
        },
        {
          heading: "Single-link technique",
          bullets: [
            "**Single link** merges two clusters when any one pair of their members is similar.",
            "The chain **T4–T2–T1–T6–T3** connects the two triangles, so the final result is **one cluster {T1, T2, T3, T4, T5, T6}**.",
            "A term cannot appear in two single-link clusters because single link produces a partition of the terms.",
            "**Proof:** if a term X were in two clusters, the two clusters would share X and therefore be one connected component, which contradicts the assumption that they are separate.",
            "This is the proof requested by the JNTUH Feb 2022 question on single-link clustering.",
          ],
        },
      ],
      formula:
        "SIM(Itemᵢ, Itemⱼ) = Σₖ (termᵢ,ₖ)(termⱼ,ₖ)\nThreshold rule: value ≥ 10 → 1; value < 10 → 0\nCliques: {T1,T5,T6} and {T2,T3,T4}\nStar: {T1,T2,T5,T6} and {T2,T3,T4}\nSingle link: {T1,T2,T3,T4,T5,T6}",
      table: {
        head: ["Technique", "Classes for the JNTUH matrix", "Overlap", "Key risk"],
        rows: [
          ["**Clique**", "{T1,T5,T6} · {T2,T3,T4}", "yes", "too many small classes"],
          ["**Star**", "{T1,T2,T5,T6} · {T2,T3,T4}", "yes", "hub term pulls weak neighbours"],
          ["**Single link**", "{T1,T2,T3,T4,T5,T6}", "no", "chaining merges distinct concepts"],
        ],
      },
      walkthrough: "termcluster",
      note:
        "The walkthrough solves the exact Feb-2023 matrix step by step. In the exam, always write the Term Relationship matrix before naming any cluster.",
    },
    {
      id: "u3-hierarchy",
      question:
        "Explain the hierarchy of clusters. Describe hierarchical agglomerative and divisive clustering, the objectives of a hierarchy and the use of a dendrogram.",
      marks: 10,
      freq: 2,
      papers:
        "Asked in the IRS question bank as 'cluster hierarchy' and as a Part-B subquestion on automatic term clustering and cluster hierarchy.",
      sections: [
        {
          heading: "Definition",
          bullets: [
            "A **hierarchy of clusters** is a set of clusters arranged as a tree with a **root**, a second level below it and lower levels below that.",
            "The visual representation of the hierarchy is called a **dendrogram**.",
            "It can be built bottom-up or top-down, which gives the two families of hierarchical clustering.",
          ],
        },
        {
          heading: "Hierarchical agglomerative clustering (HAC)",
          bullets: [
            "**HAC** starts with **un-clustered items** and uses **pair-wise similarity** to merge them step by step.",
            "The closest pair is merged first, and the new cluster is then compared with the remaining items.",
            "The process continues until all items belong to one root cluster.",
            "The merge height in the dendrogram records the similarity at which each merge occurred.",
          ],
        },
        {
          heading: "Hierarchical divisive clustering",
          bullets: [
            "**Divisive clustering** starts with **one large cluster** and keeps breaking it into smaller clusters.",
            "At each step the cluster with the greatest internal dissimilarity is split.",
            "The process continues until each item is in its own leaf or until a stopping criterion is reached.",
            "Divisive methods are top-down and can be more expensive because they must consider many possible splits.",
          ],
        },
        {
          heading: "Objectives of a hierarchy",
          bullets: [
            "It **reduces the overhead of search** because the system can search centroids and trim irrelevant branches.",
            "It provides a **visual representation** of the information space with cues for cluster size and link strength.",
            "It **expands retrieval** so that a user who finds an item of interest can request the other items in its cluster.",
            "The user can increase **specificity** by moving to child clusters or increase **generality** by moving to parent clusters.",
          ],
        },
        {
          heading: "Reading a dendrogram",
          bullets: [
            "The leaves are the individual items, and the height at which two branches join is the **merge similarity or distance**.",
            "Cutting the dendrogram at a chosen height gives the clusters at that level of the hierarchy.",
            "A low cut gives many small clusters, while a high cut gives a few large clusters.",
            "The dendrogram makes the **nested structure** of the data visible, which a flat clustering cannot show.",
          ],
        },
        {
          heading: "Trade-offs",
          bullets: [
            "Hierarchical methods do not need the number of clusters in advance, unlike k-means.",
            "They are often O(n²) or worse, so they are expensive for very large collections.",
            "A wrong merge or split early in the process cannot be undone later.",
            "The choice of linkage measure strongly changes the shape of the dendrogram.",
          ],
        },
      ],
      formula:
        "Single link: distance(A,B) = min distance between any a ∈ A, b ∈ B\nComplete link: distance(A,B) = max distance between any a ∈ A, b ∈ B\nAverage link: mean of all pairwise distances\nCut the dendrogram at a height to obtain the clusters",
      table: {
        head: ["Method", "Direction", "Starts with", "Ends with"],
        rows: [
          ["**HAC**", "bottom-up", "individual items", "one root cluster"],
          ["**Divisive**", "top-down", "one large cluster", "individual items or small clusters"],
        ],
      },
      diagrams: ["dendrogram"],
      note:
        "Draw a small dendrogram with five leaves and mark a cut line. Then write the four objectives of a hierarchy, because that list is easy to remember and easy to mark.",
    },
    {
      id: "u3-hypertext-linkages",
      question:
        "Explain hypertext linkage indexing and the three classes of mechanisms used to find information on the Internet.",
      marks: 10,
      freq: 2,
      papers:
        "Asked in the IRS question bank as 'write a short note on hypertext linkages' and as a Part-B subquestion in the automatic-indexing question.",
      sections: [
        {
          heading: "Hypertext as a retrieval dimension",
          bullets: [
            "**Hypertext linkage indexing** creates hypertext links that provide **virtual threads of concepts** between items.",
            "Traditional items are viewed as **two-dimensional constructs**, where the text of the item is one dimension and the index terms are the other.",
            "Hypertext linkages add an additional retrieval dimension because a link expresses a relationship between items.",
            "The linkage is a special class of indexing because it defines the relationship instead of directly defining the concept within each item.",
          ],
        },
        {
          heading: "How links are created",
          bullets: [
            "Links can be generated **manually** by the author or by an editor.",
            "Links can be generated **automatically** by analysing term co-occurrence, citation patterns or document similarity.",
            "Each separate item is a **node**, and each reference pointer is a **link**.",
            "A node is displayed by a viewer chosen for the file type of that node.",
          ],
        },
        {
          heading: "Three classes of internet finding mechanisms",
          bullets: [
            "**Manually generated indexes** are built by human editors who classify and describe sites.",
            "**Automatically generated indexes and web crawlers** use a spider-bot that systematically browses the web for indexing.",
            "**Hypertext linkage indexes** follow links between items and use the link structure itself as a source of relevance evidence.",
            "A **web crawler** is an internet bot operated by search engines for web indexing and is a form of intelligent agent.",
          ],
        },
        {
          heading: "Benefits and risks",
          bullets: [
            "Linkage indexing can connect items that use different vocabulary but discuss the same concept.",
            "It supports browsing and link analysis, which can reveal hubs and authorities in a collection.",
            "Links can become outdated, misleading or commercial, so link quality must be evaluated.",
            "Link spam and link farms can distort ranking if the search engine trusts links blindly.",
          ],
        },
      ],
      table: {
        head: ["Mechanism", "Who builds it", "Main evidence", "Example"],
        rows: [
          ["**Manual index**", "human editor", "classification and description", "early web directories"],
          ["**Automatic index**", "web crawler", "page text and metadata", "search engine index"],
          ["**Hypertext linkage**", "author or algorithm", "links between items", "link analysis and navigation"],
        ],
      },
      note:
        "The key sentence is that hypertext linkages add a third retrieval dimension through virtual concept threads between items.",
    },
  ],
};
