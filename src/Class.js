import React from "react";

class Counter extends React.Component {
  constructor() {
    super(); 

    this.state = {
      count: 0
    };
  }

  handleClick = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>

        <button onClick={this.handleClick}>
          +1
        </button>
      </div>
    );
  }
}

export default Counter;