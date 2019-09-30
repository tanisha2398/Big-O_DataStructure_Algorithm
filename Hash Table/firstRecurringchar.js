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
  reoccur(arr) {
    let newArray = [];
    let address = null;
    for (let i = 0; i < arr.length; i++) {
      address = this._hash(arr[i]);
      if (!this.data[address]) {
        this.data[address] = [];
        this.data[address].push(arr[i]);
      } else {
        return console.log(arr[i]);
      }
    }
    return console.log("undefined");
  }
}
function firstRecurringCharacter(input) {
  let map = {};
  for (let i = 0; i < input.length; i++) {
    if (map[input[i]]) {
      return console.log(input[i]);
    } else {
      map[input[i]] = i;
    }
    console.log(map);
  }
  return console.log(undefined);
}

const hashTable = new HashTable(50);
// hashTable.reoccur([1, 1, 2, 3, 4, 2, 1]);
firstRecurringCharacter([2, 1, 1, 2, 3, 4, 2, 1]);
