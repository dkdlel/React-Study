import React, { useState } from 'react';

const EventTest = () => {

    const [id, setId] = useState("");
    
    const onChange = (e) => {
        // 이벤트가 발생했다!
        // 최초 값은 ""임!
        setId(e.target.value); // e.target.value로 바꾼다!
        console.log(id); // useState로 받아온 id를 찍음
        // 정현: 이 이벤트가 가리키는 태그에 value를 넘겨준다. X
        // 지원: 
        // 재진: 아이디는 밑에서 가지고 옴, setId는 값을 저장하는거. O
    }

    return (
        <>
            <input 
                onChange={onChange} 
                type="text"
                placeholder="아이디"
                value={id}
            />
            <button
                onClick={(e) => {
                    console.log(e)
                    console.log("id는 ", id)
                }}
            >로그인</button>
        </>
    );
};

export default EventTest