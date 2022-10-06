import React, { Component } from "react";

class Reset extends Component {
  state = {};
  render() {
    return (
      <button
        onClick={this.props.onReset}
        type="button"
        className="btn btn-outline-info m-3"
      >
        Reset
      </button>
    );
  }
}

export default Reset;
