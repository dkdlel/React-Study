/* 3.4.2.1 배열의 비구조화 할당 */
// const array = [1,2];
// const one = array[0];
// const two = array[1];
// 를 비구조화 할당하면
// const array = [1,2];
// const [one,two] = array;

import React, {useState} from 'react';

/* 3.4.2.2 useState 사용하기 */
// const Say = () => {
//     const [message, setMessage] = useState('뭐 어쩔껀데'); // useState안에는 초깃값
//     // 클래스형 컴포넌트에서 state 초깃값은 객체 형태를 넣어주어야 하지만, useState에서는 반드시 객체가 아니어도 됨. 값의 형태는 자유
//     // message : 현재 상태, setMessage : 상태를 바꾸어 주는 함수 ==> 이러한 함수를 세터(setter)함수라고 함.
//     // 배열 비구조화 할당을 통해 message,setMessage가 아닌 이름을 자유롭게 정할수 있음.
//     const onClickEnter = () => setMessage('안녕하세요!');
//     const onClickLeave = () => setMessage('안녕히가세요!');

//     return(
//         <div>
//             <button onClick={onClickEnter}>입장</button>
//             <button onClick={onClickLeave}>퇴장</button>
//             <h1>{message}</h1>
//         </div>
//     );
// }

/* 3.4.2.3 한 컴포넌트에서 useState 여러 번 사용하기 */
// const Say = () =>{
//     const [message, setMessage] = useState('');
//     const onClickEnter = () => setMessage('안녕하세요!');
//     const onClickLeave = () => setMessage('안녕히가세요!');

//     const [color, setColor] = useState('black');

//     return(
//         <div>
//             <button onClick={onClickEnter}>입장</button>
//             <button onClick={onClickLeave}>퇴장</button>
//             <h1 style={{color}}>{message}</h1>
//             <button style={{color:'red'}} onClick={()=>{return setColor('red')}}>
//                 빨간색
//             </button>
//             <button sytle={{color:'green'}} onClick={()=> setColor('green')}> {/*return 없는 화살표 함수*/}
//                 초록색
//             </button>
//             <button style={{color:'blue'}} onClick={()=> setColor('blue')}>
//                 파란색
//             </button>
//         </div>
//     );
// }

/* 3.5 state를 사용할 때 주의 사항 */
// 자료 불변의 법칙

// 값을 바꾸어야 할때는 setState 혹은 useState를 통해 전달받은 세터 함수를 사용해야 함.

// 잘못된 코드
// // 클래스형 컴포넌트
// this.state.number = this.state.number + 1;
// this.state.array = this.array.push(2);
// this.state.object.value = 5;
// // 함수형 컴포넌트
// const [object, setObject] = useState({a:1,b:1});
// object.b = 2;

// 사본을 만들어서 업데이트를 해야함

// 올바른 코드
// // 객체 다루기
// const object = {a:1, b:2, c:3};
// const nextObject = {...object, b:2}; // 사본을 만들어서 b 값만 덮어 쓰기
// //... : 전기 연산자 ==> object전체를 한번에 복사

// // 배열 다루기
// const array = [
//     {id: 1, value: true},
//     {id: 2, value: true},
//     {id: 3, value: false}
// ];
// let nextArray = array.concat({id: 4}); // 새항목 추가
// // concat : 연결하다 ==> 추가할때 사용
// nextArray.filter(item => item.id !== 2); // id가 2인 항목 제거
// // filter ==> 제거할때 사용
// nextArray.map(item => (item.id === 1 ? {...item, value: false} : item)); // id가 1인 항목의 value를 false로 변경
// // map : foreach같은건데 item(array)를 처음부터 끝까지 반복함
// // map() 함수는 각 배열의 요소를 돌면서 인자로 전달된 함수를 사용하여 처리 된 새로운 결과를 새로운 배열에 담아 반환하는 함수입니다.

/* 3.6 정리 */
// props vs state
// 공통점 = 컴포넌트에서 사용하거나 렌더링할 데이터를 닮고 있음
// 차이점 = props : 부모 컴퍼넌트가 설정(함수형 컴포넌트) / state : 컴포넌트 자체적으로 지닌 값으로 컴포넌트 내부에서 값을 업테이트 할 수 있음(클래스형 컴포넌트)


export default Say;