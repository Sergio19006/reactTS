import * as React from 'react';

export interface StateNumberPicker {
  value: number;
}

export default class NumberPicker extends React.Component<{}, StateNumberPicker> {
  constructor(props){
    super(props);
    this.state = {
      value: 0
    };

    this.incrementCount = this.incrementCount.bind(this);
    this.decrementCount = this.decrementCount.bind(this);
  }

  incrementCount() {
    this.setState({ 
       value: this.state.value + 1 
    });
  }
  decrementCount() {
    this.setState({ 
       value: this.state.value - 1 
    });
  }

  render() {
    return <div>
      <button onClick={this.incrementCount}>+</button>
      <div>{this.state.value}</div>
      <button onClick={this.decrementCount}>-</button>
    </div>;
  }
}