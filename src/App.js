import React from 'react';
import './App.css';
import SearchBar from './components/search_bar';
import * as youtubeSearch from "youtube-search";
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const GOOGLE_KEY = "AIzaSyC_r920H2SDZ-HtHXe7j0J07ogimesgUe0"

class App extends React.Component {
  constructor(props) {
  super(props)
  this.state = {
    term: "슬기로운 의사생활",
    videos: [],
    selectedVideo: null,
    };
  }

  componentDidMount() {
    this.search(this.state.term);
  }
  search(term) {
    this.setState({term: term});
    youtubeSearch(term, {key: GOOGLE_KEY}, (err, results) => {
      if(err) return console.log(err);
      this.setState({
        videos: results,
        selectedVideo: results[0]
      });
      console.log(results);
    });
  }

  render() {
    return (
      <div className="App container mt-3">
        <SearchBar term={this.state.term} onChange={(term) => {this.search(term);}} />
        <div className="row">
          <div className="col-8">
            <VideoDetail video={this.state.selectedVideo} />
          </div>
          <div className="col-4">
            <VideoList videos={this.state.videos} 
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
