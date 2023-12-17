class Trie {
    public root: TrieNode;

    constructor() {
        this.root = new TrieNode();
    }

    insert(word: string): void {
        if (word === null) return;
        let cur: TrieNode = this.root;
        for (let i = 0; i < word.length; i++) {
            const char = word[i];
            if (!cur.children.has(char)) cur.children.set(char, new TrieNode());
            cur = cur.children.get(char);
        }
        cur.setEnd(true);
    }

    search(word: string): boolean {
        if (word === null) return false;
        let cur: TrieNode = this.root;
        for (let i = 0; i < word.length; i++) {
            const char = word[i];
            if (!cur.children.has(char)) return false;
            cur = cur.children.get(char);
        }
        return cur.getIsEnd();
    }

    startsWith(prefix: string): boolean {
        if (prefix === null) return false;
        let cur: TrieNode = this.root;
        for (let i = 0; i < prefix.length; i++) {
            const char = prefix[i];
            if (!cur.children.has(char)) return false;
            cur = cur.children.get(char);
        }
        return true;
    }
}

class TrieNode {
    public children: Map<String, TrieNode>;
    private isEnd: boolean;

    constructor() {
        this.children = new Map();
        this.isEnd = false;
    }

    getIsEnd() {
        return this.isEnd;
    }

    setEnd(b: boolean) {
        this.isEnd = b;
    }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */






