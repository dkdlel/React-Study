import React from 'react';

/* 17.2.2 할 일 목록 컴포넌트 만들기 */
// const TodoItem = ({ todo, onToggle, onRemove }) => {
//     return (
//         <div>
//             <input type="checkbox" />
//             <span>예제 테스트</span>
//             <button>삭제</button>
//         </div>
//     )
// }

// const Todos = ({
//     input, // 인풋에 입력되는 테스트
//     todos, // 할 일 목록이 들어 있는 객체
//     onChangeInput,
//     onInsert,
//     onToggle,
//     onRemove
// }) => {
//     const onSubmit = e => {
//         e.preventDefault();
//     }

//     return (
//         <div>
//             <form onSubmit={onSubmit}>
//                 <input />
//                 <button type="submit">등록</button>
//             </form>
//             <div>
//                 <TodoItem />
//                 <TodoItem />
//                 <TodoItem />
//                 <TodoItem />
//                 <TodoItem />
//             </div>
//         </div>
//     )
// }

/* 17.5.2 TodosContainer 만들기 */
const TodoItem = ({ todo, onToggle, onRemove }) => {
    return (
        <div>
            <input
                type="checkbox"
                onClick={() => onToggle(todo.id)}
                checked={todo.done}
                readOnly={true}
            />
            <span style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>{todo.text}</span>
            <button onClick={() => onRemove(todo.id)}>삭제</button>
        </div>
    )
}

const Todos = ({ input, todos, onChangeInput, onInsert, onToggle, onRemove }) => {
    const onSubmit = e => {
        e.preventDefault();
        onInsert(input);
        onChangeInput(''); // 초기화
    }

    const onChange = e => onChangeInput(e.target.value);

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input value={input} onChange={onChange} />
                <button type="submit">등록</button>
            </form>
            <div>
                {todos.map(todo =>
                    <TodoItem todo={todo} key={todo.id} onToggle={onToggle} onRemove={onRemove} />
                )}
            </div>
        </div>
    )
}
export default Todos;