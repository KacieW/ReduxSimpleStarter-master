import React from 'react';

/* Old ES5, we can refactory it as follows by ES6
  const VideoListItem = (props) =>{
    const video = props.video;
    const onVideoSelect = props.onVideoSelect;
  }
*/
const VideoListItem = ({video, onVideoSelect})=>{
  //const video = props.video, this is passed in by 'video={video}' in video_list line 7

  const imageUrl = video.snippet.thumbnails.default.url;
  return (
    <li onClick={()=>onVideoSelect(video)} className="list-group-item">
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
