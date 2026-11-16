import type { Unit } from "./types";

export const unit2: Unit = {
  id: "unit2",
  roman: "II",
  title: "Unit II · Cataloging, Indexing & Data Structures",
  subtitle:
    "Cataloguing and the indexing process, automatic indexing and information extraction, stemming, inverted files, N-grams, PAT trees, signature files and hypertext/XML structures.",
  color: "var(--v-teal)",
  questions: [
    {
      id: "u2-indexing-process",
      question:
        "Explain cataloguing and the indexing process in Information Retrieval Systems with a neat diagram. Discuss objectives, scope, exhaustivity, specificity and pre-coordination.",
      marks: 10,
      freq: 3,
      papers:
        "Asked in the IRS question bank as 'explain the indexing process with a neat diagram' and in JNTUH Feb 2022 as 'history and objectives of indexing'.",
      sections: [
        {
          heading: "Cataloguing and its types",
          bullets: [
            "**Cataloguing** is the systematic arrangement of items in alphabetical or another logical order with a brief description.",
            "A **catalogue** is the record of a library collection, and the card catalogue has largely been replaced by the **Online Public Access Catalogue (OPAC)**.",
            "An **author catalogue** uses author names as headings, including writers, illustrators, performers, producers and translators.",
            "A **title catalogue** uses titles as headings, while an **author/title catalogue** files both types of entry together.",
            "A **subject catalogue** uses the subject of the document as its heading, such as *cars* or *lawyers*, arranged alphabetically or by a classification scheme.",
          ],
        },
        {
          heading: "Indexing and its history",
          bullets: [
            "**Indexing** reduces documents to the informative terms they contain and creates the searchable data structure.",
            "The transformation from a received item to a searchable data structure is called indexing, and it can be **manual or automatic**.",
            "Indexing was originally called **cataloguing**, the oldest technique for identifying the contents of items to assist retrieval.",
            "Both cataloguing and indexing are systematic arrangements, and they overlap with **full-item indexing**, **public indexing** and **private indexing**.",
          ],
        },
        {
          heading: "Objectives of indexing",
          bullets: [
            "The primary objective is to **represent the concepts within an item** so that users can find relevant information.",
            "The public file indexer must consider the information needs of **all users** of the library system.",
            "Users may use public index files to **increase recall**, and they can constrain a search with private index files to improve precision.",
            "Indexing must decide both the **scope** and the **level of detail** based on the usage scenario of the users.",
          ],
        },
        {
          heading: "The indexing process",
          bullets: [
            "Indexing is the **collecting, parsing and storing** of data to facilitate fast and accurate information retrieval.",
            "Index design combines ideas from **linguistics**, **cognitive psychology**, **mathematics**, **informatics** and **computer science**.",
            "The data flow is: standardize input → zone → identify processing tokens → apply stop lists → characterize tokens → stem → create the searchable data structure → create the hit list.",
            "The first two steps, zoning and token identification, are common to all systems, while the later search strategy differs between statistical, natural-language and concept systems.",
          ],
        },
        {
          heading: "Text-processing phases",
          bullets: [
            "**Document parsing** breaks a document into components and splits multi-part items such as an email with attachments.",
            "**Lexical analysis** tokenizes the text into words and must handle accents, abbreviations, dates and case.",
            "**Stop-word removal** deletes high-frequency words such as *the*, *is* and *of*.",
            "**Phrase detection** identifies noun groups and other phrases so meaning is not reduced to a bag of words.",
            "**Stemming and lemmatization** normalize word endings, and **weighting** assigns importance values to terms.",
          ],
        },
        {
          heading: "Scope: exhaustivity, specificity and portion",
          bullets: [
            "**Exhaustivity** is the extent to which the different concepts in an item are indexed, so high exhaustivity indexes even briefly mentioned topics.",
            "**Specificity** is the preciseness of the index terms, so indexing *Pentium* is more specific than indexing *processor*.",
            "Indexing only the most important concept with general terms yields **low exhaustivity and low specificity**.",
            "The simplest scope decision is to index only the **title and abstract zone**, which saves effort but can lose precision and recall.",
            "Manual indexing problems arise from differences between the **author's vocabulary domain** and the **indexer's vocabulary domain**.",
          ],
        },
        {
          heading: "Pre-coordination, post-coordination and linkages",
          bullets: [
            "**Linkages** determine whether relationships between index terms are stored at index time.",
            "**Pre-coordination** correlates attributes at index time, for example storing *drilling of oil wells in Mexico by CITGO* as one coordinated concept.",
            "**Post-coordination** delays coordination to search time, usually by **AND**-ing index terms in the query.",
            "A linkage decision must fix the number of terms that can be related and the roles that each term plays.",
            "Pre-coordination increases precision but reduces flexibility, while post-coordination is flexible but can produce false combinations.",
          ],
        },
      ],
      table: {
        head: ["Decision", "Question", "Effect"],
        rows: [
          ["**Exhaustivity**", "How many concepts in the item should be indexed?", "High exhaustivity raises recall, costs more effort"],
          ["**Specificity**", "How precise should each index term be?", "High specificity raises precision, may reduce recall"],
          ["**Portion**", "Which part of the item is indexed?", "Title/abstract only is cheap but less complete"],
          ["**Pre-coordination**", "Are term relationships fixed at index time?", "Higher precision, less search flexibility"],
          ["**Post-coordination**", "Are terms combined at search time?", "Flexible searches, risk of false combinations"],
        ],
      },
      note:
        "Draw the data-flow diagram from standardize input to create hit list. The examiner rewards the words exhaustivity, specificity, pre-coordination and post-coordination.",
    },
    {
      id: "u2-automatic-indexing",
      question:
        "Explain automatic indexing and its classes. Differentiate weighted and unweighted indexing and describe the data flow of an information processing system.",
      marks: 10,
      freq: 3,
      papers:
        "Asked in the IRS question bank as 'automatic indexing' and 'classes of automatic indexing'; also a Part-A question in JNTUH Feb 2023.",
      sections: [
        {
          heading: "Definition and purpose",
          bullets: [
            "**Automatic indexing** is the computerized process of scanning large volumes of documents against a controlled vocabulary, taxonomy or ontology.",
            "It then uses those controlled terms to quickly and effectively index large electronic document depositories.",
            "It supports **total document indexing** and can generate indexes in seconds depending on the processor and algorithm complexity.",
            "The output is an **index**, which is the data structure created to support a particular search strategy.",
          ],
        },
        {
          heading: "Weighted versus unweighted indexing",
          bullets: [
            "A **weighted indexing system** places a value on each index term to represent the importance of its concept in the document.",
            "The weight is usually based on the **frequency of occurrence** of the term in the item, and values are normalized between **0 and 1**.",
            "An **unweighted indexing system** stores only the existence of an index term in a document and sometimes its word location.",
            "Weighted results are presented in **rank order** from the highest value to the lowest value, while unweighted results are not ranked by term importance.",
          ],
        },
        {
          heading: "Indexing by term: statistical versus natural language",
          bullets: [
            "**Indexing by term** uses the vocabulary of the original item as the basis of the index process.",
            "The two major techniques are **statistical indexing** and **natural language indexing**.",
            "**Statistical indexing** calculates weights from information such as word frequency and can use vector models, probabilistic models and Bayesian models.",
            "**Natural language indexing** also uses statistical information but performs more complex parsing to define the final set of index concepts.",
            "A **vectorised information system** stores a weight for each term, with one vector per document and one position per unique processing token.",
          ],
        },
        {
          heading: "The four classes of automatic indexing",
          bullets: [
            "**Statistical indexing** uses the frequency of occurrence of processing tokens to calculate relevance values and ranking scores.",
            "**Natural language processing** uses semantic information, syntax and context to produce phrases and thematic representations.",
            "**Concept indexing** maps words to a canonical set of concepts and generalizes specific words to concept values.",
            "**Hypertext linkage indexing** creates virtual threads of concepts between items through manually or automatically created links.",
          ],
        },
        {
          heading: "Human versus automatic indexing",
          bullets: [
            "**Human indexing** uses an expert indexer who understands the domain, selects concepts and assigns controlled vocabulary terms.",
            "**Automatic indexing** uses algorithms to extract terms from the item text and is much faster on large electronic collections.",
            "The advantages of automatic indexing are **speed**, **consistency**, **low cost** and the ability to handle very large document volumes.",
            "The disadvantages are weaker **semantic understanding**, dependence on the quality of the text and difficulty with ambiguous or multimedia content.",
            "Human indexing gives better conceptual quality, but it is slow, expensive and subject to differences between indexers.",
          ],
        },
        {
          heading: "Multimedia indexing",
          bullets: [
            "**Multimedia indexing** differs from text indexing because the raw data is image, audio or video rather than words.",
            "Indexing video or images can be accomplished at the **raw data level** by extracting low-level features.",
            "Image features include **colour, texture and shape**, audio features include spectral and energy measures, and video adds **motion** and **spatial-temporal composition**.",
            "A second approach is **description-based indexing**, which attaches captions, keywords and metadata to the media item.",
            "Content-based indexing is harder because low-level features do not always match the user's high-level concept of relevance.",
          ],
        },
        {
          heading: "Data flow in an information processing system",
          bullets: [
            "The flow starts with **standardize input** and **logical subsetting (zoning)**.",
            "It continues with **identify processing tokens**, **apply stop lists**, **characterize tokens**, **apply stemming** and **create the searchable data structure**.",
            "The searchable structure updates the document file and supports the creation of the **hit list** when a user command arrives.",
            "All systems pass through zoning and token identification, but the later steps depend on the chosen search strategy.",
          ],
        },
      ],
      table: {
        head: ["Class", "Basis", "Strength", "Typical output"],
        rows: [
          ["**Statistical**", "frequency of terms", "simple, fast, broad commercial use", "weighted terms and ranks"],
          ["**Natural language**", "syntax, semantics, phrases", "higher precision, fewer false hits", "phrases and thematic concepts"],
          ["**Concept**", "canonical concepts and neural nets", "higher recall across vocabulary", "concept classes or vectors"],
          ["**Hypertext linkage**", "links between items", "adds a new retrieval dimension", "linked item network"],
        ],
      },
      note:
        "The four classes are the most repeated Unit-II list: statistical, natural language, concept and hypertext linkage. Write one line of explanation and one example for each.",
    },
    {
      id: "u2-information-extraction",
      question:
        "Explain the two processes associated with information extraction. Discuss recall, precision, overgeneration, fallout and document summarization.",
      marks: 10,
      freq: 2,
      papers:
        "Asked as a Part-B subquestion in the IRS question bank and directly in JNTUH Feb 2023 as 'illustrate the two processes associated with information extraction'.",
      sections: [
        {
          heading: "The two extraction processes",
          bullets: [
            "The first process is the **determination of facts** that go into structured fields in a database.",
            "The second process is the **extraction of text** that can be used to summarize an item.",
            "The process of extracting facts for indexes is called **Automatic File Build (AFB)**.",
            "AFB selects incoming documents, applies automatic file build profiles and produces **candidate index records** for review and editing by a user.",
          ],
        },
        {
          heading: "Extraction metrics",
          bullets: [
            "In information extraction, **recall** is how much correct and relevant information was extracted compared with how much should have been extracted from the item.",
            "**Precision** is how much extracted information is accurate compared with the total information extracted.",
            "**Overgeneration** measures the amount of irrelevant information that is extracted, such as templates filled for topics that were not intended.",
            "**Fallout** measures how often a system assigns incorrect slot fillers, and it is also used for extraction quality.",
            "These measures apply to both human and automated extraction processes.",
          ],
        },
        {
          heading: "Document summarization",
          bullets: [
            "**Document summarization** extracts a summary that keeps the most important ideas while significantly reducing size.",
            "It differs from fact extraction because it does not try to fill specific slots; it compresses the item's content.",
            "Titles, tables of contents and abstracts are common summaries, and the **abstract** is the closest to a true summary.",
            "An abstract can represent the item for search or help a user judge utility without reading the complete item.",
          ],
        },
        {
          heading: "Why information extraction matters",
          bullets: [
            "Extraction turns unstructured text into structured facts that can be queried, joined and aggregated.",
            "It reduces the user's reading overhead because the relevant facts are already isolated.",
            "The main risk is that extraction errors silently populate a database, so precision and overgeneration must be monitored.",
          ],
        },
      ],
      table: {
        head: ["Measure", "Question it answers", "Failure it detects"],
        rows: [
          ["**Recall**", "How much of the correct information was extracted?", "missed facts"],
          ["**Precision**", "How much of the extracted information is correct?", "wrong facts"],
          ["**Overgeneration**", "How much irrelevant information was extracted?", "filling templates for the wrong topic"],
          ["**Fallout**", "How often are incorrect slot fillers assigned?", "bad slot values"],
        ],
      },
      note:
        "The two-process answer is short: facts into structured fields, and text into a summary. Add the four extraction metrics for the 10-mark version.",
    },
    {
      id: "u2-stemming",
      question:
        "Explain stemming algorithms in detail. Compare table-lookup, Porter, dictionary look-up and successor stemming, and state the advantages and limitations of stemming.",
      marks: 10,
      freq: 4,
      papers:
        "Asked in both JNTUH R18 papers (dictionary versus successor stemmers, Porter algorithm) and repeated in the question bank as a major data-structure question.",
      sections: [
        {
          heading: "What stemming is and why it is used",
          bullets: [
            "**Stemming** is the cutting and trimming of words to a common stem that represents the concept.",
            "The goal is to **improve performance** and require fewer system resources by reducing the number of unique words the system must contain.",
            "Stemming improves **recall**, reduces **diversity**, increases search **efficiency** and performs **conflation** of word variants.",
            "The cost is reduced **precision**, because unrelated words can collapse to the same stem.",
            "Stemming is applied to the user's query as well as to the incoming text, so a bad stem can confuse the user and damage trust in the system.",
          ],
        },
        {
          heading: "Table-lookup stemming",
          bullets: [
            "**Table-lookup stemming** uses a large data structure that maps each word form to its stem.",
            "It is used in systems such as **RetrievalWare** that already contain a large thesaurus or concept network.",
            "It is accurate for known words but expensive in storage and unable to handle words that are not in the table.",
          ],
        },
        {
          heading: "Porter stemming algorithm",
          bullets: [
            "The **Porter algorithm** is based on a set of **conditions on the stem, suffix and prefix** and associated actions.",
            "The **measure m** is the number of VC sequences in **C(VC)ᵐV**, where the initial C and final V are optional.",
            "The stem conditions are ***<X>** (ends with X), ***v*** (contains a vowel), ***d** (ends in a double consonant) and ***o** (ends in CVC, final consonant not w, x or y).",
            "Rules are grouped into steps 1a to 5, and only **one rule per step** is applied, for example **stresses → stress**, **making → mak**, **happy → happi**, **formaliti → formal**, **duplicate → duplic**, **adjustable → adjust** and **inflate → inflat**.",
            "The worked word **duplicatable** becomes **duplicat** by rule 4, then **duplicate** by rule 1b1, then **duplic** by rule 2.",
          ],
        },
        {
          heading: "Dictionary look-up and K-stem",
          bullets: [
            "**Dictionary look-up stemming** still applies simple rules but looks the original or stemmed word up in a dictionary.",
            "The **Kstem** algorithm in the INQUERY system is a morphological analyzer that tries to avoid collapsing words with different meanings.",
            "Kstem returns real words instead of truncated forms, so it generally requires the word to be in the dictionary before reduction.",
            "Kstem uses six major data files: the **dictionary**, the **supplement**, the **exceptions list**, **direct conflation**, **country-nationality conflation** and **proper nouns**.",
            "Examples are *British → Britain* and the exception that *suites → suite* but *suited → suit*.",
          ],
        },
        {
          heading: "Successor stemming",
          bullets: [
            "**Successor stemming** uses the length of prefixes that optimally stem expansions of additional suffixes.",
            "The **successor variety** of a word segment is the number of distinct letters that can follow it, measured from a symbol tree.",
            "A symbol tree for *bag, barn, bring, box, bottle* shows that the successor variety of *b* is 3 and of *ba* is 2.",
            "The four segmentation methods are **cutoff**, **peak and plateau**, **complete word** and **entropy**.",
            "After segmentation, the first segment is selected as the stem if it occurs in 12 or fewer words; otherwise the second segment is used.",
          ],
        },
        {
          heading: "Dictionary look-up versus successor stemming",
          bullets: [
            "**Dictionary look-up stemming** uses a lexicon of known words and can return a real word rather than a truncated fragment.",
            "**Successor stemming** is data-driven and uses the distribution of letters after each prefix to split a word into segments.",
            "Dictionary stemming preserves meaning better, while successor stemming adapts to a new vocabulary without a dictionary.",
            "Dictionary methods are limited by dictionary coverage, and successor methods are limited by the training set and threshold choices.",
          ],
        },
        {
          heading: "Advantages and limitations",
          bullets: [
            "Stemming is efficient and depends strongly on the nature of the vocabulary.",
            "Studies show that stemming is about as effective as **manual conflation** and generally has a positive effect on recall.",
            "It can over-stem unrelated words, under-stem related forms and introduce anomalies that reduce precision.",
            "Proper names and acronyms should not be stemmed, and stemming can remove information needed by natural language processing systems.",
          ],
        },
      ],
      formula:
        "Porter measure: C(VC)ᵐV → m = number of VC sequences\nExamples: m = 0 (free, why), m = 1 (frees, whose), m = 2 (prologue, compute)\nWord variants: connect, connected, connecting, connection, connections → connect",
      table: {
        head: ["Stemmer", "Method", "Example", "Trade-off"],
        rows: [
          ["**Table lookup**", "large mapping table", "RetrievalWare", "accurate but storage-heavy"],
          ["**Porter**", "condition-action suffix rules", "stresses → stress", "simple, but can over-stem"],
          ["**Dictionary (K-stem)**", "rules + dictionary + exception files", "British → Britain", "better meaning preservation, needs a dictionary"],
          ["**Successor**", "symbol tree and successor variety", "boxer → box", "data-driven, but needs a training vocabulary"],
        ],
      },
      walkthrough: "porter",
      note:
        "The walkthrough on this page shows Steps 1a–5 and the duplicatable case. In the exam, write the m definition, the four conditions and at least six rule examples.",
    },
    {
      id: "u2-inverted-file",
      question:
        "Explain the inverted file structure in detail. Describe its three basic files, the search process, B-tree use and its advantages and limitations.",
      marks: 10,
      freq: 3,
      papers:
        "Asked in the IRS question bank and the NR20 model paper as 'explain inverted file structure'; it is also the most common data structure in IRS notes.",
      sections: [
        {
          heading: "The two major data structures in any IRS",
          bullets: [
            "The first major structure is the **document manager**, which stores and manages received items in their normalized form.",
            "The second major structure contains the **processing tokens and associated data** that support search.",
            "The document manager returns the original item after a hit, while the search structure locates the hit.",
            "An inverted file is the most common search structure, but PAT trees, signature files and N-gram structures are alternatives.",
          ],
        },
        {
          heading: "The three basic files",
          bullets: [
            "An **inverted file structure** is the most common data structure in both database management and information retrieval systems.",
            "It is composed of a **document file**, a **dictionary** and one or more **inversion lists**.",
            "The **document file** stores the normalized items in arrival order and provides the full item for retrieval.",
            "The **dictionary** stores the sorted vocabulary together with the document frequency and a pointer to the posting list.",
            "The **inversion lists** store the posting lists, that is, the identifiers of the items that contain each term.",
          ],
        },
        {
          heading: "How a search works",
          bullets: [
            "The query terms are looked up in the **dictionary**, which gives the address of their posting lists.",
            "The posting lists are merged or intersected according to the Boolean operators in the query.",
            "For the query *Computer AND Memory*, the posting list of *Computer* is [1, 3, 4] and the posting list of *Memory* is [1, 2, 4], so the intersection is [1, 4].",
            "The resulting item identifiers form the **hit file**, and the document manager retrieves the selected items.",
            "This design avoids scanning every document for every query, which is why inversion lists give optimum performance on large databases.",
          ],
        },
        {
          heading: "B-tree alternative",
          bullets: [
            "A **B-tree** can replace the dictionary for large dynamic vocabularies.",
            "A B-tree of order m has a root with 2 to 2m keys, internal nodes with m to 2m keys, and all leaves at the same level.",
            "Keys are kept in sorted order, and the inversion lists may be stored at the leaf level or referenced by higher-level pointers.",
            "The B-tree keeps lookup and update costs logarithmic while keeping the index balanced.",
          ],
        },
        {
          heading: "Features and advantages",
          bullets: [
            "The inverted file increases **precision** because the dictionary gives exact term matching and the posting lists can be ranked.",
            "It supports **zoning** by storing the zone or field of each term occurrence.",
            "It supports **ranking** by storing term frequencies and weights with the posting entries.",
            "It is well suited to storing **concepts and their relationships** because the dictionary can point to concept records.",
            "It supports natural language processing and is efficient for large databases because only the relevant posting lists are read.",
          ],
        },
        {
          heading: "Limitations",
          bullets: [
            "The index can be large, and its size grows with the number of distinct terms and postings.",
            "Updating an inversion list is expensive because a new item must be inserted into every list for its terms.",
            "It is less suitable for substring or pattern queries because the dictionary stores whole words, not all text positions.",
            "Storage and update overhead are the main reasons alternatives such as signature files and PAT trees are used.",
          ],
        },
      ],
      table: {
        head: ["File", "Stores", "Example", "Purpose"],
        rows: [
          ["**Document file**", "normalized items and their text", "DOC1: Chips, Computer, Memory", "returns the full item"],
          ["**Dictionary**", "term, document frequency, pointer", "Computer · DF 3 · P2", "finds the term quickly"],
          ["**Inversion list**", "posting list of item IDs", "P2: Computer → [1, 3, 4]", "supports Boolean set operations"],
        ],
      },
      diagrams: ["inverted"],
      note:
        "Draw the three columns and one arrow from each dictionary entry to its posting list. Then write the Computer AND Memory intersection example.",
    },
    {
      id: "u2-ngram",
      question:
        "Explain the N-gram data structure with examples. State the maximum number of n-grams, its advantages and its disadvantages.",
      marks: 10,
      freq: 2,
      papers:
        "Asked in the IRS question bank as 'write short notes on the N-gram data structure' and as a Part-B subquestion on data structures.",
      sections: [
        {
          heading: "Definition",
          bullets: [
            "An **n-gram** is a fixed-length consecutive series of **n characters** taken from a processing token or from continuous text.",
            "A **bigram** has 2 characters, a **trigram** has 3 characters, and a **pentagram** has 5 characters.",
            "N-grams can be viewed as a special technique for **conflation** and as a unique data structure in information systems.",
            "Unlike stemming, n-grams do not care about the semantic meaning of the word; they operate on character fragments.",
          ],
        },
        {
          heading: "Construction and examples",
          bullets: [
            "For the phrase *sea colony*, the bigrams are **se, ea, co, ol, lo, on, ny** when inter-word symbols are ignored.",
            "The trigrams without inter-word symbols are **sea, col, olo, lon, ony**.",
            "With the inter-word symbol **#**, the trigrams become **#se, sea, ea#, #co, col, olo, lon, ony, ny#**.",
            "The inter-word symbol represents a blank, period, semicolon or colon and makes word boundaries explicit.",
            "The maximum number of n-grams for a token of length L is given by the formula **(L − n + 1)**, and the notes express the general bound as **MAX Segₙ = (λ)ⁿ**.",
          ],
        },
        {
          heading: "Advantages",
          bullets: [
            "N-grams were first used in **World War II by cryptographers** and are still used for spelling error detection and correction.",
            "The frequency of an n-gram pattern can identify the **language of an item**.",
            "Because the data structure has fixed processing-token bounds, optimized performance techniques can be applied to index mapping and query processing.",
            "N-grams handle misspellings and morphological variants without a dictionary, which makes them robust for noisy text.",
          ],
        },
        {
          heading: "Disadvantages",
          bullets: [
            "There is **no semantic meaning** in a particular n-gram because it is only a fragment of a processing token.",
            "N-grams are therefore a **poor representation of concepts and their relationships**.",
            "Longer n-grams produce poor results and are expensive, while shorter n-grams produce many false matches.",
            "The index is larger than a word index because every character position generates a fragment.",
          ],
        },
        {
          heading: "Applications",
          bullets: [
            "N-grams are used in **spelling correction**, **language identification**, **OCR error correction** and **approximate string matching**.",
            "They are useful for **multilingual** collections because they do not depend on a word dictionary.",
            "They are also used as a feature representation in text classification and plagiarism detection.",
          ],
        },
      ],
      formula:
        "Number of n-grams in a token of length L: L − n + 1\nExample: sea colony → bigrams se, ea, co, ol, lo, on, ny\nTrigrams with boundary: #se, sea, ea#, #co, col, olo, lon, ony, ny#",
      table: {
        head: ["n", "Name", "Example for sea colony", "Main use"],
        rows: [
          ["2", "bigram", "se, ea, co, ol, lo, on, ny", "spelling and language detection"],
          ["3", "trigram", "sea, col, olo, lon, ony", "approximate matching"],
          ["5", "pentagram", "#sea#, #colo, colon, olony, lony#", "more specific fragment matching"],
        ],
      },
      note:
        "Write the definition, the bigram and trigram example and the formula, then balance two advantages against two disadvantages. The semantic weakness is the key exam point.",
    },
    {
      id: "u2-pat",
      question:
        "Explain the PAT data structure and how to create a PAT tree with example data. State its properties, search use and advantages.",
      marks: 10,
      freq: 3,
      papers:
        "Asked directly in JNTUH Feb 2023 as 'how to create a PAT tree? Explain with example data' and repeated in the question bank data-structure section.",
      sections: [
        {
          heading: "What PAT means",
          bullets: [
            "**PAT** stands for **Practical Algorithm To Retrieve Information Coded in Alphanumerics**.",
            "A **PAT tree** is an unbalanced **binary digital tree** that allows very efficient searching of continuous text.",
            "The input stream is transformed into a searchable data structure consisting of **substrings called sistrings**.",
            "A **sistring** is a semi-infinite string that starts at a position in the text and continues to the end of the input, with null padding if necessary.",
            "For a text of **n** characters there are **n leaf nodes** and at most **n − 1** higher-level nodes.",
          ],
        },
        {
          heading: "Creating the sistrings",
          bullets: [
            "Every position in the input string is an **anchor point** for a sistring.",
            "For the input **100110001101**, sistring 1 is **100110001101**, sistring 2 is **001100011010** and sistring 12 is **100000000000**.",
            "All substrings are unique, so each sistring can be identified by its **starting location and length**.",
            "Sistrings that run past the end of the text are padded with null characters so that they remain comparable.",
          ],
        },
        {
          heading: "Building the Patricia tree",
          bullets: [
            "Start with the first sistring as a **root leaf**.",
            "Insert the next sistring by comparing it bit by bit with the existing leaf until the first **differing bit** is found.",
            "Create an internal node at that **bit position**, with **0 branching left** and **1 branching right**.",
            "Each internal node stores the bit position used for its test, not a whole key.",
            "The finished tree has all key values at the **leaf nodes**, and the internal nodes only guide the search.",
          ],
        },
        {
          heading: "Searching a PAT tree",
          bullets: [
            "Search for a pattern by tracing its bits from the root and following the branches.",
            "The leaves reached by the pattern identify the starting positions of matching sistrings.",
            "PAT trees support **prefix search**, **range search** and **substring search** because the text is logically sorted by bits.",
            "A **PAT array** stores the sorted sistring positions and can be searched with binary search instead of following tree pointers.",
          ],
        },
        {
          heading: "Advantages and limitations",
          bullets: [
            "PAT trees avoid word-boundary errors because they index every text position rather than whole words.",
            "They are more accurate than an inverted file for string and substring search.",
            "They are not balanced, so their shape depends on the input and can become deep.",
            "They consume more space than a word index because one leaf is stored per character.",
          ],
        },
      ],
      formula:
        "Sistring at position i = text[i … n] + null padding\nNumber of leaves = n\nMaximum internal nodes = n − 1\nBranch rule: bit 0 → left, bit 1 → right",
      table: {
        head: ["Sistring", "Bits for 100110001101", "First differing bit"],
        rows: [
          ["s1", "100110001101", "—"],
          ["s2", "001100011010", "bit 1"],
          ["s3", "011000110100", "bit 2"],
          ["s4", "110001101000", "bit 2"],
          ["s5", "100011010000", "bit 4"],
          ["s12", "100000000000", "bit 5"],
        ],
      },
      walkthrough: "pat",
      note:
        "The examiner wants the word sistring, the 0-left/1-right rule, the bit-position labels and the leaf-only keys. Draw at least the first three insertions.",
    },
    {
      id: "u2-signature",
      question:
        "Explain the signature file structure with superimposed coding. Using the PYQ text, compute h(made), the block signature and explain a false drop.",
      marks: 10,
      freq: 3,
      papers:
        "Asked in the IRS question bank and the NR20 model paper with the exact text 'This is text A text has many words…'; the theory also appears in the data-structure question.",
      sections: [
        {
          heading: "Goal of a signature file",
          bullets: [
            "The goal of a **signature file structure** is to provide a fast test that eliminates the majority of items that are not related to a query.",
            "The text of each item is represented in a **highly compressed form** that facilitates the fast test.",
            "The file is compressed and unordered, so it requires significantly less space than an inverted file structure.",
            "New items are concatenated to the end of the structure, and deleted items are left in place and marked deleted.",
            "Signature file search is a **linear scan** of the compressed signatures, so response time is linear with respect to file size.",
          ],
        },
        {
          heading: "Superimposed coding",
          bullets: [
            "The surrogate signature file is created through **superimposed coding** based on the words in the item.",
            "Each word is mapped to a **word signature**, which is a fixed-length code with a fixed number of bits set to 1.",
            "The bit positions set to 1 are determined by a **hash function** of the word.",
            "The word signatures are **ORed together** to create the signature of an item or block.",
            "To avoid signatures becoming too dense with 1s, a maximum number of words is specified and the item is partitioned into **blocks** of that size.",
          ],
        },
        {
          heading: "The exact PYQ data",
          bullets: [
            "The question gives **Text: “This is text A text has many words, words are made from letters”**.",
            "The hash values are **h(text) = 000101**, **h(many) = 110000**, **h(words) = 100100**, **h(made) = 001100** and **h(letters) = 100001**.",
            "The value asked in the paper is **h(made) = 001100**.",
            "ORing the five word signatures gives **000101 OR 110000 OR 100100 OR 001100 OR 100001 = 111101**, which is the block signature.",
          ],
        },
        {
          heading: "Searching with a query template",
          bullets: [
            "The words in a query are mapped to their signatures and ORed to form a **query template**.",
            "Search is accomplished by **template matching** on the bit positions specified by the query words.",
            "If every 1 bit of the query template is present in the block signature, the block is a **candidate** for a full-text check.",
            "For example, the query *text made* has template **000101 OR 001100 = 001101**, which is a subset of the block signature **111101**.",
          ],
        },
        {
          heading: "False drops",
          bullets: [
            "A **false drop** occurs when a query template passes the bit test even though the item does not contain the query words.",
            "The OR operation loses the identity of the word that set each bit, so unrelated words can cover the same bit positions.",
            "The textbook example is the word *hard* with signature 1000 0111 0010 0000, which incorrectly matches the block signature 1001 0111 1110 0110.",
            "The fix is to verify every candidate against the original text, or to use longer codes and fewer 1 bits per word to reduce collisions.",
          ],
        },
        {
          heading: "Design trade-offs and applications",
          bullets: [
            "A **longer code length** reduces hash collisions, while **fewer bits per code** reduces false drops but increases storage for the same terms.",
            "The textbook design uses a **block size of five words**, a **16-bit code** and **five 1-bits per word**.",
            "Search of the signature matrix is O(N), and performance can be improved by **horizontal partitioning**, **two-level signatures** or **B-tree clustering**.",
            "Signature files are used for **medium-size databases**, databases with low-frequency terms, **WORM devices**, parallel machines and distributed environments.",
          ],
        },
      ],
      formula:
        "Block signature = OR of all word signatures\nQuery template = OR of all query-word signatures\nCandidate test: (template AND block signature) = template\nPYQ: h(text)=000101, h(many)=110000, h(words)=100100, h(made)=001100, h(letters)=100001\nBlock = 000101 OR 110000 OR 100100 OR 001100 OR 100001 = 111101",
      table: {
        head: ["Word", "Signature", "Meaning"],
        rows: [
          ["text", "000101", "sets bits 4 and 6"],
          ["many", "110000", "sets bits 1 and 2"],
          ["words", "100100", "sets bits 1 and 4"],
          ["made", "001100", "sets bits 3 and 4"],
          ["letters", "100001", "sets bits 1 and 6"],
          ["**Block**", "**111101**", "union of all five patterns"],
        ],
      },
      walkthrough: "signature",
      note:
        "The walkthrough shows the exact PYQ values, the OR table, two passing queries and a false-drop check. Write h(made) first so the examiner sees the direct answer.",
    },
    {
      id: "u2-hypertext-xml",
      question:
        "Describe the hypertext and XML data structures. Explain nodes, links, HTML tags, XML components and the Hidden Markov Model.",
      marks: 10,
      freq: 3,
      papers:
        "Asked in JNTUH Feb 2022 as 'describe hypertext and XML data structures' and repeated in the IRS question bank as hypertext and XML features.",
      sections: [
        {
          heading: "Hypertext structure",
          bullets: [
            "The **hypertext data structure** is used extensively in the internet environment and requires electronic media storage for the item.",
            "Hypertext allows one item to reference another item through an **embedded pointer**.",
            "Each separate item is called a **node**, and the reference pointer is called a **link**.",
            "Each node is displayed by a viewer defined for the file type associated with that node.",
            "The referenced item may be of the same or a different data type, such as a text node that references a photograph.",
          ],
        },
        {
          heading: "HTML and tags",
          bullets: [
            "**HTML** defines the internal structure for information exchange across the World Wide Web.",
            "A document is composed of the text of the item together with **HTML tags** that describe how to display the document.",
            "Tags are formatting or structural keywords contained between less-than and greater-than symbols, such as `<title>` and `<strong>`.",
            "The hypertext link tag is `<a href=\"…\">…</a>`, where **a** is the anchor and **href** is the hypertext reference.",
            "The **href** contains a file name for a local item or a **Uniform Resource Locator (URL)** and file name for a remote item.",
          ],
        },
        {
          heading: "XML structure",
          bullets: [
            "**XML** provides a detailed description of subsets of text, similar to zoning, and it is defined by a **Document Type Definition (DTD)**.",
            "The **Document Object Model (DOM)** exposes the XML document as a tree of elements and attributes.",
            "**XSL** is used to transform or present XML content in another form.",
            "XML separates content from presentation, so the same content can be displayed on different devices.",
            "An XML document is well formed when every element is properly nested and closed, and valid when it conforms to its DTD.",
          ],
        },
        {
          heading: "Hypertext versus XML",
          bullets: [
            "Hypertext is a **graph of nodes and links**, while XML is a **hierarchical element tree**.",
            "Hypertext supports navigation and link analysis, while XML supports structured exchange, validation and querying.",
            "Both provide detailed descriptions of text subsets that are similar to zoning.",
            "HTML is a fixed-tag hypertext language, while XML lets the author define tags for a domain.",
          ],
        },
        {
          heading: "Hidden Markov Model",
          bullets: [
            "The **Hidden Markov Model (HMM)** models a statistical process whose output is equivalent to the set of queries that would make a document relevant.",
            "The output is produced by passing an unknown key through state transitions in a noisy channel, where the query is the output and the relevant documents are the unknown keys.",
            "The **channel** represents the mismatch between the author's way of expressing ideas and the user's ability to specify a query.",
            "The approach begins with **Bayes' rule**: P(A/B) = P(B/A) P(A) / P(B).",
            "The biggest problem is estimating the transition probability matrix and the output for every document; a large training database with the **Expectation-Maximization** algorithm can solve it.",
          ],
        },
      ],
      formula:
        "Bayes' rule: P(A/B) = P(B/A) P(A) / P(B)\nHTML link: <a href=\"URL\">anchor text</a>\nXML: DTD defines the grammar, DOM represents the tree, XSL transforms presentation",
      table: {
        head: ["Structure", "Model", "Strength", "Limitation"],
        rows: [
          ["**Hypertext**", "graph of nodes and links", "navigation and link analysis", "link rot and lost orientation"],
          ["**HTML**", "fixed tags over hypertext", "universal web display", "presentation mixed with content"],
          ["**XML**", "hierarchical element tree", "structured exchange and validation", "verbose and needs a schema"],
          ["**HMM**", "statistical noisy-channel model", "probabilistic relevance model", "hard to estimate transition probabilities"],
        ],
      },
      diagrams: ["hypertext"],
      note:
        "Use the diagram: left side hypertext graph, right side XML tree. Then write the node/link definition and the DTD/DOM/XSL definitions for the XML part.",
    },
  ],
};
