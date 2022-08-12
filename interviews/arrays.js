// Add variables to the start and end of an array.
// const myArray1 = ['a', 'b', 'c', 'd'];

// myArray1.push("end");
// myArray1.unshift("start");

// console.log(myArray1);

// // second soloution
// let myArray2 = ['a', 'b', 'c', 'd'];

// myArray2 = ["start",...myArray2, "end"]

// console.log(myArray2);

// ##########################

// use a while loop to iterate on the array.
// as long as the next index is diff from the previous index the iteration continues otherwise ,
// return the index of the same value.
// let array = [t, f ,f ,t ,t,f] "2"
// let array = [t,f,t,f,t,t] "5"
// let array = [ t,f,t,f,t,f] "-1"

let array = [true, false, true, false, true, false];

function func(array) {
    let result;
    let i = 0;
  while (i < array.length) {
    if (array[i] === array[i + 1]) {
       return result = i + 1;
    } else {
      result = -1;
    }
    i++;
  }
  return result;
}
console.log(func(array));
