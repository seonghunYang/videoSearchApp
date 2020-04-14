import React, { Component } from 'react';
import VideoItem from './video_item';

class VideoList extends Component {


  render() {
    return(
      <div className="videoList">
        {
          this.props.videos.map(item => (<VideoItem key={item.id} video={item}
          onItemSelect={this.props.onItemSelect}/>))
        }
      </div>
    );
  }
}

export default VideoList;