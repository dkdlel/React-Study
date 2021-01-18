import React, { Component } from 'react';
import './ValidationSample.css';

/* 5.1.1 예제 컴포넌트 생성 */
// class ValidationSample extends Component{
//     state = {
//         password: '',
//         clicked: false,
//         validated: false
//     }

//     handleChange = (e) => {
//         this.setState({
//             password: e.target.value
//         })
//     }

//     handleButtonClick = () => {
//         this.setState({
//             clicked: true,
//             validated: this.state.password === '0000'
//         })
//     }
    
//     render(){
//         return(
//             <div>
//                 <input
//                     type="password"
//                     value={this.state.password}
//                     onChange={this.handleChange}
//                     className={this.state.clicked ? (this.state.validated ? 'success' : 'failure') : ''}
//                 />
//                 <button onClick={this.handleButtonClick}>검증하기</button>
//             </div>
//         );
//     }
// }

/* 5.2.2 createRef를 통한 ref 설정 */
// class RefSample extends Component{
//     input = React.createRef();

//     handleFocut = () => {
//         this.input.current.focus();
//     }

//     render(){
//         return(
//             <div>
//                 <input ref={this.input} />
//             </div>
//         );
//     }
// }

/* 5.2.3.1 input에 ref 달기, 5.2.3.2 버튼 onClick 이벤트 코드 수정 */
// class ValidationSample extends Component{
//     state = {
//         password: '',
//         clicked: false,
//         validated: false
//     }

//     handleChange = (e) => {
//         this.setState({
//             password: e.target.value
//         })
//     }

//     handleButtonClick = () => {
//         this.setState({
//             clicked: true,
//             validated: this.state.password === '0000'
//         })
//         this.input.focus();
//     }
    
//     render(){
//         return(
//             <div>
//                 <input
//                     ref={(ref) => this.input=ref}
//                     type="password"
//                     value={this.state.password}
//                     onChange={this.handleChange}
//                     className={this.state.clicked ? (this.state.validated ? 'success' : 'failure') : ''}
//                 />
//                 <button onClick={this.handleButtonClick}>검증하기</button>
//             </div>
//         );
//     }
// }


// export default ValidationSample;