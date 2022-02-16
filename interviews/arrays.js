// Add variables to the start and end of an array.
const myArray1 = ['a', 'b', 'c', 'd'];

myArray1.push("end");
myArray1.unshift("start");

console.log(myArray1);

// second soloution
let myArray2 = ['a', 'b', 'c', 'd'];

myArray2 = ["start",...myArray2, "end"]

console.log(myArray2);

// ##########################
// 

// ##########################
