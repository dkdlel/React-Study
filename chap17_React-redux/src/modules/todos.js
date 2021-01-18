// /* 17.3.2.1 액션 타입 정하기 */
// const CHANGE_INPUT = 'todos/CHANGE_INPUT'; // 인풋 값을 변경함
// const INSERT = 'todos/INSERT'; // 새로운 todo를 등록함
// const TOGGLE = 'todos/TOGGLE'; // todo를 체크/체크해제
// const REMOVE = 'todos/REMOVE'; // todo를 제거함

// /* 17.3.2.2 액션 생성 함수 만들기 */
// export const changeInput = input => ({
//     type: CHANGE_INPUT,
//     input
// });

// let id = 3; // insert가 호출될 때마다 1씩 더해짐
// export const insert = text => ({
//     type: INSERT,
//     todo: {
//         id: id++,
//         text,
//         done: false
//     }
// });

// export const toggle = id => ({
//     type: TOGGLE,
//     id
// });

// export const remove = id => ({
//     type: REMOVE,
//     id
// });

// /* 17.3.2.3 초기 상태 및 리듀서 함수 만들기 */
// const initialState = {
//     input: '',
//     todos: [
//         {
//             id: 1,
//             text: '리덕스 기초 배우기',
//             done: true
//         },
//         {
//             id: 2,
//             text: '리액트와 리덕스 사용하기',
//             done: false
//         }
//     ]
// };

// export default function todos(state = initialState, action) {
//     switch (action.type) {
//         case CHANGE_INPUT:
//             return {
//                 ...state,
//                 input: action.input
//             };
//         case INSERT:
//             return {
//                 ...state,
//                 todos: state.todos.concat(action.todo)
//             };
//         case TOGGLE:
//             return {
//                 ...state,
//                 todos: state.todos.map(todo =>
//                     todo.id === action.id ? { ...todo, done: !todo.done } : todo
//                 )
//             };
//         case REMOVE:
//             return {
//                 ...state,
//                 todos: state.todos.filter(todo => todo.id !== action.id)
//             };
//         default:
//             return state;
//     }
// }

/* 17.6.1.2 todos 모듈에 적용하기 */
// import { createAction, handleActions } from 'redux-actions';

// const CHANGE_INPUT = 'todos/CHANGE_INPUT'; // 인풋 값을 변경함
// const INSERT = 'todos/INSERT'; // 새로운 todo를 등록함
// const TOGGLE = 'todos/TOGGLE'; // todo를 체크/체크해제
// const REMOVE = 'todos/REMOVE'; // todo를 제거함

// export const changeInput = createAction(CHANGE_INPUT, input => input);

// let id = 3; // insert가 호출될 때마다 1씩 더해집니다.
// export const insert = createAction(INSERT, text => ({
//     id: id++,
//     text,
//     done: false
// }))

// export const toggle = createAction(TOGGLE, id => id);
// export const remove = createAction(REMOVE, id => id);

// const initialState = {
//     input: '',
//     todos: [
//         {
//             id: 1,
//             text: '리덕스 기초 배우기',
//             done: true
//         },
//         {
//             id: 2,
//             text: '리액트와 리덕스 사용하기',
//             done: false
//         }
//     ]
// };

// const todos = handleActions(
//     {
//         [CHANGE_INPUT]: (state, { payload: input }) => ({ ...state, input: input }),
//         [INSERT]: (state, { payload: todo }) => ({
//             ...state,
//             todos: state.todos.concat(todo)
//         }),
//         [TOGGLE]: (state, { payload: id }) => ({
//             ...state,
//             todos: state.todos.map(todo =>
//                 todo.id === id ? { ...todo, done: !todo.done } : todo
//             )
//         }),
//         [REMOVE]: (state, { payload: id }) => ({
//             ...state,
//             todos: state.todos.filter(todo => todo.id !== id)
//         })
//     },
//     initialState
// )

// export default todos;

/* 17.6.2 immer */
// 객체의 구조가 복잡해지거나 객체로 이루어진 배열을 다룰 경우, immer를 사용하여 편리하게 상태 관리
import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

const CHANGE_INPUT = 'todos/CHANGE_INPUT'; // 인풋 값을 변경함
const INSERT = 'todos/INSERT'; // 새로운 todo를 등록함
const TOGGLE = 'todos/TOGGLE'; // todo를 체크/체크해제
const REMOVE = 'todos/REMOVE'; // todo를 제거함

export const changeInput = createAction(CHANGE_INPUT, input => input);

let id = 3; // insert가 호출될 때마다 1씩 더해집니다.
export const insert = createAction(INSERT, text => ({
    id: id++,
    text,
    done: false
}))

export const toggle = createAction(TOGGLE, id => id);
export const remove = createAction(REMOVE, id => id);

const initialState = {
    input: '',
    todos: [
        {
            id: 1,
            text: '리덕스 기초 배우기',
            done: true
        },
        {
            id: 2,
            text: '리액트와 리덕스 사용하기',
            done: false
        }
    ]
};

const todos = handleActions(
    {
        [CHANGE_INPUT]: (state, { payload: input }) =>
            produce(state, draft => {
                draft.input = input;
            }),
        [INSERT]: (state, { payload: todo }) =>
            produce(state, draft => {
                draft.todos.push(todo);
            }),
        [TOGGLE]: (state, { payload: id }) =>
            produce(state, draft => {
                const todo = draft.todos.find(todo => todo.id === id);
                todo.done = !todo.done;
            }),
        [REMOVE]: (state, { payload: id }) =>
            produce(state, draft => {
                const index = draft.todos.findIndex(todo => todo.id === id);
                draft.todos.splice(index, 1);
            }),
    },
    initialState
)

export default todos;