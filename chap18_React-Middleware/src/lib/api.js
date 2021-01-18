/* 18.3.1.4 웹 요청 비동기 작업 처리하기 */
// thunk의 소성을 활용하여 웹 요청 비도이 작업을 처리하는 방법
// 웹 요청 연습을 위해 JSONPlaceholder(https://jsonplaceholde.typicode.com)의 가짜 API사용
// # 포스트 읽기(:id는 1~100 사이 숫자)
// GET https://jsonplaceholde.typicode.com/posts/:id
// # 모든 사용자 물러외
// GET https://jsonplaceholder.typicode.com/users
// API 호출시 Promise 기반인 axios사용 
// yarn add axios

import axios from 'axios';

export const getPost = id =>
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);

export const getUsers = () =>
    axios.get(`https://jsonplaceholder.typicode.com/users`);