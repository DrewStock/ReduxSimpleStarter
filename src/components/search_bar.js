import React, { Component } from 'react';

// Functional component
// const SearchBar = () => {
//     return <input />;
// };

// Class-based component
class SearchBar extends Component {
    // initialization of state in a class-based component
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