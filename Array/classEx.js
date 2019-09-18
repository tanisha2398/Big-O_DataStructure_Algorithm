class Student {
  constructor(name, age) {
    console.log(this);
    this.name = name;
    this.age = age;
  }
  say() {
    console.log(`my name is ${this.name} and age is ${this.age}`);
  }
}
class Person extends Student {
  constructor(name, age) {
    super(name, age);
    console.log(this);
  }
  psay() {
    console.log(`${this.age}`);
  }
}
const Person1 = new Person("Tani", "23");
Person1.psay();
function a() {
  console.log(this);
}
// a();
const objecta = {
  a: function() {
    console.log(this);
  }
};
objecta.a();
