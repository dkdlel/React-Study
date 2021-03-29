/* 20.3.1 서버 사이드 렌더링용 엔트리 만들기 */
import React from 'react';
import ReactDomServer from 'react-dom/server';

// 서버에서 리액트 컴포넌터를 렌더링 하는 함수
const html = ReactDomServer.renderToString(
    <div>Hello Server Side Rendering!</div>
);

console.log(html);