import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({videos , handleVideoSelect,chann}) => {
    const renderedVideos =  videos.map((video) => {
        
        return <VideoItem key={video.id.videoId}
                          video={video} 
                          handleVideoSelect={handleVideoSelect}
                           /> 
                   
    });
        videos.map((video) => {
        return chann(video.id.channelId)
    });
    return <div className='ui relaxed divided list'>{renderedVideos}</div>;
};
export default VideoList;