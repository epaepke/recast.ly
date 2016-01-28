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
    var selectedVideo;
    console.log('before', selectedVid)
    window.getVideoStats(selectedVid, (data) => {
      // console.log('datadatadata ', data);
      this.setState({
        selectedVid:data[0]
      })
      // console.log('after ', selectedVideo);
    });
    // console.log('this ', this)
    // this.setState({
    //   selectedVid: selectedVid
    // });
    // console.log('this ', this)
  }

  onSearchClick(query){
    var getParams = {
      query: query,
      max: 10,
      key: window.YOUTUBE_API_KEY
    }
    this.getVideoData(getParams);
  
  }

  getVideoData(getParams) {
    window.searchYouTube(getParams, (data) => {
      this.setState({
        vidList: data
      });
    }.bind(this));    
  }

  onSearchKeyDown(query){
    var getParams = {
      query: query,
      max: 10,
      key: window.YOUTUBE_API_KEY
    }
    this.getVideoData(getParams);

    window.searchYouTube(getParams, (data) => {
      this.setState({
        vidList: data
      });
    }.bind(this));  
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
        <Nav searchClick={this.onSearchClick.bind(this)} keyDownSearch={this.onSearchKeyDown.bind(this)}/>
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