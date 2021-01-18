import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import Info from './Info';
import Average from './Average';

// function App() {
//   return (
//     /* 8.1 */
//     // <Counter />
//     /* 8.1.1 */
//     <Info />
//   );
// }

/* 8.2.3 뒷정리하기 */
// const App = () => {
//   const [visible,setVisible] = useState(false);
//   return(
//     <div>
//       <button
//         onClick={() => {
//           setVisible(!visible);
//         }}
//         >
//           {visible ? '숨기기' : '보이기'}
//         </button>
//         <hr />
//         {/* {visible && <Info />} */}
//         {visible ? <Info /> : "뭐씨발"}
//     </div>
//   )
// }

/* 8.3.1 카운터 구현하기 */
// const App = () => {
//   return <Counter />
// }

/* 8.3.2 인풋 상태 관리하기 */
// const App = () => {
//   return <Info />
// }

/* 8.4 useMemo */
const App = () => {
  return <Average />
}


export default App;
