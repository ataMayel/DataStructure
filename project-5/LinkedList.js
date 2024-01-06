class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    isEmpty() {
        return this.head === null;
    }

    SizeOfList() {
        let current = this.head;
        let count = 0;
        while (current) {
            count++;
            current = current.next;
        }
        return count;
    }

    insertAtEnd(data) {
        const new_node = new Node(data);
        if (this.isEmpty()) this.head = new_node;
        else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = new_node;
        }
    }

    insertAtBegan(data) {
        const new_node = new Node(data);
        if (this.head) {
            new_node.next = this.head;
            this.head = new_node;
        } else this.head = new_node;
    }

    insertAtIndex(data, index) {
        if (index < 0 || index > this.SizeOfList()) throw new Error("Invalid index");
        const new_node = new Node(data);
        if (index === 0) {
            new_node.next = this.head;
            this.head = new_node;
        } else {
            let current = this.head;
            let previous = null;
            let count = 0;
            while (count < index) {
                previous = current;
                current = current.next;
                count++;
            }
            new_node.next = current;
            previous.next = new_node;
        }
    }

    updateNode(data, index) {
        if (index < 0 || index >= this.SizeOfList()) throw new Error("Invalid index");
        let current = this.head;
        let count = 0;
        while (count < index) {
            current = current.next;
            count++;
        }
        current.data = data;
    }

    removeAtIndex(index) {
        if (index < 0 || index >= this.SizeOfList()) throw new Error("Invalid index");
        let current = this.head;
        let previous = null;
        let count = 0;
        while (count < index) {
            previous = current;
            current = current.next;
            count++;
        }
        if (previous === null) this.head = current.next;
        else previous.next = current.next;
    }

    removeAtEnd() {
        if (this.isEmpty()) throw new Error("List is empty");
        if (this.head.next === null) this.head = null;
        else {
            let current = this.head;
            let previous = null;
            while (current.next) {
                previous = current;
                current = current.next;
            }
            previous.next = null;
            return current.data;
        }
    }

    removeAtBegan() {
        if (this.isEmpty()) throw new Error("List is empty");
        let temp = this.head;
        this.head = this.head.next;
        return temp;
    }

    concatenate(linked_list) {
        if (linked_list.isEmpty()) return
        if (this.isEmpty()) {
            this.head = linked_list.head;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = linked_list.head;
        }
    }

    invert() {
        let previous = null;
        let current = this.head;
        while (current) {
            const next_node = current.next;
            current.next = previous;
            previous = current;
            current = next_node;
        }
        this.head = previous;
    }

    showList() {
        let current = this.head;
        let output = "";
        while (current) {
            output += `${current.data}`;
            current = current.next;
        }
        return (output) ? output : "None";
    }
}

module.exports = LinkedList;