let jsonObj = {
    name: "Harry",
    channel: "CWH",
    friend: "Rohan Das",
    food: "Bhindi"
}

console.log(jsonObj);

let myJsonStr = JSON.stringify(jsonObj);

myJsonStr = myJsonStr.replace('Harry','Umar');

jsonObj = JSON.parse(myJsonStr);

console.log(jsonObj);