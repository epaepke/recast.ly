var VideoList = (props) => {
  return (
    <div className="video-list media">
      {props.vidList.map( vid => 
        <VideoListEntry vidData={vid}  clickHandler={props.clickHandler} />
      )}
    </div>
  );
}

window.VideoList = VideoList;
 