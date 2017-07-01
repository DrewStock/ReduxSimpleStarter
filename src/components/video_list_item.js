import React from 'react';

// const VideoListItem = (props) => {
//     const video = props.video;
//
//     return (
//         <li>
//         <img src={video.snippet.thumbnails.default.url} />
//         {video.snippet.title}
//         </li>
//     )
// }

// ES6 syntax - an alternative to passing 'props' as an argument to the functional component and declaring a variable (i.e. const video = props.video)
const VideoListItem = ({video}) => {
    // console.log(video);
    const imageUrl = video.snippet.thumbnails.default.url

    return (
        <li className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img src={imageUrl} className="media-object" />
                </div>

                <div className="media-body">
                    <div className="media-heading">{video.snippet.title}</div>
                </div>
            </div>
        </li>
    )
}

export default VideoListItem;
