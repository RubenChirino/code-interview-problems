class Trie {
    private TrieNode root;    

    public Trie() {
        this.root = new TrieNode();
    }
    
    public void insert(String word) {
        if (word == null) return;
        TrieNode cur = this.root;
        for (char c : word.toCharArray()) {
            if (!cur.contains(c)) cur.add(c);
            cur = cur.get(c);
            cur.increaseWordsStartingHere();
        }
        cur.increaseWordsEndingHere();
    }
    
    public int countWordsEqualTo(String word) {
        if (word == null) return 0;
        TrieNode cur = this.root;
        for (char c : word.toCharArray()) {
            if (!cur.contains(c)) return 0;
            cur = cur.get(c);
        }
        return cur.getWordsEndingHere();
    }
    
    public int countWordsStartingWith(String prefix) {
        if (prefix == null) return 0;
        TrieNode cur = this.root;
        for (char c : prefix.toCharArray()) {
            if (!cur.contains(c)) return 0;
            cur = cur.get(c);
        }
        return cur.getWordsStartingHere();
    }
    
    public void erase(String word) {
        if (word == null) return;
        TrieNode cur = this.root;
        for (char c : word.toCharArray()) {
            cur = cur.get(c);
            cur.decreaseWordsStartingHere();
        }
        cur.decreaseWordsEndingHere();
    }
}

class TrieNode {
    private TrieNode[] links;
    private int wordsEndingHere;
    private int wordsStartingHere;

    TrieNode() {
        this.links = new TrieNode[26];
        this.wordsEndingHere = 0;
        this.wordsStartingHere = 0;
    }

    public boolean contains(char c) {
        return this.links[c - 'a'] != null;
    }

    public void add(char c) {
        this.links[c - 'a'] = new TrieNode();
    }

    public void remove(char c) {
        this.links[c - 'a'] = null;
    }

    public TrieNode get(char c) {
        return this.links[c - 'a'];
    }

    public int getWordsStartingHere() {
        return this.wordsStartingHere;
    }

    public void increaseWordsStartingHere() {
        this.wordsStartingHere++;
    }

    public void decreaseWordsStartingHere() {
        if (this.wordsStartingHere > 0) this.wordsStartingHere--;
    }

    public int getWordsEndingHere() {
        return this.wordsEndingHere;
    }

    public void increaseWordsEndingHere() {
        this.wordsEndingHere++;
    }

    public void decreaseWordsEndingHere() {
        if (this.wordsEndingHere > 0) this.wordsEndingHere--;
    }
}

/**
 * Your Trie object will be instantiated and called as such:
 * Trie obj = new Trie();
 * obj.insert(word);
 * int param_2 = obj.countWordsEqualTo(word);
 * int param_3 = obj.countWordsStartingWith(prefix);
 * obj.erase(word);
 */