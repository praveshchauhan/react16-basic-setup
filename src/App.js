import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: true
    }
    this.textShowHide = this.textShowHide.bind(this);
    this.toggle = this.toggle.bind(this);
  }
  textShowHide() {
    if(this.state.toggle) {
      return 'Hide';
    } else {
      return 'Show';
    }
  }
  toggle() {
    this.setState({
      toggle: !this.state.toggle
    })
  }
  render() {
    return [<header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Welcome text="Welcome to React" user="Pravesh" />
        </header>,
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>,
        <button onClick={this.toggle}>{this.textShowHide()}</button>,
        <div>
        {this.state.toggle &&
          <p>This text going to be Show / Hide on button click</p>
        }</div>
      ]
  }
}

// class Welcome extends Component {
//   render() {
//     const { text, user } = this.props;
//     return (
//       <h1 className="App-title">{`${user}, ${text}`}</h1>
//     )
//   }
// }
function Welcome(props) {
  const { text, user } = props;
  return <h1 className="App-title">{`${user}, ${text}`}</h1>
}

export default App;
