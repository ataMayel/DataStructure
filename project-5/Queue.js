const LinkedList = require('./LinkedList');

class Queue {
  constructor() {
    this.queue = new LinkedList();
  }

  Enqueue(data) {
    this.queue.insertAtEnd(data)
  }

  Dequeue() {
    return this.queue.removeAtBegan()
  }

  print() {
    return this.stack.showList()
  }
}

module.exports = Queue;