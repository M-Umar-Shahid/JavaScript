const key = "email";
const person = {
    name : "umar shahid",
    age : 19,
    beard : true,
    
}
console.log(person);
// Wrong methods

// person.key = "umershahid2003247@gmail.com";
// person["key"] = "umarshahid2003247@gmail.com"
// console.log(person);

// Right method
person[key] = "umarshahid2003247@gmail.com";

// In case of space in key

person['person hobbies'] = ["football","games","movies"];
console.log(person);