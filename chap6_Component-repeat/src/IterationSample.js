import React, { useState } from 'react';

/* 6장 시작 */
// const IterationSample = () => {
//     return(
//         <ul>
//             <li>눈사람</li>
//             <li>얼음</li>
//             <li>눈</li>
//             <li>바람</li>
//         </ul>
//     );
// }

/* 6.2.1 컴포넌트 수정하기 */
// const IterationSample = () => {
//     const names = ['눈사람','얼음', '눈', '바람'];
//     const nameList = names.map(name => <li>{name}</li>);
//     return <ul>{nameList}</ul>;
// }

/* 6.3.1 key 설정 */
// const IterationSample = () => {
//     const names = ['눈사람', '얼음', '눈', '바람'];
//     const namesList = names.map((name,index) => <li key={index}>{name}</li>);
//     return <ul>{namesList}</ul>
// }

// 동적인 배열 렌더링
// index 값을 key로 사용하면 리렌더링이 비효율적
/* 6.4.1 초기 상태 설정하기 */
// const IterationSample = () =>{
//     const [names,setNames] = useState([
//         { id:1, text: '눈사람' },
//         { id:2, text: '얼음' },
//         { id:3, text: '눈' },
//         { id:4, text: '바람' },
//     ]);
//     const [inputText, setInputText] = useState('');
//     const [nextId, setNextId] = useState(5);

//     const namesList = names.map(name => <li key={name.id}>{name.text}</li>);
//     return <ul>{namesList}</ul>
// };

/* 6.4.2 데이터 추가 기능 구현하기, onChange && onClick 추가 */
// push(기존 배열 자체를 변경해줌) vs concat(새로운 배열을 만들어 줌)
// 리액트는 불변성 유지를 해야함 => 컴포넌트의 성능을 최적화할 수 있기 때문에
// 불변성 유지 : 기존 상태를 그대로 두면서 새로운 값을 상태로 설정
// const IterationSample = () =>{
//     const [names,setNames] = useState([
//         { id:1, text: '눈사람' },
//         { id:2, text: '얼음' },
//         { id:3, text: '눈' },
//         { id:4, text: '바람' },
//     ]);
//     const [inputText, setInputText] = useState('');
//     const [nextId, setNextId] = useState(5);

//     const onChange = e => setInputText(e.target.value);
//     const onClick = () =>{
//         const nextNames = names.concat({
//             id: nextId,
//             text: inputText
//         })
//         setNextId(nextId + 1);
//         setNames(nextNames);
//         setInputText('');
//     }

//     const namesList = names.map(name => <li key={name.id}>{name.text}</li>);
//     return(
//         <>
//             <input value={inputText} onChange={onChange} />
//             <button onClick={onClick}>추가</button>
//             <ul>{namesList}</ul>
//         </>
//     );
// };

/* 6.4.3 데이터 제거 기능 구현하기 */
// filter : 배열에서 특정 조건을 만족하는 원소들만 쉽게 분류할 수 있음
const IterationSample = () => {
    const [names, setNames] = useState([
        { id: 1, text: '눈사람' },
        { id: 2, text: '얼음' },
        { id: 3, text: '눈' },
        { id: 4, text: '바람' }
    ]);
    const [inputText, setInputText] = useState('');
    const [nextId, setNextId] = useState(5);

    const onChange = e => setInputText(e.target.value);
    const onClick = () => {
        const nextNames = names.concat({
            id: nextId,
            text: inputText
        });
        setNextId(nextId + 1)
        setNames(nextNames)
        setInputText('')
    };
    const onRemove = id => {
        const nextNames = names.filter(name => name.id !== id);
        setNames(nextNames);
    };
    const namesList = names.map(name => (
        <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
            {name.text}
        </li>
    ));

    return (
        <>
            <input value={inputText} onChange={onChange} />
            <button onClick={onClick}>추가</button>
            <ul>{namesList}</ul>
        </>
    );
}

/* 6.5 정리 */
// 컴포넌트 배열을 렌더링할 때는 key 값 설정에 항상 주의
// key값은 언제나 유일
// if key값이 중복된다면 렌더링 과정에서 오류 발생
// 배열 내장함수 vs 객체 내장함수
// 배열 내장함수 : concat, map, filter, foreach, findIndex, find, splice(특정 항목 제거), slice(기존의 배열은 건들이지 않고 항목 제거), reduce(배열 원소의 합)
// indexOf, shift(첫번째 요소), pop(마지막 요소), push, unshift(맨 앞에 원소 추가), join(배열 안에 값을 추가)
// 객체 내장함수 : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object
// state 내부의 값을 수정 X vs state 내부의 값을 수정 O

export default IterationSample;