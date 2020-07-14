import React from 'react';

const VideoDetail = ({video}) => {
    if (!video) {
        return <div>Loading ...</div>;
    }
    console.log(video);
    const videoSrc = `https://www.youtube.com/channel/${video.snippet.thumbnails.medium}`;
    console.log(typeof(video.video));
    return (
        <div>
            <div className='ui embed' >
            
                <img src={video.snippet.thumbnails.medium.url} ></img>
                
            </div>
            <div className='ui segment'>
                <h4 className='ui header'>{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>
        </div>

    )
}

export default VideoDetail;