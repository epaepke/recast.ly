var VideoPlayer = (props) =>  {

return (
  <div className="video-player">
    <div className="embed-responsive embed-responsive-16by9">
      <iframe className="embed-responsive-item" src={`https://www.youtube.com/embed/${props.selectedVid.id.videoId || props.selectedVid.id}?autoplay=1`} allowFullScreen></iframe>
    </div>
    <div className="video-player-details">
      <h3>{props.selectedVid.snippet.title || 'No Video Loaded'}</h3>
      <div>{props.selectedVid.snippet.description}</div>
      <VideoDetails selectedVid={props.selectedVid} selectedVidData={props.selectedVidData}/>
    </div>
  </div>
);
}
window.VideoPlayer = VideoPlayer;
