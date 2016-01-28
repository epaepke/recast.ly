var VideoDetails = (props) => {
console.log('vid details', props.selectedVid)
if (props.selectedVid.statistics === undefined) {
  props.selectedVid.statistics = {};
  props.selectedVid.statistics.viewCount = 0;
}

return ( 

  <div>
    <p class="viewCount">{props.selectedVid.statistics.viewCount}</p>
  </div>
  );
}

window.VideoDetails = VideoDetails;