function hash(key, size) {
    let hashedKey = 0, keyLength = key.length

    for (let i = 0; i < keyLength; i++) {
        hashedKey += key.charCodeAt(i)
    }

    // this will return a number from '0' to 'size - 1'
    return hashedKey % size
}

// create the hash table

class HashTable {
    constructor() {
        this.size = 20;
        this.buckets = (() => {
            let arr = [];
            for (let i = 0; i < this.size; i++) {
                arr.push(new Map())
            }

            return arr;
        })()
    }

    insert(key, value) {
        let index = hash(key, this.size);
        this.buckets[index].set(key, value)
    }

    remove(key) {
        let index = hash(key, this.size)
        let deleted = this.buckets[index].get(key)
        this.buckets[index].delete(key)
        return deleted;
    }

    search(key) {
        let index = hash(key, this.size);
        return this.buckets[index].get(key)
    }
}