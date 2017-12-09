import React, { Component } from 'react';

// Functional component
// const SearchBar = () => {
//     return <input />;
// };

// Class-based component
class SearchBar extends Component {
    render() {
    //  return <input onChange={this.handleInputChange} />;
    // OR
      return <input onChange={event => console.log(event.target.value)} />
    }

    handleInputChange(event) {
    //    console.log(event.target.value);

    }
}

export default SearchBar;