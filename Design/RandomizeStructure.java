import java.util.*;

/* 
 * You need to design a class that makes the following operations in o(1) time complexity:
 * 1- Inserting a value (no duplicates)
 * 2- Removing a value
 * 3- Get a random value that is already inserted (with equal probability)
*/
public class RandomizedSet {
    private Map<Integer, Integer> map; // Value to index mapping
    private List<Integer> list; // Values storage
    private Random rand; // For generating random indices

    /** Initialize your data structure here. */
    public RandomizedSet() {
        map = new HashMap<>();
        list = new ArrayList<>();
        rand = new Random();
    }

    /** Inserts a value to the set. Returns true if the set did not already contain the specified element. */
    public boolean insert(int val) {
        if (map.containsKey(val)) {
            return false;
        }
        map.put(val, list.size());
        list.add(val);
        return true;
    }

    /** Removes a value from the set. Returns true if the set contained the specified element. */
    public boolean remove(int val) {
        if (!map.containsKey(val)) {
            return false;
        }
        
        // Move the last element to the place idx of the element to delete
        int idxToRemove = map.get(val);
        int lastElement = list.get(list.size() - 1);
        list.set(idxToRemove, lastElement);
        map.put(lastElement, idxToRemove);
        
        // Remove the last element
        list.remove(list.size() - 1);
        map.remove(val);
        
        return true;
    }

    /** Get a random element from the set. */
    public int getRandom() {
        return list.get(rand.nextInt(list.size()));
    }

    public static void main(String[] args) {
        RandomizedSet randomizedSet = new RandomizedSet();
        randomizedSet.insert(1);
        randomizedSet.remove(2);
        randomizedSet.insert(2);
        System.out.println(randomizedSet.getRandom()); // Output: either 1 or 2.
        randomizedSet.remove(1);
        randomizedSet.insert(2);
        System.out.println(randomizedSet.getRandom()); // Output: 2
    }
}

// Follow Up (Accept repeated values)

public class RandomizedCollection {
    private Map<Integer, Set<Integer>> idxMap;
    private List<Integer> list;
    private Random rand;

    /** Initialize your data structure here. */
    public RandomizedCollection() {
        idxMap = new HashMap<>();
        list = new ArrayList<>();
        rand = new Random();
    }

    /** Inserts a value to the collection. Returns true if the collection did not already contain the specified element. */
    public boolean insert(int val) {
        idxMap.putIfAbsent(val, new HashSet<>());
        idxMap.get(val).add(list.size());
        list.add(val);
        return idxMap.get(val).size() == 1;
    }

    /** Removes a value from the collection. Returns true if the collection contained the specified element. */
    public boolean remove(int val) {
        if (!idxMap.containsKey(val) || idxMap.get(val).isEmpty()) {
            return false;
        }
        
        int removeIndex = idxMap.get(val).iterator().next();
        idxMap.get(val).remove(removeIndex);
        int lastElement = list.get(list.size() - 1);
        
        if (removeIndex < list.size() - 1) { // Not the last element
            list.set(removeIndex, lastElement);
            idxMap.get(lastElement).remove(list.size() - 1);
            idxMap.get(lastElement).add(removeIndex);
        }
        
        list.remove(list.size() - 1);
        
        if (idxMap.get(val).isEmpty()) {
            idxMap.remove(val);
        }
        
        return true;
    }

    /** Get a random element from the collection. */
    public int getRandom() {
        return list.get(rand.nextInt(list.size()));
    }
}
