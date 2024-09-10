function greet(name){
    console.log("Hello Good Morning " + name);
}
greet("Umar");
let timeOut = setInterval(greet,1000,"Umar Shahid");
console.log(timeOut);//repeated
clearInterval(timeOut);

let intervalId = setTimeout(greet,1000,"Umar Shahid");
console.log(timeOut);
clearTimeout(timeOut);//once

function displaytime(){
    let time = new Date();
    document.getElementById('time').innerHTML = time;
}
setInterval(displaytime,1000);