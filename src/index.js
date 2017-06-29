//ES6 import statements
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyDDUSBbL_GcXiiOp7mXSUWAPWmYou1WEB8';

// Create a new component that produces HTML. This defines a class of component, but doesn't instantiate an instance of the component.

// Original version, using function keyword
// const App = function() {
//     return <div>Hi!</div>;
// }

//Updated version, using ES6 fat arrow function
// const App = () => {
//     return (
//         <div>
//             <SearchBar />
//         </div>
//     );
// }

class App extends Component {
    constructor(props) {
        super(props);

        this.state = { videos: [] };

        // YouTube API search
        YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
        //ES6 feature - when the references to the key:value pair in the object being passed to this.setState are identical ( 'key'videos: 'value'videos ), the pair can be abbreviated to one string
            this.setState({ videos });
        });
    }

    render() {
        return (
            <div>
                <SearchBar />
                <VideoList videos={this.state.videos} />
            </div>
        );
    }

}

// Take this component's generated HTML and insert into the DOM. The first argument is the instantiated component and the second argument is a reference to the parent DOM element that is the target for the component to be rendered to.
ReactDOM.render(<App />, document.querySelector('.container'));
