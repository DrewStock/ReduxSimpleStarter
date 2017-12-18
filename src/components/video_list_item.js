import React from 'react';

// const VideoListItem = (props) => {
//     const video = props.video;
//     const onVideoSelect = props.onVideoSelect;
// };
// OR
// ES6 syntax - an alternative to passing 'props' as an argument to the functional component and declaring a variable (i.e. const video = props.video)
const VideoListItem = ({video, onVideoSelect}) => {
    
    const imageUrl = video.snippet.thumbnails.default.url;

    return (
        <li onClick={() => onVideoSelect(video)}
            className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={imageUrl} />
                </div>
                <div className="media-body">
                    <div className="media-heading">{video.snippet.title}</div>
                </div>
            </div>
        </li>
    );
};

export default VideoListItem;