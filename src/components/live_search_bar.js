import React, { Component } from 'react';

//검색된 비디오들 중에서 실시간으로 검색할 수 있는 서치 바를 만들었다.
class LiveSearchBar extends Component {
  render() {
    return(
      <div className="input-group mb-3">
        <input type="text" className="form-control shadow-none"
         placeholder="Search"
         aria-label="Search" aria-describedby="button-addon2" 
         value={this.props.value}
         onChange={(event) => {
           this.props.onChange(event.target.value);
         }
         }
        />
      </div>
    );
  }
}

export default LiveSearchBar;