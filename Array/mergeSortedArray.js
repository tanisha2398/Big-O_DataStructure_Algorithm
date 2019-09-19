function mergeSortedArray(a, b) {
  const c = [];
  //check input
  if (a.length === 0) {
    return console.log(b);
  }
  if (b.length === 0) {
    return console.log(a);
  }
  for (let i = 0, j = 0, k = 0; i <= a.length, j <= b.length; ) {
    if (i === a.length) {
      c[k] = b[j];
      k++;
      j++;
    } else if (j === b.length) {
      c[k] = a[i];
      i++;
      k++;
    } else {
      if (a[i] < b[j]) {
        c[k] = a[i];
        i++;
        k++;
      } else if (a[i] > b[j]) {
        c[k] = b[j];
        j++;
        k++;
      } else {
        c[k] = a[i];
        i++;
        k++;
        c[k] = b[j];
        j++;
        k++;
      }
    }
  }
  for (let k = 0; k < a.length + b.length; k++) {
    console.log(c[k]);
  }
  return c;
}
mergeSortedArray([0, 3, 4, 31], [4, 6, 30]);
