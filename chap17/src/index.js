import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
/* 17.4.1 스토어 만들기 */
import { createStore } from 'redux';
import rootReducer from './modules'
/* 17.4.2 Provider 컴포넌트를 사용하여 프로젝트에 리덕스 적용하기 */
import { Provider } from 'react-redux';
/* 17.4.3 Redux DevTools의 설치 및 적용 */
import { composeWithDevTools } from 'redux-devtools-extension';

/* 17.4.1 스토어 만들기 */
// const store = createStore(rootReducer);

/* 17.4.2 Provider 컴포넌트를 사용하여 프로젝트에 리덕스 적용하기 */
// 스토어를 사용하기 위해서 react-redux에서 제공하는 Provider 컴포넌트로 감싸 줌
// store를 props로 전달 해 주어야 함

/* 17.4.3 Redux DevTools의 설치 및 적용 */
// 구글 확장 프로그램 (Redux DevTools)설치
// yarn add redux-devtools-extension
const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
