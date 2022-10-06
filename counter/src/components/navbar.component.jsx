import React, { Component } from "react";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-secondary bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Counter App <span class="badge bg-dark text-primary">{this.props.nonZeroItems}</span>
          </a>
        </div>
      </nav>
    );
  }
}

export default Navbar;
