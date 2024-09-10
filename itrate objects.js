const person = {
    name : "umar shahid",
    age : 19,
    beard : true,
    hobbies : ["football","games","movies"]
}
// for in loop

// for(let key in person){
//     console.log(person[key]);
//     console.log(`${key} : ${person[key]}`);
//     console.log(key," : ",person[key]);
// }

// Arrays of key names

console.log(Object.keys(person));
console.log("\n");

// for of loop

for(let key of Object.keys(person)){
    // console.log(person[key]);
    // console.log(`${key} : ${person[key]}`);
    console.log(key," : ",person[key]);
}