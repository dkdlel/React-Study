import React, { useState, useRef, useCallback, useReducer } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

/* 11.1 많은 데이터 렌더링 하기 */
// function createBulkTodos() {
//   const array = [];
//   for (let i = 1; i <= 2500; i++) {
//     array.push({
//       id: i,
//       text: `할 일 ${i}`,
//       checked: false
//     })
//   }
//   return array;
// }
// const App = () => {
//   // 파라미터 값에 createBulkTodos()로 실행하면 리렌더링 될 떄마다 함수가 호출 되지만,
//   // createBulkTodos처럼 파라미터를 함수 형태로 넣어 주면 컴포넌트가 처음 렌더링 될 때만 함수가 실행
//   const [todos, setTodos] = useState(createBulkTodos);

//   const nextId = useRef(2501);

//   const onInsert = useCallback((text) => {
//     const todo = {
//       id: nextId.current,
//       text,
//       checked: false
//     }
//     setTodos(todos.concat(todo));
//     nextId.current += 1;
//   },
//     [todos]
//   )

//   const onRemove = useCallback((id) => {
//     setTodos(todos.filter(todo => todo.id !== id));
//   },
//     [todos]
//   )

//   const onToggle = useCallback((id) => {
//     setTodos(
//       todos.map(todo =>
//         todo.id === id ? { ...todo, checked: !todo.checked } : todo,
//       )
//     )
//   },
//     [todos]
//   )

//   return (
//     <TodoTemplate>
//       <TodoInsert onInsert={onInsert} />
//       <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
//     </TodoTemplate>
//   )
// }


/* 11.3 느려지는 원인 분석
위와 같이 실행하면 checkbox하나를 클릭하면 실행되기 까지 오랜 시간이 걸림
리렌더링이 발생하는 기준
1. 자신이 전달받은 props가 변경될 때
2. 자신의 state가 바뀔 때
3. 부모 컴포넌트가 리렌더링될 때
4. forceUpdate 함수가 실행될 때
=> checkbox를 클릭하면 App 컴포넌트의 state가 변경되면서 App 컴포넌트가 리렌더링
   따라서 부모 컴포넌트가 리렌더링 되었으므로 TodoList 컴포넌트가 리렌더링 되고, 그 안의 무수한 컴포넌트들이 리렌더링 됨.
*/

/* 11.5 onToggle, onRemove 함수가 바뀌지 않게 하기 */
// todos 배열이 업데이트 되면 onRemove와 onToggle 함수도 새롭게 바뀌긱 때문에 TodoListItem을 React.memo로 감싸도 컴포넌트 최적화가 되지 않음.
// onRemove와 onToggle 함수는 배열 상태를 업데이트 하는 과정에서 최신 상태의 todos를 참조하기 때문에 todos 배열이 바뀔때 마다 함수가 새로 생성
// 방지하는 방법
// 1. useState의 함수형 업데이트 기능을 사용
// 2. useReducer를 사용

/* 11.5.1 useState의 함수형 업데이트 */
// 기존 : 새로운 상태를 파라미터로 넣어 주었음
// 함수형 업데이트 : 상태 업데이트를 어떻게 할지 정의해 주는 업데이트 함수를 넣는 것
/* 예시 ---------------------------------------------------------------
const [number, setNumber] = useState(0);
// prevNumbers는 현재 number 값을 가리킴
const onIncrease = useCallback(() => 
  setNumber(prevNumber => prevNumber + 1),
[])

const onIncrease = useCallback(() => 
  setNumber(number + 1),
[number])
*/
// function createBulkTodos() {
//   const array = [];
//   for (let i = 1; i <= 2500; i++) {
//     array.push({
//       id: i,
//       text: `할 일 ${i}`,
//       checked: false
//     })
//   }
//   return array;
// }
// const App = () => {
//   const [todos, setTodos] = useState(createBulkTodos);

//   const nextId = useRef(4);

//   const onInsert = useCallback((text) => {
//     const todo = {
//       id: nextId.current,
//       text,
//       checked: false
//     }
//     setTodos(todos => todos.concat(todo));
//     nextId.current += 1;
//   },
//     [todos]
//   )

//   const onRemove = useCallback((id) => {
//     setTodos(todos => todos.filter(todo => todo.id !== id));
//   },
//     [todos]
//   )

//   const onToggle = useCallback((id) => {
//     setTodos(todos =>
//       todos.map(todo =>
//         todo.id === id ? { ...todo, checked: !todo.checked } : todo,
//       )
//     )
//   },
//     [todos]
//   )

//   return (
//     <TodoTemplate>
//       <TodoInsert onInsert={onInsert} />
//       <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
//     </TodoTemplate>
//   )
// }

/* 11.5.2 useReducer 사용하기 */
function createBulkTodos() {
  const array = [];
  for (let i = 1; i <= 2500; i++) {
    array.push({
      id: i,
      text: `할 일 ${i}`,
      checked: false
    })
  }
  return array;
}

function todoReducer(todos, action) {
  switch (action.type) {
    case 'INSERT': // 새로 추가
      // { type: 'INSERT', todo: {id: 1, text: 'todo', checked: false }}
      return todos.concat(action.todo);
    case 'REMOVE': // 제거
      // { type: 'REMOVE', id: 1 }
      return todos.filter(todo => todo.id !== action.id);
    case 'TOGGLE': // 토글
      // { type: 'TOGGLE', id: 1}
      return todos.map(todo =>
        todo.id === action.id ? { ...todo, checked: !todo.checked } : todo
      );
    default:
      return todos;
  }
}

const App = () => {
  // useReducer(reducer함수, 초기값, 처음렌더링 될때만 실행될 내용)
  const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos);

  const nextId = useRef(2501);

  const onInsert = useCallback(text => {
    const todo = {
      id: nextId.current,
      text,
      checked: false
    }
    dispatch({ type: 'INSERT', todo });
    nextId.current += 1;
  }, [])

  const onRemove = useCallback(id => {
    dispatch({ type: 'REMOVE', id });
  }, [])

  const onToggle = useCallback(id => {
    dispatch({ type: 'TOGGLE', id });
  }, [])
  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  )
}

export default App;
