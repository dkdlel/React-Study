/* 20.4.3 PreloadContext 만들기 */
// 서버 사이드 렌더링을 할 때는 uesEffect나 componentDidMount에서 설정한 작업이 호출되지 않음
// 렌더링하기 전에 API를 요청한 뒤 스토어에 데이터를 담아야 함
// 서버 환경에서 작업을 하려면 클래스형 컴포넌트가 지니고 있는 constructor 메서드나 render 함수 자체에서 처리 해야 함
// 요청이 끝날 때까지 대기했다가 다시 렌더링

import { createContext, useContext } from 'react';

// 클라이언트 환경: null
// 서버 환경: { done: false, promises: [] }
const PreloadContext = createContext(null);
export default PreloadContext;

// resolve는 함수 타입입니다.
export const Preloader = ({ resolve }) => {
    // 컴포넌트가 렌더링될 때 서버 환경에서만 resolve 함수를 호출
    const preloadContext = useContext(PreloadContext);
    if (!preloadContext) return null; // context 값이 유효하지 않다면 아무것도 하지 않음
    if (preloadContext.done) return null; // 이미 작업이 끝났다면 아무것도 하지 않음

    // promises 배열에 프로미스 등록
    // 설령 resolve 함수가 프로미스를 반환하지 않더라도, 프로미스 취급을 하기 위해
    // Promise.resolve 함수 사용
    preloadContext.promises.push(Promise.resolve(resolve()));
    return null;
};