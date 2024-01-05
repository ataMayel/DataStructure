class Queue {
    constructor() {
        this.stack1 = [];
        this.stack2 = [];
    }

    Enqueue(element) {
        this.stack1.push(element);
    }

    Dequeue() {
        if (this.stack1.length === 0) return null;
        while (this.stack1.length > 0) {
            this.stack2.push(this.stack1.pop());
        }
        var dequeueElement = this.stack2.pop();
        while (this.stack2.length > 0) {
            this.stack1.push(this.stack2.pop());
        }
        return dequeueElement;
    }
}

module.exports = Queue;