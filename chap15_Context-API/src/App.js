import React from 'react';
import ColorBox from './components/ColorBox';
import ColorContext, { ColorProvider } from './contexts/color';
import SelectColors from './components/SelectColors';

// Context API : 리액트 프로젝트에서 전역적으로 사용할 데이터가 있을 때 유용한 기능

/* 15.2 Context API 사용법 익히기 */
// mkdir contexts, make color.js

// const App = () => {
//   return (
//     <div>
//       <ColorBox />
//     </div>
//   )
// }

/* 15.2.4 Provider */
// Provider를 사용하면 Context의 value를 변경 할 수 있음
// const App = () => {
//   return (
//     <ColorContext.Provider value={{ color: 'red' }}>
//       <div>
//         <ColorBox />
//       </div >
//     </ColorContext.Provider>
//   )
// }

/* 15.3.2 새로워진 Context를 프로젝트에 반영하기 */
// const App = () => {
//   return (
//     <ColorProvider>
//       <div>
//         <ColorBox />
//       </div>
//     </ColorProvider>
//   )
// }

/* 15.3.3 색상 선택 컴포넌트 만들기 */
const App = () => {
  return (
    <ColorProvider>
      <div>
        <SelectColors />
        <ColorBox />
      </div>
    </ColorProvider>
  )
}

/* 15.4 Consumer 대신 Hook 또는 static contextType 사용하기 */



export default App; 
