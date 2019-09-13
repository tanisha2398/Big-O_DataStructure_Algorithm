const arr1 = [1, 2, 3, 4];
const arr2 = [1, 2, 4, 4];
const sum = 8;
function findSumInArray(arr1, sum) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = i + 1; j < arr1.length; j++) {
      if (arr1[i] + arr1[j] === sum) {
        console.log(true);
      }
    }
  }
}
findSumInArray(arr2, sum);
function findSumInArray2(arr1, sum) {
  let map = {};
  for (let i = 0; i < arr1.length; i++) {
    if (!map[arr1[i]]) {
      map[arr1[i]] = sum - arr1[i];
    } else {
      return console.log("pair present");
    }
  }
  return console.log("not present");
}
findSumInArray2(arr2, sum);
