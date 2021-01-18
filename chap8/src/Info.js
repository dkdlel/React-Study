import React, { useState, useEffect, useReducer } from 'react';

/* 8.1.1 useState를 여러 번 사용하기 */
// const Info = () => {
//     const [name,setName] = useState('');
//     const [nickname, setNickname] = useState('');

//     const onChangeName = e => {
//         setName(e.target.value);
//     }

//     const onChangeNickname = e => {
//         setNickname(e.target.value);
//     }

//     return(
//         <div>
//             <div>
//                 <input value={name} onChange={onChangeName} />
//                 <input value={nickname} onChange={onChangeNickname} />
//             </div>
//             <div>
//                 <div>
//                     <b>이름:</b> {name}
//                 </div>
//                 <div>
//                     <b>닉네임:</b> {nickname}
//                 </div>
//             </div>
//         </div>
//     )
// }

/* 8.2 useEffect => 클래스형 컴포넌트의 componentDidMount + componentDidUpdate */
// const Info = () => {
//     const [name, setName] = useState('');
//     const [nickname, setNickname] = useState('');

//     useEffect(() => {
//         console.log('렌더링이 완료되었씁니다!');
//         console.log({ name, nickname });
//     })

//     const onChangeName = e => {
//         setName(e.target.value);
//     }

//     const onChangeNickname = e => {
//         setNickname(e.target.value);
//     }

//     return (
//         <div>
//             <div>
//                 <input value={name} onChange={onChangeName} />
//                 <input value={nickname} onChange={onChangeNickname} />
//             </div>
//             <div>
//                 <div>
//                     <b>이름:</b> {name}
//                 </div>
//                 <div>
//                     <b>닉네임:</b> {nickname}
//                 </div>
//             </div>
//         </div>
//     )
// }

/* 8.2.1 마운트될 때만 실행하고 싶을 때 */
// const Info = () => {
//     const [name, setName] = useState('');
//     const [nickname, setNickname] = useState('');

//     useEffect(() => {
//         console.log('마운트될 때만 실행됩니다.');
//     }, []) // [] 빈배열을 추가하면 마운트 될때만 실행

//     const onChangeName = e => {
//         setName(e.target.value);
//     }

//     const onChangeNickname = e => {
//         setNickname(e.target.value);
//     }

//     return (
//         <div>
//             <div>
//                 <input value={name} onChange={onChangeName} />
//                 <input value={nickname} onChange={onChangeNickname} />
//             </div>
//             <div>
//                 <div>
//                     <b>이름:</b> {name}
//                 </div>
//                 <div>
//                     <b>닉네임:</b> {nickname}
//                 </div>
//             </div>
//         </div>
//     )
// }


/* 8.2.2 특정 값이 업데이트될 때만 실행하고 싶을 때 */
// const Info = () => {
//     const [name, setName] = useState('');
//     const [nickname, setNickname] = useState('');

//     /* 클래스형 컴포넌트라면 */
//     // componentDidUpdate(prevProps, prevState){
//     //     if(prevProps.value !== this.props.value){
//     //         doSomething();
//     //     }
//     // }
//     useEffect(() => {
//         console.log(name);
//     }, [name]) // 배열안에 검사하고 싶은 값을 넣어줌

//     const onChangeName = e => {
//         setName(e.target.value);
//     }

//     const onChangeNickname = e => {
//         setNickname(e.target.value);
//     }

//     return (
//         <div>
//             <div>
//                 <input value={name} onChange={onChangeName} />
//                 <input value={nickname} onChange={onChangeNickname} />
//             </div>
//             <div>
//                 <div>
//                     <b>이름:</b> {name}
//                 </div>
//                 <div>
//                     <b>닉네임:</b> {nickname}
//                 </div>
//             </div>
//         </div>
//     )
// }

/* 8.2.3 뒷정리하기 */
// useEffect는 렌더링되고 난 직후마다 실행
// 두 번째 파라미터 배열에 무엇을 넣는지에 따라 실행조건이 달라짐
// 언마운트되기 전이나 업데이트되기 직전에 작업을 수행하기 위해서는 뒷정리 함수를 반환해주어야 함
// const Info = () => {
//     const [name, setName] = useState('');
//     const [nickname, setNickname] = useState('');

//     // useEffect(()=> {
//     //     console.log('effect');
//     //     console.log(name);
//     //     return () => {
//     //         console.log('cleanup');
//     //         console.log(name);
//     //     }
//     // })

//     /* 오직 언마운트 될때만 뒷정리 함수 호출 */
//     useEffect(()=> {
//         console.log('effect');
//         console.log(name);
//         return () => {
//             console.log('cleanup');
//             console.log(name);
//         }
//     },[name]) // 두번째 파라미터에 배열을 삽입

//     const onChangeName = e => {
//         setName(e.target.value);
//     }

//     const onChangeNickname = e => {
//         setNickname(e.target.value);
//     }

//     return (
//         <div>
//             <div>
//                 <input value={name} onChange={onChangeName} />
//                 <input value={nickname} onChange={onChangeNickname} />
//             </div>
//             <div>
//                 <div>
//                     <b>이름:</b> {name}
//                 </div>
//                 <div>
//                     <b>닉네임:</b> {nickname}
//                 </div>
//             </div>
//         </div>
//     )
// }

/* Counter.js */

/* 8.3.2 인풋 상태 관리하기 */
// useReducer를 사용하여 인풋 상태 관리
// 인풋이 여러개이면 useState를 여러번 사용하지만, 
// useReducer를 사용하면 input태그에 name을 할당하고 e.target.name을 참조하여 setState를 한것과 유사한 방식으로 작업을 처리
function reducer(state, action) {
    return {
        ...state,
        [action.name]: action.value
    }
}

const Info = () => {
    const [state, dispatch] = useReducer(reducer, {
        name: '',
        nickname: ''
    })

    const { name, nickname } = state;

    const onChange = e => {
        dispatch(e.target);
    }

    return (
        <div>
            <div>
                <input name="name" value={name} onChange={onChange} />
                <input name="nickname" value={nickname} onChange={onChange} />
            </div>
            <div>
                <div>
                    <b>이름: </b>{name}
                </div>
                <div>
                    <b>닉네임: </b>{nickname}
                </div>
            </div>
        </div>
    )
}

/* Average.js */


// export default Info;