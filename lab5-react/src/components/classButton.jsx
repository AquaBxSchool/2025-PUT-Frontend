import {Component, useState} from 'react'

export class ButtonClass extends Component {

  state = {
    value:0
  };

  increment = () => {
    this.setState((oldstate) => ({value:oldstate.value+1}))
  }

  render() {
    return <button onClick={this.increment}>{this.state.value}</button>;
  }
}
