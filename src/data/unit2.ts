import type { Unit } from "./types";

export const unit2: Unit = {
  id: "unit2",
  roman: "II",
  title: "Unit II · Frequent Patterns & Association Rules",
  subtitle:
    "Market basket analysis, support and confidence, Apriori, FP-Growth, correlation, constraints, closed and maximal itemsets, graph and sequential patterns.",
  color: "var(--v-blue)",
  questions: [
    {
      id: "u2-apriori",
      question:
        "Apply the Apriori algorithm to the T100–T900 transaction database with minimum support count 2, and generate association rules.",
      marks: 10,
      freq: 8,
      papers: "The same T100–T900 numerical appears in KR21 Dec 2025 (IT) and KR21 Jan 2025, while other Apriori numericals appear in 6 more papers.",
      sections: [
        {
          heading: "Setup, first scan and C1",
          bullets: [
            "**Apriori** finds frequent itemsets with a **level-wise search** that uses the **Apriori property** to prune candidates.",
            "The **Apriori property** states that every non-empty subset of a frequent itemset is frequent and every superset of an infrequent itemset is infrequent.",
            "The first database scan counts each item and builds the candidate set **C1**.",
            "With **min_sup = 2**, the frequent 1-itemsets are **I1 = 6, I2 = 7, I3 = 6, I4 = 2 and I5 = 2**, so all five items enter **L1**.",
          ],
        },
        {
          heading: "C2 and L2: join, prune and count",
          bullets: [
            "The **join step** combines pairs of items in L1 to form **C2**, and the **prune step** removes any candidate that contains an infrequent subset.",
            "The support counts in C2 are **{I1,I2} = 4, {I1,I3} = 4, {I1,I5} = 2, {I2,I3} = 4, {I2,I4} = 2 and {I2,I5} = 2**, so these six itemsets form **L2**.",
            "The candidates **{I1,I4}, {I3,I4}, {I3,I5} and {I4,I5}** fall below the threshold and are removed.",
          ],
        },
        {
          heading: "C3, L3 and termination",
          bullets: [
            "The join of L2 with itself produces **{I1,I2,I3}** and **{I1,I2,I5}**, while every other candidate is pruned because one of its 2-subsets is not frequent.",
            "Both candidates occur in exactly **2 transactions**, so **L3 = {{I1,I2,I3}, {I1,I2,I5}}**.",
            "The next join would create **{I1,I2,I3,I5}**, but it is pruned because the subset **{I2,I3,I5}** is not in L3, so the algorithm stops.",
          ],
        },
        {
          heading: "Association rules from the frequent itemsets",
          bullets: [
            "Association rules are generated from each frequent itemset by putting a non-empty subset in the **antecedent** and the remaining items in the **consequent**.",
            "For **{I1,I2,I5}**, the rule **I1 ∧ I5 → I2** has support **2/9 = 22.2%** and confidence **2/2 = 100%**.",
            "For the same itemset, **I2 ∧ I5 → I1** also has confidence **100%**, while **I1 ∧ I2 → I5** has confidence **2/4 = 50%**.",
            "For **{I1,I2,I3}**, the rules **I1 ∧ I2 → I3**, **I1 ∧ I3 → I2** and **I2 ∧ I3 → I1** each have confidence **2/4 = 50%**.",
            "Only the rules whose confidence is at least the **minimum confidence threshold** are kept as strong association rules.",
          ],
        },
      ],
      formula:
        "support(A → B) = count(A ∪ B) / |D|\nconfidence(A → B) = count(A ∪ B) / count(A)\nmin_sup count = 2 out of 9 transactions = 22.2%",
      table: {
        head: ["2-itemset", "Transactions", "Support", "Frequent?"],
        rows: [
          ["{I1, I2}", "T100, T400, T800, T900", "4", "Yes"],
          ["{I1, I3}", "T500, T700, T800, T900", "4", "Yes"],
          ["{I1, I5}", "T100, T800", "2", "Yes"],
          ["{I2, I3}", "T300, T600, T800, T900", "4", "Yes"],
          ["{I2, I4}", "T200, T400", "2", "Yes"],
          ["{I2, I5}", "T100, T800", "2", "Yes"],
          ["{I1, I4}", "T400", "1", "No"],
          ["{I3, I5}", "T800", "1", "No"],
        ],
      },
      walkthrough: "apriori",
    },
    {
      id: "u2-frequent",
      question:
        "Explain frequent pattern mining in detail and compare frequent, closed and maximal itemsets with an example.",
      marks: 10,
      freq: 6,
      papers: "Asked in 6 of 12 papers as 'frequent pattern mining', 'closed and maximal itemsets' or both.",
      sections: [
        {
          heading: "Frequent itemsets and support",
          bullets: [
            "**Frequent pattern mining** searches a data set for itemsets, subsequences or substructures that occur at least as often as a minimum support threshold.",
            "An **itemset** is a set of one or more items, and a **k-itemset** contains exactly k items.",
            "The **support count** of an itemset is the number of transactions that contain all of its items.",
            "An itemset is **frequent** when its support is at least the minimum support count, and the set of frequent k-itemsets is denoted **Lk**.",
          ],
        },
        {
          heading: "Closed itemsets",
          bullets: [
            "A **closed itemset** is a frequent itemset that has no proper superset with the same support count.",
            "The set of closed itemsets preserves all support information, so it can replace the full frequent set.",
          ],
        },
        {
          heading: "Maximal frequent itemsets",
          bullets: [
            "A **maximal frequent itemset** is a frequent itemset that has no frequent proper superset.",
            "Every maximal itemset is closed, but not every closed itemset is maximal.",
            "The set of maximal itemsets is smaller than the closed set but loses the support of some itemsets.",
          ],
        },
        {
          heading: "Why closed and maximal sets help",
          bullets: [
            "Closed and maximal itemsets reduce the output size and therefore make mining more efficient.",
          ],
        },
        {
          heading: "The a, b, c example",
          bullets: [
            "In the example, {a,b,c} is the only maximal frequent itemset, because no larger itemset is frequent.",
            "In the same example, {a}, {a,b}, {a,c} and {a,b,c} are closed, while {b}, {c} and {b,c} are not closed.",
            "The itemset {b} is not closed because its superset {a,b} has the same support count of 3.",
          ],
        },
      ],
      formula:
        "Frequent: support(X) ≥ min_sup\nClosed: no proper superset Y ⊃ X has support(Y) = support(X)\nMaximal: no proper superset Y ⊃ X is frequent",
      table: {
        head: ["Itemset", "Support", "Frequent?", "Closed?", "Maximal?"],
        rows: [
          ["{a}", "4", "Yes", "Yes", "No"],
          ["{b}", "3", "Yes", "No", "No"],
          ["{c}", "3", "Yes", "No", "No"],
          ["{a,b}", "3", "Yes", "Yes", "No"],
          ["{a,c}", "3", "Yes", "Yes", "No"],
          ["{b,c}", "2", "Yes", "No", "No"],
          ["{a,b,c}", "2", "Yes", "Yes", "Yes"],
        ],
      },
      note:
        "The example uses four transactions: T1 = {a,b,c}, T2 = {a,b}, T3 = {a,c} and T4 = {a,b,c}.",
    },
    {
      id: "u2-association",
      question:
        "Explain association rule mining with a simple example, and define support and confidence.",
      marks: 10,
      freq: 6,
      papers: "Asked in 6 of 12 papers as 'association rule mining with an example' or 'support and confidence'.",
      sections: [
        {
          heading: "Rule form, support and confidence",
          bullets: [
            "**Association rule mining** finds interesting relationships among items in large transactional or relational databases.",
            "An association rule has the form **A → B**, where A and B are disjoint itemsets and A is the **antecedent** and B is the **consequent**.",
            "The **support** of A → B is the percentage of transactions that contain both A and B.",
            "The **confidence** of A → B is the percentage of transactions containing A that also contain B, which is the conditional probability P(B | A).",
            "A rule is **strong** when its support is at least **min_sup** and its confidence is at least **min_conf**.",
          ],
        },
        {
          heading: "Two-step mining and the market basket example",
          bullets: [
            "Mining is performed in two steps: first find all frequent itemsets, and then generate strong rules from those itemsets.",
            "In a five-transaction market basket database, the rule **{milk, bread} → {diapers}** can have support 60% and confidence 75%.",
            "This means that 60% of all baskets contain milk, bread and diapers, and 75% of baskets with milk and bread also contain diapers.",
          ],
        },
        {
          heading: "Interpreting and evaluating the rule",
          bullets: [
            "**Support** removes rules that are too rare to be profitable, while **confidence** measures the reliability of the inference.",
            "Support and confidence can still miss negative correlations, so measures such as **lift** are used together with them.",
          ],
        },
        {
          heading: "Applications",
          bullets: [
            "Applications include **market basket analysis**, **cross-marketing**, **catalog design**, **loss-leader analysis**, **clustering** and **classification**.",
          ],
        },
      ],
      formula:
        "support(A → B) = P(A ∪ B)\nconfidence(A → B) = P(B | A) = P(A ∪ B) / P(A)\nstrong rule: support ≥ min_sup and confidence ≥ min_conf",
      table: {
        head: ["TID", "Items"],
        rows: [
          ["T1", "bread, milk"],
          ["T2", "bread, diapers, beer, eggs"],
          ["T3", "milk, diapers, beer, cola"],
          ["T4", "bread, milk, diapers, beer"],
          ["T5", "bread, milk, diapers, cola"],
        ],
      },
      note:
        "For {milk, bread} → {diapers}: 3 of 5 baskets contain all three items, so support = 60%, and 3 of the 4 baskets with milk and bread contain diapers, so confidence = 75%.",
    },
    {
      id: "u2-sequential",
      question:
        "Explain sequential pattern mining in transactional databases with an example.",
      marks: 10,
      freq: 6,
      papers: "Asked in 6 of 12 papers, including 'describe sequential pattern mining with an example' and 'examine the process for mining sequence patterns'.",
      sections: [
        {
          heading: "Sequences, support and frequent patterns",
          bullets: [
            "A **sequence** is an ordered list of **itemsets**, such as ⟨(a b) c⟩, which means a and b occur together and c occurs later.",
            "A **sequence database** is a set of sequences, each attached to a sequence identifier called **SID**.",
            "The **support** of a sequence is the number of database sequences that contain it as an ordered subsequence.",
            "A sequence is **frequent** when its support is at least the minimum support threshold **min_sup**.",
            "**Sequential pattern mining** finds all frequent subsequences in a sequence database.",
          ],
        },
        {
          heading: "Apriori property and main algorithms",
          bullets: [
            "The **Apriori property** is antimonotonic for sequences, because any super-sequence of an infrequent sequence must also be infrequent.",
            "This property allows candidate pruning during a level-wise search.",
            "**GSP** is an Apriori-style algorithm that generates candidates and scans the database for each level.",
            "**SPADE** uses a vertical database format and computes support through intersections of item identifier lists.",
            "**PrefixSpan** uses pattern growth and avoids candidate generation by projecting the database around frequent prefixes.",
          ],
        },
        {
          heading: "Event folding window and an example",
          bullets: [
            "An **event folding window w** treats events that occur within w time units as one itemset.",
            "For example, ⟨{a,b} {c}⟩ is supported by a sequence where a and b occur together in one event and c occurs in a later event.",
          ],
        },
        {
          heading: "Applications",
          bullets: [
            "Sequential patterns are used in customer shopping sequences, web click streams, medical histories and stock movements.",
          ],
        },
      ],
      formula:
        "support(s) = number of sequences containing s as an ordered subsequence\ns is frequent when support(s) ≥ min_sup",
    },
    {
      id: "u2-constraint",
      question:
        "Explain constraint-based association mining and the role of constraints in improving efficiency.",
      marks: 10,
      freq: 5,
      papers: "Asked in 5 of 12 papers, including 'describe constraint-based association mining' and 'apply constraint-based mining to sequential patterns'.",
      sections: [
        {
          heading: "What constraint-based mining does",
          bullets: [
            "**Constraint-based mining** lets the user add conditions to an association mining task so that only relevant patterns are discovered.",
            "A **constraint** can restrict the items, the support threshold, the confidence threshold or the form of the rule.",
          ],
        },
        {
          heading: "Types of constraints",
          bullets: [
            "**Antimonotonic constraints** satisfy the property that if a pattern violates the constraint, every super-pattern also violates it.",
            "**Monotonic constraints** satisfy the property that if a pattern satisfies the constraint, every super-pattern also satisfies it.",
            "**Succinct constraints** can be checked by selecting the allowed items directly, without scanning the transaction data.",
            "**Convertible constraints** can be made antimonotonic by processing items in a suitable order.",
            "Examples include **minimum support**, **item constraints** such as 'rules must contain milk', and **SQL-like constraints** such as region = Hyderabad.",
          ],
        },
        {
          heading: "Why pushing constraints helps",
          bullets: [
            "Antimonotonic constraints can be pushed deep into the mining process because they prune entire branches of the search space.",
            "Pushing constraints into the algorithm reduces the number of candidates and avoids generating patterns that the user will reject anyway.",
            "Constraint-based mining is especially useful in web, spatial and sequential data, where the search space is extremely large.",
          ],
        },
        {
          heading: "Trade-off",
          bullets: [
            "The trade-off is that a badly chosen constraint set can hide useful patterns, so constraints must reflect the true analysis goal.",
          ],
        },
      ],
      formula:
        "Antimonotonic: if X violates C, then every superset Y ⊃ X also violates C\nMonotonic: if X satisfies C, then every superset Y ⊃ X also satisfies C",
    },
    {
      id: "u2-graph",
      question:
        "Explain graph pattern mining and the approaches used to mine graph patterns.",
      marks: 5,
      freq: 5,
      papers: "Asked in 5 of 12 papers as 'graph pattern mining', 'graph pattern approach' or a related Part-A question.",
      answer: [
        "**Graph pattern mining** searches for frequently occurring subgraphs, subtrees or other structural patterns in graph data.",
        "A **graph** consists of vertices, which represent entities, and edges, which represent relationships.",
        "A **subgraph** is a graph whose vertices and edges are all contained in a larger graph.",
        "The **support** of a subgraph is the number of graphs or transactions in which it appears.",
        "**Apriori-based graph mining** generates larger candidate subgraphs from smaller frequent ones and then checks their support.",
        "**Pattern-growth graph mining** extends a frequent subgraph directly without generating a separate candidate set.",
        "**gSpan** is a well-known pattern-growth algorithm that uses a depth-first search and a canonical representation to avoid duplicate graphs.",
        "Graph mining is harder than itemset mining because graph isomorphism and the huge number of candidate subgraphs make counting expensive.",
        "Applications include **web link analysis**, **social network analysis**, **chemical compound discovery**, **protein interaction networks** and **program flow analysis**.",
      ],
    },
    {
      id: "u2-fp",
      question:
        "Apply FP-Growth to the Book Mart transactions 101–105 with min_sup = 25% and construct the FP-tree, conditional pattern bases and conditional FP-trees.",
      marks: 10,
      freq: 4,
      papers: "Asked in 4 of 12 papers, including the Book Mart 101–105 numerical in KR21 January 2025.",
      sections: [
        {
          heading: "Frequency counting and ordering",
          bullets: [
            "**FP-Growth** finds frequent itemsets without candidate generation by storing the database in a compressed **FP-tree**.",
            "The first scan counts item frequencies, and with **min_sup = 25% of 5 = 1.25**, the required support count becomes **2**.",
            "The frequent items are **B = 4, P = 4, E = 3 and N = 2**, while **PN = 1** is removed.",
            "The items are ordered by descending frequency as **B, P, E, N**, and every transaction is rewritten in that order.",
            "The sorted transactions are **BPE, P, BPEN, BP and BEN**.",
          ],
        },
        {
          heading: "FP-tree construction",
          bullets: [
            "The **FP-tree** shares common prefixes, so the five transactions are compressed into one tree with a header table and node links.",
            "The final tree has **B:4**, a separate **P:1** at the root, **B-P:3**, **B-P-E:2**, **B-E:1**, **B-P-E-N:1** and **B-E-N:1**.",
          ],
        },
        {
          heading: "Conditional pattern bases and conditional FP-trees",
          bullets: [
            "The **conditional pattern base of N** is **{B,P,E}:1 and {B,E}:1**, because these are the prefixes of the paths that reach N.",
            "The conditional FP-tree of N keeps **B:2 and E:2**, because P occurs only once in the pattern base.",
            "The frequent itemsets containing N are **{B,N}, {E,N} and {B,E,N}**, all with support 2.",
            "The **conditional pattern base of E** is **{B,P}:2 and {B}:1**, and its conditional FP-tree is **B:3 → P:2**.",
            "The conditional FP-tree of E gives **{P,E}, {B,E} and {B,P,E}**, while the conditional pattern base of P gives **{B,P}**.",
            "The complete frequent itemset set is **{B}, {P}, {E}, {N}, {B,P}, {B,E}, {P,E}, {B,P,E}, {B,N}, {E,N} and {B,E,N}**.",
          ],
        },
        {
          heading: "Why FP-Growth is fast",
          bullets: [
            "FP-Growth scans the database twice and avoids the expensive candidate generation and testing of Apriori, so it is usually faster on dense data.",
          ],
        },
      ],
      formula:
        "min_sup count = 25% × 5 = 1.25 → 2 transactions\nFrequent order: B(4) > P(4) > E(3) > N(2) > PN(1, removed)",
      table: {
        head: ["Item", "Conditional pattern base", "Conditional FP-tree", "Frequent itemsets"],
        rows: [
          ["N", "{B,P,E}:1, {B,E}:1", "B:2, E:2", "{N}, {B,N}, {E,N}, {B,E,N}"],
          ["E", "{B,P}:2, {B}:1", "B:3 → P:2", "{E}, {B,E}, {P,E}, {B,P,E}"],
          ["P", "{B}:3", "B:3", "{P}, {B,P}"],
          ["B", "empty", "B:4", "{B}"],
        ],
      },
      walkthrough: "fpgrowth",
    },
    {
      id: "u2-correlation",
      question:
        "Evaluate support, confidence and correlation measures in association rule mining.",
      marks: 10,
      freq: 4,
      papers: "Asked in 4 of 12 papers, including 'evaluate support, confidence and correlation measures' and 'correlation analysis for transactional databases'.",
      sections: [
        {
          heading: "Support, confidence and their limitation",
          bullets: [
            "**Support** measures how frequently the items in a rule occur together in the database.",
            "**Confidence** measures the conditional probability that the consequent occurs when the antecedent occurs.",
            "A rule can have high confidence even when its consequent is very common, so confidence alone may suggest a misleading relationship.",
          ],
        },
        {
          heading: "Lift and the tea–coffee example",
          bullets: [
            "**Lift** compares the observed co-occurrence of A and B with the co-occurrence expected if A and B were independent.",
            "A **lift value greater than 1** indicates a positive correlation, a value equal to 1 indicates independence and a value below 1 indicates a negative correlation.",
            "In a 100-transaction database with 80 coffee buyers, 20 tea buyers and 15 buyers of both, the rule tea → coffee has support 15%, confidence 75% and lift 0.94.",
            "The lift is below 1 even though the confidence is 75%, because coffee is already bought by 80% of all customers.",
          ],
        },
        {
          heading: "Chi-square, all-confidence and Kulczynski",
          bullets: [
            "The **chi-square test** compares observed and expected frequencies in a contingency table to test whether the two items are independent.",
            "**All-confidence** is the minimum confidence among all rules that can be generated from an itemset, and **max-confidence** is the maximum.",
            "The **Kulczynski measure** averages the confidence of A → B and the confidence of B → A so that the result is not biased by a very frequent item.",
            "**Cosine similarity** is the geometric mean of the two conditional probabilities, which also reduces the effect of item frequency.",
          ],
        },
        {
          heading: "How to evaluate in practice",
          bullets: [
            "In practice, a good evaluation combines **support**, **confidence** and at least one correlation measure such as **lift** or **chi-square**.",
          ],
        },
      ],
      formula:
        "lift(A → B) = P(A ∪ B) / (P(A) × P(B))\nchi-square = Σ (observed − expected)² / expected\nall-confidence(X) = min confidence of every rule A → X − A\nKulczynski(A,B) = 0.5 × (P(B | A) + P(A | B))",
      table: {
        head: ["Measure", "Question it answers", "Tea → coffee example"],
        rows: [
          ["Support", "How often do A and B occur together?", "15%"],
          ["Confidence", "How often is B present when A is present?", "15/20 = 75%"],
          ["Lift", "Is the co-occurrence more than chance?", "0.75 / 0.80 = 0.94"],
          ["Conclusion", "Is the rule useful?", "Not useful, because lift < 1"],
        ],
      },
    },
    {
      id: "u2-principle",
      question:
        "Explain the Apriori principle, candidate generation, the join step and the prune step.",
      marks: 5,
      freq: 4,
      papers: "Asked in 4 of 12 papers as 'What is the Apriori principle' or 'Explain candidate generation'.",
      answer: [
        "The **Apriori principle** states that if an itemset is frequent, then all of its subsets must also be frequent.",
        "Its contrapositive states that if an itemset is infrequent, then all of its supersets must also be infrequent.",
        "This property is also called **downward closure** or **antimonotonicity** of support.",
        "**Candidate generation** creates the candidate set **Ck** from the frequent set **Lk−1**.",
        "The **join step** joins Lk−1 with itself and keeps pairs whose first k−2 items are equal and whose last items are in increasing order.",
        "The **prune step** deletes every candidate from Ck that contains a (k−1)-subset that is not in Lk−1.",
        "The database is then scanned to count the support of the surviving candidates, and those meeting min_sup become **Lk**.",
        "The process repeats until no new frequent itemsets are found, which is why Apriori is called a **level-wise** algorithm.",
      ],
      formula:
        "Join: Lk−1 ⋈ Lk−1 with p.item1 = q.item1 … p.itemk−2 = q.itemk−2, p.itemk−1 < q.itemk−1\nPrune: delete c ∈ Ck if any (k−1)-subset of c is not in Lk−1",
    },
    {
      id: "u2-market",
      question: "Explain market basket analysis and its relevance to association rule mining.",
      marks: 5,
      freq: 3,
      papers: "Asked in 3 of 12 papers, including combined market-basket and Apriori questions.",
      answer: [
        "**Market basket analysis** studies customer buying habits by finding associations among the items placed in a shopping basket.",
        "It is the classic application of **frequent itemset mining** and **association rule mining**.",
        "The input is a transactional database where each transaction lists the items bought together.",
        "The discovered rules show which products are frequently purchased together, such as bread → milk.",
        "Retailers use these rules for **cross-selling**, **product placement**, **promotion design** and **catalog layout**.",
        "The two main measures are **support**, which shows how often the combination occurs, and **confidence**, which shows the strength of the implication.",
        "Market basket analysis is also used in **cross-marketing**, **loss-leader analysis** and **customer segmentation**.",
        "The results are most useful when support, confidence and correlation measures are evaluated together.",
      ],
    },
    {
      id: "u2-multilevel",
      question:
        "Explain the types of association rules in data mining, including multilevel and multidimensional association rules.",
      marks: 5,
      freq: 3,
      papers: "Asked in 3 of 12 papers as 'types of association rules', 'multilevel association rules' and 'multidimensional association rules'.",
      answer: [
        "Association rules are classified by the **abstraction level** of the items and by the **number of dimensions** involved.",
        "**Multilevel association rules** use concept hierarchies, so items can be generalised from low-level values to high-level concepts.",
        "For example, a multilevel rule can associate 'milk' with 'bread' at a high level and 'Amul milk' with 'brown bread' at a lower level.",
        "Multilevel mining uses **uniform support**, **reduced minimum support** or **group-based minimum support** to handle different levels.",
        "**Multidimensional association rules** involve more than one dimension or attribute, such as age, income and purchase behaviour.",
        "A multidimensional rule can state that customers with age = young and income = high tend to buy a laptop.",
        "**Quantitative association rules** are a special case in which numeric attributes are discretised into intervals before mining.",
        "**Single-dimensional association rules** involve repeated predicates on one attribute, such as buys(x, milk) → buys(x, bread).",
        "Rule mining also distinguishes **Boolean association rules**, which only record presence or absence, from **quantitative association rules**, which use numeric values.",
        "The choice of rule type controls both the search space and the interpretability of the final rules.",
      ],
    },
    {
      id: "u2-apriori-limits",
      question:
        "Discuss the limitations of the Apriori algorithm and explain how FP-Growth overcomes them.",
      marks: 5,
      freq: 2,
      papers: "Asked in 2 of 12 papers, including 'discuss the limitations of Apriori' alongside the FP-tree question.",
      answer: [
        "Apriori may generate a very large number of **candidate itemsets**, especially when the data is dense or min_sup is low.",
        "It repeatedly scans the whole database, and the number of scans grows with the length of the longest frequent itemset.",
        "Candidate support counting is expensive because each candidate must be checked against the transactions.",
        "Apriori can suffer from **pattern explosion**, because a low support threshold produces a huge number of frequent itemsets.",
        "FP-Growth avoids candidate generation by building a compressed **FP-tree** that shares common prefixes.",
        "FP-Growth scans the database only twice and then mines the tree through **conditional pattern bases** and **conditional FP-trees**.",
        "The main cost of FP-Growth is memory, because a dense database may produce a large tree and many conditional pattern bases.",
      ],
    },
  ],
};
