import React, { Component } from "react";

class Counter extends Component {

  render() {
    return (
      <div>
        <span class="badge bg-primary m-3">{this.props.value}</span>
        <button
          onClick={()=>this.props.onIncrement(this.props.id)}
          type="button"
          class="btn btn-secondary m-3"
        >
          +
        </button>
        <button
          onClick={()=>this.props.onDecrement(this.props.id)}
          type="button"
          class="btn btn-secondary m-3"
        >
          -
        </button>
        <button onClick={() => this.props.onDelete(this.props.id)} type="button" class="btn btn-danger m-3">
          Delete
        </button>
      </div>
    );
  }
}

export default Counter;

