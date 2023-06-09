class Progress {
    constructor() {
        this.value = 0;
        this.max = 0;
    }
    addMax(max) {
        this.max += max;
    }
    addValue(value) {
        this.value += value;
    }
}

export class CountMap {
    constructor() {
        this.map = new Map();
    }
    keys() {
        return this.map.keys();
    }
    addMax(key, quantity) {
        const had = this.map.has(key);
        if (had) {
            this.map.get(key).addMax(quantity);
        } else {
            const progress = new Progress();
            progress.addMax(quantity);
            this.map.set(key, progress);
        }
        return had;
    }
    addValue(key, quantity) {
        const had = this.map.has(key);
        if (had) {
            this.map.get(key).addValue(quantity);
        } else {
            const progress = new Progress();
            progress.addValue(quantity);
            this.map.set(key, progress);
        }
        return had;
    }
    getValue(key) {
        if (this.map.has(key)) {
            return this.map.get(key).value;
        } else {
            return 0;
        }
    }
    getMax(key) {
        if (this.map.has(key)) {
            return this.map.get(key).max;
        } else {
            return 0;
        }
    }
    getProgress(key) {
        if (this.map.has(key)) {
            const progress = this.map.get(key);
            return progress.value / progress.max;
        } else {
            return 0;
        }
    }
    getRemaining(key) {
        if (this.map.has(key)) {
            const progress = this.map.get(key);
            return progress.max - progress.value;
        } else {
            return 0;
        }
    }
    has(key) {
        return this.map.has(key);
    }
}