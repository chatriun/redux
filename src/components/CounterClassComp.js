import { Component } from "react";
import { connect } from "react-redux";

class CounterClassComp extends Component {
  handleIncrement() {
    this.props.increment();
  }

  handleDecrement() {
    this.props.decrement();
  }

  render() {
    return (
      <>
        <button onClick={this.handleDecrement.bind(this)}>-</button>
        <h3 style={{ color: "red" }}>{this.props.counter}</h3>
        <button onClick={this.handleIncrement.bind(this)}>+</button>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({ type: "increment" }),
    decrement: () => dispatch({ type: "decrement" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterClassComp);
