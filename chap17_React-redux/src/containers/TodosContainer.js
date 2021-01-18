/* 17.5.2 TodosContainer 만들기 */
import React, { useCallback } from 'react';
import Todos from '../components/Todos';
import { connect, useSelector, useDispatch } from 'react-redux';
import { changeInput, insert, toggle, remove } from '../modules/todos';
import useActions from './lib/useAction';

// const TodosContainer = ({ input, todos, changeInput, insert, toggle, remove }) => {
//     return (
//         <Todos
//             input={input}
//             todos={todos}
//             onChangeInput={changeInput}
//             onInsert={insert}
//             onToggle={toggle}
//             onRemove={remove}
//         />
//     )
// }

// export default connect(
//     // 비구조화 할당을 통해 todos를 분리하여 state.todos.input 대신 todos.input을 사용
//     ({ todos }) => ({
//         input: todos.input,
//         todos: todos.todos
//     }),
//     {
//         changeInput,
//         insert,
//         toggle,
//         remove
//     }
// )(TodosContainer);

/* 17.7.4 TodosContainer를 Hooks로 전환하기 */
// const TodosContainer = () => {
//     const { input, todos } = useSelector(({ todos }) => ({
//         input: todos.input,
//         todos: todos.todos
//     }))
//     const dispatch = useDispatch();
//     const onChangeInput = useCallback(input => dispatch(changeInput(input)), [dispatch]);
//     const onInsert = useCallback(text => dispatch(insert(text)), [dispatch]);
//     const onToggle = useCallback(id => dispatch(toggle(id)), [dispatch]);
//     const onRemove = useCallback(id => dispatch(remove(id)), [dispatch]);

//     return (
//         <Todos
//             input={input}
//             todos={todos}
//             onChangeInput={onChangeInput}
//             onInsert={onInsert}
//             onToggle={onToggle}
//             onRemove={onRemove}
//         />
//     )
// }

/* 17.7.5 useActions 유틸 Hook을 만들어서 사용하기 */
const TodosContainer = () => {
    const { input, todos } = useSelector(({ todos }) => ({
        input: todos.input,
        todos: todos.todos
    }))
    const [onChangeInput, onInsert, onToggle, onRemove] = useActions(
        [changeInput, insert, toggle, remove]
        , []);
    return (
        <Todos
            input={input}
            todos={todos}
            onChangeInput={onChangeInput}
            onInsert={onInsert}
            onToggle={onToggle}
            onRemove={onRemove}
        />
    )
}

// export default TodosContainer;

/* 17.7.6 connect 함수와의 주요 차이점 */
// connect 함수를 사용하여 컨테이너 컴포넌트를 만들었을 경우
// 부모 컴포넌트가 리렌더링될 때 해당 컨테이너 컴포넌트의 props가 바뀌지 않았다면 리렌더링이 자동으로 방지되어 성능이 최적화
// useSeletor를 사용하여 리덕스 상태를 조회했을 경우
// 최적화 작업이 자동으로 이루어지지 않으므로, React.memo를 사용해야함

export default React.memo(TodosContainer); // App 컴포넌트가 리렌더링 되는 일이 없으므로 불필요한 성능 최적화

/* 17.8 정리 */
// 리덕스를 적용하여 사용하는 방법을 배움
// 업데이트에 관련된 로직을 리액트 컴포넌트에서 완벽하게 분리시킬 수 있으므로 유지 보수성이 높은 코드를 작성할 수 있음