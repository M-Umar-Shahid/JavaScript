// spread operator

const array = ["item1","item2","item3"];
const myNewArray = [...array,..."abcd"];
console.log(myNewArray);

const obj1 = {
    name1 : "umar shahid",
    age1 : 18,
    height1 : "tall",
}
const obj2 = {
    name2 : "ibrahim",
    age2 : 18,
    height1 : "short",
}
const newObject = {
    ...array,...obj1,...obj2, key: "value69",
}
// console.log(newObject);
console.log(newObject);