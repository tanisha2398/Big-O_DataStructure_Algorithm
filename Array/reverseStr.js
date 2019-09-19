let str = "Hi my Name is Tanisha";
function reverse(str) {
  const arr = [];
  for (let i = str.length - 1; i >= 0; i--) {
    arr.push(str[i]);
  }
  console.log(arr.join(""));
}
function reverse2(str) {
  console.log(
    str
      .split("")
      .reverse()
      .join("")
  );
}
reverse2(str);
