## Why does react need a root element?

Answer:
Since React is all Javascript it needs an element where it can render out
it's own DOM tree.

## What is the difference between state and props?

Answer:
State: is a way for a component to store an internal state and it is perfect
for when you need to store a field value or perhaps toggle a modal.
Props: its what is being passed to the component from parent element,
this is how you most commonly work data in React.

## What is context?

Answer:
Context is a globally availabe prop that should only be used on occations
when you need something that is going to be everywhere in the applications,
perhaps for translating text or something like that.

## What are prop types and what are the benefits and drawbacks of them?

Answer:
They often become legacy documentation and people forget to keep them
updtaed or they put `.required` on the wrong things and often I see
people use `.object` instead of `.shapeOf`.


## Which life cycle event is the most common from your prespective?

Answer:
`componentWillMount` and `componentDidMount`
`componentReceiveMount` it is often that I find that I need to do something
when my component is getting a new state.

## When do you use a pure component and when do you use a class?

Answer:
I use pure components, but there is often I like to use class components
if I am storing a state or using a life cycle event.

## Explain how the React rendering works in your own terms?

Answer:
React listens for DOM updates and rerenders the DOM tree on every change.

## What is Redux?

Answer:
Redux is a popular tool for storing state in React.
it is built on the pub/sub pattern or flux and the idea is that you store
your state in a big object and use actions to change that state.

## Explain how Redux works in your own terms?

Answer:
You declare a reducer that takes in an action and a state,
when you dispatch an action the state gets updated and React
rerenders the DOM with the state change.

## When do you use Redux?

Answer:
Only in applications that need to share the global state.

## What is a container component?

Answer:
A container component is a popular way to seperate the JSX from the logic
of a component.

## What is a view component?

Answer:
The view component is the dumb part of a component where you simply put
the passed in props into JSX.