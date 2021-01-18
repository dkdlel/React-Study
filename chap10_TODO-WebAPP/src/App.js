import React, { useState, useRef, useCallback } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

/* 10.1.1 sass를 위한 node-sass 설치 */
// yarn add node-sass classnames react-icons
//react-icons : 아이콘 사용 라이브러리(https://react-icons.netlify.com/ 에서 확인), transform to props or CSS style with SVG

/* 10.1.2 .prettierrc 생성, 설정 변경 */

/* 10.1.3 index.css 수정 */

/* 10.1.4 App 컴포넌트 초기화 */

// const App = () => {
//   return <div>Todo App을 만들자!</div>
// }

/* 10.2.1 TodoTemplate 만들기 */
// const App = () => {
//   return <TodoTemplate>Todo App을 만들자!</TodoTemplate>
// }

/* 10.2.2 TodoInsert 만들기 */
// const App = () => {
//   return (
//     <TodoTemplate>
//       <TodoInsert />
//       <TodoList />
//     </TodoTemplate>
//   )
// }

/* 10.3 기능 구현하기 */
/* 10.3.1 App에서 todos 상태 사용하기 */
// useState를 사용하여 todos라는 상태를 정의
// todos를 TodoList의 props로 전달
// const App = () => {
//   const [todos, setTodos] = useState([
//     {
//       id: 1,
//       text: '리액트의 기초 알아보기',
//       checked: true
//     },
//     {
//       id: 2,
//       text: '컴포넌트 스타일링 해 보기',
//       checked: true
//     },
//     {
//       id: 3,
//       text: '일정 관리 앱 만들어 보기',
//       checked: false,
//     },
//   ]);
//   return (
//     <TodoTemplate>
//       <TodoInsert />
//       <TodoList todos={todos} />
//     </TodoTemplate>
//   )
// }

/* 10.3.2.3 todos 배열에 새 객체 추가하기 */
// const App = () => {
//   const [todos, setTodos] = useState([
//     {
//       id: 1,
//       text: '리액트의 기초 알아보기',
//       checked: true
//     },
//     {
//       id: 2,
//       text: '컴포넌트 스타일링 해 보기',
//       checked: true
//     },
//     {
//       id: 3,
//       text: '일정 관리 앱 만들어 보기',
//       checked: false,
//     },
//   ]);

//   // 고윳값으로 사용될 id
//   // ref를 사용하여 변수 담기
//   const nextId = useRef(4);

//   const onInsert = useCallback(
//     text => {
//       const todo = {
//         id: nextId.current,
//         text,
//         checked: false
//       }
//       setTodos(todos.concat(todo));
//       nextId.current += 1;
//     },
//     [todos]
//   )
//   return (
//     <TodoTemplate>
//       <TodoInsert onInsert={onInsert} />
//       <TodoList todos={todos} />
//     </TodoTemplate>
//   )
// }

/* 10.3.3.2 todos 배열에서 id로 항목 지우기 */
// const App = () => {
//   const [todos, setTodos] = useState([
//     {
//       id: 1,
//       text: '리액트의 기초 알아보기',
//       checked: true
//     },
//     {
//       id: 2,
//       text: '컴포넌트 스타일링 해 보기',
//       checked: true
//     },
//     {
//       id: 3,
//       text: '일정 관리 앱 만들어 보기',
//       checked: false,
//     },
//   ]);

//   const nextId = useRef(4);

//   const onInsert = useCallback(
//     text => {
//       const todo = {
//         id: nextId.current,
//         text,
//         checked: false
//       }
//       setTodos(todos.concat(todo));
//       nextId.current += 1;
//     },
//     [todos]
//   )

//   const onRemove = useCallback(
//     id => {
//       setTodos(todos.filter(todo => todo.id !== id));
//     },
//     [todos]
//   )

//   return (
//     <TodoTemplate>
//       <TodoInsert onInsert={onInsert} />
//       <TodoList todos={todos} onRemove={onRemove} />
//     </TodoTemplate>
//   )
// }

/* 10.3.4.1 onToggle 구현하기 */
const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '리액트의 기초 알아보기',
      checked: true
    },
    {
      id: 2,
      text: '컴포넌트 스타일링 해 보기',
      checked: true
    },
    {
      id: 3,
      text: '일정 관리 앱 만들어 보기',
      checked: false,
    },
  ]);

  const nextId = useRef(4);

  const onInsert = useCallback((text) => {
    const todo = {
      id: nextId.current,
      text,
      checked: false
    }
    setTodos(todos.concat(todo));
    nextId.current += 1;
  },
    [todos]
  )

  const onRemove = useCallback((id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  },
    [todos]
  )

  const onToggle = useCallback((id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo,
      )
    )
  },
    [todos]
  )

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  )
}

export default App;
