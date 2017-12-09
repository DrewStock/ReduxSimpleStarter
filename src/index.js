import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDDUSBbL_GcXiiOp7mXSUWAPWmYou1WEB8';

// Create a new component. This component should produce some HTML

// ES5 syntax
// const App = function() {
//     return <div>Hi!</div>
// }

// ES6 - fat arrow syntax
const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
};

// Take this component's generated HTML and put it on the page (in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));