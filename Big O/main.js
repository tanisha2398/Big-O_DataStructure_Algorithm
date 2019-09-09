const nemo = ["nemo"];
const everyone = [
  "tani",
  "tanisha",
  "himmu",
  "mohit",
  "sunita",
  "raje",
  "nemo"
];
const large = new Array(100000).fill("nemo");
function findNemo(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "nemo") {
      console.log("Found Nemo");
    }
  }
}
findNemo(large); //O(n)-->linear time
