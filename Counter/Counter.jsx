import React from "react";
import "../Counter/Counter.css";
// export Countercomponent to App.js
export class CounterComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countAll: 0,
    };
    this.incrementAll = this.incrementAll.bind(this);
    this.decrementAll = this.decrementAll.bind(this);
    this.resetbtn = this.resetbtn.bind(this);
  }
  //Increment the total number of value
  incrementAll(value) {
    console.log(this.state.countAll);
    this.setState({
      countAll: this.state.countAll + value,
    });
  }
  //decrement the total number of value
  decrementAll(value) {
    console.log(this.state.countAll);
    if (this.state.countAll > 0) {
      if (this.state.countAll < value) {
        this.setState({
          countAll: 0,
        });
      } else {
        this.setState({
          countAll: this.state.countAll - value,
        });
      }
    }
  }

  //reset the total number of value by using countAll = 0
  resetbtn() {
    this.setState({
      countAll: 0,
    });
  }

  //by calling the counter values by using CounterComponent on the jsx
  //reset and add the values also using the render function
  render() {
    return (
      <div className="counter-component">
        <div className="my-text">Counter App</div>
        <Counter
          inc={1}
          incrementAll={this.incrementAll}
          decrementAll={this.decrementAll}
        />
        <Counter
          inc={2}
          incrementAll={this.incrementAll}
          decrementAll={this.decrementAll}
        />
        <Counter
          inc={5}
          incrementAll={this.incrementAll}
          decrementAll={this.decrementAll}
        />
        <div className="increment-all">{this.state.countAll}</div>
        <button className="reset btn btn-danger" onClick={this.resetbtn}>
          Reset
        </button>
      </div>
    );
  }
}

//counter  is the function to use only count and reset all the functions to the onclick or trigger the exist function to use the counter

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  render() {
    return (
      <div>
        <button className="incButton btn btn-primary" onClick={this.increment}>
          +{this.props.inc}
        </button>
        <button
          className="incButton1 btn btn-secondary"
          onClick={this.decrement}
        >
          -{this.props.inc}
        </button>
      </div>
    );
  }

  zeroMaker() {
    if (this.props.inc > this.state.countAll) {
      this.props.inc = 0;
    }
  }

  increment() {
    console.log("Increment");
    this.setState({
      count: this.state.count + this.props.inc,
    });

    this.props.incrementAll(this.props.inc);
  }
  decrement() {
    console.log("Decrement");
    this.setState({
      count: this.state.count - this.props.inc,
    });
    this.props.decrementAll(this.props.inc);
    console.log(this.props.inc);
  }

  resetbtn() {
    console.log("Reset");

    this.setState({
      count: 0,
    });
  }
}

Counter.defaultProps = {
  inc: 1,
};

export default CounterComponent;
