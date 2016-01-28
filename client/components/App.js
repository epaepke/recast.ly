class App extends React.Component {
  constructor(props) {
    super(props);
    // window.copy = this;
    this.state = {
      vidList: window.exampleVideoData,
      selectedVid: window.exampleVideoData[0]
    }
  }

  onTitleClick(selectedVid) {
    this.setState({
      selectedVid: selectedVid
    });
  }

  onKeyDown() {
    
  }

  componentDidMount() {
    var getParams = {
      query: "",
      max: 5,
      key: window.YOUTUBE_API_KEY
    }

    window.searchYouTube(getParams, (data) => {
      this.setState({
        vidList: data,
        selectedVid: data[0]
      });
    }.bind(this));  
  }

  render() {
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer selectedVid={this.state.selectedVid}/>
        </div>
        <div className="col-md-5">
          <VideoList vidList={this.state.vidList}  clickHandler={this.onTitleClick.bind(this)}/>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);


    // var currVid;
    // this.state.vidList.forEach( vid => {
    //     if (this.state.selectedVid.id.videoId === vid.id.videoId) {
    //       currVid = vid;
    //     }
    //   }
    // )