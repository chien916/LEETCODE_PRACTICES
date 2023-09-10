# **Two Pointers | 双指针**
####  Sliding Window
####  Sliding Window Distinct Characters
#### Two Sequences
# **Binary Search | 二分查找**
#### Binary Lifting
#### Binary Search By Value
# **Hash Map | 哈希表**
#### Hash + Prefix
```
let P[i] -> Prefix Sum/Xor of A[0:i-1]
let M{x->i'} -> A[0:i'-1] = x 
```
# **Heap | 堆**
#### Intervals Maintanance
# **Tree | 数**
#### Tree Path
#### Serialization & Hashing
#### Tree & Sequences
#### Lowest Common Ancestor
#### N-ary Tree
#### Re-rooting
# **Segment Tree | 线段树**
# **Binary Index Tree | 二叉索引树**
# **Stack | 栈**
#### Monotonic Stack
#### Smallest Sequences Formation
#### Expression Parsing
# **Deque | 双端队列**
# **Priority Queue | 优先队列**
#### Repenting Greedy
#### Dual Priority Queue
#### Sorting & Priority Queue
#### Arrangement with Stride
# **Depth-First Search | 深度搜索**
#### Array Search
#### Memorization
#### Hidden Matrix
# **Breath-First Search | 广度搜索**
#### Multi-State
#### Topological Sorting
#### Priority Queue + BFS (**Dijkstra**)
#### Bipartite Graph (Dijkstra)
# **Trie | 字典树**
#### XOR & Trie
# **Linked List | 链表**
# **DYNAMIC PROGRAMMING | 动态规划**
#### Basic Type I/基本I型
```
let DP[i][j] -> sol. j-th state for A[0:i]
DP[i][j] = f(DP[i-1][j']) 
```
#### Basic Type II/基本II型
```
let DP[i] -> sol. i-th state
DP[i] = f(DP[i']) where i'<i
```
#### Maze
#### Knapsack//背包
```
let DP[i][j] -> sol. selecting A[0:i] within cost j
DP[i][j] = f(DP[i-1][j'])
```
#### Keyboard
#### To-Do or Not-To-Do
#### Interval Type I/区间I型
```
DP[i][j] -> sol. splitting A[0:i] into j intervals
DP[i][j] = f(DP[i'][j-1]) where j-1 <= i' < i
```
#### Interval Type II/区间II型
```
DP[i][j] -> sol. for A[i:j]
DP[i][j] = f(DP[i'][j']) where i <= i' <= j' <= j
```
#### Dual Sequences/双序列
```
let DP[i][j] -> sol. of A[0:i] and B[0:j]
DP[i][j] = f(DP[i-1][j],DP[i][j-1],DP[i-1][j-1])
```
#### Catalan
#### Future Inferring
#### Maximum Subarray
# **Bit Manipulation | 比特操作**
#### XOR
#### Bitmask
##### - Meet In The Middle
# **String | 字串**
#### Abbreviation
#### Rolling Hash
#### Knuth–Morris–Pratt
# **Union Find | 并查集**
```
let M{i->i'} -> A[i] having ancester A[i']
let F(i) => M[i] = F(i) if M[i] != i
            i           otherwise
let U(i,j) => M[i] = M[j]
```
#### Union In Order
#### Prime Factors
#### Minimum Spanning Tree
# **Recursion | 递归**
#### Expression Evaluation
#### Digit Counting & Finding
# **Graph/图**
#### Floyd
#### Hungarian Algorithm
# **Math/数学**
Grey Code/格雷码:
```
A[i] = i ^ (i >> 1)
```
#### Distance
#### Geometry
#### Random Selection
#### Combinatorics
#### Number Theory
Sieve of Eratosthenes/素数筛:
```
let A[i] -> if number i is prime
A[0:1] = 0 // 0 and 1 are not prime
A[i**2+i*j] = 0 where 2 <= i <= n**0.5 and i**2 + i*j <= n and A[i] = 1
```

# **GREEDY/贪心**
#### Lexicographical Sequence
```
given X where 'a'<X[i]<'z'
rfind j where X[i]<X[j] and i<j
rfind k where X[k]<X[i] and i<k
swap X[i] and X[k]
sort X[i+1:]
```
#### Decrease-Increase Sequence
```
given X where X[i] = {'D','I'}
let Y[i] = 1:n
find i,j where X'= [D,...,D,I] and X' = X[i:j]
reverse Y[i:j]
```
#### Top Elements Smearing
```
// TO-DO
```
#### Longest Increasing Subsequence
```
let A[n] = X[i] if X[i]>A[:]
let A[i] = X[i] where A[i] >= x otherwise 
```
#### Two-Pass Distribution
```
update X[i] where X[i] and X[i-1] suf.
update x[i] where X[i] and X[i+1] suf.
```
#### Three-Pass Distribution
```
TO-DO
```
#### State Machine
```
given A where 'a'<=A[i]<='z'
let M[i][c] = j where A[j] = c and A[i+1:j-1]!=c and i<j 
```
#### Sorting
```

```
#### Index Sorting
```
given A where 0<A[i]<n  
swap A[i] and A[A[i]] while A[i]!=i
```
#### Non-Overlapping Intervals
```
given A where A[i] = [x,y]
sort A by A[i][1] 
remove A[i+1] while A[i+1][0]<A[i][0]
```
#### Covering-Whole-Range Intervals
```
given A where A[i] = [x,y]
sort A by A[i][0] then A[i][1]
remove A[i+1] while A[i+2][0]<=A[i][0]
```