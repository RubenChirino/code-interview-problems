class MyCircularQueue {
    constructor(k) {
      this.queue = new Array(k);
      this.head = 0;
      this.count = 0;
    }
  
    enQueue(value) {
      if (this.isFull()) {
        return false;
      }
      this.queue[(this.head + this.count) % this.queue.length] = value;
      this.count++;
      return true;
    }
  
    deQueue() {
      if (this.isEmpty()) {
        return false;
      }
      this.head = (this.head + 1) % this.queue.length;
      this.count--;
      return true;
    }
  
    Front() {
      if (this.isEmpty()) {
        return -1;
      }
      return this.queue[this.head];
    }
  
    Rear() {
      if (this.isEmpty()) {
        return -1;
      }
      let tail = this.getTailIndex();
      return this.queue[tail];
    }
  
    isEmpty() {
      return this.count === 0;
    }
  
    isFull() {
      return this.count === this.queue.length;
    }
  
    getTailIndex() {
      return (this.head + this.count - 1) % this.queue.length;
    }
  }
  
  // Usage example
  const circularQueue = new MyCircularQueue(3); // set the size to be 3
  console.log(circularQueue.enQueue(1));  // returns true
  console.log(circularQueue.enQueue(2));  // returns true
  console.log(circularQueue.enQueue(3));  // returns true
  console.log(circularQueue.enQueue(4));  // returns false, the queue is full
  console.log(circularQueue.Rear());      // returns 3
  console.log(circularQueue.isFull());    // returns true
  console.log(circularQueue.deQueue());   // returns true
  console.log(circularQueue.enQueue(4));  // returns true
  console.log(circularQueue.Rear());      // returns 4
  