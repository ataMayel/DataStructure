const LinkedList = require('./LinkedList');

class Stack {
  constructor() {
    this.stack = new LinkedList();
  }

  push(data) {
    this.stack.insertAtEnd(data)
  }

  pop() {
    return this.stack.removeAtEnd()
  }
  
  print() {
    return this.stack.showList()
  }
}

module.exports = Stack;