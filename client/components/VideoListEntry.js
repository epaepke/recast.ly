var VideoListEntry = (props) => {
  var titleClickHandler = () => {
    props.clickHandler(props.vidData);
  };

  return (
    <div className="video-list-entry">
      <div className="media-left media-middle">
        <img className="media-object" src={props.vidData.snippet.thumbnails.default.url} alt="" />
      </div>
      <div className="media-body">
        <div className="video-list-entry-title" onClick={titleClickHandler}>{props.vidData.snippet.title}</div>
        <div className="video-list-entry-detail">{props.vidData.snippet.description}</div>
      </div>
    </div>
  );
}

window.VideoListEntry = VideoListEntry;
