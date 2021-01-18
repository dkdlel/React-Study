import React, { useContext } from 'react';
import ColorContext, { ColorConsumer } from '../contexts/color';

// export default ({ }) => {

//     return (
//         // 색상을 props로 받아 오는것이 아니라 Consumer라는 컴포넌트를 통해 색상을 조회함
//         < ColorContext.Consumer >
//             {/* Function as a child or Render Props : 중괄호를 열어서 그 안에 함수를 넣어주는 것, children 대신 JSX or 함수 전달 */}
//             {value => (
//                 <div
//                     style={{
//                         width: '64px',
//                         height: '64px',
//                         background: value.color
//                     }}
//                 />
//             )
//             }
//         </ColorContext.Consumer >
//     )
// }

/* 15.3.2 새로워진 Context를 프로젝트에 반영하기 */
// export default ({ }) => {

//     return (
//         <ColorConsumer>
//             {/* {value => (
//                 <>
//                     <div
//                         style={{
//                             width: '64px',
//                             height: '64px',
//                             background: value.state.color
//                         }}
//                     />
//                     <div
//                         style={{
//                             width: '32px',
//                             height: '32px',
//                             background: value.state.subcolor
//                         }}
//                     />
//                 </>
//             )} */}
//             {/* 객체 비구조화 할당 문법을 사용 */}
//             {({ state }) => (
//                 <>
//                     <div
//                         style={{
//                             width: '64px',
//                             height: '64px',
//                             background: state.color
//                         }}
//                     />
//                     <div
//                         style={{
//                             width: '32px',
//                             height: '32px',
//                             background: state.subcolor
//                         }}
//                     />
//                 </>
//             )}
//         </ColorConsumer>
//     )
// }

/* 15.4.1 useContext Hook 사용하기 */

export default ({ }) => {

    const { state } = useContext(ColorContext);
    return (
        <>
            <div
                style={{
                    width: '64px',
                    height: '64px',
                    background: state.color
                }}
            />
            <div
                style={{
                    width: '32px',
                    height: '32px',
                    background: state.subcolor
                }}
            />
        </>
    )
}