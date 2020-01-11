import React, {Component} from 'react';
import './Counter.css';
import PropTypes from 'prop-types';

class Counter extends Component
{
  constructor(){
    super();
    this.state = {
      count: 0
    }
    this.increment = this.increment.bind(this); 
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
  }

  render(){
    return (
      <div className="counter">
        <CounterButton increby={1} decreby={1} incrementMethod={this.increment} decrementMethod={this.decrement}/>
        <CounterButton increby={5} decreby={5} incrementMethod={this.increment} decrementMethod={this.decrement}/>
        <CounterButton increby={10} decreby={10} incrementMethod={this.increment} decrementMethod={this.decrement}/>
        <button onClick = {this.reset}>Reset</button>
        <span className="counter-incre">{this.state.count}</span>
      </div>
    );
  }

  reset(){
    this.setState(
      {count: 0}
    );
  }

  decrement(decre){
    this.setState(
      (prevState) => { 
        return {count: prevState.count - decre}
      }
    );
  }

  increment(incre){
    this.setState(
      (prevState) => { 
        return {count: prevState.count + incre}
      }
    );
  }
} 

class CounterButton extends Component{
  render(){
    return (
      <div className="counterButton">
        <button className="counter-increButton" onClick = {() => this.props.incrementMethod(this.props.increby)}>+{this.props.increby}</button>
        <button className="counter-decreButton" onClick =  {() => this.props.incrementMethod(this.props.decreby)}>-{this.props.decreby}</button>
      </div>
    );
  }

  /*decrement () {
    this.props.decrementMethod(this.props.decreby);
  }*/

  /*increment (action) {
    if(action === false){
      this.props.incrementMethod(this.props.increby);
    }
    else{
      this.props.decrementMethod(this.props.decreby);
    }
  }*/
}

CounterButton.defaultProps = {
  increby: 1
};

CounterButton.propTypes = {
  increby: PropTypes.number
};

CounterButton.propTypes = {
  incrementMethod: PropTypes.func
};

export default Counter;