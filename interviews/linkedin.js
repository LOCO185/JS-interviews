// 1
// answer: immediatley

// 2
// answer: var student = new Person();

// 3
// anwer: addTax(50)

// 4
// var a = ['dog', 'cat', 'hen']
// a[100] = 'fox';
// console.log(a.length);
// answer: 101

// 5
// answer: () => {}

// 6
// answer: generator function

// 7
// sum(10, 20)
// diff(10,20)
// function sum(x,y) {
//     return x + y;
// }
// let diff = function(x, y) {
//     return x - y;
// }
// answer: error

// 8
// answer: x.Y

// 9
// answer: when you want your code to choose between multiple
//  options

// 10
// answer: youre calling a method named reduce on an object
// that is declared but has no value.

// 11
// answer: instanceof

// 12
// var v = 1;
// var f1 = function () {
//   console.log(v);
// };
// var f2 = function () {
//   var v = 2;
//   f1();
// };
// f2();
// answer : 1

// 13
// answer: let discountPrice = function(price) {
// return price * 0.85
// };

// 14
// answer: the condition in the ternary statement is using
// the assignement operator.

// 15
// const dessert = { type: 'pie'}
// dessert.type = 'pudding'
// answer: pudding

// const foo = [1,2,3]
// const [n] = foo
// console.log(n);

// let animals = ['j', 'e']

// animals.reverse()
// console.log(animals.pop());

// console.log("I");

// setTimeout(() => {
//     console.log("love");

// },0)
// console.log("javascript");

// var sound = "g"
// var bear = { sound: 'R'}

// function roar() {
//     console.log(this.sound);
// }
// roar.bind

// var obj
// console.log(obj);
// anwer: undefined

// let rainForests = [ "a", "b", "ce", "co"]
// rainForests.splice(0, 2)
// console.log(rainForests);
// answer: "ce" "co"

// console.log(4 + '3');
// console.log(4 - '3');
// answer: '43', 1

// const game = new Set('Free fire');
// console.log(...game);
// answer: F r e  f i

// const arrayy = [5, 6, 1, 3, 2, 4];

// const myFunc = (arrayy) => {
//   const arr = arrayy.sort();
//   let result = 0;
//   for (let i = 0; i < arr.length / 2; i++) {
//     console.log(arr[arr.length - 1 - i]);
//     result += arr[i] * arr[arr.length - 1 - i];
//   }
//   return result;
// };
// console.log(myFunc(arrayy));
// sort on array will make it descending
// answer: (6 * 1) + (5 * 2) + (4 * 3) = 28


// single from array
// const arr = [1, 2, 3, 7, 3, 2, 1];
// function one(arr) {
//   return arr.reduce((acc, num) => acc ^ num);
// }
// console.log(one(arr));