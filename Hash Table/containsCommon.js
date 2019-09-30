function containsCommonItem(arr1, arr2) {
  let map = {};
  for (let i = 0; i < arr1.length; i++) {
    if (!map[arr1[i]]) {
      let item = arr1[i];
      map[item] = true;
    }
  }
  for (let j = 0; j < arr2.length; j++) {
    if (map[arr2[j]]) {
      return console.log("common is=", arr2[j]);
    }
  }
  return console.log("no common item found");
}

containsCommonItem([1, 9, 8, 7, 4], [5, 3, 9]);
