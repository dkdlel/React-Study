import React from 'react';
import logo from './logo.svg';
import './App.css';
import EventTest from './EventTest';
import CounterTest from './CounterTest';
import CounterFunction from './CounterFunction';

/* 철쓰 */
class App extends React.Component { 

  onClick(e) { 
    console.log(e);
  }

  render() {
    return (
      <div onClick={this.onClick}>
        {/* 김정현 돼지
        <img src={logo} alt="Logo" />
        {this.props.children}
        <App2/>
        <EventTest></EventTest> */}
        <CounterTest />
        <CounterFunction />
      </div>
    )
  }
}

function App2() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
