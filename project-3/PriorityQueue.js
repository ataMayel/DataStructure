class PriorityQueue {
    constructor(capacity) {
        this.capacity = capacity;
        this.queue = new Array(capacity);
        this.head = 0;
        this.tail = 0;
    }

    Enqueue(object) {
        this.queue[this.tail] = object;
        this.tail = (this.tail + 1) % this.capacity;
    };

    Dequeue() {
        if (this.isEmpty()) throw new Error('Queue is empty.');
        let object = this.queue[this.head];
        this.queue[this.head] = null;
        this.head = (this.head + 1) % this.capacity;
        return object;
    }

    ReverseQueue() {
        if (this.isEmpty()) throw new Error('Queue is empty.');
        let stack = [];
        while (!this.isEmpty()) {
            stack.push(this.Dequeue());
        }
        while (stack.length > 0) {
            this.Enqueue(stack.pop());
        }
        return this.queue;
    }

    Peek() {
        return this.queue[this.head]
    }

    isEmpty() {
        return (this.head == this.tail && !this.queue[this.head]);
    }

    isFull() {
        return (this.head == this.tail && !!this.queue[this.head]);
    }
}

module.exports = PriorityQueue;