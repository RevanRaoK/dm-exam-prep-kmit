import type { Unit } from "./types";

export const unit1: Unit = {
  id: "unit1",
  roman: "I",
  title: "Unit I · Introduction to IRS & Capabilities",
  subtitle:
    "Definition, objectives, overhead, precision and recall, the four major functional processes, item normalization, search and browse capabilities, the DBMS relationship, digital libraries, data warehouses and index files.",
  color: "var(--v-pink)",
  questions: [
    {
      id: "u1-definition-objectives",
      question:
        "Define an Information Retrieval System and explain its objectives, user overhead, precision and recall. State the conditions for 100% precision and 100% recall.",
      marks: 10,
      freq: 4,
      papers:
        "Asked as a Part-B question in the IRS question bank, the NR20 model paper and both JNTUH R18 papers (Feb 2022 and Feb 2023).",
      sections: [
        {
          heading: "What an Information Retrieval System is",
          bullets: [
            "An **Information Retrieval System (IRS)** is a system capable of the **storage, retrieval and maintenance of information**.",
            "It helps a user **find the information the user needs** from textual, image, audio, video and other multimedia objects.",
            "Common search types are **web search**, **desktop search** and **library search**, and the course focuses on **textual information**.",
            "An **item** is the smallest complete textual unit processed and manipulated by the IRS, and its size depends on how the source treats information.",
            "A **relevant item** is an item that contains the information needed by the user, and a **non-relevant item** contains no directly useful information.",
          ],
        },
        {
          heading: "Objective: minimise user overhead",
          bullets: [
            "The general objective is to **minimise the overhead of locating needed information**, expressed as the time a user spends in all steps before reading a useful item.",
            "The overhead steps are **query generation**, **search composition**, **search execution** and **scanning the results** to select items to read.",
            "**Query generation** is the user entering keywords such as a player name or a restaurant search.",
            "**Search composition** turns the user need into a search statement that the system can execute.",
            "**Search execution** runs the search, and **scanning results** is the time spent reviewing the hit file and rejecting non-relevant items.",
            "The success of an IRS is therefore measured by how well it reduces this total overhead, not only by how fast the computer runs.",
          ],
        },
        {
          heading: "The four segments of the document space",
          bullets: [
            "The total database is logically divided into **relevant retrieved**, **relevant not retrieved**, **non-relevant retrieved** and **non-relevant not retrieved** segments.",
            "**Precision** measures the ability to retrieve top-ranked documents that are mostly relevant.",
            "**Recall** measures the ability of the search to find all of the relevant items.",
            "A search for *computer* may return hard disk, keyboard and monitor items, which shows how a system can retrieve relevant items and still miss others.",
          ],
        },
        {
          heading: "Precision and recall formulas",
          bullets: [
            "**Precision** = number of retrieved relevant items divided by the total number of retrieved items.",
            "**Recall** = number of retrieved relevant items divided by the number of possible relevant items in the database.",
            "Precision measures one part of retrieval overhead, because a precision of 85% means that 15% of the user's review effort is spent on non-relevant items.",
            "Recall is useful in theory but is **not calculable in an operational system**, because the system does not know the total set of relevant items unless it has already retrieved them.",
          ],
        },
        {
          heading: "Conditions for 100% precision and recall",
          bullets: [
            "**100% precision** is achieved when every retrieved item is relevant, that is, there are no false hits in the hit file.",
            "**100% recall** is achieved when every relevant item in the database is retrieved, that is, there are no false drops.",
            "The ideal precision/recall graph starts with precision at 100% and recall near zero, and recall rises until every relevant item has been retrieved.",
            "Once all relevant items are found, further retrieval only adds non-relevant items, so precision falls while recall stays at 100%.",
          ],
        },
        {
          heading: "Relationship between the measures and overhead",
          bullets: [
            "High **precision** reduces the overhead of reviewing non-relevant items, because fewer useless items appear in the hit file.",
            "High **recall** reduces the risk of missing needed information, but it often requires longer searches that return more non-relevant items.",
            "The two measures therefore trade off against each other, and a good IRS helps the user balance them through ranking, feedback and query refinement.",
          ],
        },
      ],
      formula:
        "Precision = Number_Retrieved_Relevant / Number_Total_Retrieved\nRecall = Number_Retrieved_Relevant / Number_Possible_Relevant\n100% precision: every retrieved item is relevant\n100% recall: every relevant item is retrieved",
      table: {
        head: ["Measure", "Numerator", "Denominator", "What it tells the user"],
        rows: [
          ["**Precision**", "retrieved and relevant", "all retrieved", "How clean the hit file is"],
          ["**Recall**", "retrieved and relevant", "all relevant in the database", "How complete the hit file is"],
          ["**Fallout**", "retrieved and non-relevant", "all non-relevant in the database", "How much noise the search pulls in"],
        ],
      },
      note:
        "This is the highest-frequency Unit-I question: define the system, list the four overhead steps, write both formulas and then state the two 100% conditions.",
    },
    {
      id: "u1-processes",
      question:
        "Explain the four major functional processes of a total information storage and retrieval system with a neat diagram.",
      marks: 10,
      freq: 3,
      papers:
        "Asked in the IRS question bank, the NR20 model paper and the JNTUH Feb 2022 paper as the text-normalization and functional-overview question.",
      sections: [
        {
          heading: "The four processes",
          bullets: [
            "A total information storage and retrieval system is composed of **item normalization**, **selective dissemination of information**, **archival document database search** and **index database search**.",
            "The **automatic file build (AFB)** process supports the index files and is shown together with index database search.",
            "Commercial systems often supply these capabilities as independent functions rather than as one fully integrated system.",
            "The logical view of the system uses boxes for functions and disks for stored data.",
          ],
        },
        {
          heading: "Process 1 · item normalization",
          bullets: [
            "**Item normalization** translates every incoming item into a standard format and creates the searchable data structure.",
            "It performs **standardization**, **logical subsetting or zoning**, **processing-token identification**, **token characterization** and **stemming**.",
            "The normalized item is sent to **document file creation**, while the processing tokens update the searchable index.",
            "This is the first step in any integrated IRS because later processes need a consistent internal representation.",
          ],
        },
        {
          heading: "Process 2 · selective dissemination of information",
          bullets: [
            "**Selective Dissemination of Information (SDI)** dynamically compares newly received items against standing statements of interest called **profiles**.",
            "A profile contains a broad search statement and a list of **user mail files** that receive the item when the statement is satisfied.",
            "As each item arrives, it is processed against every user profile, and a match places the item in the associated mail file.",
            "SDI is a **push** service, and its profiles contain significantly more search terms and cover a wider range of interests than ad hoc queries.",
          ],
        },
        {
          heading: "Process 3 · document database search",
          bullets: [
            "**Document database search** lets a query search against all items received, processed and stored by the system.",
            "It is composed of the **search process**, the **user-entered queries** and the **document database**.",
            "Items in the document database usually do not change, and the database may be partitioned by time for archiving.",
            "Queries differ from profiles because they are typically short and focused on one specific area of interest.",
          ],
        },
        {
          heading: "Process 4 · index database search and automatic file build",
          bullets: [
            "**Index database search** lets a user create private or public index files and search them for future reference.",
            "An index record can reference the original item or contain substantive information about it, similar to a library card catalogue.",
            "A **combined file search** first searches the index and then searches the items referenced by the index records that satisfied the query.",
            "The **automatic file build** process examines selected incoming documents and extracts potential index information such as authors, publication date, source and references.",
            "The rules for choosing documents and extracting index terms are stored in **automatic file build profiles**, and the output is a set of **candidate index records** for user review.",
          ],
        },
        {
          heading: "How the processes fit together",
          bullets: [
            "The normalized item feeds both **document file creation** for archival search and **automatic file build** for index creation.",
            "SDI works on the incoming stream, document search works on the complete archive, and index search works on user-created metadata.",
            "This separation lets the system support current-awareness delivery, retrospective search and personal filing without duplicating the stored item.",
          ],
        },
      ],
      table: {
        head: ["Process", "Input", "Core operation", "Output"],
        rows: [
          ["**Item normalization**", "raw item", "standardize, zone, tokenize, stem", "normalized item + searchable tokens"],
          ["**SDI (mail)**", "new item + profiles", "compare item with every profile", "items placed in mail files"],
          ["**Document database search**", "query + document database", "search all archived items", "ranked hit file"],
          ["**Index database search**", "query + public/private indexes", "search index, then referenced items", "index records and/or documents"],
        ],
      },
      diagrams: ["processes"],
      note:
        "Draw the diagram first, then write one paragraph for each of the four boxes. Mention automatic file build as the support process for the index database.",
    },
    {
      id: "u1-normalization",
      question:
        "Describe the item normalization process of an Information Retrieval System in detail with a neat diagram.",
      marks: 10,
      freq: 3,
      papers:
        "Asked directly in JNTUH Feb 2023 Part B and in JNTUH Feb 2022 as the text-normalization process, and covered in the question bank functional overview.",
      sections: [
        {
          heading: "Purpose of item normalization",
          bullets: [
            "**Item normalization** converts incoming items into a standard internal format that every later function can manipulate.",
            "It also performs **logical restructuring** so that the item can be searched by meaningful zones rather than as one undifferentiated block of text.",
            "The final goal is to create a **searchable data structure** from the identified and characterized processing tokens.",
          ],
        },
        {
          heading: "Step 1 · standardize the input",
          bullets: [
            "**Standardization** translates the different external formats of input data into formats acceptable to the system.",
            "Foreign languages are translated into **Unicode** so that one browser can display them and one search system can search them.",
            "Multimedia input is translated into standard formats such as **MPEG-2, MPEG-1, AVI and Real Video** for video, **WAV and Real Audio** for audio, and **GIF, JPEG and BMP** for images.",
          ],
        },
        {
          heading: "Step 2 · logical subsetting (zoning)",
          bullets: [
            "**Zoning** parses an item into logical subdivisions such as **Title**, **Author**, **Abstract**, **Main Text**, **Conclusion**, **References**, **Country** and **Keyword**.",
            "Zones are visible to the user and increase the **precision** of a search because a query can be restricted to a specific field.",
            "Zoning also optimizes display by showing the minimum data needed to judge possible relevance, such as the title and abstract.",
            "The zoning information is passed to token identification so that each token retains its zone.",
          ],
        },
        {
          heading: "Step 3 · identify processing tokens",
          bullets: [
            "A **processing token** is the information used in the search process, and it is a better unit than the ordinary word.",
            "Input symbols are divided into **valid word symbols** such as alphabetic characters and numbers, **inter-word symbols** such as blanks, periods and semicolons, and **special processing symbols** such as the hyphen.",
            "A word is defined as a contiguous set of word symbols bounded by inter-word symbols.",
            "The hyphen is treated specially because it can join or separate meaningful terms such as *state-of-the-art*.",
          ],
        },
        {
          heading: "Step 4 · apply the stop algorithm or stop list",
          bullets: [
            "The **stop algorithm** removes tokens that have little search value because of their frequency or semantics, such as words found in almost every item.",
            "It also removes words that occur only once or twice in the database, because they are too rare to help retrieval.",
            "The classic relationship is **Frequency × Rank = Constant**, which follows from **Zipf's law**.",
            "A **stop list** is the explicit list of words to remove, while the **stop algorithm** computes the decision from frequency and rank.",
            "Removing stop words saves system resources and reduces the size of the searchable index.",
          ],
        },
        {
          heading: "Zoning trade-offs",
          bullets: [
            "Zoning increases **precision** because a query can be restricted to the title, abstract or another field.",
            "It improves display because only the title and abstract may be needed to judge relevance.",
            "The cost is extra **indexing effort** and a larger index because the same token may be stored with several zone labels.",
            "Very fine zones can fragment meaningful context, while very coarse zones lose the precision benefit.",
            "Zoning decisions must therefore match the user's search behaviour and the item type.",
          ],
        },
        {
          heading: "Step 5 · characterize tokens",
          bullets: [
            "**Characterization** records special properties of a token, including uppercase use for proper names, acronyms and organizations, and numeric or date patterns.",
            "It can also perform **part-of-speech tagging** and **word-sense disambiguation** to improve the quality of the index.",
            "Characterization preserves information that simple tokenization would lose, such as the difference between *Apple* the company and *apple* the fruit.",
          ],
        },
        {
          heading: "Step 6 · apply stemming",
          bullets: [
            "**Stemming** normalizes a token to a standard semantic representation, so *computer*, *computes*, *computing* and *computation* become the stem **comput**.",
            "It reduces the number of unique words the system must store and improves search **efficiency** and **recall**.",
            "The cost is reduced **precision** and reduced **diversity**, because different words can collapse to the same stem.",
            "The notes quote storage savings of about **32%** for a small database, **20%** for a 1.6 MB database and **13.5%** for a 50 MB database.",
          ],
        },
        {
          heading: "Step 7 · create the searchable data structure",
          bullets: [
            "The stemmed tokens update an internal representation such as a **signature file**, **inverted list** or **PAT tree**.",
            "This structure contains semantic concepts that represent the items and limits what a user can find as a result of the search.",
            "The original item and each of its zones remain available for display through the document manager.",
          ],
        },
      ],
      formula:
        "Word definition: contiguous word symbols bounded by inter-word symbols\nStop relationship: Frequency × Rank = Constant\nStemming example: computer, computes, computing → comput",
      table: {
        head: ["Normalization step", "Question it answers", "Example"],
        rows: [
          ["**Standardize**", "What format is this item in?", "PDF/HTML → one internal format; language → Unicode"],
          ["**Zone**", "Which part of the item is this?", "Title, abstract, main text, references"],
          ["**Tokenize**", "What counts as a word?", "Letters, digits, hyphen rules"],
          ["**Stop**", "Which tokens add no value?", "the, is, of, and extremely rare words"],
          ["**Characterize**", "What special features does it have?", "proper name, acronym, date, part of speech"],
          ["**Stem**", "What is the common root?", "computing → comput"],
          ["**Index**", "Where is the token stored?", "inverted file, PAT tree, signature file"],
        ],
      },
      diagrams: ["normalization"],
      note:
        "The exam diagram has seven or eight boxes. Write the steps in order and add one example under each step; that is what earns the application marks.",
    },
    {
      id: "u1-search-capabilities",
      question:
        "Discuss the search capabilities of an Information Retrieval System in detail with examples.",
      marks: 10,
      freq: 4,
      papers:
        "Asked in the IRS question bank, the NR20 model paper, JNTUH Feb 2022 and JNTUH Feb 2023 Part A (search capabilities of an IDS).",
      sections: [
        {
          heading: "Query term sets",
          bullets: [
            "A **query term set** describes the needed information by specifying a set of query terms, and the system retrieves every document that contains at least one term.",
            "Documents are ranked by the number of query terms they include, so documents containing all terms appear first.",
            "Documents containing all but one term appear next, and documents containing only one query term appear last.",
          ],
        },
        {
          heading: "Boolean queries",
          bullets: [
            "**Boolean queries** relate multiple terms with **AND**, **OR** and **NOT**, and sometimes **XOR**.",
            "The corresponding set operations are **intersection**, **union** and **difference** on the sets of documents that contain each term.",
            "The precedence order is **NOT**, then **AND**, then **OR**, and parentheses override the order.",
            "For example, *COMPUTER OR SERVER AND NOT MAINFRAME* selects computers, or servers that do not discuss mainframes, under standard precedence.",
            "*COMPUTER AND NOT (SERVER OR MAINFRAME)* selects computers that discuss neither servers nor mainframes.",
          ],
        },
        {
          heading: "Proximity and contiguous word phrases",
          bullets: [
            "**Proximity search** requires two terms to occur within a specified number of words, in the same sentence or in the same paragraph.",
            "**Term adjacency** is a special proximity case in which the terms must be next to each other.",
            "A **contiguous word phrase** requires the exact sequence of words, so *information retrieval* does not match *retrieval of information*.",
            "Proximity and phrase search increase precision but can reduce recall when the author uses a different wording.",
          ],
        },
        {
          heading: "Fuzzy search and term masking",
          bullets: [
            "**Fuzzy search** retrieves terms that are similar to the query term, so it handles spelling mistakes and morphological variation.",
            "**Term masking** uses wildcard patterns, with a fixed-length mask matching a known number of characters and a variable-length mask matching any number.",
            "Masking is useful for stems, prefixes and suffixes such as *comput** or *organi?ation*.",
            "The limitation is that a broad mask can match many unrelated words, so it increases noise and reduces precision.",
          ],
        },
        {
          heading: "Numeric and date ranges",
          bullets: [
            "**Numeric range search** retrieves items whose numeric field falls between a lower and an upper bound.",
            "**Date range search** applies the same idea to dates, and it may support relative expressions such as last month or after a publication year.",
            "These searches are important in catalogues, financial records and scientific databases.",
          ],
        },
        {
          heading: "Concept and thesaurus expansion",
          bullets: [
            "**Concept or thesaurus expansion** adds synonyms, narrower terms and related terms to the user query.",
            "Expansion improves **recall** because the system can find items that use different vocabulary for the same concept.",
            "The risk is **query drift**, where added terms bring in items that are not about the user's actual need.",
          ],
        },
        {
          heading: "Natural language queries",
          bullets: [
            "**Natural language queries** let the user state the need in ordinary language instead of Boolean syntax.",
            "Natural language suffers from **linguistic variation**, where different words express the same idea, and **linguistic ambiguity**, where one word has several interpretations.",
            "The system must perform parsing, stop-word removal and term weighting to turn the sentence into a searchable statement.",
          ],
        },
        {
          heading: "Natural language queries versus multimedia queries",
          bullets: [
            "A **natural language query** is text in ordinary language, so linguistic variation and ambiguity are the main problems.",
            "A **multimedia query** may be text, an example image, an audio clip or a video segment, so the system must compare features rather than only words.",
            "Natural language queries are easy for the user to type, while multimedia queries are easier for expressing visual or acoustic similarity.",
            "Natural language retrieval relies on tokenization and semantics, while multimedia retrieval relies on colour, texture, shape and motion features.",
            "Multimedia queries are harder to explain and evaluate because relevance is less precisely defined than for text.",
          ],
        },
      ],
      table: {
        head: ["Search capability", "Operator or form", "Main effect"],
        rows: [
          ["**Query term set**", "list of terms", "rank by number of query terms present"],
          ["**Boolean**", "AND, OR, NOT, XOR", "exact set combination, no relevance ranking"],
          ["**Proximity**", "within n words / sentence / paragraph", "higher precision, lower recall"],
          ["**Phrase**", "exact contiguous sequence", "highest precision for multi-word concepts"],
          ["**Fuzzy**", "similar spelling or morphology", "handles errors and variants"],
          ["**Masking**", "fixed or variable wildcard", "pattern matching, can add noise"],
          ["**Range**", "numeric or date bounds", "field-level filtering"],
          ["**Thesaurus**", "synonyms and related terms", "higher recall, risk of drift"],
          ["**Natural language**", "free sentence", "easy for the user, harder for the system"],
        ],
      },
      note:
        "The examiner often asks for a diagram-free list. Name the capability, give one example, and state whether it raises precision or recall.",
    },
    {
      id: "u1-browse-misc",
      question:
        "Explain the browse capabilities and miscellaneous capabilities of an Information Retrieval System.",
      marks: 10,
      freq: 3,
      papers:
        "Asked in the IRS question bank (browse and miscellaneous capabilities) and in the NR20 model paper; individual capabilities appear as Part-A questions.",
      sections: [
        {
          heading: "What browsing means",
          bullets: [
            "**Browsing** is an interactive search activity in which the direction of the search is determined by the user on the basis of immediate feedback from the system being browsed.",
            "Most users of most IRSs exhibit browsing behaviour regardless of the underlying system structure.",
            "The query phase ends and the browse phase begins with a **summary display** of the result set.",
            "Summary displays use either a **line-item status** or **data visualization**.",
            "Powerful browsing is particularly important when **precision is low**, because the user must inspect many candidates.",
          ],
        },
        {
          heading: "Ranking",
          bullets: [
            "**Ranking** presents the most likely relevant items first using a score that represents similarity to the query.",
            "Ranking reduces the user's scanning overhead because the best candidates appear at the top of the hit file.",
            "A ranked list is more useful than arrival-order display for most searches, especially when the hit file is large.",
          ],
        },
        {
          heading: "Zoning and highlighting",
          bullets: [
            "**Zoning** lets the user browse and search a specific part of an item, such as the title, abstract or conclusion.",
            "**Highlighting** displays the query terms inside the retrieved item so the user can see why the item matched.",
            "Highlighting speeds up relevance judgment and reduces the time spent reading irrelevant passages.",
          ],
        },
        {
          heading: "Vocabulary browse",
          bullets: [
            "**Vocabulary browse** displays the unique processing tokens of the database in alphabetical order together with the number of unique items in which each word occurs.",
            "It makes search generation easier and supports spelling correction, for example when a user types *computen* instead of *computer*.",
            "The vocabulary view also helps the user choose between related terms before running the query.",
          ],
        },
        {
          heading: "Iterative search and query refinement",
          bullets: [
            "**Iterative search** subjects the result of a previous search to a new query, which is equivalent to repeating the old query with additional conditions.",
            "The user can narrow or broaden the search after seeing the first result set, so the final query is built through interaction.",
            "A **search history log** stores previous queries so the user can revisit or combine them.",
          ],
        },
        {
          heading: "Canned queries and SDI",
          bullets: [
            "**Canned or stored queries** let users save previously used queries and reuse them later.",
            "Canned queries tend to be large because they accumulate several conditions and terms.",
            "**Selective Dissemination of Information** is a related miscellaneous capability that pushes new matching items to a user profile.",
          ],
        },
      ],
      table: {
        head: ["Capability", "What the user does", "Why it reduces overhead"],
        rows: [
          ["**Ranking**", "reads the top items first", "avoids scanning the whole hit file"],
          ["**Zoning**", "searches or views one field", "raises precision and shortens reading"],
          ["**Highlighting**", "sees the matched terms", "speeds up relevance judgment"],
          ["**Vocabulary browse**", "checks the exact term and spelling", "prevents failed queries"],
          ["**Iterative search**", "refines the previous result", "converges on the need step by step"],
          ["**Canned query**", "reuses a saved statement", "saves query-generation time"],
        ],
      },
      note:
        "Draw the browse phase as query → summary display → user feedback → refined search. Mention that browsing matters most when precision is low.",
    },
    {
      id: "u1-irs-dbms",
      question:
        "Differentiate data retrieval from information retrieval and explain the relationship between Information Retrieval Systems and Database Management Systems.",
      marks: 10,
      freq: 3,
      papers:
        "Asked in JNTUH Feb 2022 and in the IRS question bank as 'difference between database and information retrieval systems' and 'relationship between IRS and DBMS'.",
      sections: [
        {
          heading: "Two categories of systems",
          bullets: [
            "There are two major categories of systems available to process items: **Information Retrieval Systems** and **Database Management Systems (DBMS)**.",
            "An IRS manipulates **information items**, while a DBMS is optimized to handle **structured data**.",
            "A DBMS is excellent when the data is well defined and the user wants an exact answer from a table.",
          ],
        },
        {
          heading: "Structured data versus information",
          bullets: [
            "**Structured data** is well-defined facts represented by tables, and every attribute has a clear semantic description.",
            "There is no confusion about what *employee name* or *employee salary* means or what values belong in a record.",
            "Two people can write different abstracts of the same item, because one may emphasise the main topic while another describes many details with a different vocabulary.",
            "This **diversity and ambiguity of language** is the central difficulty of information retrieval.",
          ],
        },
        {
          heading: "Exact matching versus iterative search",
          bullets: [
            "With structured data the user enters a specific request and receives the desired information, often in a tabulated report.",
            "A search of information items has a high probability of **not finding all relevant items**, so the user must refine the search.",
            "This refinement process is called **iterative search**, and it is a normal part of using an IRS.",
            "The IRS therefore supports **best-match** and ranked retrieval, while a DBMS usually supports **exact-match** retrieval.",
          ],
        },
        {
          heading: "Data retrieval versus information retrieval",
          bullets: [
            "**Data retrieval** answers a precise query over structured fields and returns a deterministic, exact result.",
            "**Information retrieval** answers an imprecise need over unstructured or semi-structured items and returns a ranked set of probable answers.",
            "Data retrieval uses formal query languages such as SQL, while information retrieval accepts keywords, Boolean logic and natural language.",
            "Data retrieval is evaluated by correctness, while information retrieval is evaluated by **precision**, **recall** and user effort.",
          ],
        },
        {
          heading: "Practical integration",
          bullets: [
            "The integration of DBMS and IRS is practically important because users need both exact records and free-text search in one view.",
            "Commercial database companies have already integrated the two system types, and one of the first was the **INQUIRE DBMS**.",
            "The DBMS can store the items and metadata, while the IRS adds **NLP**, **ranking**, **zoning** and **relevance feedback**.",
            "A combined search can first use structured filters in the DBMS and then rank the remaining items with IRS similarity measures.",
          ],
        },
      ],
      table: {
        head: ["Point", "Data retrieval / DBMS", "Information retrieval / IRS"],
        rows: [
          ["Data type", "structured tables and facts", "text, images, audio, video"],
          ["Query", "SQL, exact fields", "keywords, Boolean, natural language"],
          ["Matching", "exact", "best match and ranked"],
          ["Result", "deterministic set", "ranked hit file with uncertainty"],
          ["Evaluation", "correctness and consistency", "precision, recall and overhead"],
          ["Example", "employee salary query", "find papers about IRS clustering"],
        ],
      },
      note:
        "The examiner looks for the words **structured data**, **ambiguity**, **iterative search** and **INQUIRE DBMS**. Add the four-row comparison table for easy marks.",
    },
    {
      id: "u1-digital-libraries",
      question:
        "Write a detailed note on digital libraries and data warehouses in the context of Information Retrieval Systems.",
      marks: 10,
      freq: 3,
      papers:
        "Asked in the IRS question bank as a Part-B subquestion and in JNTUH Feb 2022 as 'new areas of IR research for a digital library'.",
      sections: [
        {
          heading: "Digital library definition",
          bullets: [
            "A **digital library** enables users to interact effectively with information distributed across a network.",
            "These network information systems support the **search and display of items from organized collections**.",
            "Libraries have always stored and retrieved information in the medium in which it was created, and digital libraries extend this to electronic media.",
            "The worldwide internet of libraries and information sources has shifted focus to the concept of an electronic library.",
          ],
        },
        {
          heading: "Digital library services and software",
          bullets: [
            "**Indexing** is a critical discipline in library science, and significant effort has gone into indexing and cataloguing standards.",
            "The migration of library products to digital format gives users the full text of items, which changes the index process.",
            "Libraries also provide **search intermediaries** who assist users in finding information.",
            "Common digital library software includes **KOHA**, **BiblioTeq** and **PMP**.",
          ],
        },
        {
          heading: "New research areas for digital libraries",
          bullets: [
            "**Interoperability** is needed so that different library systems can exchange records and search each other's collections.",
            "**Metadata standards** such as MARC and Dublin Core describe items consistently across libraries.",
            "**Multilingual search**, **multimedia preservation**, **copyright management** and **user-interface design** are important open research areas.",
            "**Evaluation** of digital library services and **long-term preservation** of digital objects remain active challenges.",
          ],
        },
        {
          heading: "Data warehouse definition",
          bullets: [
            "A **data warehouse** is a data management system designed to support business intelligence, especially analytics.",
            "It is a **relational database designed for query and analysis rather than transaction processing**, and it contains large amounts of historical data.",
            "A warehouse is **subject-oriented**, **integrated**, **time-variant** and **non-volatile**, and it serves the whole organization rather than one group.",
            "It is not used for daily operations; it is used for making decisions and for **OLAP** analysis.",
          ],
        },
        {
          heading: "Warehouse software and data marts",
          bullets: [
            "Common warehouse products include **Amazon Redshift**, **Microsoft Azure**, **Google BigQuery** and **Snowflake**.",
            "A **data mart** is a smaller, subject-specific subset of a warehouse that serves one department.",
            "Warehouses are built through **extraction**, **cleaning**, **transformation**, **integration**, **loading** and **periodic refresh**.",
          ],
        },
        {
          heading: "Overlap and difference",
          bullets: [
            "Digital libraries, data warehouses and IRSs all are repositories of information whose primary goal is to satisfy user information needs.",
            "A digital library focuses on **organized collections, cataloguing and full-text access**, while a warehouse focuses on **historical business analysis and OLAP**.",
            "An IRS focuses on **search and ranking of information items**, and it can be the retrieval layer for either a digital library or a warehouse.",
            "The IRS has traditionally addressed only a small subset of digital library issues, mainly textual search and retrieval, without establishing content standards.",
          ],
        },
      ],
      table: {
        head: ["System", "Primary goal", "Typical content", "Typical operation"],
        rows: [
          ["**Digital library**", "networked access to organized collections", "books, journals, multimedia", "catalogue search, full-text search, display"],
          ["**Data warehouse**", "business intelligence and analytics", "historical integrated business data", "OLAP, aggregation, reporting"],
          ["**IRS**", "minimise user overhead in finding information", "text and multimedia items", "query, rank, browse, feedback"],
        ],
      },
      note:
        "Define both systems, give one software example for each, and then state the overlap: all three are information repositories with the same primary goal.",
    },
    {
      id: "u1-index-files",
      question:
        "Explain public and private index files and the document database, index database and multimedia database search processes.",
      marks: 10,
      freq: 3,
      papers:
        "Asked in the IRS question bank as 'types of index files' and 'document, index and multimedia database search'; JNTUH Feb 2023 Part A asks for a public index.",
      sections: [
        {
          heading: "Why index files exist",
          bullets: [
            "When an item is judged useful, the user may want to save or file it for future reference, and this is accomplished through the **index process**.",
            "In the index process the user logically stores an item in a file with additional **index terms** and descriptive text.",
            "An index can reference the original item or contain substantive information about the original item, similar to a card catalogue.",
            "The index database search process provides the capability to **create indexes and search them**.",
          ],
        },
        {
          heading: "Public index files",
          bullets: [
            "**Public index files** are maintained by professional library services personnel.",
            "They typically index **every item** in the document database.",
            "Users may use public index files as part of search criteria to **increase recall**.",
            "Their broad coverage makes them the shared catalogue of the organisation.",
          ],
        },
        {
          heading: "Private index files",
          bullets: [
            "A user can have **one or more private index files**, leading to a very large number of files.",
            "Each private index file references only a **small subset** of the total items in the document database.",
            "Users can **constrain their search** by private index files, which increases precision for personal collections.",
            "The capability to create private and public index files is frequently implemented through a structured **RDBMS**.",
          ],
        },
        {
          heading: "Document database search",
          bullets: [
            "**Document database search** provides a query against **all items received** by the system.",
            "It is composed of the **search process**, **user-entered queries** and the **document database**.",
            "The document database contains items that have been received, processed and stored, and those items usually do not change.",
            "The database may be partitioned by time and archived by those time partitions.",
          ],
        },
        {
          heading: "Index database search and combined file search",
          bullets: [
            "**Index database search** provides the capability to create indexes and search them, and the user may retrieve the index record and/or the document it references.",
            "A **combined file search** searches the index and then searches the items referenced by the index records that satisfied the index portion of the query.",
            "In an ideal system an index record could reference **portions of items** rather than the total item.",
            "The automatic file build process creates candidate index records for review before the index file is updated.",
          ],
        },
        {
          heading: "Multimedia database search",
          bullets: [
            "A **multimedia database search** handles audio, images and video in addition to text.",
            "Retrieval can use **description-based indexing** with captions and keywords, or **content-based indexing** with colour, texture, shape and motion.",
            "The search process must compare a query against extracted features or metadata rather than only against words.",
            "Multimedia search is harder because the features are high-dimensional and the notion of relevance is less precise.",
          ],
        },
      ],
      table: {
        head: ["Search type", "Data searched", "Typical query", "Main output"],
        rows: [
          ["**Document database search**", "all archived items", "short focused keyword query", "ranked documents"],
          ["**Index database search**", "public and private indexes", "index terms and metadata", "index records and referenced items"],
          ["**Combined file search**", "index first, then documents", "metadata plus content query", "documents referenced by matching index records"],
          ["**Multimedia database search**", "audio, image and video features", "example image, audio clip or feature description", "similar media items"],
        ],
      },
      note:
        "The public/private distinction is the easiest 2-mark question in this unit: public indexes cover everything and are maintained by librarians; private indexes cover a user's subset and improve precision.",
    },
  ],
};
