import React from 'react';
import qs from 'qs';

// export default ({ }) => {
//     return (
//         <div>
//             <h1>소개</h1>
//             <p>이 프로젝트는 리액트 라우터 기초를 실습해 보는 예제 프로젝트입니다.</p>
//         </div>
//     )
// }

/* 13.4.2 URL 쿼리 */
// 쿼리는 location 객체에 들어 있는 search값에서 조회 가능
// 쿼리 문자열을 객체로 변환할 때는 qs라는 라이브러리 사용
// yarn add qs

export default ({ location }) => {
    const query = qs.parse(location.search, {
        ignoreQueryPrefix: true // 이 설정을 통해 문자열 맨 앞의 ?를 생략
    });
    const showDetail = query.detail === 'true'; // 쿼리의 파싱 결과 값은 문자열임
    return (
        <div>
            <h1>소개</h1>
            <p>이 프로젝트는 리액트 라우터 기초를 실습해 보는 예제 프로젝트입니다.</p>
            {showDetail && <p>detail 값을 true로 설정하셨군요!</p>}
        </div>
    )
}