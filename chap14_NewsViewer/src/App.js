import React, { useState, useCallback } from 'react';
import axios from './axios';
import NewsList from './components/NewsList';
import Categories from './components/Categories';
import { Route } from './react-router-dom';
import NewsPage from './pages/NewsPage';

/* 14.1 비동기 */
// const func = new Promise((resolve,reject) => {
//     let num = 0;
//     while(num != 100000){
//         num++;
//     }
//     resolve(true);
// });
// async function test(){
//     const result = await func;
//     console.log(result);
// }
// test();
// console.log("김정현 돼지");

// const condition = false;
// const func = new Promise((resolve,reject)=>{
//     if(condition){
//         reject(false);
//     }
//     let num = 0;
//     while(num != 100000){
//         num++;
//     }
//     resolve(true);
// });
// func.then(function(resolve){
//     console.log(resolve);
// }).catch(function(error){
//     console.log(reject);
// });

/* 14.2 axios로 API 호출해서 데이터 받아오기 */
// yarn add axios
// .prettierrc, jsconfig.json파일 생성
// const App = () => {

//   const [data, setData] = useState(null);

// const onClick = () => {
//   axios.get('https://jsonplaceholder.typicode.com/todos/1').then(response => {
//     setData(response.data);
//   })
// }

// async 적용
//   const onClick = async () => {
//     try {
//       const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
//       setData(response.data);
//     } catch (e) {
//       console.log(e);
//     }
//   }

//   return (
//     <div>
//       <div>
//         <button onClick={onClick}>불러오기</button>
//       </div>
//       {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} readOnly={true} />}
//     </div>
//   )
// }

/* 14.3 newsapi API 키 발급받기 */
// API Key : da8b2e5b50cc41edb679702807761afd
// 사용법 : https://newsapi.org/s/south-korea-news-api
// 전체 뉴스 불러오기 : GET https://newsapi.org/v2/top-headlines?country=kr&apiKey=da8b2e5b50cc41edb679702807761afd
// 특정 카테고리 뉴스 불러오기 : GET https://newsapi.org/v2/top-headlines?country=kr&category=business&apiKey=da8b2e5b50cc41edb679702807761afd
// 카테고리 : business, entertainment, health, science, sports, technology

// const App = () => {

//   const [data, setData] = useState(null);

//   const onClick = async () => {
//     try {
//       const response = await axios.get('https://newsapi.org/v2/top-headlines?country=kr&apiKey=da8b2e5b50cc41edb679702807761afd');
//       setData(response.data);
//     } catch (e) {
//       console.log(e);
//     }
//   }

//   return (
//     <div>
//       <div>
//         <button onClick={onClick}>불러오기</button>
//       </div>
//       {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} readOnly={true} />}
//     </div>
//   )
// }

/* 14.4 뉴스 뷰어 UI 만들기 */
// yarn add styled-components
// mkdir components, NewsItem.js and NewsList.js 파일 생성
// const App = () => {

//   return (
//     <NewsList />
//   )
// }

/* 14.6 카테고리 기능 구현하기 */
// const App = () => {

//   const [category, setCategory] = useState('all');
//   const onSelect = useCallback((category) =>
//     setCategory(category)
//     , [])
//   return (
//     <>
//       <Categories category={category} onSelect={onSelect} />
//       <NewsList category={category} />
//     </>
//   )
// }

/* 14.7 리액트 라우터 적용하기 */
// yarn add react-router-dom
// pages/NewsPage.js
const App = () => {
  return <Route path="/:category?" component={NewsPage} />;
}

/* 14.8 usePromise 커스텀 Hook 만들기 (README 참고) */
export default App;


