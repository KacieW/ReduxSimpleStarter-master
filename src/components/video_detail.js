import React from 'react';

const VideoDetail = (props) =>{
  //because the YTSearch takes some time to getting the data, while the render method doesn't want to wait for it. For some parent object can't get data fast enough to satisfy the needs of a child object. At this time the videos array is still empty. So we pass undefined to VideoDetail component. Then the props.video in not provided at this point.
  if(!props.video){
    return <div> Loading...</div>;
  }
  const videoId = props.video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return(
    <div className = "video-detail col-md-8">
      <div className = "embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url} ></iframe>
      </div>
      <div className = "details">
        <div>{props.video.snippet.title}</div>
        <div>{props.video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;
