
class MyHashSet {
    private Bucket[] bucketArray;
    private int keyRange = 769;
  
    public MyHashSet() {
      this.bucketArray = new Bucket[this.keyRange];
      for (int i = 0; i < this.keyRange; ++i)
        this.bucketArray[i] = new Bucket();
    }
  
    protected int _hash(int key) {
      return (key % this.keyRange);
    }
  
    public void add(int key) {
      int bucketIndex = this._hash(key);
      this.bucketArray[bucketIndex].insert(key);
    }
  
    public void remove(int key) {
      int bucketIndex = this._hash(key);
      this.bucketArray[bucketIndex].delete(key);
    }
  
    /** Returns true if this set contains the specified element */
    public boolean contains(int key) {
      int bucketIndex = this._hash(key);
      return this.bucketArray[bucketIndex].exists(key);
    }
  }
  
  class Bucket {
    private BinarySearchTree tree;
  
    public Bucket() {
      tree = new BinarySearchTree();
    }
  
    public void insert(Integer key) {
      this.tree.root = this.tree.insert(this.tree.root, key);
    }
  
    public void delete(Integer key) {
      this.tree.root = this.tree.deleteNode(this.tree.root, key);
    }
  
    public boolean exists(Integer key) {
      return this.tree.search(key) != null;
    }
  }
  
  public class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;
  
    TreeNode(int x) {
      val = x;
    }
  }
  
  class BinarySearchTree {
    TreeNode root = null;
  
    public TreeNode search(int val) {
      TreeNode curr = this.root;
      while(curr != null) {
          if (val == curr.val) {
              return root;
          }
          // Search
          if (val > curr.val) {
              curr = curr.right;
          } else {
              curr = curr.left;
          }
      }
      return null;
    }
  
    public TreeNode insert(TreeNode root, int val) {
      if (root == null) {
          return new TreeNode(val);
      }
  
      // insert into the right subtree
      if (val > root.val) {
          root.right = insert(root.right, val);
      } 
      // skip the insertion
      else if (val == root.val) {
          return root;
      }
      // insert into the left subtree
      else {
        root.left = insert(root.left, val);
      }
      
      return root;
    }
  
    /*
     * One step right and then always left
     */
    public int successor(TreeNode root) {
      root = root.right;
      while (root.left != null)
        root = root.left;
      return root.val;
    }
  
    /*
     * One step left and then always right
     */
    public int predecessor(TreeNode root) {
      root = root.left;
      while (root.right != null)
        root = root.right;
      return root.val;
    }
  
    public TreeNode deleteNode(TreeNode root, int val) {
      if (root == null) {
          return null;
      }
        
      // delete from the right subtree
      if (val > root.val) {
          root.right = deleteNode(root.right, val);
      }
      // delete from the left subtree
      else if (val < root.val) {
          root.left = deleteNode(root.left, val);
      }
      // delete the current node
      else {
        // the node is a leaf
        if (root.left == null && root.right == null) {
          root = null;
        }
        // the node is not a leaf and has a right child
        else if (root.right != null) {
          root.val = successor(root);
          root.right = deleteNode(root.right, root.val);
        }
        // the node is not a leaf, has no right child, and has a left child
        else {
          root.val = predecessor(root);
          root.left = deleteNode(root.left, root.val);
        }
      }
  
      return root;
    }
  }
  
  /**
   * Your MyHashSet object will be instantiated and called as such:
   * MyHashSet obj = new MyHashSet();
   * obj.add(key);
   * obj.remove(key);
   * boolean param_3 = obj.contains(key);
   */