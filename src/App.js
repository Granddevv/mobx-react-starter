import React, { Component } from 'react';
import Home from "./components/Home";
import { observer } from 'mobx-react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const {counter} = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React App Using Mobx</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Home {counter}/>
        // <p>
        //   Counter:
        //   <span className={counter.isOdd ? 'Counter-odd' : 'Counter-even'}> {counter.count} </span>
        // </p>
        <p>
          <button onClick={() => counter.increment()}> + </button>
          <button onClick={() => counter.decrement()}> - </button>
        </p>
      </div>
    );
  }
}

export default App;
