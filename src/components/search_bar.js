import React, { Component } from 'react';

// Functional component - a function to call and return JSX, unaware of state or other components
// const SearchBar = () => {
//     return <input />;
// };

// ES6 Class-based component
class SearchBar extends Component {
    // Initialization of state in a class-based component
    constructor(props) {
        super(props);

        this.state = { term: '' };
    }
    render() {
    //    return <input onChange={this.handleInputChange} />;
    //    OR
    //    return <input onChange={event => console.log(event.target.value)} />

        return (
        <div> 
        <input
            value={this.state.term} 
            onChange={event => this.onInputChange(event.target.value)}
            className="search-bar"
            placeholder="Enter search term"/>
        </div>
        )
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }

    // handleInputChange(event) {
    //    console.log(event.target.value);

    // }
}

export default SearchBar;