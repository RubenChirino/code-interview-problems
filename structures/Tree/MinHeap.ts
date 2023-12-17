export default class MinIntHeap {
    
    private size: number = 0;
    // private items: number[] = [];

    // You can use a maximum limit for static arrays
    private capacity: number = 10;  
    private items: number[] = new Array(this.capacity);

    // === Get Index Methods ===
    private getParentIndex(childIndex: number) {
        return Math.floor((childIndex - 1) / 2);
    }

    private getLeftChildIndex(parentIndex: number) {
        return (parentIndex * 2) + 1;
    }

    private getRightChildIndex(parentIndex: number) {
        return (parentIndex * 2) + 2;
    }

    // === Comparison Methods ===
    private hasParent(index: number) {
        return this.getParentIndex(index) >= 0;
    }

    private hasLeftChild(index: number) {
        return this.getLeftChildIndex(index) < this.size;
    }

    private hasRightChild(index: number) {
        return this.getRightChildIndex(index) < this.size;
    }

    // === Get Nodes Values ===
    private  getParent(index: number) {
        return this.items[this.getParentIndex(index)];
    }

    private getLeftChild(index: number) {
        return this.items[this.getLeftChildIndex(index)];
    }

    private getRightChild(index: number) {
        return this.items[this.getRightChildIndex(index)];
    }

    // === Actions ===
    private swap(indexOne: number, indexTwo: number) {
        const temp: number = this.items[indexOne];
        this.items[indexOne] = this.items[indexTwo];
        this.items[indexTwo] = temp;
    }

    // Ensure the capacity for static arrays
    /* ensureExtraCapacity() {
        if (this.size === this.capacity) {
            const copy = [...this.items];
            this.items = new Array(this.capacity * 2);
            for (let i = 0; copy.length; i++) {
                this.items[i] = copy[i];
            }
            this.capacity *= 2;
        }
    } */ 

    // Return the first node
    public peek() {
        if (this.size === 0) throw new Error('The MinHep is empty');
        return this.items[0];
    }

    // Remove and return the peek node, re-ordering the MinHeap (Heapify Down)
    public poll() {
        const peek = this.peek();
        this.items[0] = this.items[this.size - 1];
        this.size--;
        this.heapifyDown();
        return peek;
    }

    // Add new nodes to the Heap and then re-ordering the MinHeap (Heapify Up)
    public add(item: number) {
        // this.ensureExtraCapacity();
        this.items[this.size] = item;
        this.size++;
        this.heapifyUp();
    }

    // === Heapify Methods ===

    private heapifyUp() {
        let index = this.size - 1;
        while (this.hasParent(index) && this.getParent(index) > this.items[index]) {
            const parentIndex = this.getParentIndex(index);
            this.swap(parentIndex, index);
            index = parentIndex;
        }
    }

    private heapifyDown() {
        let index = 0;
        // We only need to ask for the left child, because without left child there is no right child.
        while (this.hasLeftChild(0)) {
            let smallerChildIndex: number;
            if (this.hasRightChild(index) && this.getRightChild(index) < this.getLeftChild(index)) {
                smallerChildIndex = this.getRightChildIndex(index);
            } else {
                smallerChildIndex = this.getLeftChildIndex(index);
            }

            // It's in the correct position
            if (this.items[index] < this.items[smallerChildIndex]) {
                break;
            }

            this.swap(index, smallerChildIndex);
            index = smallerChildIndex;
        }
    }
}