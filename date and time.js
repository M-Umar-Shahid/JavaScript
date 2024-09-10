let now = new Date();
console.log(now);
let newDate = new Date("2029-09-30");
console.log(newDate);
let newDate1 = new Date(3020, 4, 6, 9, 3, 2, 34);
console.log(newDate1);
let year = now.getFullYear();
console.log(year);

newDate.setDate(15);
console.log(newDate);

function updateTime(){
    time.innerHTML = new Date();
}

setInterval(updateTime,1000);

