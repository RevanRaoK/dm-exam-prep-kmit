import type { Unit } from "./types";

export const unit3: Unit = {
  id: "unit3",
  roman: "III",
  title: "Unit III · Classification & Prediction",
  subtitle:
    "Two-step classification, decision trees, attribute selection, Bayesian classifiers, rules, lazy learners, k-NN, evaluation, pruning and SVM.",
  color: "var(--v-teal)",
  questions: [
    {
      id: "u3-id3",
      question:
        "Explain decision tree induction with the ID3 algorithm using the 14-tuple weather data set.",
      marks: 10,
      freq: 10,
      papers: "ID3 or decision tree induction appears in 10 of 12 papers, usually as a 10-mark numerical.",
      sections: [
        {
          heading: "Decision tree structure and induction",
          bullets: [
            "A **decision tree** is a flowchart-like tree in which each **internal node** tests an attribute, each **branch** is an outcome of the test and each **leaf** holds a class label.",
            "The topmost node is the **root**, and a tuple is classified by following the tests from the root to a leaf.",
            "Decision tree induction is a **greedy, top-down and recursive** procedure that selects the best splitting attribute at every node.",
            "The algorithm stops when all tuples belong to the same class, when no attributes remain, or when a branch has no tuples.",
          ],
        },
        {
          heading: "Root entropy and information gain",
          bullets: [
            "For the weather data with 9 yes and 5 no labels, the overall entropy is **Info(D) = −(9/14)log₂(9/14) − (5/14)log₂(5/14) = 0.940 bits**.",
            "The information gain of each attribute is **Gain(Outlook) = 0.246, Gain(Temperature) = 0.029, Gain(Humidity) = 0.152 and Gain(Wind) = 0.048**.",
            "**Outlook** has the largest gain, so it becomes the **root** with the branches Sunny, Overcast and Rain.",
            "The **Overcast** branch contains four tuples that all have class yes, so it becomes a **leaf labelled yes**.",
          ],
        },
        {
          heading: "Sunny branch: choose Humidity",
          bullets: [
            "The **Sunny** branch contains five tuples with two yes and three no, so its entropy is **0.971** and it still needs a split.",
            "On the Sunny subset, **Humidity** has the highest gain of **0.971**, so Humidity becomes the next test.",
            "The Sunny-High branch is labelled **no** and the Sunny-Normal branch is labelled **yes**.",
          ],
        },
        {
          heading: "Rain branch: choose Wind",
          bullets: [
            "The **Rain** branch contains five tuples with three yes and two no, so its entropy is **0.971** and it also needs a split.",
            "On the Rain subset, **Wind** has the highest gain of **0.971**, so Wind becomes the next test.",
            "The Rain-Weak branch is labelled **yes** and the Rain-Strong branch is labelled **no**.",
          ],
        },
        {
          heading: "Final tree and rules",
          bullets: [
            "The final tree is **Outlook → Sunny: Humidity(High = no, Normal = yes), Overcast: yes, Rain: Wind(Weak = yes, Strong = no)**.",
            "ID3 uses **information gain** as its attribute selection measure, and the learned tree can be converted into IF-THEN classification rules.",
          ],
        },
      ],
      formula:
        "Info(D) = −Σ pᵢ log₂(pᵢ)\nInfo_A(D) = Σ (|Dⱼ| / |D|) × Info(Dⱼ)\nGain(A) = Info(D) − Info_A(D)",
      table: {
        head: ["Attribute", "Info after split", "Gain", "Selected?"],
        rows: [
          ["Outlook", "0.694", "0.246", "Yes, root"],
          ["Temperature", "0.911", "0.029", "No"],
          ["Humidity", "0.789", "0.152", "Yes, on Sunny"],
          ["Wind", "0.892", "0.048", "Yes, on Rain"],
        ],
      },
      walkthrough: "id3",
    },
    {
      id: "u3-nb",
      question:
        "Explain the Naïve Bayes classifier and classify the fruit with the properties yellow, sweet and long using the given probability table.",
      marks: 10,
      freq: 6,
      papers: "Naïve Bayes numericals appear in 6 of 12 papers, including the fruit table in KR21 July/August 2024 and small weather data sets.",
      sections: [
        {
          heading: "Bayes' theorem and the naïve assumption",
          bullets: [
            "**Bayesian classification** predicts class membership probabilities by applying **Bayes' theorem** to the evidence tuple X.",
            "**Naïve Bayes** assumes **class-conditional independence**, which means that the attributes are conditionally independent of one another given the class.",
          ],
        },
        {
          heading: "Step 1: class priors",
          bullets: [
            "The classifier first computes the **prior probability P(Cᵢ)** of every class from the training data.",
            "From the fruit table, the priors are **P(Orange) = 650/1200 = 0.542, P(Banana) = 400/1200 = 0.333 and P(Others) = 150/1200 = 0.125**.",
          ],
        },
        {
          heading: "Step 2: attribute likelihoods",
          bullets: [
            "It then computes each **likelihood P(xₖ | Cᵢ)** from the fraction of class Cᵢ tuples that contain the attribute value xₖ.",
            "For Orange, the likelihoods are **P(Yellow | Orange) = 350/650, P(Sweet | Orange) = 450/650 and P(Long | Orange) = 0/650**, so the numerator becomes **0**.",
          ],
        },
        {
          heading: "Step 3: posterior numerators and final class",
          bullets: [
            "The **posterior numerator** for a class is P(Cᵢ) multiplied by the product of all attribute likelihoods.",
            "The class with the largest posterior numerator is chosen because the evidence P(X) is the same for every class.",
            "For Banana, the numerator is **0.333 × 1.000 × 0.750 × 0.0875 = 0.0219**.",
            "For Others, the numerator is **0.125 × 0.333 × 0.667 × 2.667 = 0.0741** when the counts are used exactly as printed in the question.",
            "Because **0.0741 is the largest numerator**, the fruit with properties yellow, sweet and long is classified as **Others**.",
          ],
        },
        {
          heading: "Zero counts, correction and strengths",
          bullets: [
            "The zero count for Orange would normally be handled by **Laplacian correction**, which adds 1 to every count so that one missing value does not wipe out an entire class.",
            "Naïve Bayes is fast, handles many attributes and is easy to update, but its independence assumption is often unrealistic in real data.",
          ],
        },
      ],
      formula:
        "P(Cᵢ | X) = P(X | Cᵢ) × P(Cᵢ) / P(X)\nP(X | Cᵢ) = ∏ P(xₖ | Cᵢ)\nChoose class Cᵢ with the largest P(X | Cᵢ) × P(Cᵢ)",
      table: {
        head: ["Fruit", "Yellow", "Sweet", "Long", "Total"],
        rows: [
          ["Orange", "350", "450", "0", "650"],
          ["Banana", "400", "300", "35", "400"],
          ["Others", "50", "100", "400", "150"],
          ["Total", "800", "850", "435", "1200"],
        ],
      },
      note:
        "Use the counts exactly as printed in the exam question. The Long entry for Others makes that row internally inconsistent, but the arithmetic and the winning class follow the standard solution.",
      walkthrough: "nb",
    },
    {
      id: "u3-knn",
      question:
        "Explain lazy learners and the k-nearest neighbour classifier with its algorithm, advantages, disadvantages and an example.",
      marks: 10,
      freq: 6,
      papers: "k-NN or lazy learning appears in 6 of 12 papers, often as a 5-mark or 10-mark theory question.",
      sections: [
        {
          heading: "Lazy learning and the k-NN idea",
          bullets: [
            "A **lazy learner** stores the training tuples and postpones generalisation until a test tuple is presented.",
            "**k-nearest neighbour** is the classic lazy learner and is also called an **instance-based learner**.",
            "Each training tuple is treated as a point in **n-dimensional space**, where n is the number of attributes.",
            "For an unknown tuple, k-NN finds the **k closest training tuples** using a distance measure such as **Euclidean distance**.",
            "For classification, the unknown tuple receives the **most common class** among its k neighbours.",
            "For numeric prediction, the unknown tuple receives the **average** of the values of its k neighbours.",
          ],
        },
        {
          heading: "Distance, normalisation and choosing k",
          bullets: [
            "The Euclidean distance between two tuples is the square root of the sum of the squared differences of their attribute values.",
            "Attributes must be **normalised** first, because an attribute with a large range such as income would otherwise dominate the distance.",
            "**Min-max normalisation** maps a value v to **(v − min)/(max − min)**, which places every attribute on a 0 to 1 scale.",
            "For a nominal attribute, the difference is **0** when the values are the same and **1** when they differ.",
            "The value of k is chosen by experiment, and the k with the **lowest error on a test set** is selected.",
          ],
        },
        {
          heading: "Advantages and disadvantages",
          bullets: [
            "The main advantages are that k-NN is simple, needs no model-building phase and can learn complex decision boundaries.",
            "The main disadvantages are that classification is **expensive**, storage is large and noisy or irrelevant attributes reduce accuracy.",
          ],
        },
        {
          heading: "Worked example",
          bullets: [
            "As a worked example, if the three nearest neighbours of a query point are one red and two blue, the query is classified as **blue**.",
          ],
        },
      ],
      formula:
        "dist(X1, X2) = √(Σ (x1ᵢ − x2ᵢ)²)\nv′ = (v − min) / (max − min)",
      table: {
        head: ["Criterion", "Eager learner", "Lazy learner (k-NN)"],
        rows: [
          ["Model building", "Before test tuples arrive", "At classification time"],
          ["Training cost", "High", "Almost zero"],
          ["Classification cost", "Low", "High, O(|D|) comparisons"],
          ["Incremental learning", "Usually difficult", "Easy, simply store new tuples"],
        ],
      },
    },
    {
      id: "u3-measures",
      question:
        "Explain the attribute selection measures entropy, information gain, gain ratio and Gini index with an example.",
      marks: 10,
      freq: 6,
      papers: "Entropy, information gain, gain ratio and Gini index appear in 6 of 12 papers.",
      sections: [
        {
          heading: "Attribute selection and entropy",
          bullets: [
            "An **attribute selection measure** ranks the attributes at each node so that the tree can choose the best split.",
            "**Entropy** measures the impurity or mixed-up-ness of a set of tuples, and a pure set has entropy zero.",
            "For a data set D with class probabilities pᵢ, the entropy is **Info(D) = −Σ pᵢ log₂(pᵢ)**.",
            "For the weather data with 9 yes and 5 no tuples, the entropy is **0.940 bits**.",
          ],
        },
        {
          heading: "Information gain",
          bullets: [
            "**Information gain** is the reduction in entropy obtained by splitting D on attribute A.",
            "It is computed as **Gain(A) = Info(D) − Info_A(D)**, where Info_A(D) is the weighted entropy of the child partitions.",
            "**Outlook** has the highest gain of **0.246** in the weather data, so it is selected as the root.",
            "Information gain tends to favor attributes with many distinct values, because many small partitions look pure.",
          ],
        },
        {
          heading: "Gain ratio",
          bullets: [
            "**Gain ratio** corrects the multi-valued bias by dividing the gain by the **split information** of the attribute.",
            "Split information is **SplitInfo(A) = −Σ (|Dⱼ|/|D|) log₂(|Dⱼ|/|D|)**, and the gain ratio is **Gain(A)/SplitInfo(A)**.",
          ],
        },
        {
          heading: "Gini index and algorithm use",
          bullets: [
            "The **Gini index** measures impurity as **Gini(D) = 1 − Σ pᵢ²**, and the Gini index of a split is the weighted average of the child Gini values.",
            "A smaller Gini index means a purer split, so the attribute with the smallest Gini index is chosen.",
            "Information gain is used by ID3, gain ratio by C4.5 and the Gini index by CART.",
          ],
        },
      ],
      formula:
        "Info(D) = −Σ pᵢ log₂(pᵢ)\nGain(A) = Info(D) − Info_A(D)\nSplitInfo(A) = −Σ (|Dⱼ|/|D|) log₂(|Dⱼ|/|D|)\nGainRatio(A) = Gain(A) / SplitInfo(A)\nGini(D) = 1 − Σ pᵢ²",
    },
    {
      id: "u3-rules",
      question:
        "Explain rule-based classification, rule coverage, accuracy, conflict resolution, rule pruning and FOIL measures.",
      marks: 10,
      freq: 4,
      papers: "Rule-based classification and rule pruning appear in 4 of 12 papers.",
      sections: [
        {
          heading: "Rules, coverage and accuracy",
          bullets: [
            "A **rule-based classifier** uses IF-THEN rules, where the IF part is the **antecedent** and the THEN part is the **consequent**.",
            "A rule is **triggered** when its antecedent is true for a tuple, and it **fires** when it is the rule chosen to classify that tuple.",
            "**Coverage** is the fraction of all tuples that the rule covers, computed as **n_covers / |D|**.",
            "**Accuracy** is the fraction of covered tuples that the rule classifies correctly, computed as **n_correct / n_covers**.",
            "A rule that covers 2 of 14 tuples and classifies both correctly has coverage **14.28%** and accuracy **100%**.",
          ],
        },
        {
          heading: "Conflicts and rule ordering",
          bullets: [
            "When several rules are triggered, **size ordering** lets the rule with the most conditions fire, while **rule ordering** uses a pre-ranked decision list.",
            "If no rule is triggered, a **default rule** assigns the majority class.",
          ],
        },
        {
          heading: "Rules from trees and sequential covering",
          bullets: [
            "Rules can be extracted from a decision tree by creating one rule for every root-to-leaf path and ANDing the tests on the path.",
            "Rules from an unpruned tree are **mutually exclusive** and **exhaustive**, so they never conflict and never need a default rule.",
            "**Sequential covering** learns one rule at a time, removes the tuples it covers and repeats on the remaining tuples.",
          ],
        },
        {
          heading: "Rule pruning and FOIL measures",
          bullets: [
            "**Rule pruning** removes conditions or whole rules that do not improve accuracy on an independent set of tuples.",
            "**FOIL_Gain** rewards an added condition that improves purity while still covering many positive tuples.",
            "**FOIL_Prune** compares the pruned rule with the original rule, and the pruned version is kept when its value is higher.",
            "Pruning reduces **overfitting**, because rule quality measured on the training data alone is usually optimistic.",
          ],
        },
      ],
      formula:
        "coverage(R) = n_covers / |D|\naccuracy(R) = n_correct / n_covers\nFOIL_Gain = pos′ × (log₂(pos′/(pos′ + neg′)) − log₂(pos/(pos + neg)))\nFOIL_Prune = (pos − neg) / (pos + neg)",
    },
    {
      id: "u3-bayes",
      question:
        "State Bayes' theorem and explain its role in classification with the alarm network example.",
      marks: 10,
      freq: 3,
      papers: "Bayes' theorem appears in 3 of 12 papers, including the alarm belief-network numerical.",
      sections: [
        {
          heading: "Bayes' theorem and its terms",
          bullets: [
            "**Bayes' theorem** relates the posterior probability of a hypothesis to its prior probability and the likelihood of the observed evidence.",
            "The theorem is **P(H | X) = P(X | H) × P(H) / P(X)**, where X is the evidence and H is the hypothesis.",
            "**P(H | X)** is the **posterior probability**, **P(H)** is the **prior probability**, **P(X | H)** is the **likelihood** and **P(X)** is the **evidence**.",
            "In classification, the hypothesis H is the class Cᵢ and the evidence X is the tuple being classified.",
            "The evidence P(X) is the same for every class, so it can be ignored when the classes are compared.",
          ],
        },
        {
          heading: "Belief networks and the alarm example",
          bullets: [
            "A **Bayesian belief network** represents variables and their conditional dependencies with a directed acyclic graph and conditional probability tables.",
            "In the alarm network, the variables are **Burglary**, **Earthquake**, **Alarm**, **JohnCalls** and **MaryCalls**.",
            "The priors are **P(Burglary) = 0.001** and **P(Earthquake) = 0.002**, and the alarm fires with probability **0.001** when neither event occurs.",
          ],
        },
        {
          heading: "Joint and conditional probability",
          bullets: [
            "The joint probability of an alarm, no burglary, no earthquake, John calling and Mary calling is **0.999 × 0.998 × 0.001 × 0.90 × 0.70 = 0.000628**.",
            "If the question asks for the probability of an alarm given all the evidence, the numerator is normalised by the probability of the evidence, which gives about **0.558 or 55.8%**.",
          ],
        },
        {
          heading: "Where Bayes is used and why it is strong",
          bullets: [
            "Bayes' theorem is the foundation of **naïve Bayes** and **Bayesian belief networks**, which are used for diagnosis, risk analysis and uncertain reasoning.",
            "The main strength is that it combines prior knowledge with observed evidence in a principled way.",
          ],
        },
      ],
      formula:
        "P(H | X) = P(X | H) × P(H) / P(X)\nP(A, ¬B, ¬E, J, M) = 0.999 × 0.998 × 0.001 × 0.90 × 0.70 = 0.000628",
      table: {
        head: ["Node", "Probability table"],
        rows: [
          ["P(Burglary)", "0.001"],
          ["P(Earthquake)", "0.002"],
          ["P(Alarm | B, E)", "0.95, 0.95, 0.29, 0.001"],
          ["P(JohnCalls | Alarm)", "0.90 true, 0.05 false"],
          ["P(MaryCalls | Alarm)", "0.70 true, 0.01 false"],
        ],
      },
    },
    {
      id: "u3-eval",
      question:
        "How is a classification algorithm evaluated? Explain accuracy, confusion matrix, precision, recall, F1 and cross-validation.",
      marks: 10,
      freq: 3,
      papers: "Classification evaluation and accuracy measurement appear in 3 of 12 papers.",
      sections: [
        {
          heading: "Accuracy and the confusion matrix",
          bullets: [
            "**Accuracy** is the percentage of test tuples that a classifier labels correctly.",
            "Accuracy alone can be misleading when the classes are imbalanced, because a classifier can be right most of the time by always predicting the majority class.",
            "A **confusion matrix** counts true positives, true negatives, false positives and false negatives for the classes.",
          ],
        },
        {
          heading: "Precision, recall, specificity and F1",
          bullets: [
            "**Precision** is TP divided by TP + FP, and it measures how many of the predicted positives are actually positive.",
            "**Recall** or **sensitivity** is TP divided by TP + FN, and it measures how many of the actual positives were found.",
            "**Specificity** is TN divided by TN + FP, and it measures how well the classifier recognises the negative class.",
            "The **F1 score** is the harmonic mean of precision and recall, computed as **2 × P × R / (P + R)**.",
          ],
        },
        {
          heading: "Holdout and resampling",
          bullets: [
            "The **holdout method** uses one part of the data for training and a separate part for testing, with a typical split such as two-thirds training and one-third testing.",
            "**Random subsampling** repeats the holdout several times and averages the accuracy.",
          ],
        },
        {
          heading: "Cross-validation, bootstrap and other criteria",
          bullets: [
            "**Cross-validation** divides the data into k folds, trains on k−1 folds and tests on the remaining fold, and repeats the process k times.",
            "**Stratified 10-fold cross-validation** keeps the class distribution of every fold close to the original distribution.",
            "The **bootstrap** method samples with replacement and is useful for small data sets.",
            "Other comparison criteria are **speed**, **robustness**, **scalability** and **interpretability**.",
          ],
        },
      ],
      formula:
        "Accuracy = (TP + TN) / (TP + TN + FP + FN)\nPrecision = TP / (TP + FP)\nRecall = TP / (TP + FN)\nF1 = 2 × Precision × Recall / (Precision + Recall)",
      table: {
        head: ["", "Predicted positive", "Predicted negative"],
        rows: [
          ["Actual positive", "TP", "FN"],
          ["Actual negative", "FP", "TN"],
        ],
      },
    },
    {
      id: "u3-pruning",
      question: "Explain decision tree pruning and its importance.",
      marks: 5,
      freq: 3,
      papers: "Decision tree pruning appears in 3 of 12 papers.",
      answer: [
        "**Decision tree pruning** removes branches that are based on noise or outliers and do not improve classification on unseen data.",
        "An unpruned tree can **overfit** the training data, so it fits noise and gives poor accuracy on new tuples.",
        "**Pre-pruning** stops the growth of a branch early, before it reaches the stage where it would overfit.",
        "Pre-pruning is efficient because the tree never grows those branches, but it can stop too early and cause **underfitting**.",
        "**Post-pruning** grows the full tree first and then removes or replaces weak subtrees with leaves.",
        "**Subtree replacement** replaces a subtree with a leaf labelled by the majority class, while **subtree raising** moves a branch up to replace its parent.",
        "Pruning improves **accuracy on unseen data**, reduces tree size and makes the tree easier to understand.",
        "The pruning decision must be based on a separate **validation set**, because accuracy on the training set is too optimistic.",
      ],
    },
    {
      id: "u3-vs-prediction",
      question:
        "Compare classification and prediction with suitable examples. How do supervised tasks differ?",
      marks: 5,
      freq: 3,
      papers: "Classification versus prediction appears in 3 of 12 papers as a 2-mark or 5-mark comparison.",
      answer: [
        "**Classification** predicts a **categorical class label**, such as whether a loan applicant is safe or risky.",
        "**Prediction** in the numeric sense predicts a **continuous value**, such as the amount a customer will spend next month.",
        "Classification is usually implemented with **decision trees**, **Bayes classifiers**, **rule-based classifiers** or **k-NN**.",
        "Numeric prediction is usually implemented with **regression**, such as linear regression or multiple regression.",
        "Classification accuracy is measured by the percentage of test tuples classified correctly.",
        "Prediction error is measured by the difference between the predicted value and the actual value, such as mean squared error.",
        "Both are **supervised** tasks because the training tuples include the target value or class label.",
        "Classification outputs a discrete decision boundary, while prediction outputs a numeric trend line.",
        "Classification examples include spam detection, fraud detection and medical diagnosis, while prediction examples include sales forecasting, stock prices and temperature.",
      ],
      table: {
        head: ["Aspect", "Classification", "Prediction"],
        rows: [
          ["Output", "Class label", "Continuous value"],
          ["Typical tool", "Decision tree, Bayes, k-NN", "Regression"],
          ["Evaluation", "Accuracy, precision, recall", "Mean absolute or squared error"],
          ["Example", "Loan safe or risky", "Expected monthly sales"],
        ],
      },
    },
    {
      id: "u3-eagerlazy",
      question:
        "Write the differences between eager learners and lazy learners in classification.",
      marks: 5,
      freq: 3,
      papers: "Eager versus lazy learners appears in 3 of 12 papers.",
      answer: [
        "**Eager learners** build a general model before any test tuple is presented.",
        "**Lazy learners** store the training tuples and generalise only when a test tuple arrives.",
        "Decision trees, Bayesian classifiers, rule-based classifiers, backpropagation and SVM are **eager learners**.",
        "k-nearest neighbour and case-based reasoning are **lazy learners**.",
        "Eager learners spend more time on model building but classify new tuples quickly.",
        "Lazy learners spend almost no time on training but classify new tuples slowly and need large storage.",
        "Lazy learners support **incremental learning**, because new tuples can simply be added to the stored set.",
        "Eager learners usually give a clearer explanation of the learned model, while lazy learners give little explanation of data structure.",
        "Lazy learners can model complex, hyper-polygonal decision boundaries, but they are sensitive to noisy and irrelevant attributes.",
      ],
    },
    {
      id: "u3-twostep",
      question:
        "Explain the two-step classification process with a diagram and explain why a separate test set is needed.",
      marks: 5,
      freq: 2,
      papers: "Asked in 2 of 12 papers as 'describe the data classification process with a neat diagram'.",
      answer: [
        "Data classification is a **two-step process** consisting of a **learning step** and a **classification step**.",
        "In the **learning step**, a classification algorithm builds a model from a **training set** whose tuples already carry class labels.",
        "The model can be represented as **classification rules**, a **decision tree**, a mathematical formula or a neural network.",
        "This is **supervised learning**, because the class of every training tuple is known.",
        "In the **classification step**, the model is first tested on a separate **test set** to estimate its **accuracy**.",
        "The test tuples were not used during training, so they give an independent estimate of how well the model generalises.",
        "If the accuracy is acceptable, the model is used to classify **new tuples whose class labels are unknown**.",
        "Using the training set for testing produces an **over-optimistic** accuracy because of **overfitting**, where the model memorises the training tuples.",
        "The model is therefore evaluated on unseen data before it is deployed.",
      ],
      diagrams: ["classification"],
    },
    {
      id: "u3-svm",
      question:
        "What is a hyperplane in the context of SVM? Explain the margin and support vectors.",
      marks: 5,
      freq: 1,
      papers: "Asked in KR21 December 2025 as a 5-mark question.",
      answer: [
        "A **support vector machine** is a supervised classifier that finds the best separating boundary between classes.",
        "A **hyperplane** is a decision boundary that separates the classes in the feature space.",
        "In two dimensions the hyperplane is a line, and in three dimensions it is a plane.",
        "The SVM chooses the hyperplane that has the **maximum margin**, which is the largest distance to the nearest training tuples of either class.",
        "The training tuples that lie closest to the hyperplane and determine the margin are called **support vectors**.",
        "A larger margin usually gives better generalisation on unseen data.",
        "When the classes are not linearly separable, SVM uses a **kernel function** to map the data into a higher-dimensional space.",
        "Common kernels are the **linear kernel**, **polynomial kernel** and **radial basis function kernel**.",
        "SVM is effective in high-dimensional spaces but training can be expensive on very large data sets.",
      ],
    },
    {
      id: "u3-cbr",
      question: "Write a note on case-based reasoning (CBR).",
      marks: 5,
      freq: 1,
      papers: "Asked in KR21 January 2025 as a 5-mark question.",
      answer: [
        "**Case-based reasoning** is a lazy learning method that stores past problems and their solutions as **cases**.",
        "For a new problem, CBR first searches for an **identical case** and reuses its solution.",
        "If no identical case exists, it retrieves **similar cases** and combines their solutions to fit the new problem.",
        "The similarity between cases is measured with a **domain-specific similarity metric** rather than Euclidean distance alone.",
        "If the retrieved solutions conflict, the system may **backtrack** and search for other similar cases.",
        "CBR is used in **help-desk problem solving**, **engineering design**, **law** and **medical diagnosis**.",
        "Its main challenges are designing a good similarity metric, combining solutions, indexing a large case base and balancing accuracy against retrieval cost.",
        "Unlike k-NN, CBR works with complex **symbolic descriptions** instead of points in a numeric feature space.",
      ],
    },
  ],
};
