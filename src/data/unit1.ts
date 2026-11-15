import type { Unit } from "./types";

export const unit1: Unit = {
  id: "unit1",
  roman: "I",
  title: "Unit I · Introduction & Data Preprocessing",
  subtitle:
    "Data mining foundations, KDD, architectures, functionalities, task primitives, major issues, data warehouses and the four preprocessing tasks.",
  color: "var(--v-olive)",
  questions: [
    {
      id: "u1-preprocessing",
      question:
        "Explain data preprocessing and its major tasks with examples. Why is data preprocessing necessary before mining?",
      marks: 10,
      freq: 9,
      papers: "Asked in 9 of 12 papers, including 10-mark questions in KR21 Jan 2025 and RKR21 May 2026.",
      sections: [
        {
          heading: "What data preprocessing is and why it matters",
          bullets: [
            "**Data preprocessing** converts raw real-world data into a clean, consistent and compact form that a mining algorithm can use efficiently.",
            "It covers the first four KDD steps, namely **data cleaning**, **data integration**, **data selection** and **data transformation**.",
            "Real data is usually **incomplete**, **noisy** and **inconsistent**, so mining it directly gives unreliable and misleading patterns.",
            "The goal is not to change the meaning of the data but to remove the defects that would confuse the mining algorithm.",
          ],
        },
        {
          heading: "Data cleaning: missing values, noise and outliers",
          bullets: [
            "**Data cleaning** fills in missing values, smooths noise, identifies outliers and removes inconsistencies.",
            "Missing values are handled by ignoring the tuple, using a **global constant**, using the **attribute mean or median**, using the **class mean** or predicting the **most probable value**.",
            "**Noisy data** is smoothed by **binning** methods such as equal-width, equal-frequency and clustering, by **regression** and by **outlier analysis**.",
          ],
        },
        {
          heading: "Data integration: entity identification and redundancy",
          bullets: [
            "**Data integration** combines data from multiple databases, files or services into one coherent store with a unified schema.",
            "The **entity identification problem** occurs when the same real-world entity has different keys or names in different sources, and those records must be matched correctly.",
            "Other integration issues are **redundancy**, **tuple duplication** and **data value conflicts** between sources.",
            "Redundancy is detected with **correlation analysis** for numeric attributes and the **chi-square test** for nominal attributes.",
          ],
        },
        {
          heading: "Data reduction",
          bullets: [
            "**Data reduction** obtains a reduced representation of the data that produces the same or almost the same mining results.",
            "The three families of data reduction are **dimensionality reduction**, **numerosity reduction** and **data compression**.",
            "Reduction makes mining faster and cheaper while keeping the essential pattern in the data.",
          ],
        },
        {
          heading: "Data transformation and normalisation",
          bullets: [
            "**Data transformation** changes the data into mining-friendly forms using **normalisation**, **discretisation** and **concept hierarchy generation**.",
            "**Min-max normalisation** maps a value to the range 0 to 1, while **z-score normalisation** scales a value using the mean and standard deviation.",
            "**Discretisation** replaces continuous values with intervals, and **concept hierarchy generation** replaces detailed values with higher-level concepts.",
          ],
        },
        {
          heading: "The payoff",
          bullets: [
            "Good preprocessing improves the **accuracy**, **efficiency** and **interpretability** of the final model because the miner does not have to compensate for dirty data.",
          ],
        },
      ],
      formula:
        "Min-max: v′ = (v − min) / (max − min)\nZ-score: v′ = (v − μ) / σ\nDecimal scaling: v′ = v / 10ʲ",
      table: {
        head: ["Task", "What it does", "Typical method"],
        rows: [
          ["**Data cleaning**", "Fills missing values and smooths noise", "Binning, regression, mean or median imputation"],
          ["**Data integration**", "Combines multiple sources into one store", "Schema matching, entity resolution, correlation checks"],
          ["**Data reduction**", "Shrinks the data without losing the pattern", "Attribute subset selection, PCA, sampling, histograms"],
          ["**Data transformation**", "Puts values into a suitable mining form", "Min-max, z-score, discretisation, concept hierarchies"],
        ],
      },
    },
    {
      id: "u1-dw-integration",
      question:
        "Explain the integration of a data mining system with a data warehouse, including the coupling schemes.",
      marks: 10,
      freq: 7,
      papers: "Asked in 7 of 12 papers as a 5-mark or 10-mark question.",
      sections: [
        {
          heading: "Warehouse and why integration helps",
          bullets: [
            "A **data warehouse** is a subject-oriented, integrated, time-variant and non-volatile repository that supports decision making.",
            "Integrating a mining system with a warehouse lets the miner use **cleaned, historical and summarised** data instead of raw operational records.",
          ],
        },
        {
          heading: "The four coupling schemes",
          bullets: [
            "**No coupling** means the mining system works on raw files or databases and never uses the warehouse.",
            "**Loose coupling** means the mining system fetches needed data from the warehouse and processes it in its own scratch area.",
            "**Semi-tight coupling** lets the mining system use precomputed warehouse summaries and data cubes to answer mining queries faster.",
            "**Tight coupling** embeds the mining functions directly inside the warehouse server so that warehouse indexing and optimisation help every mining step.",
            "Semi-tight and tight coupling are preferred in practice because precomputed summaries greatly reduce mining time.",
          ],
        },
        {
          heading: "Interfaces and OLAP support",
          bullets: [
            "In the standard architecture, the **database or data warehouse server** fetches the task-relevant data for the **data mining engine**.",
            "The **knowledge base** supplies concept hierarchies, constraints and interestingness thresholds that guide the search.",
            "The **pattern evaluation module** keeps only interesting patterns, and the **graphical user interface** presents the results to the user.",
            "Warehouse-based mining also supports **OLAP** exploration before mining, so the user can view the data at different abstraction levels.",
          ],
        },
      ],
      formula:
        "Coupling ladder: no coupling → loose coupling → semi-tight coupling → tight coupling",
      diagrams: ["dwdm"],
    },
    {
      id: "u1-functionalities",
      question:
        "Explain the basic functionalities of data mining with suitable examples.",
      marks: 10,
      freq: 5,
      papers: "Asked in 5 of 12 papers, including repeated 5-mark questions on 'functionalities of data mining'.",
      sections: [
        {
          heading: "Descriptive functionalities",
          bullets: [
            "**Data characterization** summarises the general features of a target class, such as the profile of customers who spend above a threshold.",
            "**Data discrimination** compares one target class with one or more contrasting classes, such as comparing high-value customers with low-value customers.",
            "**Association analysis** finds rules that connect items or events that occur together, such as bread and butter in market basket data.",
            "**Frequent pattern mining** finds itemsets, subsequences or substructures that appear often in a database.",
          ],
        },
        {
          heading: "Predictive functionalities",
          bullets: [
            "**Classification** builds a model from labelled training tuples and predicts a categorical class label for new tuples.",
            "**Numeric prediction** builds a model that predicts a continuous value, such as the future sales of a product.",
          ],
        },
        {
          heading: "Grouping, anomaly and evolution analysis",
          bullets: [
            "**Cluster analysis** groups unlabelled objects so that objects in one cluster are similar and objects in different clusters are dissimilar.",
            "**Outlier analysis** finds objects that deviate significantly from the rest of the data, such as fraudulent credit-card transactions.",
            "**Evolution analysis** models and predicts trends over time, such as the monthly change in sales or stock prices.",
          ],
        },
        {
          heading: "Presentation",
          bullets: [
            "**Summarisation and visualisation** present the mined knowledge in compact charts, cubes and reports that a user can interpret quickly.",
          ],
        },
      ],
      table: {
        head: ["Functionality", "Kind of knowledge", "Example"],
        rows: [
          ["Characterization", "General features of a class", "Profile of loyal customers"],
          ["Association", "Frequent co-occurrence", "Milk and bread bought together"],
          ["Classification", "Categorical class label", "Loan applicant is safe or risky"],
          ["Prediction", "Continuous value", "Expected sales for next quarter"],
          ["Clustering", "Unsupervised groups", "Customer segments"],
          ["Outlier analysis", "Rare or abnormal objects", "Fraud detection"],
        ],
      },
    },
    {
      id: "u1-issues",
      question: "Discuss the major issues in data mining.",
      marks: 10,
      freq: 5,
      papers: "Asked in 5 of 12 papers as 'major issues', 'challenging issues' or 'issues related to data mining systems'.",
      sections: [
        {
          heading: "Mining methodology and user interaction",
          bullets: [
            "**Mining methodology and user interaction** cover how to mine different kinds of knowledge and how to express a user's request naturally.",
            "A major methodology issue is **pattern interestingness**, because a huge number of patterns may be discovered and most of them may be trivial or irrelevant.",
            "**Interactive mining** is needed so that a user can change constraints and refine the search without restarting the whole process.",
          ],
        },
        {
          heading: "Efficiency and scalability",
          bullets: [
            "**Efficiency and scalability** require mining algorithms to work on databases that are far larger than available main memory.",
            "**Parallel, distributed and incremental mining** are needed when data is spread over many sites or grows continuously over time.",
          ],
        },
        {
          heading: "Diverse data and data quality",
          bullets: [
            "**Diversity of database types** is a challenge because data may be relational, spatial, temporal, textual, multimedia, web-based or streamed.",
            "**Data quality** issues such as noise, missing values, inconsistency and redundancy can lead to wrong or unstable patterns.",
            "**Pattern evaluation** is difficult when the data is uncertain or incomplete, so a pattern that looks strong in one sample may not hold in the full database.",
          ],
        },
        {
          heading: "Society and the knowledge base",
          bullets: [
            "**Data mining and society** raise concerns about privacy, security, data ownership and the ethical use of discovered knowledge.",
            "The **knowledge base** must supply correct concept hierarchies and thresholds, otherwise the mining engine may search the wrong space or judge patterns incorrectly.",
          ],
        },
      ],
    },
    {
      id: "u1-attributes",
      question:
        "Explain data objects, attributes and the different types of attributes with examples.",
      marks: 5,
      freq: 3,
      papers: "Part-A questions on nominal, discrete, continuous and multidimensional data appear in 3 of 12 papers.",
      sections: [
        {
          heading: "Data objects and attributes",
          bullets: [
            "A **data object** is a record, point, case, sample, entity or instance that is described by a set of attributes.",
            "An **attribute** is a property or characteristic of an object, such as age, income, colour or temperature.",
            "Attributes are also called **variables**, **fields**, **characteristics** or **features**.",
          ],
        },
        {
          heading: "Qualitative attributes",
          bullets: [
            "**Qualitative attributes** describe categories and are divided into **nominal**, **binary** and **ordinal** types.",
            "A **nominal attribute** holds names or symbols with no meaningful order, such as colour = red, green or blue.",
            "A **binary attribute** has only two states, and it is **symmetric** when both states are equally important and **asymmetric** when one state is more important.",
            "An **ordinal attribute** has a meaningful order but no known magnitude between values, such as grade = A, B or C.",
          ],
        },
        {
          heading: "Quantitative attributes",
          bullets: [
            "**Quantitative attributes** are numeric and are divided into **interval-scaled**, **ratio-scaled**, **discrete** and **continuous** types.",
            "An **interval-scaled** attribute has meaningful differences but no true zero, such as temperature in degrees Celsius.",
            "A **ratio-scaled** attribute has a true zero and supports meaningful ratios, such as weight, height or salary.",
            "A **discrete attribute** has a finite or countable set of values, while a **continuous attribute** has infinitely many real values.",
          ],
        },
        {
          heading: "Multidimensional data and why the type matters",
          bullets: [
            "**Multidimensional data** contains several attributes or dimensions, so each object becomes a point in a multidimensional space.",
            "The attribute type decides which **preprocessing**, **distance measure** and **mining method** can be applied correctly.",
            "Nominal values need equality-based comparisons, whereas interval and ratio values support arithmetic and distance calculations.",
          ],
        },
      ],
      table: {
        head: ["Type", "Order?", "Meaningful difference?", "Example"],
        rows: [
          ["Nominal", "No", "No", "Colour, occupation"],
          ["Binary", "No", "No", "Smoker / non-smoker"],
          ["Ordinal", "Yes", "No", "Grade A, B, C"],
          ["Interval", "Yes", "Yes, no true zero", "Temperature in °C"],
          ["Ratio", "Yes", "Yes, with true zero", "Weight, salary"],
        ],
      },
    },
    {
      id: "u1-interestingness",
      question:
        "What makes a pattern interesting? Explain objective and subjective interestingness measures with examples.",
      marks: 10,
      freq: 3,
      papers: "Asked as 'Evaluate the role of interestingness patterns' and 'What is interestingness in data mining' in 3 of 12 papers.",
      sections: [
        {
          heading: "What makes a pattern interesting",
          bullets: [
            "A pattern is **interesting** if it is valid, novel, potentially useful and understandable to the user.",
            "**Objective interestingness** depends only on the data and can be measured with statistical or rule-quality quantities.",
          ],
        },
        {
          heading: "Objective measures: support, confidence and lift",
          bullets: [
            "**Support** measures how often an itemset or rule occurs, and **confidence** measures how reliable the rule's implication is.",
            "**Correlation** measures such as **lift** check whether the antecedent and consequent occur together more often than chance would predict.",
            "A rule can have high support and high confidence but still be **negatively correlated**, so support and confidence are not sufficient on their own.",
            "For example, if coffee is bought by 80% of customers and tea by 20%, a rule tea → coffee with 75% confidence has lift 0.75 / 0.80 = 0.94 and is not useful.",
            "**Lift** is computed as P(A ∪ B) divided by P(A) × P(B), where a value above 1 indicates a positive relationship.",
          ],
        },
        {
          heading: "Subjective interestingness",
          bullets: [
            "**Subjective interestingness** depends on the user's beliefs and expectations, because a pattern is interesting when it is **unexpected** or **actionable**.",
            "A pattern that is already known or that leads to no decision is usually not subjectively interesting even if it is statistically strong.",
          ],
        },
        {
          heading: "Pattern explosion and evaluation",
          bullets: [
            "**Pattern explosion** is a major problem because a low support threshold can produce millions of rules, most of which are trivial.",
            "Interestingness filters and **top-k** mining keep the search focused on a small set of useful patterns.",
            "The **pattern evaluation module** applies these measures and thresholds before the discovered knowledge is presented to the user.",
          ],
        },
      ],
      formula:
        "Support(A → B) = P(A ∪ B)\nConfidence(A → B) = P(B | A)\nLift(A → B) = P(A ∪ B) / (P(A) × P(B))",
    },
    {
      id: "u1-classification-systems",
      question: "Explain the classification of data mining systems.",
      marks: 10,
      freq: 3,
      papers: "Asked in 3 of 12 papers, including the question 'Compare different classifications of data mining systems'.",
      sections: [
        {
          heading: "Classification by database and knowledge type",
          bullets: [
            "Data mining systems are classified by the **kind of databases mined**, because different data types need different mining techniques.",
            "By database type, systems include **relational**, **transactional**, **data warehouse**, **spatial**, **time-series**, **text**, **multimedia** and **World Wide Web** mining systems.",
            "Systems are also classified by the **kind of knowledge mined**, such as characterization, discrimination, association, classification, clustering, outlier analysis and evolution analysis.",
          ],
        },
        {
          heading: "Classification by technique",
          bullets: [
            "By the **kind of techniques used**, systems include **database-oriented** techniques, **machine-learning** techniques, **statistical** techniques, **neural-network** techniques and **visualisation** techniques.",
            "Database-oriented systems use SQL aggregation, data cubes and OLAP operations to discover patterns.",
            "Machine-learning systems build models from training data using decision trees, Bayesian classifiers, rules or neural networks.",
            "Statistical systems use probability distributions, regression, correlation and hypothesis testing to discover knowledge.",
          ],
        },
        {
          heading: "Classification by application domain",
          bullets: [
            "Systems are further classified by the **application domain**, such as retail, banking, insurance, telecommunications, bioinformatics and web analytics.",
            "A real system often belongs to several categories at once, so the classification dimensions together describe its design.",
          ],
        },
      ],
    },
    {
      id: "u1-kdd",
      question: "Explain the KDD process with a neat diagram.",
      marks: 10,
      freq: 3,
      papers: "Asked in 3 of 12 papers, often combined with the 'architecture of a data mining system' question.",
      sections: [
        {
          heading: "What the KDD process is",
          bullets: [
            "**Knowledge discovery in databases (KDD)** is the overall process of turning low-level data into useful knowledge.",
            "The process is **iterative and interactive**, because the user may return to an earlier step after evaluating the discovered patterns.",
          ],
        },
        {
          heading: "Preprocessing steps: cleaning, integration, selection and transformation",
          bullets: [
            "**Data cleaning** removes noise and inconsistent data so that the later steps work on reliable records.",
            "**Data integration** combines multiple data sources into a single coherent data store.",
            "**Data selection** retrieves the data that is relevant to the current analysis task.",
            "**Data transformation** consolidates the selected data into forms suitable for mining by using summary or aggregation operations.",
          ],
        },
        {
          heading: "The mining, evaluation and presentation steps",
          bullets: [
            "**Data mining** applies intelligent methods to extract patterns from the prepared data, and this step is the essential core of the process.",
            "**Pattern evaluation** uses interestingness measures to identify the patterns that truly represent knowledge.",
            "**Knowledge presentation** uses visualisation and knowledge representation techniques to present the mined knowledge to the user.",
            "Steps one to four together form **data preprocessing**, while the discovered knowledge may be stored back into the knowledge base for future mining.",
          ],
        },
      ],
      formula:
        "Data cleaning → Data integration → Data selection → Data transformation → Data mining → Pattern evaluation → Knowledge presentation",
      diagrams: ["kdd"],
    },
    {
      id: "u1-architecture",
      question: "Explain the architecture of a typical data mining system.",
      marks: 5,
      freq: 2,
      papers: "Asked in 2 of 12 papers as 'write a note on data mining architecture'.",
      sections: [
        {
          heading: "Information repositories and the data server",
          bullets: [
            "The **database, data warehouse or other information repository** is the source from which the task-relevant data is taken.",
            "The **database or data warehouse server** is responsible for fetching the data that matches the user's mining request.",
          ],
        },
        {
          heading: "Knowledge base",
          bullets: [
            "The **knowledge base** stores domain knowledge, concept hierarchies, user beliefs and interestingness thresholds.",
            "It guides the search and helps the evaluation module judge whether a pattern is interesting.",
          ],
        },
        {
          heading: "Mining engine, evaluation and interface",
          bullets: [
            "The **data mining engine** contains functional modules for characterization, association analysis, classification, clustering, evolution analysis and deviation analysis.",
            "The **pattern evaluation module** uses interestingness measures to filter the patterns produced by the mining engine.",
            "The **graphical user interface** lets the user specify a mining query or task and displays the mined patterns.",
          ],
        },
        {
          heading: "How the components work together",
          bullets: [
            "The components communicate so that the mining engine can request data, consult the knowledge base and send candidate patterns for evaluation.",
            "The architecture may be coupled with a warehouse or a stream manager, and the coupling style determines how much warehouse support the miner receives.",
          ],
        },
      ],
      diagrams: ["architecture"],
    },
    {
      id: "u1-task-primitives",
      question: "Explain the concept of data mining task primitives.",
      marks: 5,
      freq: 2,
      papers: "Asked in 2 of 12 papers as a 2-mark or 5-mark question.",
      answer: [
        "**Data mining task primitives** describe the components that a user must specify to define a data mining task clearly.",
        "The first primitive is the **task-relevant data**, which identifies the database, the relevant tables and the conditions on the data.",
        "The second primitive is the **kind of knowledge to be mined**, such as characterization, association, classification or clustering.",
        "The third primitive is the **background knowledge**, which includes concept hierarchies and constraints that guide the mining process.",
        "The fourth primitive is the **interestingness measures and thresholds**, which decide whether a discovered pattern should be kept.",
        "The fifth primitive is the **presentation and visualisation** of the discovered patterns, such as rules, tables or charts.",
        "A data mining query language allows the user to express these primitives together in one query.",
        "Well-defined primitives make the mining request precise and prevent the algorithm from returning a large amount of irrelevant output.",
      ],
    },
    {
      id: "u1-characterization",
      question: "Explain data characterization and data discrimination with examples.",
      marks: 5,
      freq: 2,
      papers: "Asked in 2 of 12 papers, including 'Illustrate data characterization and data discrimination handled in data mining'.",
      answer: [
        "**Data characterization** produces a general description of the features of a target class of data.",
        "The result of characterization is a set of characteristics, rules or a visual summary that describes the class in concise terms.",
        "For example, characterization can describe the common features of customers who earn more than 50,000 per year.",
        "**Data discrimination** compares the features of a target class with the features of one or more contrasting classes.",
        "The result is a discriminative description that explains how the target class differs from the comparison class.",
        "For example, discrimination can compare customers who buy a high-end phone with customers who buy a budget phone.",
        "Characterization answers the question 'what is this class like', while discrimination answers 'how is this class different from another class'.",
        "Both tasks use **attribute-oriented induction**, which generalises attribute values through concept hierarchies.",
      ],
    },
    {
      id: "u1-dw-vs-db",
      question: "What is a data warehouse? How is it different from a database?",
      marks: 5,
      freq: 2,
      papers: "Asked in 2 of 12 papers, including a 2-mark question in KR20 April/May 2024.",
      answer: [
        "A **data warehouse** is a repository of information collected from multiple sources, stored under a unified schema and usually kept at a single site.",
        "It is built through **data cleansing, transformation, integration, loading and periodic refreshing**.",
        "Warehouse data is organised around major **subjects** such as customer, item, supplier and activity, rather than around daily transactions.",
        "It stores **historical and summarised** data so that analysts can study trends over long periods.",
        "A **database** usually supports online transaction processing and stores current operational records.",
        "A warehouse supports **online analytical processing** and multidimensional views over large historical data.",
        "A database is optimised for many small reads and writes, while a warehouse is optimised for large analytical reads and aggregation.",
        "In short, a database records the current business operations, while a warehouse provides an integrated historical view for decision making.",
      ],
      table: {
        head: ["Aspect", "Database", "Data warehouse"],
        rows: [
          ["Main purpose", "Daily transactions", "Analysis and decision making"],
          ["Data content", "Current, detailed", "Historical, integrated, summarised"],
          ["Typical workload", "OLTP", "OLAP"],
          ["Schema", "Normalised", "Multidimensional or star schema"],
          ["Update pattern", "Frequent small updates", "Periodic refresh"],
        ],
      },
    },
    {
      id: "u1-olap",
      question: "Compare OLAP and data mining.",
      marks: 5,
      freq: 1,
      papers: "Asked in KR21 December 2025 as a 5-mark comparison question.",
      answer: [
        "**OLAP** is an analytical processing technology that lets a user view aggregated data at different levels of abstraction.",
        "OLAP operations include **roll-up**, **drill-down**, **slice**, **dice** and **pivot**.",
        "**Data mining** uses algorithms to discover hidden patterns, models and relationships from large data sets.",
        "OLAP is mainly **user-driven**, because the user decides which dimensions and aggregation levels to inspect.",
        "Data mining is mainly **data-driven**, because the algorithm searches for patterns that the user may not have anticipated.",
        "OLAP answers questions such as 'what were the sales by region and quarter', while data mining answers questions such as 'which customers are likely to churn'.",
        "OLAP and data mining are complementary, so warehouses often provide OLAP exploration before mining and summaries that speed up mining.",
      ],
      table: {
        head: ["Aspect", "OLAP", "Data mining"],
        rows: [
          ["Goal", "Summarise and navigate data", "Discover hidden patterns"],
          ["Input", "Data cube and dimensions", "Large prepared data sets"],
          ["Output", "Aggregated views and reports", "Rules, models, clusters, outliers"],
          ["User role", "Selects views and queries", "Defines task and evaluates results"],
        ],
      },
    },
  ],
};

