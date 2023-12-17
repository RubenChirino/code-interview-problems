export default class MaxIntHeap {

    items: number[] = [];

    // === Get Index Methods
    private getParentIndex(childIndex: number) {
        return Math.floor((childIndex - 1) / 2);
    }

    private getLeftChildIndex(parentIndex: number) {
        return (parentIndex * 2) + 1;
    }

    private getRightChildIndex(parentIndex: number) {
        return (parentIndex * 2) + 2;
    }

    // === Comparison Methods
    private hasParent(index: number) {
        return this.getParentIndex(index) >= 0;
    } 

    private hasLeftChild(index: number) {
        return this.getLeftChildIndex(index) < this.items.length;
    }

    private hasRightChild(index: number) {
        return this.getRightChildIndex(index) < this.items.length;
    }

    // === Get Value ===
    private getParent(index: number) {
        return this.items[this.getParentIndex(index)];
    }

    private getLeftChild(index: number) {
        return this.items[this.getLeftChildIndex(index)];
    }

    private getRightChild(index: number) {
        return this.items[this.getRightChildIndex(index)];
    }

    // === Actions
    private swap(indexOne: number, indexTwo: number) {
        const temp: number = this.items[indexOne];
        this.items[indexOne] = this.items[indexTwo];
        this.items[indexTwo] = temp;
    }

    public peek() {
        if (this.items.length === 0) throw new Error('The MaxHeap is empty');
        return this.items[0];
    }

    public poll() {
        const peek = this.peek();
        this.items[0] = this.items[this.items.length - 1];
        this.items.pop();
        this.heapifyDown();
        return peek;
    }

    public add(item: number) {
        this.items.push(item);
        this.heapifyUp();
    }

    // === Heapify Methods

    private heapifyUp() {
        let index = this.items.length - 1;
        while (this.hasParent(index) && this.getParent(index) < this.items[index]) {
            const parentIndex = this.getParentIndex(index);
            this.swap(parentIndex, index);
            index = parentIndex;
        }
    }

    private heapifyDown() {
        let index = 0;
        while (this.hasLeftChild(index)) {
            let biggerChildIndex: number;

            if (this.hasRightChild(index) && this.getRightChild(index) > this.getLeftChild(index)) {
                biggerChildIndex = this.getRightChildIndex(index);
            } else {
                biggerChildIndex = this.getLeftChildIndex(index);
            }   

            // It's in the correct position
            if (this.items[index] > this.items[biggerChildIndex]) {
                break;
            }

            this.swap(index, biggerChildIndex);
            index = biggerChildIndex;
        }
    }
}