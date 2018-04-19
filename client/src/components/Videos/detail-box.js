import React from "react";

const DetailBox = ({video}) => {
    if (!video) {
        return <div></div>;
    }

    return (
        <div className="video-detail col-md-12">
            <div className="details">
                <div>{video.snippet.title}</div>
                <div>{video.snippet.description}</div>
            </div>
        </div>
    );
}

export default DetailBox;