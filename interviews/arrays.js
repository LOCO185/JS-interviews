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

// let array = [true, false, true, false, true, false];

// function func(array) {
//     let result;
//     let i = 0;
//   while (i < array.length) {
//     if (array[i] === array[i + 1]) {
//        return result = i + 1;
//     } else {
//       result = -1;
//     }
//     i++;
//   }
//   return result;
// }
// console.log(func(array));

// ##########################

// ** Pini **
// Given an array of integers, find the minimum sum which is obtained from summing
// each two integers product.
// Notes :
// Array/List will contain positives only.
// Array/List will always has even size.
// Input >> Output Examples.
// 1- minSum([5,4,2,3]) ==> return (22)
// Explanation :
// The minimum sum obtained from summing each two integers product, 5*2 + 3*4 = 22.

// 2- minSum([12,6,10,26,3,24]) ==> return (342).
// Eplanation :
// 26*3 + 24*6 + 12*10 = 342.

const array = [5, 4, 2, 3];

const myFunc = (array) => {
  const arr = array.sort();
  let result = 0;
  for (let i = 0; i < arr.length / 2; i++) {
    console.log(arr[arr.length - 1 - i]);
    result += arr[i] * arr[arr.length - 1 - i];
  }
  return result;
};
console.log(myFunc(array));

// ##########################
