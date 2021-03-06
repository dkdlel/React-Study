import React, { Component } from 'react';

/* 3.4.1 클래스형 컴포넌트의 state */
// class Counter extends Component{
//     constructor(props){ // 컴포넌트 생성자 메서드
//         super(props); // 현재 클래스형 컴포넌트가 상속받고 있는 리액트의 Component 클래스가 지닌 생성자 함수를 호출
//         // state의 초깃값 설정하기
//         this.state = { // 객체 형태여야함
//             number: 0
//         };
//     }
//     render(){
//         const {number} = this.state; // state를 조회할 때는 this.state로 조회합니다.
//         return(
//             <div>
//                 <h1>{number}</h1>
//                 <button
//                  // onClick을 통해 버튼이 클릭되었을 때 호출할 함수를 지정합니다.
//                  onClick={() => {
//                      // this.setState를 사용하여 state에 새로운 값을 넣을 수 있습니다.
//                      this.setState({number: number + 1}); // setState를 사용하여 state값을 변경
//                  }}
//                 >
//                     +1
//                 </button>
//             </div>
//         );
//     }
// }

/* 3.4.1.1 state 객체 안에 여러 값이 있을 때 */
// class Counter extends Component {
//     constructor(props) {
//         super(props);
//         // state의 초깃값 설정하기
//         this.state = {
//             number: 0,
//             fixedNumber: 0
//         };
//     }
//     render() {
//         const { number, fixedNumber } = this.state;
//         return (
//             <div>
//                 <h1>{number}</h1>
//                 <h2>바뀌지 않는 값: {fixedNumber}</h2>
//                 <button
//                     onClick={() => {
//                         this.setState({ number: number + 1 });
//                     }}
//                 >
//                 +1
//                 </button>
//             </div>
//         );
//     }
// }

/* 3.4.1.2 state를 constructor에서 꺼내기 */
// class Counter extends Component {
//     state = { // constructor 메서드를 선언하지 않고 state의 초깃값 설정
//         number: 0,
//         fixedNumber: 0
//     };
//     render() {
//         const {number, fixedNumber} = this.state;
//         return (
//             <div>
//                 <h1>{number}</h1>
//                 <h2>바뀌지 않는 값: {fixedNumber}</h2>
//                 <button
//                     onClick={() => {
//                         this.setState({ number: number + 1 });
//                     }}
//                 >
//                     +1
//                 </button>
//             </div >
//         );
//     }
// }

/* 3.4.1.3 this.setState에 객체 대신 함수 인자 전달하기 */
// 숫자 2씩 더하기
// class Counter extends Component {
//     state = { // constructor 메서드를 선언하지 않고 state의 초깃값 설정
//         number: 0,
//         fixedNumber: 0
//     };
//     render() {
//         const {number, fixedNumber} = this.state;
//         return (
//             <div>
//                 <h1>{number}</h1>
//                 <h2>바뀌지 않는 값: {fixedNumber}</h2>
//                 <button
//                     onClick={() => {
//                         // this.setState({ number: number + 1 });
//                         // this.setState({ number: this.state.number + 1});

//                         // this.setState({ number: number + 1 });
//                         // this.setState({ number: number + 1 });
//                         /* setState는 비동기로 작동하기 때문에 2번소스를 사용해도 1씩 더해짐 */

//                         this.setState(prevState => {
//                             return{
//                                 number: prevState.number + 1
//                             };
//                         });
//                         // 위 코드와 아래 코드는 완전히 똑같은 기능
//                         // 아래 코드는 함수에서 바로 객체를 반환
//                         this.setState(prevState => ({
//                             number: prevState.number + 1
//                         }));
//                     }}
//                 >
//                     +1
//                 </button>
//             </div >
//         );
//     }
// }

/* 3.4.1.4 this.setState가 끝난 후 특정 작업 실행하기 */
// callback 함수를 등록하여 작업을 처리
// class Counter extends Component {
//     state = { // constructor 메서드를 선언하지 않고 state의 초깃값 설정
//         number: 0,
//         fixedNumber: 0
//     };
//     render() {
//         const { number, fixedNumber } = this.state;
//         return (
//             <div>
//                 <h1>{number}</h1>
//                 <h2>바뀌지 않는 값: {fixedNumber}</h2>
//                 <button
//                     onClick={() => {
//                         this.setState({ number: number + 1 }, () => { // callback 사용
//                             console.log('방금 setState가 호출되었습니다.');
//                             console.log(this.state);
//                         });
//                     }}
//                 >
//                     +1
//                 </button>
//             </div >
//         );
//     }
// }

/* Say.js로 이동 */

// export default Counter;