import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ValidationSample from './ValidationSample';
import ScrollBox from './ScrollBox';

// function App() {
//   return (
//     // <ValidationSample/>
//     /* 5.3 컴포넌트에 ref 달기 */
//     // <ScrollBox />
//   );
// }

/* 5.3.4 컴포넌트에 ref 달고 내부 메서드 사용 */
class App extends Component {
  render() {
    return(
      <div>
        <ScrollBox ref={(ref) => this.ScrollBox=ref}/>
        <button onClick={() => this.ScrollBox.scrollToBottom()}>
          맨 밑으로
        </button>
      </div>
    );
  }
}

export default App;
