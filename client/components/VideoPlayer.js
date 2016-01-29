var VideoPlayer = (props) =>  {

console.log('Video player props',props.selectedVid);

console.log('================================')
console.log(typeof props.selectedVid.id)
console.log('================================')

if (typeof props.selectedVid.id === "object") {
  console.log("why are u an object?", props.selectedVid.id)
  console.log("what is ur type?", typeof props.selectedVid.id)
  // console.log("props selected Vid ", props.selectedVid.id)
  // console.log("props before edited ", props)
  props.selectedVid.id = props.selectedVid.id.videoId;

  console.log("2why are u an object?", props.selectedVid.id)
  console.log("2what is ur type?", typeof props.selectedVid.id)
  // console.log("props after edited ", props)
}
return (
  <div className="video-player">
    <div className="embed-responsive embed-responsive-16by9">
      <iframe className="embed-responsive-item" src={`https://www.youtube.com/embed/${props.selectedVid.id}?autoplay=1`} allowFullScreen></iframe>
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
