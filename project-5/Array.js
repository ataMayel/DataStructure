const LinkedList = require('./LinkedList');

class List {
    constructor() {
        this.list = new LinkedList();
    }
    insert(data, index) {
        this.list.insertAtIndex(data, index)
    }
    remove(index) {
        this.list.removeAtIndex(index);
    }
}

module.exports = List