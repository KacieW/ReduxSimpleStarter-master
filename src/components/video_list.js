import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props)=>{

  const videoItems = props.videos.map((video) => {
    return (
      <VideoListItem
        onVideoSelect = {props.onVideoSelect}
        video={video} key={video.etag} />//video={video} is to pass the video as a prop for 'VideoListItem'
    )
  });

  return (
    <ul className = "col-md-4 list-group">
      {videoItems}      {/*always use {} for js object.*/}
    </ul>
  );
};

export default VideoList;
