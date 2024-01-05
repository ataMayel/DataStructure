class Matrix {
    constructor(n, matrix = []) {
        this.count = 0
        this.matrix = matrix
        this.n = n

        for (let i = 0; i < n; i++) {
            this.matrix[i] = []
            for (let j = 0; j < n; j++) {
                this.matrix[i][j] = 0;
                this.count++
            }
        }
    }

    find(value) {
        for (let i = 0; i < this.count; i++) {
            for (let j = 0; j < this.count; j++) {
                if (this.matrix[i][j] == value) return [i, j]
                return undefined;
            }
        }
    }

    move(start, goal) {
        let ortaV = this.matrix[start[0]][start[1]]
        this.matrix[start[0]][start[1]] = this.matrix[goal[0]][goal[1]];
        this.matrix[goal[0]][goal[1]] = ortaV;
    }

    get(i, j) {
        return this.matrix[i][j]
    }

    set(i, j, v) {
        this.matrix[i][j] = v;
        return this;
    }

    sparse() {
        let sparsed = []
        sparsed.push([this.n, this.n, 0])

        for (let i = 0; i < this.matrix.length; i++) {
            for (let j = 0; j < this.matrix[i].length; j++) {
                if (this.matrix[i][j] !== 0) {
                    sparsed.push([i, j, this.matrix[i][j]])
                    sparsed[0][2]++;
                }
            }
        }

        return sparsed;
    }
}

module.exports = Matrix