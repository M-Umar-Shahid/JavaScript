let array1 = ["item1","item2","item3"];

// Not clonning only one array is created
// array2=array1;

// CLONNING

// concatination

let array2 = [].concat(array1).concat(["item5"]);
console.log(array1);
console.log(array2);

// slicing

array2 = array1.slice(2).concat(array1.slice(1,3));
console.log(array2);

// SPREAD OPERATOR

array2 = [...array1,"item4"];
console.log(array2);
