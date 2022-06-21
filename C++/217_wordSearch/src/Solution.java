
import java.util.*;

class Solution {
    private int ROWS, COLS;
    private TrieNode root = new TrieNode();//create root trie node
    private Set<String> res = new TreeSet<>(); //set result : set of words possible we could visit
    private Set<Coordinate> visit = new HashSet<>();//set visit: we don't want to repeat the same char
    private HashMap<Coordinate, Character> boardmap;

    class Coordinate {
        public int x;
        public int y;

        Coordinate(int x, int y) {
            this.x = x;
            this.y = y;
        }
    }

    class TrieNode {
        //private:
        public HashMap<Character, TrieNode> _CHILDREN = new HashMap<Character, TrieNode>();
        private boolean _ISWORD = false;

        //public:
        public void addWord(String word) {
            TrieNode cur = this;
            for (char c : word.toCharArray()) {
                if (!_CHILDREN.containsKey(c))
                    cur._CHILDREN.put(c, new TrieNode());
                cur = cur._CHILDREN.get(c);//move the current ptr to that position
            }
            cur._ISWORD = true;//mark last char we ended at is the last char of a word
        }
    }


    public void dfs(int r, int c, TrieNode node, String word) {
        boolean tooSmall = r < 0 || c < 0;
        boolean tooBig = r >= this.ROWS || c >= this.COLS;
        boolean alreadyVisit = this.visit.contains(new Coordinate(r, c));
        boolean notInChildren = !node._CHILDREN.containsKey(boardmap.get(new Coordinate(r, c)));
        if (tooSmall || tooBig || alreadyVisit || notInChildren) return;
        visit.add(new Coordinate(r, c));//mark as visited
        {
            node = node._CHILDREN.get(boardmap.get(new Coordinate(r, c)));
            word = word + boardmap.get(new Coordinate(r, c));
            if (node._ISWORD) res.add(word);
            dfs(r - 1, c, node, word);
            dfs(r + 1, c, node, word);
            dfs(r, c - 1, node, word);
            dfs(r, c + 1, node, word);
        }
        visit.remove(new Coordinate(r, c));//mark as unvisited
    }

    public List<String> findWords(char[][] board, String[] words) {
        for (String s : words)
            root.addWord(s);//take each word and add it to our trie

        this.ROWS = board.length;//define row dimensions of board
        this.COLS = board[0].length;//define col dimensions of board

        for (int r = 0; r < ROWS; r++)
            for (int c = 0; c < COLS; c++)
                boardmap.put(new Coordinate(r, c), board[r][c]);//import args[] into boardmap

        for (int r = 0; r < ROWS; r++)
            for (int c = 0; c < COLS; c++)
                dfs(r, c, root, "");

        return new ArrayList<>(res);
    }
}