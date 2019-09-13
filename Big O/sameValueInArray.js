const arr1 = ["a", "b", "c", "x"];
const arr2 = ["z", "y", "c"];
function containCommonItem(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        console.log(true);
      }
    }
  }
}
containCommonItem(arr1, arr2); //O(a*b)
function containCommonItem2(arr1, arr2) {
  let map = {};
  for (let i = 0; i < arr1.length; i++) {
    if (!map[arr1[i]]) {
      const item = arr1[i];
      map[item] = true;
    }
  }
  for (let j = 0; j < arr2.length; j++) {
    if (map[arr2[j]]) {
      console.log(true);
    } 
  }
}
containCommonItem2(arr1, arr2);//O(a+b)
