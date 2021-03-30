import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
/* 20.4.1 redux-thunk 코드 준비하기 */
import { applyMiddleware, createStore } from 'redux';
import rootReducer from './modules';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

// const store = createStore(rootReducer, applyMiddleware(thunk));

/* 20.4.5 스크립트로 스토어 초기 상태 주입하기 */
const store = createStore(
  rootReducer,
  window.__PRELOADED_STATE__, // 이 값을 초기 상태로 사용
  applyMiddleware(thunk)
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
