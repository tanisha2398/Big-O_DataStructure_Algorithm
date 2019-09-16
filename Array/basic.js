const strings = ["a", "b", "c", "d"];
console.log(strings[2]);
strings.push("e"); //O(1)
console.log(strings);
strings.pop(); //O(1)
console.log(strings);
strings.unshift("x"); //O(n)
console.log(strings);
strings.splice(2, 0, "alien"); //O(n)
console.log(strings);
