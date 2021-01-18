import React, { useCallback } from 'react'
import './TodoList.scss'
import TodoListItem from './TodoListItem'
import { List } from 'react-virtualized';

// const TodoList = ({ todos, onRemove, onToggle }) => {
//     return (
//         <div className="TodoList">
//             {todos.map(todo => (
//                 <TodoListItem
//                     todo={todo}
//                     key={todo.id}
//                     onRemove={onRemove}
//                     onToggle={onToggle}
//                 />
//             ))}
//         </div>
//     )
// }

/* 11.8 react-virtualized를 사용한 렌더링 최적화 */
// 필요하지 않는 자원들을 미리 렌더링 하지 않고 필요한 순간에 렌더링
// ex) 현재 2500개중 9개만 첫 화면에 보이는데 2491개를 렌더링 할 필요 없음.
// yarn add react-virtualized

const TodoList = ({ todos, onRemove, onToggle }) => {

    // List 컴포넌트를 사용하기 위해 rowRenderer 함수 작성
    // TodoItem을 렌더링할 때 사용, List 컴포넌트의 props로 설정
    const rowRenderer = useCallback(({ index, key, style }) => {
        const todo = todos[index];
        return (
            <TodoListItem
                todo={todo}
                key={key}
                onRemove={onRemove}
                onToggle={onToggle}
                style={style}
            />
        )
    }, [onRemove, onToggle, todos]
    )

    return (
        <List
            className="TodoList"
            width={512} // 전체 크기
            height={513} // 전체 높이
            rowCount={todos.length} // 항목 개수
            rowHeight={57} // 항목 높이
            rowRenderer={rowRenderer} // 항목을 렌더링할 때 쓰는 함수
            list={todos} // 배열
            style={{ outline: 'none' }} // List에 기본 적용되는 outline 스타일 제거
        />
    )
}



// export default TodoList
/* 11.7 TodoList 컴포넌트 최적화하기 */
export default React.memo(TodoList)
// => 현재 프로젝트 성능에 전혀 영향을 주지 않음
// cuz, 부모 컴포넌트인 App 컴포넌트가 리렌더링되는 유일한 이유가 todos 배열이 업데이트 될때이기 때문.
// App 컴포넌트에 다른 state가 추가되어 해당값이 업데이트 되면 TodoList 컴포넌트가 불필요한 리렌더링 할수있음.