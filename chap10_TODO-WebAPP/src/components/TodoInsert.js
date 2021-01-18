import React, { useState, useCallback } from 'react'
import './TodoInsert.scss'
import { MdAdd, MdRemoveCircleOutline } from 'react-icons/md'

// const TodoInsert = () => {
//     return (
//         <form className="TodoInsert">
//             <input placeholder="할 일을 입력하세요" />
//             <button type="submit">
//                 <MdAdd />
//             </button>
//         </form>
//     )
// }

/* 10.3.2.1 TodoInsert value 상태 관리하기 */
// const TodoInsert = () => {

//     const [value, setValue] = useState('');

//     // 컴포넌트가 리렌더링될 때마다 함수를 새로 만드는것이 아닌,
//     // 함수를 재사용하기 위해 useCallback 사용
//     const onChange = useCallback(e => {
//         setValue(e.target.value);
//     }, [])

//     return (
//         <form className="TodoInsert">
//             <input
//                 placeholder="할 일을 입력하세요"
//                 value={value}
//                 onChange={onChange}
//             />
//             <button type="submit">
//                 <MdAdd />
//             </button>
//         </form>
//     )
// }

/* 10.3.2.4 TodoInsert에서 onSubmit 이벤트 설정하기 */
const TodoInsert = ({ onInsert }) => {

    const [value, setValue] = useState('');

    const onChange = useCallback(e => {
        setValue(e.target.value);
    }, [])

    const onSubmit = useCallback(e => {
        onInsert(value);
        setValue(''); // value값 초기화

        // submit 이벤트는 브라우저에서 새로고침을 발생
        // 이를 방지하기 위해 preventDefault()함수 호출
        e.preventDefault();
    },
        [onInsert, value]
    )

    /* button onClick으로도 해결 가능 */
    // const onClick = useCallback(() => {
    //     onInsert(value);
    //     setValue('');
    // },
    //     [onInsert, value]
    // )
    //< button onClick = { onClick } >

    return (
        <form className="TodoInsert" onSubmit={onSubmit}>
            <input
                placeholder="할 일을 입력하세요"
                value={value}
                onChange={onChange}
            />
            <button type="submit">
                <MdAdd />
            </button>
        </form>
    )
}

export default TodoInsert