const arr1 = ["a", "b", "c", "x"];
const arr2 = ["z", "y", "x"];
function containCommonItem(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        console.log(true);
      }
    }
  }
}
containCommonItem(arr1, arr2);
