//ES6 import statements
import React from 'react';
import ReactDOM from 'react-dom';

// Create a new component that produces HTML. This defines a class of component, but doesn't instantiate an instance of the component.

// Original version, using function keyword
// const App = function() {
//     return <div>Hi!</div>;
// }

//Updated version, using ES6 fat arrow function
const App = () => {
    return <div>Hi!</div>;
}

// Take this component's generated HTML and insert into the DOM. The first argument is the instantiated component and the second argument is a reference to the parent DOM element that is the target for the component to be rendered to.
ReactDOM.render(<App />, document.querySelector('.container'));
