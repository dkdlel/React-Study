import React, { useRef, useCallback, useState } from 'react';
// produce(수정하고 싶은 상태, 어떻게 업데이트 할지 정의하는 함수)
import produce from 'immer';

/* 
객체의 구조가 복잡한 경우 여러번의 전개연산자를 사용하여 값을 수정 해야함
전개연산자를 여러번 사용하는 것은 꽤 번거롭고 가독성 또한 좋지 않음
immer 라이브러리를 사용하면 구조가 복잡한 객체도 쉽고 짧은 코드로 불변성을 유지하며 업데이트 가능
*/

/* 12.1.1 프로젝트 준비 */
// yarn add immer

/* 12.1.2 immer를 사용하지 않고 불변성 유지 */
// const App = () => {
//   const nextId = useRef(1);
//   const [form, setForm] = useState({ name: '', username: '' });
//   const [data, setData] = useState({
//     array: [],
//     uselessValue: null
//   })

//   // input 수정을 위한 함수
//   const onChange = useCallback(e => {
//     const { name, value } = e.target;
//     setForm({
//       ...form,
//       [name]: [value]
//     })
//   }, [form]
//   )

//   // form 등록을 위한 함수
//   const onSubmit = useCallback(e => {
//     e.preventDefault();
//     const info = {
//       id: nextId.current,
//       name: form.name,
//       username: form.username
//     }

//     // array에 새 항목 등록
//     setData({
//       ...data,
//       array: data.array.concat(info)
//     })

//     // form 초기화
//     setForm({
//       name: '',
//       username: ''
//     })
//     nextId.current += 1;
//   }, [data, form.name, form.username])

//   // 항목을 삭제하는 함수
//   const onRemove = useCallback(id => {
//     setData({
//       ...data,
//       array: data.array.filter(info => info.id !== id)
//     })
//   }, [data]
//   )

//   return (
//     <div>
//       <form onSubmit={onSubmit}>
//         <input
//           name="username"
//           placeholder="아이디"
//           value={form.username}
//           onChange={onChange}
//         />
//         <input
//           name="name"
//           placeholder="이름"
//           value={form.name}
//           onChange={onChange}
//         />
//         <button type="submit">등록</button>
//       </form>
//       <div>
//         <ul>
//           {data.array.map(info => (
//             <li key={info.id} onClick={() => onRemove(info.id)}>
//               {info.username}({info.name})
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   )
//}

/* 12.1.4 App 컴포넌트에 immer 적용하기 */
// const App = () => {

//   const nextId = useRef(1);
//   const [form, setForm] = useState({ name: '', username: '' });
//   const [data, setData] = useState({
//     array: [],
//     uselessValue: null
//   })

//   // input 수정을 위한 함수
//   const onChange = useCallback(e => {
//     const { name, value } = e.target;
//     setForm(
//       produce(form, draft => {
//         draft[name] = value;
//       })
//     )
//   }, [form])

//   // form 등록을 위한 함수
//   const onSubmit = useCallback(e => {
//     e.preventDefault();
//     const info = {
//       id: nextId.current,
//       name: form.name,
//       username: form.username
//     };

//     // array에 새 항목 등록
//     setData(
//       produce(data, draft => {
//         draft.array.push(info);
//       })
//     )

//     // form 초기화
//     setForm({
//       name: '',
//       username: ''
//     })
//     nextId.current += 1;
//   }, [data, form.name, form.username])


//   // 항목을 삭제하는 함수
//   const onRemove = useCallback(id => {
//     setData(
//       produce(data, draft => {
//         draft.array.splice(draft.array.findIndex(info => info.id === id), 1);
//       })
//     )
//   }, [data])

//   return (
//     <div>
//       <form onSubmit={onSubmit}>
//         <input
//           name="username"
//           placeholder="아이디"
//           value={form.username}
//           onChange={onChange}
//         />
//         <input
//           name="name"
//           placeholder="이름"
//           value={form.name}
//           onChange={onChange}
//         />
//         <button type="submit">등록</button>
//       </form>
//       <div>
//         <ul>
//           {data.array.map(info => (
//             <li key={info.id} onClick={() => onRemove(info.id)}>
//               {info.username}({info.name})
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   )
// }

/* 12.1.5 useState의 함수형 업데이트와 immer 함께 쓰기 */
const App = () => {

  const nextId = useRef(1);
  const [form, setForm] = useState({ name: '', username: '' });
  const [data, setData] = useState({
    array: [],
    uselessValue: null
  })

  // input 수정을 위한 함수
  const onChange = useCallback(e => {
    const { name, value } = e.target;
    setForm(
      produce(draft => {
        draft[name] = value;
      })
    )
  }, [])

  // form 등록을 위한 함수
  const onSubmit = useCallback(e => {
    e.preventDefault();
    const info = {
      id: nextId.current,
      name: form.name,
      username: form.username
    };

    // array에 새 항목 등록
    setData(
      produce(draft => {
        draft.array.push(info);
      })
    )

    // form 초기화
    setForm({
      name: '',
      username: ''
    })
    nextId.current += 1;
  }, [form.name, form.username])


  // 항목을 삭제하는 함수
  const onRemove = useCallback(id => {
    setData(
      produce(draft => {
        draft.array.splice(draft.array.findIndex(info => info.id === id), 1);
      })
    )
  }, [])

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name="username"
          placeholder="아이디"
          value={form.username}
          onChange={onChange}
        />
        <input
          name="name"
          placeholder="이름"
          value={form.name}
          onChange={onChange}
        />
        <button type="submit">등록</button>
      </form>
      <div>
        <ul>
          {data.array.map(info => (
            <li key={info.id} onClick={() => onRemove(info.id)}>
              {info.username}({info.name})
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}


export default App;
