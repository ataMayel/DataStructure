class Queue {
    constructor(n = 10) {
        this.n = n;
        this.queue = new Array(n)
        this.front = 0;
        this.rear = -1;
    }

    Enqueue(object) {
        this.queue[++this.rear] = object;
    }

    Dequeue() {
        if (this.isEmpty()) throw new Error('Queue is empty.');
        return this.queue[this.front++];
    }

    Peek() {
        if (this.isEmpty()) throw new Error('Queue is empty.');
        return this.queue[this.front];
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
        return this.queue
    }

    isEmpty() {
        return this.front > this.rear;
    }

    isFull() {
        return (this.rear == this.queue.length - 1);
    }
}

module.exports = Queue;


