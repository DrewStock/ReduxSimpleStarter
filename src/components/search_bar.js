//ES6 syntax, alternative to defining Component as a const (i.e. const Component = React.Component;)
import React, { Component } from 'react';

//Functional component - a function to call and return JSX, unaware of state or other components
// const SearchBar = () => {
//     return <input />;
// };

//ES6 class-based component
class SearchBar extends Component {
    // render() {
    //     return <input onChange={this.onInputChange} />;
    // }

    // Declared method for event handler
    // onInputChange(event) {
    //     console.log(event.target.value);
    // }

    // Or, can use fat arrow function as handler for event
    render() {
        return <input onChange={event => console.log(event.target.value)} />;
    }


}

export default SearchBar;
