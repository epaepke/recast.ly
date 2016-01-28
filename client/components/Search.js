class Search extends React.Component {



  constructor(props) {
    super(props);
    this.searchClick = props.searchClick;
  }

  buttonClickHandler() {
    console.log(this.refs.searchQ.value);
    this.searchClick(this.refs.searchQ.value);
    this.refs.searchQ.value="";
  }

  keyDownHandler() {
    this.searchKeyDown(this.refs.searchQ.value);
  }

  render() {
    return (
      <div className="search-bar form-inline">
        <input className="form-control" type="text" ref="searchQ" onKeyDown={this.keyDownHandler.bind(this)} />
        <button className="btn hidden-sm-down" onClick={this.buttonClickHandler.bind(this)} >
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div>
    );
  }
}

window.Search = Search;
