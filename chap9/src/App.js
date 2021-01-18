import React from 'react';
import logo from './logo.svg';
import './App.css';
import SassComponent from './SassComponent';
import CSSModule from './CSSModule';
import StyledComponent from './StyledComponent';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// const App = () => {
//   return <SassComponent />
// }

/* 9.3 CSS Module */
// const App = () => {
//   return <CSSModule />
// }

/* 9.4 styled-components */
const App = () => {
  return <StyledComponent />
}

export default App;
