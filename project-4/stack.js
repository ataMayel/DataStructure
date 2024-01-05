class Stack {
  constructor() {
    this.stack = []
  }

  push(value) {
    this.stack[this.stack.length] = value;
    return this.stack;
  }

  pop() {
    if (this.isEmpty()) return undefined;
    var value = this.stack[this.stack.length - 1];
    this.stack.length--;
    return value;
  }

  isEmpty() {
    return (this.stack.length == 0)
  }

  peek() {
    return this.stack[this.stack.length - 1]
  }
}


module.exports = Stack