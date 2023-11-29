class List{
    constructor(){
        this.list = []
    }

    insert(object, index) {
        this.list.splice(index, 0, object);
    }
    
    Delete(index) {
        this.list.splice(index, 1);
        return this.list;
    }
    
    Find(object) {
        var index = this.list.indexOf(object);
        if (index === -1) {
            return undefined;
        }
        return index;
    }
}

module.exports = List;