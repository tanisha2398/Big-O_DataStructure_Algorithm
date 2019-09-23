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
  set(key, value) {
    let address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    // console.log(this.data);
  }
  get(key) {
    let address = this._hash(key);
    const currentBucket = this.data[address];
    console.log(currentBucket);
    if (currentBucket.length) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return console.log(currentBucket[i][1]);
        }
      }
    }
    return undefined;
  }
  key() {
    let keyArray = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        keyArray.push(this.data[i][0][0]);
      }
    }
    console.log(keyArray);
  }

  valueof() {
    let valueArray = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        valueArray.push(this.data[i][0][1]);
      }
    }
    console.log(valueArray);
  }
}

const myHashTable = new HashTable(50);
myHashTable.set("grapes", 10000);
myHashTable.set("apples", 54);
myHashTable.set("mango", 456);
myHashTable.key();
myHashTable.valueof();
