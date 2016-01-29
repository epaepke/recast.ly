var VideoDetails = (props) => {
  return ( 
    <div>
      <p><span className="viewCount"></span>{"View Count: " + props.selectedVidData}</p>
    </div>
  )
}

window.VideoDetails = VideoDetails;