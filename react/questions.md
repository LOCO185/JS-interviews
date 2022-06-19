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
