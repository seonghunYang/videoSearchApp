import React, { Component } from 'react';

class LiveSearchBar extends Component {
  constructor(props) {
    super(props);
  }

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