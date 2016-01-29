var VideoDetails = (props) => {
  console.log('videoDetails ',props);
  return ( 
    <div>
      <p><span class="glyphicons glyphicons-globe"></span>{props.selectedVidData}</p>
    </div>
  )
}

window.VideoDetails = VideoDetails;