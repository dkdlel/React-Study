// import React from 'react';
import React, { Component } from 'react';
import propTypes from 'prop-types';// 3.3.6

/* 3.2.3.2 */
// const MyComponent = () => {
//     return <div>나의 새롭고 멋진 컴포넌트</div>;
// };

/* 3.3.1 JSX 내부에서 props 렌더링 */
// const MyComponent = props => {
//     return <div>안녕하세요, 제 이름은 {props.name}입니다.</div>;
// }

/* 3.3.3 defaultProps */
// MyComponent.defaultProps = {
//     name: '기본 이름'
// };

/* 3.3.4 children */
// const MyComponent = props => {
//     return(
//         <div>
//             안녕하세요, 제 이름은 {props.name}입니다. <br />
//             children 값은 {props.children}입니다.
//         </div>
//     );
// }

/* 3.3.5 비구조화 할당 문법을 통해 props 내부 값 추출하기 */
// const MyComponent = props => {
//     const {name, children} = props;
//     return(
//         <div>
//             안녕하세요, 제 이름은 {name}입니다. <br />
//             children 값은 {children}입니다.
//         </div>
//     );
// };

// 위와 동일한 소스
// const MyComponent = ({name, children}) => {
//     return(
//         <div>
//             안녕하세요, 제 이름은 {name}입니다. <br />
//             children 값은 {children}입니다.
//         </div>
//     );
// };

/* 3.3.6 propTypes를 통한 props 검증 */
// const MyComponent = ({name, children}) => {
//     return(
//         <div>
//             안녕하세요, 제 이름은 {name}입니다. <br />
//             children 값은 {children}입니다.
//         </div>
//     );
// };

// MyComponent.propTypes = {
//     name: propTypes.string
// };

/* 3.3.6.1 isRequired */
// const MyComponent = ({name, favoriteNumber, children}) => {
//     return(
//         <div>
//             안녕하세요, 제 이름은 {name}입니다. <br />
//             children 값은 {children}입니다. <br />
//             제가 좋아하는 숫자는 {favoriteNumber}입니다.
//         </div>
//     );
// }

// MyComponent.defaultProps = {
//     name: '기본 이름'
// }

// MyComponent.propTypes = {
//     name: propTypes.string,
//     favoriteNumber: propTypes.number.isRequired
// };


/* 3.3.7 클래스형 컴포넌트 props 사용하기 */
// class MyComponent extends Component{
//     render(){
//         const {name, favoriteNumber, children } = this.props; // 비구조화 할당
//         return(
//             <div>
//                 안녕하세요, 제 이름은 {name}입니다. <br /> {/* 비구조화 할당없이 this.props.name으로도 접근이 가능함*/}
//                 children 값은 {children}입니다. <br />
//                 제가 좋아하는 숫자는 {favoriteNumber}입니다.
//             </div>
//         );
//     }
// }

// MyComponent.defaultProps = {
//     name: '기본 이름'
// };

// MyComponent.propTypes = {
//     name: propTypes.string,
//     favoriteNumber: propTypes.number.isRequired
// };

// 클래스 내부에서 defaultProps와 propTypes를 설정
// class MyComponent extends Component {
//     static defaultProps = {
//         name: '기본 이름'
//     };
//     static propTyes = {
//         name: propTypes.string,
//         favoriteNumber: propTypes.number.isRequired
//     };
//     render() {
//         const { name, favoriteNumber, children } = this.props;
//         return (
//             <div>
//                 안녕하세요, 제 이름은 {name}입니다. <br />
//                 children 값은 {children}입니다. <br />
//                 제가 좋아하는 숫자는 {favoriteNumber}입니다.
//             </div>
//         );
//     }
// }

/* Counter.js로 */

// export default MyComponent;