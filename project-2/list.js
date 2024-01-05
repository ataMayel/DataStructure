class List {
    constructor(capacity) {
        if (capacity < 0) throw new Error('Illegal capacity: ' + n)
        this.list = new Array(capacity)
        this.capacity = capacity;
        this.len = 0;
    }

    MoreSpace() {
        if (this.capacity == 0) this.capacity = 1
        else this.capacity = Math.round(this.capacity * 1.5);
        let newList = new List(this.capacity)
        for (let i = 0; i < this.len; i++) {
            newList.list[i] = this.list[i]
        }
        this.list = newList.list
    }

    Insert(object, index = this.len - 1) {
        console.log(this.len - 1);
        if (this.len + 1 >= this.capacity) {
            this.MoreSpace();
        }
        if (index == this.len - 1) {
            this.list[this.len] = object
        } else {
            for (let i = this.len - 1; i >= index; i--) {
                this.list[this.len] = this.list[this.len - 1];
            }
            this.list[index] = object;
        }
        this.len++;
    }

    Delete(index) {
        if (index < 0 || index >= this.len) throw new Error('Index not in range.');
        let data = this.list[index];
        let newList = new List(this.len - 1);
        for (let i = 0; i < this.len; i++) {
            if (i == index) continue;
            newList.Insert(this.list[i])
        }
        this.list = newList.list;
        this.len--;
        return data;
    }

    Find(object) {
        for (let i = 0; i < this.capacity; i++) {
            if (object == this.list[i]) {
                return i;
            }
        }
        return -1;
    }

    Size() {
        return this.len;
    }

    isEmpty() {
        return this.Size() === 0;
    }

    Clear() {
        if (!this.isEmpty()) {
            for (let i = 0; i < n; i++) {
                this.list[i] = null;
            }
            this.len = 0
        }
    }
}

module.exports = List;