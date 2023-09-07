# **Two Pointers | 双指针**
###  Sliding Window
###  Sliding Window Distinct Characters
### Two Sequences
# **Binary Search | 二分查找**
### Binary Lifting
### Binary Search By Value
#### - K-th Element
# **Hash Map | 哈希表**
### Hash + Prefix
# **Heap | 堆**
### Intervals Maintanance
# **Tree | 数**
### Tree Path
### Serialization & Hashing
### Tree & Sequences
### Lowest Common Ancestor
### N-ary Tree
### Re-rooting
# **Segment Tree | 线段树**
# **Binary Index Tree | 二叉索引树**
# **Stack | 栈**
### Monotonic Stack
### Smallest Sequences Formation
### Expression Parsing
# **Deque | 双端队列**
# **Priority Queue | 优先队列**
### Repenting Greedy
### Dual Priority Queue
### Sorting & Priority Queue
### Arrangement with Stride
# **Depth-First Search | 深度搜索**
### Array Search
### Memorization
### Hidden Matrix
# **Breath-First Search | 广度搜索**
### Multi-State
### Topological Sorting
### Priority Queue + BFS (**Dijkstra**)
### Bipartite Graph (Dijkstra)
# **Trie | 字典树**
### XOR & Trie
# **Linked List | 链表**
# **Dynamic Programming | 动态规划**
### Basic Type I
### Basic Type II
#### - Interval
### Maze
### Knapsack
### Keyboard
### To-Do or Not-To-Do
### Interval Type I
### Interval Type II
### Dual Sequences
### State Compression
#### - Subset Enumeration
#### - Kuhn–Munkres
### Catalan
### Future Inferring
### Maximum Subarray
# **Bit Manipulation | 比特操作**
### XOR
### Bitmask
#### - Meet In The Middle
# **String | 字串**
### Abbreviation
### Rolling Hash
### Knuth–Morris–Pratt
# **Union Find | 并查集**
### Union In Order
### Prime Factors
### Minimum Spanning Tree
# **Recursion | 递归**
### Expression Evaluation
### Min-Max Strategy
### Digit Counting & Finding
# **Graph | 图**
### Floyd
### Hungarian Algorithm
# **Math | 数学**
### Distance
### Geometry
### Random Selection
### Combinatorics
### Number Theory
# **GREEDY | 贪心**
### Lexicographical Sequence
```
given X where 'a'<X[i]<'z'
rfind j where X[i]<X[j] and i<j
rfind k where X[k]<X[i] and i<k
swap X[i] and X[k]
sort X[i+1:]
```
### DI Sequence
T->O(NlogN) S-> 
```
given X where X[i] = 'D' or 'I'
let Y[i] = 1:n
find i,j where X'= [D,...,D,I] and X' = X[i:j]
reverse Y[i:j]
```
### Top Elements Smearing
```
// TO-DO
```
### Longest Increasing Subsequence
```
let A[n] = X[i] if X[i]>A[:]
let A[i] = X[i] where A[i] >= x otherwise 
```
### Two-Pass Distribution
```
update X[i] where X[i] and X[i-1] suf.
update x[i] where X[i] and X[i+1] suf.
```
### Three-Pass Distribution
```
TO-DO
```
### State Machine
```
given A where 'a'<=A[i]<='z'
let M[i][c] = j where A[j] = c and A[i+1:j-1]!=c and i<j 
```
### Sorting
```

```
### Index Sorting
```
given A where 0<A[i]<n  
swap A[i] and A[A[i]] while A[i]!=i
```
### Intervals
```

```
### Constructive Problems