import React from "react";

const VideoDetail = ({video}) => {
  if(!video) {
    return <p>Loading...</p>
  }
  console.log("Video Detail Props:", video);
  const videoId = video.id.videoId;
  const videoURL = `https://www.youtube.com/embed/${videoId}?rel=0`

  return (
    <>
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={videoURL} allowFullScreen title={video.snippet.title}></iframe>
      </div>
      <h2>{video.snippet.title}</h2>
      <h4>{video.snippet.channelTitle}</h4>
      <p>{video.snippet.description}</p>
    </>
  )
}

export default VideoDetail;
