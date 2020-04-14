import React from 'react';
import './App.css';
import SearchBar from './components/search_bar';
import * as youtubeSearch from "youtube-search";
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import LiveSearchBar from './components/live_search_bar';

const GOOGLE_KEY = "AIzaSyC_r920H2SDZ-HtHXe7j0J07ogimesgUe0"

class App extends React.Component {
  constructor(props) {
  super(props)
  this.state = {
    term: "슬기로운 의사생활",
    liveTerm: "",
    videos: [],
    selectedVideo: null,
    searched_videos: []
    };
  }

  componentDidMount() {
    this.searchMain(this.state.term);
  }
  searchMain(term) {
    this.setState({term: term, liveTerm: ""});
    youtubeSearch(term, {key: GOOGLE_KEY}, (err, results) => {
      if(err) return console.log(err);
      this.setState({
        videos: results,
        selectedVideo: results[0],
        searched_videos: results
      });
      console.log(results);
    });
  }
  liveSearch(term) {
    this.setState({
      liveTerm: term
    });
    let search_video = this.state.videos.filter(item => (item.title.indexOf(term) > -1));
    this.setState({
      searched_videos: search_video
    });
  }

  render() {
    return (
      <div className="App container mt-3">
        <SearchBar term={this.state.term} onChange={(term) => {this.searchMain(term);}} />
        <div className="row">
          <div className="col-8">
            <VideoDetail video={this.state.selectedVideo} />
          </div>
          <div className="col-4">
            <LiveSearchBar onChange={(term) => {this.liveSearch(term)}} value={this.state.liveTerm}/>
            <VideoList videos={this.state.searched_videos} 
            onItemSelect={(video) => {
              this.setState({selectedVideo: video});
            }}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
