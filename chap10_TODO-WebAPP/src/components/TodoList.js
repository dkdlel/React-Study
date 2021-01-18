import React from 'react'
import './TodoList.scss'
import TodoListItem from './TodoListItem'

// const TodoList = ({ todos }) => {
//     return (
//         <div className="TodoList">
//             <TodoListItem />
//             <TodoListItem />
//             <TodoListItem />
//         </div>
//     )
// }

/* 10.3.1 App에서 todos 상태 사용하기 */
// const TodoList = ({ todos }) => {
//     return (
//         <div className="TodoList">
//             {todos.map(todo => (
//                 <TodoListItem todo={todo} key={todo.id} />
//             ))}
//         </div>
//     )
// }

/* 10.3.3.3 TodoListItem에서 삭제 함수 호출하기 */
// const TodoList = ({ todos, onRemove }) => {
//     return (
//         <div className="TodoList">
//             {todos.map(todo => (
//                 <TodoListItem todo={todo} key={todo.id} onRemove={onRemove} />
//             ))}
//         </div>
//     )
// }

/* 10.3.4.2 TodoListItem에서 토글 함수 호출하기 */
const TodoList = ({ todos, onRemove, onToggle }) => {
    return (
        <div className="TodoList">
            {todos.map(todo => (
                <TodoListItem
                    todo={todo}
                    key={todo.id}
                    onRemove={onRemove}
                    onToggle={onToggle}
                />
            ))}
        </div>
    )
}


export default TodoList