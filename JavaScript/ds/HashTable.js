class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(k, v) {
    const address = this._hash(k);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([k, v]);
  }

  get(k) {
    const address = this._hash(k);
    const currentBucket = this.data[address];
    let res;
    if (currentBucket) {
      res = currentBucket.find(el => el[0] === k);
    }
    return res[1];
  }

  keys() {
    const bucketsArr = [];
    const itemsArr = [];
    const keysArr = [];
    for (let bucket of this.data) {
      if (bucket) {
        bucketsArr.push(bucket);
      }
    }
    for (let item of bucketsArr) {
      if (item) itemsArr.push(...item);
    }

    for (let el of itemsArr) {
      keysArr.push(el[0]);
    }

    return keysArr;
  }
}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000);
myHashTable.set('apples', 9);
myHashTable.set('oranges', 9);
myHashTable.set('mangoes', 9);
myHashTable.set('pinapples', 9);
myHashTable.set('a', 9);
myHashTable.set('b', 9);
myHashTable.set('c', 9);
myHashTable.set('d', 9);
myHashTable.set('e', 9);
myHashTable.set('f', 9);
console.log(myHashTable.keys());

export default HashTable;
