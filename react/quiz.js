// Q1. If you want to import just the Component from the React library, what syntax do you use?
// Answer : 
// import { Component } from 'react'


// Q2. If a function component should always render the same way given the same props,
//  what is a simple performance optimization available for it?
// Answer : 
// Wrap it in the React.memo higher-order component.

// Q3. How do you fix the syntax error that results from running this code?
// const person =(firstName, lastName) =>
// {
//     first: firstName,
//     last: lastName
//   }
//   console.log(person("Jill", "Wilson"))
// Answer : 
//  Wrap the object in parentheses.

// Q4. If you see the following import in a file, what is being used for state management in the component?
// Answer : 
// React Hooks

// Q5. Using object literal enhancement, you can put values back into an object.
//  When you log person to the console, what is the output?
// const name = 'Rachel';
// const age = 31;
// const person = { name, age };
// console.log(person);
// Answer : 
// {name: "Rachel", age: 31}

// Q6. What is the testing library most often associated with React?
// Answer : 
// Jest

// Q7. To get the first item from the array ("cooking") using array destructuring, how do you adjust this line?
// const topics = ['cooking', 'art', 'history'];
// Answer : 
// const [first] = ["cooking", "art", "history"]

// Q8. How do you handle passing through the component tree without having to pass props down manually at every level?
// Answer : 
// React Context

// Q9. What should the console read when the following code is run?
// const [, , animal] = ['Horse', 'Mouse', 'Cat'];
// console.log(animal);
// Answer : 
// Cat