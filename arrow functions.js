let greet = () => {
  console.log("Hello Umar Shahid");
};

let greet1 = () => console.log("Hello Umar Shahid");

greet();
greet1();

let half = (a) => a / 2;
console.log(half(18));

let sum = (a, b) => a + b;
console.log(sum(10, 5));

let obj = {
  greeting: "Good Morning",
  names: ["Harry", "Umar"],
  speak() {
    this.names.forEach((student) => {
        console.log(this.greeting + " kukdoo koo " + student);
    });
  },
};
obj.speak();
