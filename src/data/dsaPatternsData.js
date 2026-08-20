export const DSA_PATTERNS_DATA = [
  {
    id: 1,
    topic: "Arrays",
    pattern: "Prefix Sum",
    subPattern: "Range Queries / Prefix Sum",
    trigger: "Static array plus many range-sum queries, or “subarray sum equals target”? Turn each range into a difference of two prefixes.",
    questions: [
      { id: "q1-1", name: "Range Sum Query - Immutable", difficulty: "Easy", url: "https://leetcode.com/problems/range-sum-query-immutable/" },
      { id: "q1-2", name: "Subarray Sum Equals K", difficulty: "Medium", url: "https://leetcode.com/problems/subarray-sum-equals-k/" }
    ]
  },
  {
    id: 2,
    topic: "Arrays",
    pattern: "Two Pointers",
    subPattern: "Opposite Direction",
    trigger: "A sorted sequence asks for a pair, comparison, or best answer from both ends? Move the endpoint that cannot improve the answer.",
    questions: [
      { id: "q2-1", name: "Two Sum II - Input Array Is Sorted", difficulty: "Medium", url: "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/" },
      { id: "q2-2", name: "Container With Most Water", difficulty: "Medium", url: "https://leetcode.com/problems/container-with-most-water/" }
    ]
  },
  {
    id: 3,
    topic: "Arrays",
    pattern: "Sliding Window",
    subPattern: "Fixed Size",
    trigger: "The answer is a contiguous segment with an exact length k. Add the new right value, remove the expired left value, and update the answer.",
    questions: [
      { id: "q3-1", name: "Maximum Average Subarray I", difficulty: "Easy", url: "https://leetcode.com/problems/maximum-average-subarray-i/" },
      { id: "q3-2", name: "Permutation in String", difficulty: "Medium", url: "https://leetcode.com/problems/permutation-in-string/" }
    ]
  },
  {
    id: 4,
    topic: "Arrays",
    pattern: "Sliding Window",
    subPattern: "Variable / At Most K",
    trigger: "A contiguous range must maintain a condition such as at most K distinct values. Expand right; while invalid, shrink left until the invariant returns.",
    questions: [
      { id: "q4-1", name: "Longest Substring with At Most K Distinct Characters", difficulty: "Medium", url: "https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/" },
      { id: "q4-2", name: "Subarrays with K Different Integers", difficulty: "Hard", url: "https://leetcode.com/problems/subarrays-with-k-different-integers/" }
    ]
  },
  {
    id: 5,
    topic: "Arrays",
    pattern: "Kadane",
    subPattern: "Maximum / Circular Sum",
    trigger: "Find the best contiguous sum in one pass. Keep the best sum ending here; for circular arrays, compare normal maximum with total minus minimum subarray.",
    questions: [
      { id: "q5-1", name: "Maximum Subarray", difficulty: "Medium", url: "https://leetcode.com/problems/maximum-subarray/" },
      { id: "q5-2", name: "Maximum Sum Circular Subarray", difficulty: "Medium", url: "https://leetcode.com/problems/maximum-sum-circular-subarray/" }
    ]
  },
  {
    id: 6,
    topic: "Arrays",
    pattern: "Binary Search",
    subPattern: "Search on Answer",
    trigger: "The output is a minimum or maximum number and you can test a candidate monotonically. Write feasible(mid), then binary-search its true/false boundary.",
    questions: [
      { id: "q6-1", name: "Koko Eating Bananas", difficulty: "Medium", url: "https://leetcode.com/problems/koko-eating-bananas/" },
      { id: "q6-2", name: "Capacity To Ship Packages Within D Days", difficulty: "Medium", url: "https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/" }
    ]
  },
  {
    id: 7,
    topic: "Arrays",
    pattern: "Binary Search",
    subPattern: "Matrix Search",
    trigger: "You need to search a sorted 2D matrix or find a target in a row-wise and column-wise sorted grid. Treat the matrix as a flattened sorted space and binary-search the row/column boundary.",
    questions: [
      { id: "q7-1", name: "Search a 2D Matrix", difficulty: "Medium", url: "https://leetcode.com/problems/search-a-2d-matrix/" },
      { id: "q7-2", name: "Search a 2D Matrix II", difficulty: "Medium", url: "https://leetcode.com/problems/search-a-2d-matrix-ii/" }
    ]
  },
  {
    id: 8,
    topic: "Arrays",
    pattern: "Fast & Slow Pointer",
    subPattern: "Cycle / Duplicate",
    trigger: "An array asks for a cycle or a duplicate element. Use Floyd’s cycle-detection style logic with a slow and fast pointer.",
    questions: [
      { id: "q8-1", name: "Find the Duplicate Number", difficulty: "Medium", url: "https://leetcode.com/problems/find-the-duplicate-number/" }
    ]
  },
  {
    id: 9,
    topic: "Arrays",
    pattern: "Partitioning",
    subPattern: "Dutch National Flag / Moore Voting",
    trigger: "Three-way partitioning around a pivot or finding a value occurring more than half the time? Maintain low, mid, high regions for DNF; cancel unlike candidates for Moore Voting.",
    questions: [
      { id: "q9-1", name: "Sort Colors", difficulty: "Medium", url: "https://leetcode.com/problems/sort-colors/" },
      { id: "q9-2", name: "Majority Element", difficulty: "Easy", url: "https://leetcode.com/problems/majority-element/" }
    ]
  },
  {
    id: 10,
    topic: "Arrays",
    pattern: "Index Placement",
    subPattern: "Cyclic Sort",
    trigger: "Values lie in a small range such as 1 through n and their values identify their correct indices. Swap each number into its home position until every position is settled.",
    questions: [
      { id: "q10-1", name: "Missing Number", difficulty: "Easy", url: "https://leetcode.com/problems/missing-number/" },
      { id: "q10-2", name: "Find All Numbers Disappeared in an Array", difficulty: "Easy", url: "https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/" },
      { id: "q10-3", name: "First Missing Positive", difficulty: "Hard", url: "https://leetcode.com/problems/first-missing-positive/" }
    ]
  },
  {
    id: 11,
    topic: "Arrays",
    pattern: "Selection",
    subPattern: "Quickselect",
    trigger: "You need the kth smallest or largest item, not a fully sorted array. Partition around a pivot and recurse only into the side containing k.",
    questions: [
      { id: "q11-1", name: "Kth Largest Element in an Array", difficulty: "Medium", url: "https://leetcode.com/problems/kth-largest-element-in-an-array/" },
      { id: "q11-2", name: "K Closest Points to Origin", difficulty: "Medium", url: "https://leetcode.com/problems/k-closest-points-to-origin/" }
    ]
  },
  {
    id: 12,
    topic: "Arrays",
    pattern: "Intervals",
    subPattern: "Merge Intervals",
    trigger: "Intervals overlap or need to be combined. Sort by start time, keep the current merged end, and emit a new interval only after a gap.",
    questions: [
      { id: "q12-1", name: "Merge Intervals", difficulty: "Medium", url: "https://leetcode.com/problems/merge-intervals/" },
      { id: "q12-2", name: "Insert Interval", difficulty: "Medium", url: "https://leetcode.com/problems/insert-interval/" },
      { id: "q12-3", name: "Employee Free Time", difficulty: "Hard", url: "https://leetcode.com/problems/employee-free-time/" }
    ]
  },
  {
    id: 13,
    topic: "Strings",
    pattern: "Sliding Window",
    subPattern: "Frequency Window",
    trigger: "Substring plus counts, duplicates, anagrams, or distinct characters? Maintain a frequency map while the two window boundaries move.",
    questions: [
      { id: "q13-1", name: "Longest Substring Without Repeating Characters", difficulty: "Medium", url: "https://leetcode.com/problems/longest-substring-without-repeating-characters/" },
      { id: "q13-2", name: "Find All Anagrams in a String", difficulty: "Medium", url: "https://leetcode.com/problems/find-all-anagrams-in-a-string/" }
    ]
  },
  {
    id: 14,
    topic: "Strings",
    pattern: "Palindrome",
    subPattern: "Expand Around Center",
    trigger: "Need palindromic substrings rather than subsequences? Every palindrome has one center (a character or gap); expand while both sides match.",
    questions: [
      { id: "q14-1", name: "Longest Palindromic Substring", difficulty: "Medium", url: "https://leetcode.com/problems/longest-palindromic-substring/" },
      { id: "q14-2", name: "Palindromic Substrings", difficulty: "Medium", url: "https://leetcode.com/problems/palindromic-substrings/" }
    ]
  },
  {
    id: 15,
    topic: "Strings",
    pattern: "KMP",
    subPattern: "Prefix Function",
    trigger: "Search a pattern through text while overlaps matter. Build the longest proper-prefix/suffix table so a mismatch reuses already matched characters instead of restarting.",
    questions: [
      { id: "q15-1", name: "Find the Index of the First Occurrence in a String", difficulty: "Easy", url: "https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/" },
      { id: "q15-2", name: "Repeated String Match", difficulty: "Medium", url: "https://leetcode.com/problems/repeated-string-match/" }
    ]
  },
  {
    id: 16,
    topic: "Strings",
    pattern: "Trie",
    subPattern: "Prefix Tree",
    trigger: "Many words share prefixes and you need prefix lookup, autocomplete, or word search. Walk characters through trie nodes instead of repeatedly scanning every word.",
    questions: [
      { id: "q16-1", name: "Implement Trie (Prefix Tree)", difficulty: "Medium", url: "https://leetcode.com/problems/implement-trie-prefix-tree/" },
      { id: "q16-2", name: "Word Search II", difficulty: "Hard", url: "https://leetcode.com/problems/word-search-ii/" }
    ]
  },
  {
    id: 17,
    topic: "Linked List",
    pattern: "Reversal",
    subPattern: "Iterative Reverse",
    trigger: "Links need to point backward, often inside a range. Carry prev, current, and next; save next before rewiring current.",
    questions: [
      { id: "q17-1", name: "Reverse Linked List", difficulty: "Easy", url: "https://leetcode.com/problems/reverse-linked-list/" },
      { id: "q17-2", name: "Reverse Linked List II", difficulty: "Medium", url: "https://leetcode.com/problems/reverse-linked-list-ii/" }
    ]
  },
  {
    id: 18,
    topic: "Linked List",
    pattern: "Fast Slow",
    subPattern: "Cycle / Middle",
    trigger: "A linked list asks for its middle, cycle, or cycle entrance. Move slow by one and fast by two; their meeting reveals the structure.",
    questions: [
      { id: "q18-1", name: "Linked List Cycle", difficulty: "Easy", url: "https://leetcode.com/problems/linked-list-cycle/" },
      { id: "q18-2", name: "Linked List Cycle II", difficulty: "Medium", url: "https://leetcode.com/problems/linked-list-cycle-ii/" },
      { id: "q18-3", name: "Middle of the Linked List", difficulty: "Easy", url: "https://leetcode.com/problems/middle-of-the-linked-list/" }
    ]
  },
  {
    id: 19,
    topic: "Stack",
    pattern: "Monotonic Stack",
    subPattern: "Next Greater / Smaller",
    trigger: "Each element needs its nearest greater or smaller neighbor. Keep unresolved indices in monotonic order; pop when the current value resolves them.",
    questions: [
      { id: "q19-1", name: "Daily Temperatures", difficulty: "Medium", url: "https://leetcode.com/problems/daily-temperatures/" },
      { id: "q19-2", name: "Next Greater Element I", difficulty: "Easy", url: "https://leetcode.com/problems/next-greater-element-i/" }
    ]
  },
  {
    id: 20,
    topic: "Stack",
    pattern: "Monotonic Stack",
    subPattern: "Histogram",
    trigger: "Every bar is the limiting height of a widest rectangle. Use a monotonic stack and calculate area when a shorter bar closes its span.",
    questions: [
      { id: "q20-1", name: "Largest Rectangle in Histogram", difficulty: "Hard", url: "https://leetcode.com/problems/largest-rectangle-in-histogram/" },
      { id: "q20-2", name: "Maximal Rectangle", difficulty: "Hard", url: "https://leetcode.com/problems/maximal-rectangle/" }
    ]
  },
  {
    id: 21,
    topic: "Queue",
    pattern: "Monotonic Queue",
    subPattern: "Sliding Window Maximum",
    trigger: "The problem asks for a maximum or minimum over a moving window and the answer can be maintained with a deque.",
    questions: [
      { id: "q21-1", name: "Sliding Window Maximum", difficulty: "Hard", url: "https://leetcode.com/problems/sliding-window-maximum/" },
      { id: "q21-2", name: "Shortest Subarray with Sum at Least K", difficulty: "Hard", url: "https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k/" }
    ]
  },
  {
    id: 22,
    topic: "Queue",
    pattern: "BFS Queue",
    subPattern: "Level-order Processing",
    trigger: "The solution requires processing nodes or states in breadth-first order. Use a queue to preserve the next frontier.",
    questions: [
      { id: "q22-1", name: "Open the Lock", difficulty: "Medium", url: "https://leetcode.com/problems/open-the-lock/" },
      { id: "q22-2", name: "Number of Islands", difficulty: "Medium", url: "https://leetcode.com/problems/number-of-islands/" }
    ]
  },
  {
    id: 23,
    topic: "Queue",
    pattern: "Deque",
    subPattern: "Two-End Operations",
    trigger: "The operation needs to add or remove from both ends, often for windowing, scheduling, or design tasks.",
    questions: [
      { id: "q23-1", name: "Design Circular Deque", difficulty: "Medium", url: "https://leetcode.com/problems/design-circular-deque/" },
      { id: "q23-2", name: "Design Front Middle Back Queue", difficulty: "Medium", url: "https://leetcode.com/problems/design-front-middle-back-queue/" }
    ]
  },
  {
    id: 24,
    topic: "Hashing",
    pattern: "Prefix Hash",
    subPattern: "Prefix Frequency Map",
    trigger: "A subarray condition becomes prefix[j] minus prefix[i]. Store counts or first indices of earlier prefixes to answer each ending position immediately.",
    questions: [
      { id: "q24-1", name: "Subarray Sum Equals K", difficulty: "Medium", url: "https://leetcode.com/problems/subarray-sum-equals-k/" },
      { id: "q24-2", name: "Continuous Subarray Sum", difficulty: "Medium", url: "https://leetcode.com/problems/continuous-subarray-sum/" }
    ]
  },
  {
    id: 25,
    topic: "Binary Search",
    pattern: "Boundary Search",
    subPattern: "Lower / Upper Bound",
    trigger: "A sorted collection has duplicates and asks for first, last, insert position, or first valid element. Maintain a half-open boundary invariant.",
    questions: [
      { id: "q25-1", name: "Find First and Last Position of Element in Sorted Array", difficulty: "Medium", url: "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/" },
      { id: "q25-2", name: "Search Insert Position", difficulty: "Easy", url: "https://leetcode.com/problems/search-insert-position/" }
    ]
  },
  {
    id: 26,
    topic: "Binary Search",
    pattern: "Modified Search",
    subPattern: "Rotated Sorted Array",
    trigger: "A sorted array has been rotated and one half around mid is still sorted. Identify that ordered half, decide whether target lies inside it, then discard the other half.",
    questions: [
      { id: "q26-1", name: "Search in Rotated Sorted Array", difficulty: "Medium", url: "https://leetcode.com/problems/search-in-rotated-sorted-array/" },
      { id: "q26-2", name: "Find Minimum in Rotated Sorted Array", difficulty: "Medium", url: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/" }
    ]
  },
  {
    id: 27,
    topic: "Binary Search",
    pattern: "Peak Search",
    subPattern: "Peak Element",
    trigger: "Adjacent comparisons reveal a slope, and any slope upward must lead to a peak. Compare mid with mid plus one and keep the side that rises.",
    questions: [
      { id: "q27-1", name: "Find Peak Element", difficulty: "Medium", url: "https://leetcode.com/problems/find-peak-element/" },
      { id: "q27-2", name: "Peak Index in a Mountain Array", difficulty: "Medium", url: "https://leetcode.com/problems/peak-index-in-a-mountain-array/" }
    ]
  },
  {
    id: 28,
    topic: "Backtracking",
    pattern: "Decision Tree",
    subPattern: "Subsets / Permutations",
    trigger: "Enumerate every valid configuration and choices can be undone. Choose, recurse, undo; use an index for subsets and a used set or swap for permutations.",
    questions: [
      { id: "q28-1", name: "Subsets", difficulty: "Medium", url: "https://leetcode.com/problems/subsets/" },
      { id: "q28-2", name: "Permutations", difficulty: "Medium", url: "https://leetcode.com/problems/permutations/" },
      { id: "q28-3", name: "Combination Sum", difficulty: "Medium", url: "https://leetcode.com/problems/combination-sum/" }
    ]
  },
  {
    id: 29,
    topic: "Backtracking",
    pattern: "Constraint Search",
    subPattern: "Board Placement",
    trigger: "Place items on a board while row, column, or diagonal constraints must hold. Track occupied constraints so invalid branches end immediately.",
    questions: [
      { id: "q29-1", name: "N-Queens", difficulty: "Hard", url: "https://leetcode.com/problems/n-queens/" },
      { id: "q29-2", name: "Sudoku Solver", difficulty: "Hard", url: "https://leetcode.com/problems/sudoku-solver/" }
    ]
  },
  {
    id: 30,
    topic: "Trees",
    pattern: "Traversal",
    subPattern: "DFS",
    trigger: "The data is hierarchical and the answer depends on exploring a path deeply before returning. Use DFS for paths, postorder, and recursion-heavy tree questions.",
    questions: [
      { id: "q30-1", name: "Binary Tree Inorder Traversal", difficulty: "Easy", url: "https://leetcode.com/problems/binary-tree-inorder-traversal/" },
      { id: "q30-2", name: "Same Tree", difficulty: "Easy", url: "https://leetcode.com/problems/same-tree/" },
      { id: "q30-3", name: "Path Sum", difficulty: "Easy", url: "https://leetcode.com/problems/path-sum/" }
    ]
  },
  {
    id: 31,
    topic: "Trees",
    pattern: "Traversal",
    subPattern: "Level Order BFS",
    trigger: "The problem is level-based, requires breadth-first inspection, or asks for the shortest path in an unweighted tree. Use BFS and process nodes by depth.",
    questions: [
      { id: "q31-1", name: "Binary Tree Level Order Traversal", difficulty: "Medium", url: "https://leetcode.com/problems/binary-tree-level-order-traversal/" },
      { id: "q31-2", name: "Average of Levels in Binary Tree", difficulty: "Medium", url: "https://leetcode.com/problems/average-of-levels-in-binary-tree/" }
    ]
  },
  {
    id: 32,
    topic: "Trees",
    pattern: "Path",
    subPattern: "Root-to-Leaf / Sum",
    trigger: "The problem asks about a path from root to leaf, a path sum, or the maximum path value. Carry accumulated state down the tree and update the best answer.",
    questions: [
      { id: "q32-1", name: "Path Sum", difficulty: "Easy", url: "https://leetcode.com/problems/path-sum/" },
      { id: "q32-2", name: "Path Sum II", difficulty: "Medium", url: "https://leetcode.com/problems/path-sum-ii/" },
      { id: "q32-3", name: "Path Sum III", difficulty: "Medium", url: "https://leetcode.com/problems/path-sum-iii/" }
    ]
  },
  {
    id: 33,
    topic: "Trees",
    pattern: "Binary Tree",
    subPattern: "Postorder Tree DP",
    trigger: "A node’s answer is built from information returned by both children—height, diameter, gain, or balance. Return one compact value upward after processing children.",
    questions: [
      { id: "q33-1", name: "Diameter of Binary Tree", difficulty: "Easy", url: "https://leetcode.com/problems/diameter-of-binary-tree/" },
      { id: "q33-2", name: "Binary Tree Maximum Path Sum", difficulty: "Hard", url: "https://leetcode.com/problems/binary-tree-maximum-path-sum/" }
    ]
  },
  {
    id: 34,
    topic: "Trees",
    pattern: "BST",
    subPattern: "Ordered Search / Kth",
    trigger: "A binary tree guarantees left smaller and right larger. Use comparisons to discard a subtree, or inorder traversal when sorted order or kth smallest is requested.",
    questions: [
      { id: "q34-1", name: "Validate Binary Search Tree", difficulty: "Medium", url: "https://leetcode.com/problems/validate-binary-search-tree/" },
      { id: "q34-2", name: "Kth Smallest Element in a BST", difficulty: "Medium", url: "https://leetcode.com/problems/kth-smallest-element-in-a-bst/" }
    ]
  },
  {
    id: 35,
    topic: "Trees",
    pattern: "Construction",
    subPattern: "Build from Traversals",
    trigger: "You are given traversal orders that uniquely identify a tree. Choose the root from preorder or postorder, find it in inorder, then recursively split both ranges.",
    questions: [
      { id: "q35-1", name: "Construct Binary Tree from Preorder and Inorder Traversal", difficulty: "Medium", url: "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/" },
      { id: "q35-2", name: "Construct Binary Tree from Inorder and Postorder Traversal", difficulty: "Medium", url: "https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/" }
    ]
  },
  {
    id: 36,
    topic: "Trees",
    pattern: "Views",
    subPattern: "Vertical / Boundary View",
    trigger: "Nodes must be grouped by level, column, or visible boundary. Traverse with row and column metadata, then sort or select nodes according to the requested view.",
    questions: [
      { id: "q36-1", name: "Binary Tree Right Side View", difficulty: "Medium", url: "https://leetcode.com/problems/binary-tree-right-side-view/" },
      { id: "q36-2", name: "Vertical Order Traversal of a Binary Tree", difficulty: "Hard", url: "https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/" }
    ]
  },
  {
    id: 37,
    topic: "Trees",
    pattern: "Lowest Common Ancestor",
    subPattern: "LCA",
    trigger: "Two tree nodes are given and you need their shared ancestor. In a binary tree, return a target upward; the first node receiving both sides is the LCA.",
    questions: [
      { id: "q37-1", name: "Lowest Common Ancestor of a Binary Tree", difficulty: "Medium", url: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/" },
      { id: "q37-2", name: "Lowest Common Ancestor of a Binary Search Tree", difficulty: "Medium", url: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/" }
    ]
  },
  {
    id: 38,
    topic: "Trees",
    pattern: "Serialization",
    subPattern: "Encode / Decode Tree",
    trigger: "A tree must cross a process boundary or be rebuilt exactly. Use preorder with null markers or level order, then consume tokens in the same recursive order.",
    questions: [
      { id: "q38-1", name: "Serialize and Deserialize Binary Tree", difficulty: "Hard", url: "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/" },
      { id: "q38-2", name: "Serialize and Deserialize BST", difficulty: "Medium", url: "https://leetcode.com/problems/serialize-and-deserialize-bst/" }
    ]
  },
  {
    id: 39,
    topic: "Heap",
    pattern: "Top K",
    subPattern: "Bounded Heap",
    trigger: "Only the k best, smallest, or closest items matter from a large stream. Keep a heap of size k and discard the current worst candidate.",
    questions: [
      { id: "q39-1", name: "Kth Largest Element in an Array", difficulty: "Medium", url: "https://leetcode.com/problems/kth-largest-element-in-an-array/" },
      { id: "q39-2", name: "Top K Frequent Elements", difficulty: "Medium", url: "https://leetcode.com/problems/top-k-frequent-elements/" }
    ]
  },
  {
    id: 40,
    topic: "Heap",
    pattern: "Two Heaps",
    subPattern: "Running Median",
    trigger: "Need a median after every insertion. Keep the lower half in a max heap, upper half in a min heap, and rebalance their sizes.",
    questions: [
      { id: "q40-1", name: "Find Median from Data Stream", difficulty: "Hard", url: "https://leetcode.com/problems/find-median-from-data-stream/" },
      { id: "q40-2", name: "Sliding Window Median", difficulty: "Hard", url: "https://leetcode.com/problems/sliding-window-median/" },
      { id: "q40-3", name: "IPO", difficulty: "Hard", url: "https://leetcode.com/problems/ipo/" }
    ]
  },
  {
    id: 41,
    topic: "Heap",
    pattern: "Merge K",
    subPattern: "K-way Merge",
    trigger: "Several sorted lists, arrays, or streams must be merged. Keep one current item from each source in a min heap and refill the source you pop.",
    questions: [
      { id: "q41-1", name: "Merge k Sorted Lists", difficulty: "Hard", url: "https://leetcode.com/problems/merge-k-sorted-lists/" },
      { id: "q41-2", name: "Smallest Range Covering Elements from K Lists", difficulty: "Hard", url: "https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists/" }
    ]
  },
  {
    id: 42,
    topic: "Graph",
    pattern: "Traversal",
    subPattern: "DFS",
    trigger: "The input describes connections and asks reachability or connected components. Traverse every unvisited node recursively or via an explicit stack.",
    questions: [
      { id: "q42-1", name: "Number of Islands", difficulty: "Medium", url: "https://leetcode.com/problems/number-of-islands/" },
      { id: "q42-2", name: "Clone Graph", difficulty: "Medium", url: "https://leetcode.com/problems/clone-graph/" }
    ]
  },
  {
    id: 43,
    topic: "Graph",
    pattern: "Traversal",
    subPattern: "BFS",
    trigger: "The task is level-based or asks for the shortest path in an unweighted graph. Use a queue and process nodes level by level.",
    questions: [
      { id: "q43-1", name: "Open the Lock", difficulty: "Medium", url: "https://leetcode.com/problems/open-the-lock/" },
      { id: "q43-2", name: "Shortest Path in Binary Matrix", difficulty: "Medium", url: "https://leetcode.com/problems/shortest-path-in-binary-matrix/" }
    ]
  },
  {
    id: 44,
    topic: "Graph",
    pattern: "Traversal",
    subPattern: "Multi-source BFS",
    trigger: "Several starting cells spread simultaneously in minimum steps. Enqueue every source at distance zero, then process the queue level by level.",
    questions: [
      { id: "q44-1", name: "Rotting Oranges", difficulty: "Medium", url: "https://leetcode.com/problems/rotting-oranges/" },
      { id: "q44-2", name: "01 Matrix", difficulty: "Medium", url: "https://leetcode.com/problems/01-matrix/" },
      { id: "q44-3", name: "Walls and Gates", difficulty: "Medium", url: "https://leetcode.com/problems/walls-and-gates/" }
    ]
  },
  {
    id: 45,
    topic: "Graph",
    pattern: "Shortest Path",
    subPattern: "Dijkstra",
    trigger: "Find shortest paths from one source and every edge weight is non-negative. Pop the smallest tentative distance from a min heap and relax outgoing edges.",
    questions: [
      { id: "q45-1", name: "Network Delay Time", difficulty: "Medium", url: "https://leetcode.com/problems/network-delay-time/" },
      { id: "q45-2", name: "Path With Minimum Effort", difficulty: "Medium", url: "https://leetcode.com/problems/path-with-minimum-effort/" }
    ]
  },
  {
    id: 46,
    topic: "Graph",
    pattern: "Shortest Path",
    subPattern: "0-1 BFS",
    trigger: "Every edge weight is either zero or one. Use a deque: push zero-weight relaxations to the front and one-weight relaxations to the back.",
    questions: [
      { id: "q46-1", name: "Minimum Cost to Make at Least One Valid Path in a Grid", difficulty: "Hard", url: "https://leetcode.com/problems/minimum-cost-to-make-at-least-one-valid-path-in-a-grid/" },
      { id: "q46-2", name: "Minimum Obstacle Removal to Reach Corner", difficulty: "Medium", url: "https://leetcode.com/problems/minimum-obstacle-removal-to-reach-corner/" }
    ]
  },
  {
    id: 47,
    topic: "Graph",
    pattern: "Shortest Path",
    subPattern: "Bellman Ford",
    trigger: "Shortest paths may include negative edges, or you must detect a negative cycle. Relax every edge V minus 1 times and check whether one more relaxation is possible.",
    questions: [
      { id: "q47-1", name: "Cheapest Flights Within K Stops", difficulty: "Medium", url: "https://leetcode.com/problems/cheapest-flights-within-k-stops/" },
      { id: "q47-2", name: "Detect Negative Cycle", difficulty: "Medium", url: "https://leetcode.com/problems/cheapest-flights-within-k-stops/" }
    ]
  },
  {
    id: 48,
    topic: "Graph",
    pattern: "Ordering",
    subPattern: "Topological Sort",
    trigger: "Dependencies must be completed before dependents, and a cycle means impossible. Repeatedly remove indegree-zero nodes or use DFS coloring.",
    questions: [
      { id: "q48-1", name: "Course Schedule", difficulty: "Medium", url: "https://leetcode.com/problems/course-schedule/" },
      { id: "q48-2", name: "Course Schedule II", difficulty: "Medium", url: "https://leetcode.com/problems/course-schedule-ii/" }
    ]
  },
  {
    id: 49,
    topic: "Graph",
    pattern: "Connectivity",
    subPattern: "Union Find",
    trigger: "Edges arrive or groups repeatedly merge, and you need fast same-component checks. Represent each component by a root with path compression and union by size.",
    questions: [
      { id: "q49-1", name: "Number of Provinces", difficulty: "Medium", url: "https://leetcode.com/problems/number-of-provinces/" },
      { id: "q49-2", name: "Redundant Connection", difficulty: "Medium", url: "https://leetcode.com/problems/redundant-connection/" }
    ]
  },
  {
    id: 50,
    topic: "Graph",
    pattern: "Properties",
    subPattern: "Cycle Detection",
    trigger: "A graph must be checked for cycles. Use DFS colors or a recursion stack in directed graphs; in undirected graphs, ignore the edge to the parent.",
    questions: [
      { id: "q50-1", name: "Course Schedule", difficulty: "Medium", url: "https://leetcode.com/problems/course-schedule/" },
      { id: "q50-2", name: "Redundant Connection", difficulty: "Medium", url: "https://leetcode.com/problems/redundant-connection/" }
    ]
  },
  {
    id: 51,
    topic: "Graph",
    pattern: "Properties",
    subPattern: "Bipartite Graph",
    trigger: "Can nodes be divided into two groups with every edge crossing groups? BFS or DFS color each component and reject a neighbor that needs the same color.",
    questions: [
      { id: "q51-1", name: "Is Graph Bipartite?", difficulty: "Medium", url: "https://leetcode.com/problems/is-graph-bipartite/" },
      { id: "q51-2", name: "Possible Bipartition", difficulty: "Medium", url: "https://leetcode.com/problems/possible-bipartition/" }
    ]
  },
  {
    id: 52,
    topic: "Graph",
    pattern: "Spanning Tree",
    subPattern: "Kruskal / Prim",
    trigger: "Connect all vertices at minimum total edge cost. Use Kruskal plus Union Find for sorted edges, or Prim plus a min heap from a growing tree.",
    questions: [
      { id: "q52-1", name: "Min Cost to Connect All Points", difficulty: "Hard", url: "https://leetcode.com/problems/min-cost-to-connect-all-points/" },
      { id: "q52-2", name: "Optimize Water Distribution in a Village", difficulty: "Hard", url: "https://leetcode.com/problems/optimize-water-distribution-in-a-village/" }
    ]
  },
  {
    id: 53,
    topic: "Greedy",
    pattern: "Intervals",
    subPattern: "Interval Scheduling",
    trigger: "Choose the maximum number of compatible intervals. Sort by earliest finishing time, then take an interval only when it starts after the last chosen finish.",
    questions: [
      { id: "q53-1", name: "Non-overlapping Intervals", difficulty: "Medium", url: "https://leetcode.com/problems/non-overlapping-intervals/" },
      { id: "q53-2", name: "Meeting Rooms II", difficulty: "Medium", url: "https://leetcode.com/problems/meeting-rooms-ii/" }
    ]
  },
  {
    id: 54,
    topic: "Dynamic Programming",
    pattern: "1D DP",
    subPattern: "Take / Skip",
    trigger: "The optimal answer at position i depends on a few earlier positions, often whether to take or skip the current value. Define dp[i] before coding.",
    questions: [
      { id: "q54-1", name: "House Robber", difficulty: "Medium", url: "https://leetcode.com/problems/house-robber/" },
      { id: "q54-2", name: "Decode Ways", difficulty: "Medium", url: "https://leetcode.com/problems/decode-ways/" }
    ]
  },
  {
    id: 55,
    topic: "Dynamic Programming",
    pattern: "Knapsack",
    subPattern: "0-1 / Unbounded",
    trigger: "Choose items under a capacity or target constraint. Iterate capacity backward when each item is usable once; forward when it can be reused.",
    questions: [
      { id: "q55-1", name: "Partition Equal Subset Sum", difficulty: "Medium", url: "https://leetcode.com/problems/partition-equal-subset-sum/" },
      { id: "q55-2", name: "Coin Change", difficulty: "Medium", url: "https://leetcode.com/problems/coin-change/" }
    ]
  },
  {
    id: 56,
    topic: "Dynamic Programming",
    pattern: "Sequences",
    subPattern: "LIS",
    trigger: "A sequence needs the longest increasing subsequence. Use dp ending at each index, or tails plus binary search when only the length is needed.",
    questions: [
      { id: "q56-1", name: "Longest Increasing Subsequence", difficulty: "Medium", url: "https://leetcode.com/problems/longest-increasing-subsequence/" },
      { id: "q56-2", name: "Russian Doll Envelopes", difficulty: "Hard", url: "https://leetcode.com/problems/russian-doll-envelopes/" }
    ]
  },
  {
    id: 57,
    topic: "Dynamic Programming",
    pattern: "Sequences",
    subPattern: "LCS",
    trigger: "Compare two ordered sequences and keep the best answer for every pair of prefixes. Match characters to extend diagonally; otherwise take the better neighboring state.",
    questions: [
      { id: "q57-1", name: "Longest Common Subsequence", difficulty: "Medium", url: "https://leetcode.com/problems/longest-common-subsequence/" },
      { id: "q57-2", name: "Delete Operation for Two Strings", difficulty: "Medium", url: "https://leetcode.com/problems/delete-operation-for-two-strings/" }
    ]
  },
  {
    id: 58,
    topic: "Dynamic Programming",
    pattern: "Interval DP",
    subPattern: "Choose Last Split",
    trigger: "The answer concerns an interval and choosing a final split, burst, or partition combines smaller intervals. Iterate by interval length so subinterval answers already exist.",
    questions: [
      { id: "q58-1", name: "Burst Balloons", difficulty: "Hard", url: "https://leetcode.com/problems/burst-balloons/" },
      { id: "q58-2", name: "Palindrome Partitioning II", difficulty: "Hard", url: "https://leetcode.com/problems/palindrome-partitioning-ii/" }
    ]
  },
  {
    id: 59,
    topic: "Dynamic Programming",
    pattern: "Grid / State Machine",
    subPattern: "Grid DP",
    trigger: "A cell’s best value comes from a small set of predecessor cells, or you have a finite state such as holding stock. Encode position plus state.",
    questions: [
      { id: "q59-1", name: "Unique Paths", difficulty: "Medium", url: "https://leetcode.com/problems/unique-paths/" },
      { id: "q59-2", name: "Best Time to Buy and Sell Stock with Cooldown", difficulty: "Medium", url: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/" }
    ]
  },
  {
    id: 60,
    topic: "Bit Manipulation",
    pattern: "XOR",
    subPattern: "Cancellation / Prefix XOR",
    trigger: "Pairs cancel, parity matters, or a subarray XOR target is involved. XOR is its own inverse, so combine a running XOR with a frequency map.",
    questions: [
      { id: "q60-1", name: "Single Number", difficulty: "Easy", url: "https://leetcode.com/problems/single-number/" },
      { id: "q60-2", name: "Count Triplets That Can Form Two Arrays of Equal XOR", difficulty: "Medium", url: "https://leetcode.com/problems/count-triplets-that-can-form-two-arrays-of-equal-xor/" }
    ]
  },
  {
    id: 61,
    topic: "Bit Manipulation",
    pattern: "Bitmask",
    subPattern: "Subset Enumeration",
    trigger: "n is around 20 and every subset or selected-set state matters. Represent membership with bits; enumerate masks or remove the lowest set bit.",
    questions: [
      { id: "q61-1", name: "Subsets", difficulty: "Medium", url: "https://leetcode.com/problems/subsets/" },
      { id: "q61-2", name: "Partition to K Equal Sum Subsets", difficulty: "Medium", url: "https://leetcode.com/problems/partition-to-k-equal-sum-subsets/" }
    ]
  },
  {
    id: 62,
    topic: "Math",
    pattern: "Number Theory",
    subPattern: "GCD / Sieve",
    trigger: "The task asks divisibility, common factors, primes, or repeated multiples. Reach for Euclid’s algorithm, prime factorization, or a sieve before brute force.",
    questions: [
      { id: "q62-1", name: "Count Primes", difficulty: "Medium", url: "https://leetcode.com/problems/count-primes/" },
      { id: "q62-2", name: "Greatest Common Divisor of Strings", difficulty: "Easy", url: "https://leetcode.com/problems/greatest-common-divisor-of-strings/" }
    ]
  },
  {
    id: 63,
    topic: "Design",
    pattern: "Cache",
    subPattern: "LRU / LFU",
    trigger: "Need O(1) get/put semantics with eviction. Combine a hash map and a doubly linked list—or a frequency map for LFU—to preserve the right eviction order.",
    questions: [
      { id: "q63-1", name: "LRU Cache", difficulty: "Medium", url: "https://leetcode.com/problems/lru-cache/" },
      { id: "q63-2", name: "LFU Cache", difficulty: "Hard", url: "https://leetcode.com/problems/lfu-cache/" }
    ]
  },
  {
    id: 64,
    topic: "Design",
    pattern: "Data Structure",
    subPattern: "Custom Data Structures",
    trigger: "The interface needs fast operations over a custom abstract data type. Maintain clear invariants while supporting insert, delete, get, and access in constant or amortized time.",
    questions: [
      { id: "q64-1", name: "Min Stack", difficulty: "Medium", url: "https://leetcode.com/problems/min-stack/" },
      { id: "q64-2", name: "Insert Delete GetRandom O(1)", difficulty: "Hard", url: "https://leetcode.com/problems/insert-delete-getrandom-o1/" }
    ]
  },
  {
    id: 65,
    topic: "Advanced",
    pattern: "Hashing",
    subPattern: "Rolling Hash",
    trigger: "Compare many fixed-length substrings or detect repeated content efficiently. Maintain a rolling hash as the window shifts, and verify equal hashes when collisions matter.",
    questions: [
      { id: "q65-1", name: "Repeated DNA Sequences", difficulty: "Medium", url: "https://leetcode.com/problems/repeated-dna-sequences/" },
      { id: "q65-2", name: "Longest Duplicate Substring", difficulty: "Hard", url: "https://leetcode.com/problems/longest-duplicate-substring/" }
    ]
  },
  {
    id: 66,
    topic: "Miscellaneous",
    pattern: "Simulation",
    subPattern: "Stateful Simulation",
    trigger: "The statement describes a process exactly and constraints permit direct state updates. Model the state carefully, follow every operation in order, and guard boundary cases.",
    questions: [
      { id: "q66-1", name: "Spiral Matrix", difficulty: "Medium", url: "https://leetcode.com/problems/spiral-matrix/" },
      { id: "q66-2", name: "Robot Bounded In Circle", difficulty: "Medium", url: "https://leetcode.com/problems/robot-bounded-in-circle/" }
    ]
  },
  {
    id: 67,
    topic: "Miscellaneous",
    pattern: "Sweep Line",
    subPattern: "Events and Active Set",
    trigger: "Intervals or geometry overlap over time or one coordinate. Sort starts, ends, and queries into events; maintain the currently active set.",
    questions: [
      { id: "q67-1", name: "The Skyline Problem", difficulty: "Hard", url: "https://leetcode.com/problems/the-skyline-problem/" },
      { id: "q67-2", name: "My Calendar III", difficulty: "Hard", url: "https://leetcode.com/problems/my-calendar-iii/" }
    ]
  }
];