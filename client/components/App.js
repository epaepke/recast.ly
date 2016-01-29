class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vidList: window.exampleVideoData,
      selectedVid: window.exampleVideoData[0],
      selectedVidData: ""
    };
  }

  onTitleClick(selectedVid) {
    window.getVideoStats(selectedVid.id.videoId || selectedVid.id, (data) => {
      this.state.selectedvidData = data[0].statistics.viewCount;
      this.setState({
        selectedVidData: data[0].statistics.viewCount
      });
    });

    this.setState({
      selectedVid: selectedVid
    });
  }

  onSearchClick(query){
    var getParams = {
      query: query,
      max: 10,
      key: window.YOUTUBE_API_KEY
    };
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
    };
    this.getVideoData(getParams);

    window.searchYouTube(getParams, (data) => {

      this.setState({
        vidList: data
      });
    });  
  }

  componentDidMount() {
    var getParams = {
      query: "",
      max: 5,
      key: window.YOUTUBE_API_KEY
    };

    window.searchYouTube(getParams, (data) => {
      window.getVideoStats(data[0].id.videoId, (data2) => {
        this.setState({
          selectedVidData: data2[0].statistics.viewCount
        });
      });
      this.setState({
        vidList: data,
        selectedVid: data[0]
      });
    });
  }

  render() {
    return (
      <div>
        <Nav searchClick={this.onSearchClick.bind(this)} keyDownSearch={this.onSearchKeyDown.bind(this)}/>
        <div className="col-md-7">
          <VideoPlayer selectedVid={this.state.selectedVid} selectedVidData={this.state.selectedVidData}/>
        </div>
        <div className="col-md-5">
          <VideoList vidList={this.state.vidList} clickHandler={this.onTitleClick.bind(this)}/>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
