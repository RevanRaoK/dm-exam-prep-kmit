import type { Unit } from "./types";

export const unit5: Unit = {
  id: "unit5",
  roman: "V",
  title: "Unit V · Text Search, Hardware & Multimedia",
  subtitle:
    "Text streaming architecture, brute force, Boyer–Moore and KMP, finite state automata, hardware text search, information system evaluation and TREC, and multimedia retrieval for audio, images, video and graphs.",
  color: "var(--v-violet)",
  questions: [
    {
      id: "u5-text-streaming",
      question:
        "Explain text search techniques and draw the text streaming search system architecture. State its components and advantages.",
      marks: 10,
      freq: 2,
      papers:
        "Asked in the IRS question bank as 'draw and explain the streaming architecture' and as a software text search question.",
      sections: [
        {
          heading: "Basic concept",
          bullets: [
            "A **text scanning system** lets one or more users enter queries and compares the text of the items **sequentially** against the query terms.",
            "When all of the text has been accessed, the query is complete.",
            "The process looks for at least one or all occurrences of a **pattern of text** in a text stream.",
            "It is assumed that the **same alphabet** is used in the search terms and in the streamed text.",
            "A major advantage is that as soon as an item is identified as satisfying a query, the result can be presented to the user for retrieval.",
          ],
        },
        {
          heading: "Component 1 · database",
          bullets: [
            "The **database** contains the full text of the items to be searched.",
            "The text is streamed from secondary storage rather than randomly accessed through an index.",
            "The database may also contain audio, image and video data for multimedia search.",
          ],
        },
        {
          heading: "Component 2 · term detector",
          bullets: [
            "The **term detector** is the special hardware or software that contains all of the search terms and, in some systems, the logic between the terms.",
            "It outputs the detected terms to the query resolver.",
            "In hardware systems the detector can be a set of parallel comparators, a cellular structure or a universal finite state automaton.",
          ],
        },
        {
          heading: "Component 3 · query resolver",
          bullets: [
            "The **query resolver** accepts search statements from users and extracts the logic and search terms to pass to the detector.",
            "It also accepts results from the detector and determines which queries are satisfied by the item.",
            "It may compute the **relevance weight** associated with a hit.",
            "It passes information to the user interface so the search status can be updated.",
          ],
        },
        {
          heading: "Component 4 · user interface",
          bullets: [
            "The **user interface** continually updates the search status and, on request, retrieves any item that satisfies the user's search statement.",
            "It can display hits as they are found rather than waiting for the complete search to finish.",
            "This immediate feedback is a key advantage over index-based searching.",
          ],
        },
        {
          heading: "Software versus hardware",
          bullets: [
            "In **software streaming**, the items to be searched are read into memory and then the algorithm is applied.",
            "The three major software algorithms are **brute force**, **Boyer–Moore** and **Knuth–Morris–Pratt**.",
            "Software search struggles with many terms at once and is limited by I/O speed, which is why hardware text search exists.",
            "Hardware text search moves the resource-intensive matching away from the main processor.",
          ],
        },
      ],
      table: {
        head: ["Component", "Input", "Function", "Output"],
        rows: [
          ["**Database**", "stored text", "holds the full text of items", "stream of characters"],
          ["**Term detector**", "query terms + text", "detects the query patterns", "detected term signals"],
          ["**Query resolver**", "signals + search statements", "applies Boolean logic and weights", "satisfied queries and hits"],
          ["**User interface**", "resolver output", "updates status and retrieves items", "displayed results"],
        ],
      },
      diagrams: ["hardware"],
      note:
        "Draw the four boxes and the arrows from database to detector to resolver to user interface. State the immediate-hit advantage as the closing point.",
    },
    {
      id: "u5-brute-force",
      question:
        "Explain the brute force string matching algorithm. Give the expected number of comparisons, the worst case and its complexity.",
      marks: 10,
      freq: 2,
      papers:
        "Asked in the IRS question bank as 'what is the brute force approach?' and as part of the software text search algorithms question.",
      sections: [
        {
          heading: "The idea",
          bullets: [
            "**Brute force** is the simplest string matching algorithm.",
            "It tries to match the search string against the input text from left to right.",
            "As soon as a **mismatch** is detected, it shifts the pattern one position to the right and restarts the comparison.",
            "The pattern P is compared with the text T for every possible shift of P relative to T until a match is found or all placements have been tried.",
          ],
        },
        {
          heading: "Expected comparisons",
          bullets: [
            "The expected number of comparisons for a text of **n** characters and a pattern of **m** characters is a function of the alphabet size.",
            "The formula is **Nc = c/(c − 1) × (1 − 1/cᵐ) × (n − m + 1) + O(1)**.",
            "Here **Nc** is the expected number of comparisons, **c** is the size of the alphabet, **n** is the text length and **m** is the pattern length.",
            "For a large alphabet, the factor 1 − 1/cᵐ approaches 1, so the expected number of comparisons is close to n − m + 1.",
          ],
        },
        {
          heading: "Worst case",
          bullets: [
            "The worst case in the notes is **T = aaa…ah** and **P = aaah**.",
            "At every shift the first three characters match and the last character fails, so almost all n × m comparisons are used.",
            "Brute force therefore runs in **O(nm)** time in the worst case.",
            "The algorithm needs no preprocessing and no extra memory, which is its main advantage.",
          ],
        },
        {
          heading: "When to use it",
          bullets: [
            "It is suitable for short patterns, small texts or a single search.",
            "It is the baseline against which faster algorithms are compared.",
            "It is easy to implement correctly and has no preprocessing table to maintain.",
            "It is inefficient for large databases because it repeats comparisons that could be skipped.",
          ],
        },
      ],
      formula:
        "Expected comparisons: Nc = c/(c−1) × (1 − 1/cᵐ) × (n − m + 1) + O(1)\nWorst case: O(nm)\nSpace: O(1)\nPreprocessing: none",
      table: {
        head: ["Symbol", "Meaning"],
        rows: [
          ["**Nc**", "expected number of comparisons"],
          ["**c**", "size of the alphabet of the text"],
          ["**n**", "number of characters in the text"],
          ["**m**", "number of characters in the pattern"],
        ],
      },
      note:
        "Write the formula, then the worst-case example T = aaa…ah and P = aaah. Finish with O(nm) and the fact that no preprocessing is needed.",
    },
    {
      id: "u5-boyer-moore",
      question:
        "Demonstrate the Boyer–Moore algorithm for the scenario: string to be searched is abcac and input string is ababdcabcdacabcac. Explain each step.",
      marks: 10,
      freq: 3,
      papers:
        "Asked directly in JNTUH Feb 2023 Q9a and repeated in the IRS question bank and NR20 model paper as a text search numerical.",
      sections: [
        {
          heading: "The two heuristics",
          bullets: [
            "**Boyer–Moore** starts the comparison at the **end of the search pattern** and processes **right to left**, which allows large jumps.",
            "The **looking-glass heuristic** compares P with a subsequence of T moving backwards.",
            "The **character-jump heuristic** applies when a mismatch occurs at T[i] = c.",
            "If P contains c, the pattern is shifted to align the **last occurrence of c in P** with T[i]; if c is absent, P[0] is aligned with T[i+1].",
            "The pattern is shifted by the **maximum** of the bad-character and good-suffix shifts, with a minimum of one position.",
          ],
        },
        {
          heading: "Alignment 1 · position 1",
          bullets: [
            "Align **abcac** with text positions 1–5 and compare the last pair: **P5 = c** against **T5 = d**.",
            "The characters mismatch, and **d is not in the pattern**.",
            "The bad-character rule shifts the pattern by **5**, so it moves completely past the text d.",
            "The good-suffix rule also gives 5 because no suffix matched, so alignment 2 starts at position 6.",
          ],
        },
        {
          heading: "Alignment 2 · position 6",
          bullets: [
            "The pattern covers text positions 6–10, and the last comparison is **P5 = c** against **T10 = d**.",
            "The mismatch is again on **d**, which is absent from abcac.",
            "The bad-character shift is **5**, so the pattern jumps to position 11.",
            "No pattern suffix matched before the mismatch, so the good-suffix rule does not improve the shift.",
          ],
        },
        {
          heading: "Alignment 3 · position 11",
          bullets: [
            "The pattern covers text positions 11–15, and **P5 = c** matches **T15 = c**.",
            "The next comparison is **P4 = a** against **T14 = b**, which mismatches after a matched suffix of length 1.",
            "Bad-character shift for **b**: the last b in P is at position 2, so shift = 4 − 2 = **2**.",
            "Good-suffix shift: the matched suffix c occurs at pattern position 3, so shift = 4 − 3 = **2**; both heuristics agree on 2.",
          ],
        },
        {
          heading: "Alignment 4 · hit at position 13",
          bullets: [
            "After shifting by 2, the pattern covers text positions 13–17: **a b c a c**.",
            "Comparing right to left gives c = c, a = a, c = c, b = b and a = a, so every character matches.",
            "The pattern **abcac** is found starting at **position 13** of the text.",
            "The full match is the accepting result, and the algorithm can continue to search for other occurrences.",
          ],
        },
        {
          heading: "Comparison and exam table",
          bullets: [
            "The four alignments start at positions **1, 6, 11 and 13**, with shifts of **5, 5, 2 and a hit**.",
            "The algorithm used **9 character comparisons** for this scenario, which is far fewer than a brute-force restart after every mismatch.",
            "Boyer–Moore is fastest in practice when the alphabet is large and the pattern letters are rare in the text.",
            "Its preprocessing builds the last-occurrence table and the good-suffix table before scanning begins.",
          ],
        },
      ],
      formula:
        "Bad-character shift = max(1, j − last_occurrence(text char))\nGood-suffix shift = next occurrence of the matched suffix or a prefix match\nChosen shift = max(bad-character shift, good-suffix shift)\nScenario: abcac in ababdcabcdacabcac → shifts 5, 5, 2, hit at position 13",
      table: {
        head: ["Alignment", "Window", "Mismatch", "Bad-char shift", "Good-suffix shift", "Chosen shift"],
        rows: [
          ["1", "1–5", "P5 c vs T5 d", "5", "5", "**5**"],
          ["2", "6–10", "P5 c vs T10 d", "5", "5", "**5**"],
          ["3", "11–15", "P4 a vs T14 b", "2", "2", "**2**"],
          ["4", "13–17", "none", "—", "—", "**HIT at 13**"],
        ],
      },
      walkthrough: "boyer",
      note:
        "The walkthrough shows the exact alignment grids. In the exam, draw each alignment, mark the compared pair and write both heuristic shifts before choosing the larger one.",
    },
    {
      id: "u5-kmp",
      question:
        "Explain the Knuth–Morris–Pratt algorithm with its pre-processing jump table and an example. How does it improve on brute force?",
      marks: 10,
      freq: 2,
      papers:
        "Asked in the IRS question bank as a software text search algorithm and in the NR20 model paper as a KMP numerical.",
      sections: [
        {
          heading: "The idea",
          bullets: [
            "**Knuth–Morris–Pratt (KMP)** made a major improvement over earlier algorithms because it works well even in the worst case.",
            "The basic concept is that when a mismatch is detected, the **previously matched characters** define how many characters can be skipped before comparing again.",
            "The search pattern is **pre-processed** into a jump table that gives the number of characters to jump for each position.",
            "The text pointer **never moves backwards**, so the scan is linear in the text length.",
          ],
        },
        {
          heading: "The jump table",
          bullets: [
            "For each position **j** in the pattern, the table stores the length of the **longest proper prefix** of the pattern that is also a suffix of the matched part.",
            "If a mismatch occurs after **j** matched characters, the pattern jumps by **j − table[j]** positions.",
            "The table is also called the **failure function** or **prefix function**.",
            "For the pattern **abcac**, the failure values are **0, 0, 0, 0, 1** for prefixes of length 1 to 5.",
          ],
        },
        {
          heading: "The textbook example",
          bullets: [
            "The input stream is **a b d a d e f g** at positions 1 to 8, and the pattern begins with **a b d**.",
            "When the mismatch occurs at position 4, the three matched characters **abd** mean the comparison can jump at least **three positions**.",
            "It cannot skip four positions because the character at the mismatch could itself be the beginning of the search string.",
            "The jump is computed from the prefix function rather than by re-reading the text.",
          ],
        },
        {
          heading: "Steps to write",
          bullets: [
            "**Pre-process** the pattern into the prefix or failure table.",
            "Compare the pattern with the text from left to right.",
            "On a match, advance both the text and pattern pointers.",
            "On a mismatch after j matches, use the table to move the pattern without moving the text pointer back.",
            "If the whole pattern matches, report the hit and use the table to continue for overlapping matches.",
          ],
        },
        {
          heading: "Comparison with brute force",
          bullets: [
            "Brute force shifts one position and may recompare characters that already matched.",
            "KMP never recompares a text character because the failure table preserves the useful prefix information.",
            "The preprocessing cost is **O(m)**, and the search cost is **O(n)**, so the total is **O(n + m)**.",
            "KMP is preferable when the text is large and the pattern has repetitive prefixes.",
          ],
        },
      ],
      formula:
        "Failure table: π[j] = length of longest proper prefix of P[0..j] that is also a suffix\nShift after j matches = j − π[j]\nPreprocessing: O(m)\nSearch: O(n)\nTotal: O(n + m)",
      table: {
        head: ["j", "1", "2", "3", "4", "5"],
        rows: [
          ["Pattern prefix", "a", "ab", "abc", "abca", "abcac"],
          ["π[j]", "0", "0", "0", "1", "0"],
        ],
      },
      note:
        "Draw the pattern above the text, show the matched prefix and write j − π[j]. The key phrase is that KMP never moves backwards in the text.",
    },
    {
      id: "u5-hardware",
      question:
        "Explain hardware text search systems. Discuss their advantages, GESCAN, the Fast Data Finder and the evolution of hardware searchers.",
      marks: 10,
      freq: 3,
      papers:
        "Asked in the IRS question bank and the NR20 model paper as 'hardware text search systems'; Part A asks for Fast Data Finder functions.",
      sections: [
        {
          heading: "Why hardware text search exists",
          bullets: [
            "Software text search is applicable to many situations but is limited in handling **many search terms simultaneously** against the same text.",
            "It is also limited by **I/O speed**, because the text must reach the processor before it can be compared.",
            "One approach is a **specialized hardware machine** that performs the searches and passes the results to the main computer.",
            "The main computer supports the user interface and the retrieval of hits.",
          ],
        },
        {
          heading: "Scalability and speed",
          bullets: [
            "Because the searcher is hardware-based, scalability is achieved by **increasing the number of hardware search devices**.",
            "The only limit on speed is the time it takes to flow the text from secondary storage to the searchers.",
            "With **one search machine per disk**, the maximum time to search a database of any size is the time to search one disk.",
            "In some systems the disks were formatted to optimize the data flow off the drives.",
          ],
        },
        {
          heading: "Advantages",
          bullets: [
            "A major advantage is the **elimination of the index**, which is typically about **70%** of the size of the actual items.",
            "New items can be searched as soon as they are received, without waiting for the index to be created.",
            "The search speed is **deterministic**, so the user gets an exact search time even if the search is slower than an index search.",
            "Hits can be made available **immediately** as they are discovered, rather than after the total search completes.",
          ],
        },
        {
          heading: "GESCAN text array processor",
          bullets: [
            "In some systems the **Boolean logic between terms is resolved inside the term detector hardware**, and GESCAN is the example.",
            "The GESCAN system uses a **text array processor (TAP)** that simultaneously matches many terms and conditions against a text stream.",
            "The TAP consists of a large cache memory and an array of **4 to 128 query processors**.",
            "The text is loaded into the cache and searched by the query processors, and each processor handles a complete query.",
            "A query processor performs term matching and Boolean resolution in parallel.",
          ],
        },
        {
          heading: "Fast Data Finder (FDF)",
          bullets: [
            "The **Fast Data Finder** is the most recent specialized hardware text search unit still in use in many organizations.",
            "It was developed to search text and has been used for **English and foreign languages**.",
            "Early FDFs consisted of an array of **programmable text-processing cells connected in series**, forming a pipeline hardware search processor.",
            "In the TREC tests each chip contained **24 processor cells**, and a typical system contained **3600 cells**.",
            "Each cell is a comparator for a single character, which limits the total number of characters in a query to the number of cells.",
            "A cell contains a register cell and a comparator, and the cells are connected by an 8-bit data path and approximately a 20-bit control path.",
          ],
        },
        {
          heading: "FDF functions and earlier machines",
          bullets: [
            "The FDF supports **Boolean logic including negation**, **proximity on an arbitrary pattern**, **variable-length don't cares**, **term counting and thresholds**, **fuzzy matching**, **term weights** and **numeric ranges**.",
            "The earliest hardware text string search unit was the **Rapid Search Machine** developed by General Electric.",
            "The **Associative File Processor (AFP)** from Operating Systems Inc. could search against multiple queries at the same time.",
            "The **HSTS** machine uses an algorithm similar to Aho–Corasick and runs three parallel state machines for contiguous phrases, embedded terms and exact words.",
            "The **CASSM** and **RAP** systems placed search elements close to secondary storage to compare data in parallel.",
          ],
        },
      ],
      table: {
        head: ["Machine", "Key idea", "Distinguishing feature"],
        rows: [
          ["**Rapid Search Machine**", "single query on magnetic tape", "one of the earliest hardware searchers"],
          ["**AFP**", "multiple queries at once", "associative file processor"],
          ["**HSTS**", "three parallel state machines", "contiguous, embedded and exact matching"],
          ["**GESCAN**", "text array processor", "many terms and Boolean conditions"],
          ["**Fast Data Finder**", "pipeline of comparator cells", "programmable cells in series"],
        ],
      },
      note:
        "List the advantages first, because they are easier marks: no index, immediate new items, deterministic speed and immediate hits. Then describe GESCAN and FDF.",
    },
    {
      id: "u5-fsa",
      question:
        "Explain finite state automata (FSA) used in text searching algorithms. Give the five elements, a transition table for pattern abcac and the hardware term-detector use.",
      marks: 10,
      freq: 3,
      papers:
        "Asked as Part A in JNTUH Feb 2023 ('five elements of finite state automata used in text searching') and covered in the hardware text search question.",
      sections: [
        {
          heading: "Definition and five elements",
          bullets: [
            "A **finite state automaton (FSA)** is a machine with a finite set of states and transitions driven by input symbols.",
            "The five elements are **Q**, the finite set of states; **Σ**, the input alphabet; **δ**, the transition function; **q0**, the start state; and **F**, the set of accepting or final states.",
            "The transition function maps a current state and an input character to a next state.",
            "For text search, the FSA reads the text one character at a time and reports a hit whenever it enters an accepting state.",
          ],
        },
        {
          heading: "Building the automaton for abcac",
          bullets: [
            "State **qk** means that the last k characters read match the first k characters of the pattern.",
            "The states are **q0 to q5**, the start state is **q0**, and the accepting state is **q5**.",
            "The forward path is q0 --a--> q1 --b--> q2 --c--> q3 --a--> q4 --c--> q5.",
            "A wrong character follows a **failure transition** to the longest prefix of the pattern that is still a suffix of the text read so far.",
            "For example, from q2 the character a returns to q1, because the a can start a new prefix.",
          ],
        },
        {
          heading: "Transition table",
          bullets: [
            "From **q0**, only a advances to q1; b, c and d stay at q0.",
            "From **q1**, a stays at q1, b advances to q2, and c or d return to q0.",
            "From **q2**, a returns to q1, c advances to q3, and b or d return to q0.",
            "From **q3**, a advances to q4; every other character returns to q0.",
            "From **q4**, c advances to the accepting state q5; a returns to q1, b to q2 and d to q0.",
            "From **q5**, a returns to q1 and every other character returns to q0, so overlapping matches can still be found.",
          ],
        },
        {
          heading: "State-by-state scan",
          bullets: [
            "The text **ababdcabcdacabcac** drives the states 1, 2, 1, 2, 0, 0, 1, 2, 3, 0, 1, 0, 1, 2, 3, 4 and 5.",
            "The d at position 5 resets the machine to q0 because no prefix ends with d.",
            "The pattern prefix abc appears at positions 7–9 but the following d resets the machine.",
            "The final characters at positions 13–17 drive the machine to q5, so abcac is found at position 13.",
          ],
        },
        {
          heading: "Hardware implementation",
          bullets: [
            "A **universal finite state automaton** can be implemented as a term detector in hardware.",
            "The HSTS machine runs three parallel state machines, one each for contiguous phrases, embedded terms and exact words.",
            "The FSA approach supports multi-pattern search when one automaton is built for many patterns, as in **Aho–Corasick**.",
            "The text pointer never moves backwards, so the scan is **O(n)** for n text characters after **O(m)** preprocessing.",
          ],
        },
      ],
      formula:
        "FSA = (Q, Σ, δ, q0, F)\nQ = {q0, q1, q2, q3, q4, q5}\nΣ = {a, b, c, d}\nq0 = start state\nF = {q5}\nδ: state × character → next state",
      table: {
        head: ["State", "a", "b", "c", "d"],
        rows: [
          ["q0", "q1", "q0", "q0", "q0"],
          ["q1", "q1", "q2", "q0", "q0"],
          ["q2", "q1", "q0", "q3", "q0"],
          ["q3", "q4", "q0", "q0", "q0"],
          ["q4", "q1", "q2", "q5", "q0"],
          ["q5 (accept)", "q1", "q0", "q0", "q0"],
        ],
      },
      walkthrough: "fsa",
      note:
        "Write the 5-tuple first, then the transition table, then the state trace. The accepting state q5 is the final mark-earning detail.",
    },
    {
      id: "u5-evaluation",
      question:
        "Explain information system evaluation. Discuss precision, recall, fallout, unique relevance recall, novelty ratio, coverage ratio, sought recall and the TREC results.",
      marks: 10,
      freq: 3,
      papers:
        "Asked in the IRS question bank and the R18 notes as information system evaluation and TREC; related Part A questions ask for recall and evaluation measures.",
      sections: [
        {
          heading: "Why evaluate an IRS",
          bullets: [
            "Evaluation helps in the **selection of a system** to procure and in monitoring system effectiveness.",
            "It evaluates the **query generation process** for improvements and provides inputs to **cost-benefit analysis**.",
            "It determines the effects of changes made to an existing information system.",
            "Measurements can be made from the **user perspective** or the **system perspective**, and they can be **objective** or **subjective**.",
          ],
        },
        {
          heading: "Response time",
          bullets: [
            "**Response time** is the time it takes to execute the search.",
            "It is a metric frequently collected to determine the efficiency of search execution.",
            "Automatic indexing measurements also include resources such as memory and processing cycles and the time to process an item from arrival to availability.",
            "Response time measures efficiency, while precision and recall measure the quality of the results.",
          ],
        },
        {
          heading: "Precision and recall",
          bullets: [
            "**Precision = Number_Retrieved_Relevant / Number_Total_Retrieved**.",
            "**Recall = Number_Retrieved_Relevant / Number_Possible_Relevant**.",
            "Precision measures how clean the hit file is, and recall measures how complete it is.",
            "Recall is hard to calculate operationally because the total set of relevant items is unknown.",
          ],
        },
        {
          heading: "Fallout",
          bullets: [
            "**Fallout** measures the retrieval of non-relevant items relative to all non-relevant items in the database.",
            "**Fallout = Number_Retrieved_NonRelevant / Number_Possible_NonRelevant**.",
            "It is directly related to the noise that the system adds to the user's review.",
            "A system can have high recall but poor fallout if it retrieves almost everything.",
          ],
        },
        {
          heading: "Unique Relevance Recall and other measures",
          bullets: [
            "**Unique Relevance Recall (URR)** compares two or more algorithms or systems.",
            "It measures the number of relevant items retrieved by one algorithm that are not retrieved by the others.",
            "The **Novelty Ratio** is the ratio of relevant and previously unknown items to the total relevant retrieved.",
            "The **Coverage Ratio** is the ratio of relevant items retrieved to the total relevant items known to the user before the search.",
            "**Sought Recall** is the ratio of the total relevant items reviewed by the user after the search to the total relevant items the user would have liked to examine.",
          ],
        },
        {
          heading: "TREC and Cranfield",
          bullets: [
            "The **Text Retrieval Conference (TREC)** was created by **DARPA** and **NIST** to provide a standard database of gigabytes of test data, search statements and expected results.",
            "TREC placed a standard baseline into comparisons of algorithms and gave researchers a common forum.",
            "One of the first test databases was associated with the **Cranfield I and II** tests and contained **1400 documents and 225 queries**.",
            "TREC search topics are **user-need statements** rather than specific queries, which gives researchers flexibility in translating a need into a query.",
            "TREC-4 introduced shorter queries, with the average falling from **119 terms in TREC-3 to 16 terms in TREC-4**, and introduced new test areas called **tracks**.",
          ],
        },
      ],
      formula:
        "Precision = retrieved relevant / total retrieved\nRecall = retrieved relevant / possible relevant\nFallout = retrieved non-relevant / possible non-relevant\nNovelty ratio = (relevant and unknown) / relevant retrieved\nCoverage ratio = relevant retrieved / relevant known before search\nSought recall = relevant reviewed after search / relevant the user wanted to examine",
      table: {
        head: ["Measure", "Numerator", "Denominator", "Perspective"],
        rows: [
          ["**Precision**", "retrieved relevant", "total retrieved", "result cleanliness"],
          ["**Recall**", "retrieved relevant", "all relevant", "result completeness"],
          ["**Fallout**", "retrieved non-relevant", "all non-relevant", "noise"],
          ["**URR**", "relevant found only by this system", "all relevant", "algorithm comparison"],
          ["**Novelty ratio**", "relevant and unknown", "relevant retrieved", "new information"],
          ["**Coverage ratio**", "relevant retrieved", "relevant known before search", "user knowledge"],
          ["**Sought recall**", "relevant reviewed", "relevant the user wanted", "user satisfaction"],
        ],
      },
      note:
        "The TREC paragraph is a guaranteed source of easy marks: DARPA + NIST, standard database, user-need topics and the TREC-3 to TREC-4 query-length change.",
    },
    {
      id: "u5-multimedia",
      question:
        "Explain multimedia information retrieval. Discuss spoken language audio, non-speech audio, graph retrieval, imagery retrieval and video retrieval.",
      marks: 10,
      freq: 2,
      papers:
        "Asked in the IRS question bank and the NR20 model paper as multimedia information retrieval and as separate audio, graph, image and video questions.",
      sections: [
        {
          heading: "Multimedia retrieval scope",
          bullets: [
            "A **multimedia information retrieval system** retrieves text, image, audio and video items in response to a user request.",
            "The query may be text, an example image, an audio clip or a combination of media.",
            "Retrieval can be **description-based**, using captions and keywords, or **content-based**, using extracted features.",
            "Content-based retrieval compares colour, texture, shape, motion and spatial-temporal composition.",
          ],
        },
        {
          heading: "Spoken language audio retrieval",
          bullets: [
            "**Speech retrieval** is the task of retrieving specific pieces of spoken audio from a large collection that pertain to a user query.",
            "In the basic scenario, the user gives a query and the system returns a **rank-ordered list of documents**.",
            "The query is generally assumed to be a string of text-based words, even when the collection is speech.",
            "**Spoken Utterance Retrieval (SUR)** retrieves utterances related to a query even when multiple utterances exist within one longer document.",
            "Applications include browsing broadcast news, voicemail, teleconferences and lectures.",
          ],
        },
        {
          heading: "Non-speech audio retrieval",
          bullets: [
            "**Non-speech audio** includes audio cues that accompany specific events and music such as instrumental audio.",
            "Audio cues have given humans feedback on important information for centuries, and a fire alarm is a modern example.",
            "Non-speech audio input uses sounds such as humming or hissing to enter data or control the user interface.",
            "The user must be alert to sounds for notifications, mail arrival and system updates.",
            "The system must make the meaning of each sound clear, because a user cannot easily review an audio list.",
          ],
        },
        {
          heading: "Graph retrieval",
          bullets: [
            "A **graph-based information retrieval system** accepts a query expressed as a **graph of topics and subtopics**.",
            "Documents are ranked with respect to relationships among documents, relationships among topics and relationships between query terms and documents.",
            "The results are shown as bar charts, pie charts or other pictorial representations that are easy to understand.",
            "The **Sagebook** system is the textbook example of graph retrieval.",
            "Graph retrieval is useful for result analysis, such as pass/fail percentages by group, and it is fast and scalable.",
          ],
        },
        {
          heading: "Imagery retrieval",
          bullets: [
            "An **image retrieval system** browses, searches and retrieves images from a large database of digital images.",
            "Traditional retrieval adds **metadata** such as captions, keywords, titles and descriptions, and searches the annotation words.",
            "Manual image annotation is time-consuming, laborious and expensive, so **automatic image annotation** is an active research area.",
            "**Content-Based Image Retrieval (CBIR)** uses primitive features such as **colour, texture and shape**.",
            "Users may also need access based on abstract concepts and symbolic imagery, which is much harder than matching primitive features.",
          ],
        },
        {
          heading: "Video retrieval",
          bullets: [
            "Video is an electronic medium for recording, copying, playback, broadcasting and display of moving visual media.",
            "A video retrieval application takes video frames from users and retrieves information from a database of still video frames, audio and video.",
            "Video is split into **shots**, and each shot is represented by **key frames** or a representative frame.",
            "The most common visual features used in similarity matching are **colour, texture, shape, motion and spatial-temporal composition**.",
            "Social media platforms such as YouTube have increased the need for video retrieval and semantic annotation.",
          ],
        },
      ],
      table: {
        head: ["Media", "Query form", "Main features", "Example system or task"],
        rows: [
          ["**Speech**", "text words", "transcript, utterance boundaries", "broadcast news browsing"],
          ["**Non-speech audio**", "sound event or cue", "audio cue, music", "alerts and interface sounds"],
          ["**Graph**", "graph of topics", "document and topic relationships", "Sagebook"],
          ["**Image**", "example image or keywords", "colour, texture, shape", "CBIR"],
          ["**Video**", "example clip or keywords", "shots, key frames, motion", "video search and summarisation"],
        ],
      },
      note:
        "For the 10-mark answer, define multimedia retrieval, then give one paragraph each for audio, graph, image and video. The feature list colour, texture, shape and motion is the common thread.",
    },
  ],
};
