// 1
// What is the difference between the click behaviors of these two buttons
// <button onClick={this.handleClick}>Click Me</button>
// <button onClick={event => this.handleClick(event)}>Click Me</button>
// Answer:
// There is no difference.

// 2
// Which attribute do you use to replace innerHTML in the browser DOM ?
// Answer:
// dangerouslySetInnerHTML

// 3
// How do you fix the syntax error that result from running this code ?
// const person = (firstName, lastName) => 
//  {
//     first: firstName,
//     last: lastName
//  }
//  console.log(person("jill", "Wilson"));
// Answer:
// Wrap the object in parentheses.

// 4
// What is [e.target.id] called in this code snippet?
// handleChange(e) {
//     this.setState({ [e.target.id]: e.target.value})
// }
// Answer:
// a computed property name

// 5
// Why is it a good idea to pass a function to setState instead of an object?
// Answer:
// setState is async and might result in out of sync values.

// 6
// What value of button will alow you to pass the name of the person to be hugged ?
// hug(id) {
    // console.log("hugging" + id);
// }
// render() {
//     let name = "kitteh";
//     let button = // Missing code
//     return button;
// }
// }
// Answer:
// <button onClick={(e) => this.hug(name, e)}>Hug Button</button>

// 7
// What will happen when this useEffect Hook is excuted, assuming name is not already equal to Jhon?
// useEffect(() => {
//     setName("Jhon");
// },[name])
// Answer:
// it will update the name once and not run again until name is changed from the outside.

// 8
// What is the child prop?
// Answer:
// a property taht lets you pass components as data to other component.

// 9
// What do you call the message wrapped in curly braces below?
// const message = "Hi there";
// const element = <p>{message}</p>
// Answer:
// a JS expression.

// 10
// Currently, handleClick is being called instead of passed as a reference. How do you fix this?
// <button onClick={this.handleClick()}>Click This</button>
// Answer:
// <button onClick={this.handleClick}>Click This</button>

// 11
// When do you use useLayoutEffect?
// Answer:
// when you need the browser to paint before the effect runs.

// 12
// When using webpack, why would you need to use a loader?
// Answer:
// to preprocess files.

// 13
// When might you use React.PureComponent?
// Answer:
// when you dont want your component to have state.

// 14
// What is the name of the tool used to take JSX and turn it into createElement calls?
// Answer:
// babel

// 15
// How do you set a default value for an uncontrolled form field?
// Answer:
// Use the defaultValue property.


