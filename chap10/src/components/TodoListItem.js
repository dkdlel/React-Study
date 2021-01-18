import React from 'react';
import styles from './TodoListItem.module.scss';
import {
    MdCheckBox,
    MdRemoveCircleOutline,
    MdCheckBoxOutlineBlank,
} from 'react-icons/md'
import cn from 'classnames';



// const TodoListItem = () => {
//     return (
//         <div className="TodoListItem">
//             <div className="checkbox">
//                 <MdCheckBoxOutlineBlank />
//                 <div className="text">할 일</div>
//             </div>
//             <div className="remove">
//                 <MdRemoveCircleOutline />
//             </div>
//         </div>
//     )
// }

/* 10.3.1 App에서 todos 상태 사용하기 */
// const TodoListItem = ({ todo }) => {
//     const { text, checked } = todo;
//     return (
//         <div className="TodoListItem">
//             <div className={cn('checkbox', { checked })}>
//                 {checked ? <MdCheckBox /> : < MdCheckBoxOutlineBlank />}
//                 <div className="text">{text}</div>
//             </div>
//             <div className="remove">
//                 <MdRemoveCircleOutline />
//             </div>
//         </div>
//     )
// }

/* 10.3.3.3 TodoListItem에서 삭제 함수 호출하기 */
// const TodoListItem = ({ todo, onRemove }) => {
//     const { id, text, checked } = todo;
//     return (
//         <div className="TodoListItem">
//             <div className={cn('checkbox', { checked })}>
//                 {checked ? <MdCheckBox /> : < MdCheckBoxOutlineBlank />}
//                 <div className="text">{text}</div>
//             </div>
//             <div className="remove" onClick={() => onRemove(id)}>
//                 <MdRemoveCircleOutline />
//             </div>
//         </div>
//     )
// }

/* 10.3.4.2 TodoListItem에서 토글 함수 호출하기 */
const TodoListItem = ({ todo, onRemove, onToggle }) => {
    const { id, text, checked } = todo;
    return (
        <div className={styles.TodoListItem}>
            <div className={cn('checkbox', { checked })} onClick={() => onToggle(id)}>
                {checked ? <MdCheckBox /> : < MdCheckBoxOutlineBlank />}
                <div className="text">{text}</div>
            </div>
            <div className="remove" onClick={() => onRemove(id)}>
                <MdRemoveCircleOutline />
            </div>
        </div>
    )
}

export default TodoListItem