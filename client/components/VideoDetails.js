var VideoDetails = (props) => {
  return ( 
    <div>
      <p><span className="glyphicons glyphicons-signal"></span>{"View Count: " + props.selectedVidData}</p>
    </div>
  )
}

window.VideoDetails = VideoDetails;