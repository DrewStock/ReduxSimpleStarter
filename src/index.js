import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyDDUSBbL_GcXiiOp7mXSUWAPWmYou1WEB8';

// Create a new component. This component should produce some HTML

// ES5 syntax
// const App = function() {
//     return <div>Hi!</div>
// }

// ES6 - fat arrow syntax
// const App = () => {
//     return (
//         <div>
//             <SearchBar />
//         </div>
//     );
// };

// Class-based component
class App extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            videos: [],
            selectedVideo: null
         };

        // YTSearch({ key : API_KEY, term : 'surfboards'}, function(data) {
        //     this.setState({ videos : data });
        // });
        this.videoSearch('surfboards');
    }

    videoSearch(term) {
        //ES6 feature - when the references to the key:value pair in the object being passed to this.setState are identical ( 'key'videos: 'value'videos ), the pair can be abbreviated to one string
        YTSearch({ key : API_KEY, term : term}, (videos) => {
            this.setState({ 
                videos: videos,
                selectedVideo: videos[0]
             });
            console.log(videos);
            // transpiled as this.setState({ videos : videos});
        });
    }

    render() {
        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 500);

        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos} />
            </div>
        );
    }
};

// Take this component's generated HTML and put it on the page (in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));