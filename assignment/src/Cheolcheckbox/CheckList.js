import React from 'react';
import './CheckList.scss';
import CheckItem from './CheckItem';

export default ({ opens, allChecked, onAllToggle, onItemToggle }) => (
    <div className="checkBoxListArea"> {/* 체크리스트 영역 */}
        <div className="allCheckArea"> {/* 전체 선택*/}
            <div className="allCheckName">전체선택</div>
            <CheckItem
                checked={allChecked}
                onToggle={onAllToggle}
            />
        </div>
        <div className="checkBoxItem"> {/* 체크박스 선택*/}
            {opens.map(
                open => <CheckItem
                    key={open.id}
                    checked={open.checked}
                    onToggle={() => onItemToggle(open.id)}
                />
            )}
        </div>
    </div>
)