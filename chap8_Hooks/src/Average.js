import React, { useState, useMemo, useCallback, useRef, Component } from 'react'

/* 8.4 useMemo */
// 함수형 컴포넌트 내부에서 발생하는 연산을 최적화 할 수 있음
// const Average = () => {

//     const getAverage = (numbers) => {
//         console.log('평균값 계산 중..');
//         if(numbers.length === 0) return 0;
//         const sum = numbers.reduce((a,b) => a+b);
//         return sum / numbers.length;
//     }

//     const [number, setNumber] = useState('');
//     const [list, setList] = useState([]);
//// onChange와 onInsert는 컴포넌트가 리렌더링될 때마다 이 함수들이 새로 생성
//     const onChange = (e) => {
//         setNumber(e.target.value);
//     }

//     const onInsert = () => {
//         const nextList = list.concat(parseInt(number));
//         setList(nextList);
//         setNumber('');
//     }

//     // useMemo 사용
//     // useMemo : 렌더링하는 과정에서 특정 값이 바뀌었을때만 연산을 실행, 원하는 값이 바뀌지 않았다면 이전에 연산 결과를 다시사용
//     const avg = useMemo(() => getAverage(list), [list]);
//     return(
//         <div>
//             <input value={number} onChange={onChange}/>
//             <button onClick={onInsert}>등록</button>
//             <ul>
//                 {list.map((value,index) => (
//                     <li key={index}>{value}</li>
//                 ))}
//                 {list.map((value, index) => {
//                     return <li key={index}>{value}</li>
//                  })}
//             </ul>
//             <div>
//                 {/* <b>평균값: </b> {getAverage(list)} */}
//                 <b>평균값: </b> {avg}
//             </div>
//         </div>
//     )
// }


/* 8.5 useCallback */
// 이벤트 핸들러 함수를 필요할 때만 생성할 수 있음
// const Average = () => {

//     const getAverage = (numbers) => {
//         console.log('평균값 계산 중..');
//         if(numbers.length === 0) return 0;
//         const sum = numbers.reduce((a,b) => a+b);
//         return sum / numbers.length;
//     }

//     const [number, setNumber] = useState('');
//     const [list, setList] = useState([]);

//     const onChange = useCallback(e => {
//         setNumber(e.target.value);
//     }, []) // 컴포넌트가 처음 렌더링 될 때만 함수 생성

//     const onInsert = useCallback(() => {
//         const nextList = list.concat(parseInt(number));
//         setList(nextList);
//         setNumber('');
//     },[number,list]) // number 혹은 list가 바뀌었을 때만 함수 생성

//     const avg = useMemo(() => getAverage(list), [list]);
//     return(
//         <div>
//             <input value={number} onChange={onChange}/>
//             <button onClick={onInsert}>등록</button>
//             <ul>
//                 {list.map((value,index) => (
//                     <li key={index}>{value}</li>
//                 ))}
//             </ul>
//             <div>
//                 <b>평균값: </b> {avg}
//             </div>
//         </div>
//     )
// }
// useMemo : 숫자, 문자열, 객체처럼 일반 값을 재사용 할때
// useCallback : 함수를 재사용 할 때


/* 8.6 useRef */
// useRef : 함수형 컴포넌트에서 ref를 쉽게 사용할 수 있도록 함
// const getAverage = (numbers) => {
//     console.log('평균값 계산 중..');
//     if(numbers.length === 0) return 0;
//     const sum = numbers.reduce((a,b) => a+b);
//     return sum / numbers.length;
// }

// const Average = () => {

//     const [number, setNumber] = useState('');
//     const [list, setList] = useState([]);
//     const inputEl = useRef(null);

//     const onChange = useCallback(e => {
//         setNumber(e.target.value);
//     }, [])

//     const onInsert = useCallback(() => {
//         const nextList = list.concat(parseInt(number));
//         setList(nextList);
//         setNumber('');
//         inputEl.current.focus(); // 등록버튼을 눌렀을때 포커스가 인풋쪽으로 넘어감
//     }, [number, list])

//     const avg = useMemo (() => getAverage(list), [list]);
//     return(
//         <div>
//             <input value={number} onChange={onChange} ref={inputEl} />
//             <button onClick={onInsert}>등록</button>
//             <ul>
//                 {list.map((value,index) => (
//                     <li key={index}>{value}</li>
//                 ))}
//             </ul>
//             <div>
//                 <b>평균값: </b>{avg}
//             </div>
//         </div>
//     )
// }

/* 8.6.1 로컬 변수 사용하기 */
// 로컬변수란? 렌더링과 상관없이 바뀔 수 있는 값
// 클래스형
// class MyComponent extends Component{
//     id = 1
//     setId = (n) => {
//         this.id = n;
//     }
//     printId = () => {
//         console.log(this.id);
//     }
//     render(){
//         return(
//             <div>
//                 MyComponent
//             </div>
//         )
//     }
// }
// 함수형
// const RefSample = () => {
//     const id = useRef(1);
//     const setId = (n) => {
//         id.current = n;
//     }
//     const printId = () => {
//         console.log(id.current);
//     }
//     return(
//         <div>
//             refsample
//         </div>
//     )
// }

/* 8.7 pass */

export default Average