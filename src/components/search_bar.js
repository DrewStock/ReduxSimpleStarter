//ES6 syntax, alternative to defining Component as a const (i.e. const Component = React.Component;)
import React, { Component } from 'react';

//Functional component - a function to call and return JSX, unaware of state or other components
// const SearchBar = () => {
//     return <input />;
// };

//ES6 class-based component
class SearchBar extends Component {
    // Method for initializing state in class-based component
    constructor(props) {
        super(props);

        this.state = { term: ''};
    }
    // render() {
    //     return <input onChange={this.onInputChange} />;
    // }

    // Declared method for event handler
    // onInputChange(event) {
    //     console.log(event.target.value);
    // }

    // Or, can use fat arrow function as handler for event
    render() {
        return (
            <div className="search-bar">
                <input
                    value={this.state.term}
                    onChange={event => this.onInputChange( event.target.value)}
                />
            </div>
        );
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }

}

export default SearchBar;
