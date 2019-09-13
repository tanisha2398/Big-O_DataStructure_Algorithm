const a = [1, 2, 3, 4, 5];
function logPair(a) {
  for (let i in a) {
    for (let j in a) {
      console.log(a[i] + " " + a[j]);
    }
  }
}
logPair(a);
