import React, { Component } from 'react';

/* 5.3 컴포넌트에 ref 달기 */
// class ScrollBox extends Component{
//     render(){
//         const style = {
//             border: '1px solid black',
//             height: '300px',
//             width: '300px',
//             overflow: 'auto',
//             position: 'relative'
//         }

//         const innerStyle = {
//             width: '100%',
//             height: '650px',
//             background: 'linear-gradient(white, black)'
//         }

//         return(
//             <div
//                 style={style}
//                 ref={(ref) => {this.box=ref}}>
//                 <div style={innerStyle}/>
//             </div>
//         );
//     }
// }

/* 5.3.3 컴포넌트에 메서드 생성 */
class ScrollBox extends Component {
    scrollToBottom = () => {
        const { scrollHeight, clientHeight } = this.box; // 비구조화 할당
        this.box.scrollTop = scrollHeight - clientHeight;
    }

    render() {
        const style = {
            border: '1px solid black',
            height: '300px',
            width: '300px',
            overflow: 'auto',
            position: 'relative'
        }

        const innerStyle = {
            width: '100%',
            height: '650px',
            background: 'linear-gradient(white, black)'
        }
        return (
            <div
                style={style}
                ref={(ref) => { this.box = ref }}>
                <div style={innerStyle} />
            </div >
        );
    }
}


export default ScrollBox;