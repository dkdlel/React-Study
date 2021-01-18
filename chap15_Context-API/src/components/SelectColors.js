import React, { Component } from 'react';
import ColorContext, { ColorConsumer } from '../contexts/color';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'black'];

// export default ({ }) => {
//     return (
//         <div>
//             <h2>색상을 선택하세요.</h2>
//             <div style={{ display: 'flex' }}>
//                 {colors.map(color => (
//                     <div
//                         key={color}
//                         style={{
//                             background: color,
//                             width: '24px',
//                             height: '24px',
//                             cursor: 'pointer'
//                         }}
//                     />
//                 ))}
//             </div>
//             <hr />
//         </div>
//     )
// }

/* 마우스 오른쪽 버튼을 클릭하면 작은 정사각형의 색상을 변경하도록 구현 */
// export default ({ }) => {
//     return (
//         <div>
//             <h2>색상을 선택하세요.</h2>
//             <ColorConsumer>
//                 {({ actions }) => (
//                     <div style={{ display: 'flex' }}>
//                         {colors.map(color => (
//                             <div
//                                 key={color}
//                                 style={{ background: color, width: '24px', height: '24px', cursor: 'pointer' }}
//                                 onClick={() => actions.setColor(color)}
//                                 onContextMenu={e => {
//                                     e.preventDefault();
//                                     actions.setSubcolor(color);
//                                 }}
//                             />
//                         ))}
//                     </div>
//                 )}
//             </ColorConsumer>
//             <hr />
//         </div>
//     )
// }

/* 15.4.2 static contextType 사용하기 */
// 클래스형 컴포넌트에서 Context를 좀 더 쉽게 사용하기

class SelectColors extends Component {
    static contextType = ColorContext;

    handleSetColor = color => {
        this.context.actions.setColor(color);
    }

    handleSetSubcolor = subcolor => {
        this.context.actinos.setSubcolor(subcolor);
    }

    render() {

        return (
            <div>
                <h2>색상을 선택하세요.</h2>
                <div style={{ display: 'flex' }}>
                    {colors.map(color => (
                        <div
                            key={color}
                            style={{
                                background: color,
                                width: '24px',
                                height: '24px',
                                cursor: 'pointer'
                            }}
                            onClick={() => this.handleSetColor(color)}
                            onContextMenu={e => {
                                e.preventDefault();
                                this.handleSetSubcolor(color);
                            }}
                        />
                    ))}
                </div>
                <hr />
            </div>
        )
    }
}

export default SelectColors;