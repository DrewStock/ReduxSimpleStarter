import React from 'react';

// In a functional component, props are passed as an argument. In a class-based component, props are available as this.props
const VideoList = (props) => {
    return (
        <ul className="col-md-4 list-group">{props.videos.length}
        </ul>
    );
}

export default VideoList;
