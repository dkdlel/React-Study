import React from 'react';
import './TodoListItem.scss';
import {
    MdCheckBox,
    MdRemoveCircleOutline,
    MdCheckBoxOutlineBlank,
} from 'react-icons/md'
import cn from 'classnames';

/* 11.4 React.memo를 사용하여 컴포넌트 성능 최적화 */
// shouldComponentUpdate 라이프 사이클을 사용하여 컴포넌트의 리렌더링을 방지할수 있음
// 함수형 컴포넌트는 라이프사이클 메서드를 사용할 수 없음
// 대신하여 React.memo 함수 사용
// React.memo : 컴포넌트의 props가 바뀌지 않았다면 리렌더링 하지 않도록 설정
// 사용방법 : 컴포넌트를 감싸기만 하면 됨

// const TodoListItem = ({ todo, onRemove, onToggle }) => {
//     const { id, text, checked } = todo;
//     return (
//         <div className="TodoListItem">
//             <div className={cn('checkbox', { checked })} onClick={() => onToggle(id)}>
//                 {checked ? <MdCheckBox /> : < MdCheckBoxOutlineBlank />}
//                 <div className="text">{text}</div>
//             </div>
//             <div className="remove" onClick={() => onRemove(id)}>
//                 <MdRemoveCircleOutline />
//             </div>
//         </div>
//     )
// }

/* 11.8.3 TodoListItem 수정 */
// TodoList의 style을 적용
const TodoListItem = ({ todo, onRemove, onToggle, style }) => {
    const { id, text, checked } = todo;
    return (
        <div className="TodoListItem-virtualized" style={style}> {/* className 설정 이유 : scss를 적용시키기 위해 */}
            <div className="TodoListItem">
                <div className={cn('checkbox', { checked })} onClick={() => onToggle(id)}>
                    {checked ? <MdCheckBox /> : < MdCheckBoxOutlineBlank />}
                    <div className="text">{text}</div>
                </div>
                <div className="remove" onClick={() => onRemove(id)}>
                    <MdRemoveCircleOutline />
                </div>
            </div>
        </div>
    )
}

export default React.memo(TodoListItem);