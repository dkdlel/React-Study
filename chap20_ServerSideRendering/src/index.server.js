/* 20.3.1 서버 사이드 렌더링용 엔트리 만들기 */
// import React from 'react';
// import ReactDomServer from 'react-dom/server';

// // 서버에서 리액트 컴포넌터를 렌더링 하는 함수
// const html = ReactDomServer.renderToString(
//     <div>Hello Server Side Rendering!</div>
// );

// console.log(html);

/* 20.3.4 서버 코드 작성하기 */
// import React from 'react';
// import ReactDOMServer from 'react-dom/server';
// import express from 'express';
// import { StaticRouter } from 'react-router-dom';
// import App from './App';
// /* 20.3.5 정적 파일 제공하기 */
// import path from 'path';
// import fs from 'fs';
// /* 20.4.4 서버에서 리덕스 설정 및 PreloadContext 사용하기 */
// import { applyMiddleware, createStore } from 'redux';
// import rootReducer from './modules';
// import thunk from 'redux-thunk';
// import { Provider } from 'react-redux';
// import PreloadContext from './lib/PreloadContext';

// /* 20.3.5 정적 파일 제공하기 */
// // asset-manifest.json에서 파일 경로들을 조회함
// const manifest = JSON.parse(
//     fs.readFileSync(path.resolve('./build/asset-manifest.json'), 'utf-8')
// );

// const chunks = Object.keys(manifest.files)
//     .filter(key => /chunk\.js$/.exec(key)) // chunk.js로 끝나는 키를 찾아서
//     .map(key => `<script src="${manifest.files[key]}"></script>`) // 스크립트 태그로 변환하고
//     .join(''); // 합침

// // function createPage(root) {
// //     return `
// //     <!DOCTYPE html>
// //     <html lang="kr">
// //         <head>
// //             <meta charset="utf-8" />
// //             <link rel="shortcut icon" href="/favicon.ico" />
// //             <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
// //             <meta name="theme-color" content="#000000" />
// //             <title>React App</title>
// //             <link href="${manifest.files['main.css']}" rel="stylesheet" />
// //         </head>
// //         <body>
// //             <noscript>You need to enable Javascript to run this app.</noscript>
// //             <div id="root">${root}</div>
// //             <script src="${manifest.files['runtime~main.js']}"></script>
// //             ${chunks}
// //             <script src="${manifest.files['main.js']}"></script>
// //         </body>
// //     </html>
// //     `;
// // }

// /* 20.4.5 스크립트로 스토어 초기 상태 주입하기 */
// // 렌더링하는 과정에서 만들어진 스토어의 상태를 브라우저에세 재사용하지 못하는 상황
// // 서버에서 만들어 준 상태를 브라우저에서 재사용하려면, 현재 스토어 상태를 문자열로 변환한 뒤 스크립트로 주입
// function createPage(root, stateScript) {
//     return `
//     <!DOCTYPE html>
//     <html lang="kr">
//         <head>
//             <meta charset="utf-8" />
//             <link rel="shortcut icon" href="/favicon.ico" />
//             <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
//             <meta name="theme-color" content="#000000" />
//             <title>React App</title>
//             <link href="${manifest.files['main.css']}" rel="stylesheet" />
//         </head>
//         <body>
//             <noscript>You need to enable Javascript to run this app.</noscript>
//             <div id="root">${root}</div>
//             ${stateScript}
//             <script src="${manifest.files['runtime~main.js']}"></script>
//             ${chunks}
//             <script src="${manifest.files['main.js']}"></script>
//         </body>
//     </html>
//     `;
// }
// /* ------------ */

// const app = express();

// // 서버 사이드 렌더링을 처리할 핸들러 함수
// const serverRender = async (req, res, next) => {
//     // 이 함수는 404가 떠야 하는 상황에 404를 띄우지 않고 서버 사이드 렌더링을 해 줌
//     const context = {};
//     // const jsx = (
//     //     <StaticRouter location={req.url} context={context}>
//     //         <App />
//     //     </StaticRouter>
//     // );
//     /* 20.4.4 서버에서 리덕스 설정 및 PreloadContext 사용하기 */
//     // 서버가 실행될 때 요청이 들어올 때마다 새로운 스토어를 만듬
//     const store = createStore(rootReducer, applyMiddleware(thunk));

//     // 프로미스들을 수집하고 기다렸다가 다시 렌더링 하는 작업
//     const preloadContext = {
//         done: false,
//         promises: []
//     };
//     const jsx = (
//         <PreloadContext.Provider value={preloadContext}>
//             <Provider store={store}>
//                 <StaticRouter location={req.url} context={context}>
//                     <App />
//                 </StaticRouter>
//             </Provider>
//         </PreloadContext.Provider>
//     );

//     // 프로미스들을 수집하고 기다렸다가 다시 렌더링 하는 작업
//     ReactDOMServer.renderToStaticMarkup(jsx); // renderToStaticMarkup으로 한번 렌더링
//     try {
//         await Promise.all(preloadContext.promises); // 모든 프로미스를 기다림
//     } catch (e) {
//         return res.status(500);
//     }
//     preloadContext.done = true;
//     const root = ReactDOMServer.renderToString(jsx); // 렌더링 하고
//     // res.send(root); // 클라이언트에게 결과물을 응답

//     /* 20.3.5 정적 파일 제공하기 */
//     // res.send(createPage(root)); // 결과물을 응답

//     /* 20.4.5 스크립트로 스토어 초기 상태 주입하기 */
//     // JSON을 문자열로 변환하고 악성 스크립트가 실행되는 것을 방지하기 위해 <를 치환 처리
//     // https://redux.js.org/recipes/server-redering#security-considerations
//     const stateString = JSON.stringify(store.getState()).replace(/</g, '\\u00ec');
//     const stateScript = `<script>__PRELOADED_STATE__ = ${stateString}</script>`; // 리덕스 초기 상태를 스크립트로 주입
//     res.send(createPage(root, stateScript)); // 결과물을 응답
// };

// /* 20.3.4 서버 코드 작성하기 */
// // app.use(serverRender);

// /* 20.3.5 정적 파일 제공하기 */
// const serve = express.static(path.resolve('./build'), {
//     index: false // "/" 경로에서 index.html을 보여주지 않도록 설정
// });

// app.use(serve); // 순서가 중요함. serverRender 전에 위치해야 함
// app.use(serverRender);

// // 5000 포트로 서버를 가동
// app.listen(5000, () => {
//     console.log('Running on http://localhost:5000');
// });

/* 20.4.8 redux-saga를 위한 서버사이드 렌더링 작업 */
// redux-saga를 사용하면 Promise를 반환하지 않기 때문에 추가 작업이 필요
// import React from 'react';
// import ReactDOMServer from 'react-dom/server';
// import express from 'express';
// import { StaticRouter } from 'react-router-dom';
// import App from './App';
// import path from 'path';
// import fs from 'fs';
// import { applyMiddleware, createStore } from 'redux';
// import thunk from 'redux-thunk';
// import { Provider } from 'react-redux';
// import PreloadContext from './lib/PreloadContext';

// import createSagaMiddleWare from 'redux-saga';
// import rootReducer, { rootSaga } from './modules';
// import { END } from 'redux-saga';

// const manifest = JSON.parse(
//     fs.readFileSync(path.resolve('./build/asset-manifest.json'), 'utf-8')
// );

// const chunks = Object.keys(manifest.files)
//     .filter(key => /chunk\.js$/.exec(key)) // chunk.js로 끝나는 키를 찾아서
//     .map(key => `<script src="${manifest.files[key]}"></script>`) // 스크립트 태그로 변환하고
//     .join(''); // 합침

// function createPage(root, stateScript) {
//     return `
//     <!DOCTYPE html>
//     <html lang="kr">
//         <head>
//             <meta charset="utf-8" />
//             <link rel="shortcut icon" href="/favicon.ico" />
//             <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
//             <meta name="theme-color" content="#000000" />
//             <title>React App</title>
//             <link href="${manifest.files['main.css']}" rel="stylesheet" />
//         </head>
//         <body>
//             <noscript>You need to enable Javascript to run this app.</noscript>
//             <div id="root">${root}</div>
//             ${stateScript}
//             <script src="${manifest.files['runtime~main.js']}"></script>
//             ${chunks}
//             <script src="${manifest.files['main.js']}"></script>
//         </body>
//     </html>
//     `;
// }
// /* ------------ */

// const app = express();

// // 서버 사이드 렌더링을 처리할 핸들러 함수
// const serverRender = async (req, res, next) => {
//     // 이 함수는 404가 떠야 하는 상황에 404를 띄우지 않고 서버 사이드 렌더링을 해 줌
//     const context = {};

//     /* 20.4.8 redux-saga를 위한 서버사이드 렌더링 작업 */
//     const sagaMiddleware = createSagaMiddleWare();
//     const store = createStore(rootReducer, applyMiddleware(thunk, sagaMiddleware));
//     // toPromise : run을 통해 만든 Task를 Promise로 변환, 별도의 작업이 없으면 끝나지 않음(rootSaga에서 액션을 끝없이 모니터링 하기 때문에)
//     const sagaPromise = sagaMiddleware.run(rootSaga).toPromise();

//     // 프로미스들을 수집하고 기다렸다가 다시 렌더링 하는 작업
//     const preloadContext = {
//         done: false,
//         promises: []
//     };
//     const jsx = (
//         <PreloadContext.Provider value={preloadContext}>
//             <Provider store={store}>
//                 <StaticRouter location={req.url} context={context}>
//                     <App />
//                 </StaticRouter>
//             </Provider>
//         </PreloadContext.Provider>
//     );

//     // 프로미스들을 수집하고 기다렸다가 다시 렌더링 하는 작업
//     ReactDOMServer.renderToStaticMarkup(jsx); // renderToStaticMarkup으로 한번 렌더링

//     /* 20.4.8 redux-saga를 위한 서버사이드 렌더링 작업 */
//     store.dispatch(END); // redux-saga의 END 액션을 발생시키면 액션을 모니터링하는 사가들이 모두 종료됨

//     try {
//         /* 20.4.8 redux-saga를 위한 서버사이드 렌더링 작업 */
//         await sagaPromise; //기존에 진행 중이던 사가들이 모두 끝날 때까지 기다림
//         await Promise.all(preloadContext.promises); // 모든 프로미스를 기다림
//     } catch (e) {
//         return res.status(500);
//     }
//     preloadContext.done = true;
//     const root = ReactDOMServer.renderToString(jsx); // 렌더링 하고

//     const stateString = JSON.stringify(store.getState()).replace(/</g, '\\u00ec');
//     const stateScript = `<script>__PRELOADED_STATE__ = ${stateString}</script>`; // 리덕스 초기 상태를 스크립트로 주입
//     res.send(createPage(root, stateScript)); // 결과물을 응답
// };

// const serve = express.static(path.resolve('./build'), {
//     index: false // "/" 경로에서 index.html을 보여주지 않도록 설정
// });

// app.use(serve); // 순서가 중요함. serverRender 전에 위치해야 함
// app.use(serverRender);

// // 5000 포트로 서버를 가동
// app.listen(5000, () => {
//     console.log('Running on http://localhost:5000');
// });

/* 20.5.4 필요한 청크 파일 경로 추출하기 */
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import express from 'express';
import { StaticRouter } from 'react-router-dom';
import App from './App';
import path from 'path';
import fs from 'fs';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import PreloadContext from './lib/PreloadContext';
import createSagaMiddleWare from 'redux-saga';
import rootReducer, { rootSaga } from './modules';
import { END } from 'redux-saga';

/* 20.5.4 필요한 청크 파일 경로 추출하기 */
import { ChunkExtractor, ChunkExtractorManager } from '@loadable/server';
const statsFile = path.resolve('./build/loadable-stats.json');
function createPage(root, tags) {
    return `
    <!DOCTYPE html>
    <html lang="kr">
        <head>
            <meta charset="utf-8" />
            <link rel="shortcut icon" href="/favicon.ico" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <meta name="theme-color" content="#000000" />
            <title>React App</title>
            ${tags.styles}
            ${tags.links}
        </head>
        <body>
            <noscript>You need to enable Javascript to run this app.</noscript>
            <div id="root">${root}</div>
            ${tags.scripts}
        </body>
    </html>
    `;
}
/* ------------ */

const app = express();

// 서버 사이드 렌더링을 처리할 핸들러 함수
const serverRender = async (req, res, next) => {
    // 이 함수는 404가 떠야 하는 상황에 404를 띄우지 않고 서버 사이드 렌더링을 해 줌
    const context = {};
    const sagaMiddleware = createSagaMiddleWare();
    const store = createStore(rootReducer, applyMiddleware(thunk, sagaMiddleware));
    // toPromise : run을 통해 만든 Task를 Promise로 변환, 별도의 작업이 없으면 끝나지 않음(rootSaga에서 액션을 끝없이 모니터링 하기 때문에)
    const sagaPromise = sagaMiddleware.run(rootSaga).toPromise();

    // 프로미스들을 수집하고 기다렸다가 다시 렌더링 하는 작업
    const preloadContext = {
        done: false,
        promises: []
    };

    /* 20.5.4 필요한 청크 파일 경로 추출하기 */
    // 필요한 파일을 추출하기 위한 ChunkExtractor
    const extractor = new ChunkExtractor({ statsFile });
    const jsx = (
        <ChunkExtractorManager extractor={extractor}>
            <PreloadContext.Provider value={preloadContext}>
                <Provider store={store}>
                    <StaticRouter location={req.url} context={context}>
                        <App />
                    </StaticRouter>
                </Provider>
            </PreloadContext.Provider>
        </ChunkExtractorManager>
    );

    // 프로미스들을 수집하고 기다렸다가 다시 렌더링 하는 작업
    ReactDOMServer.renderToStaticMarkup(jsx); // renderToStaticMarkup으로 한번 렌더링
    store.dispatch(END); // redux-saga의 END 액션을 발생시키면 액션을 모니터링하는 사가들이 모두 종료됨

    try {
        await sagaPromise; //기존에 진행 중이던 사가들이 모두 끝날 때까지 기다림
        await Promise.all(preloadContext.promises); // 모든 프로미스를 기다림
    } catch (e) {
        return res.status(500);
    }
    preloadContext.done = true;
    const root = ReactDOMServer.renderToString(jsx); // 렌더링 하고
    const stateString = JSON.stringify(store.getState()).replace(/</g, '\\u00ec');
    const stateScript = `<script>__PRELOADED_STATE__ = ${stateString}</script>`; // 리덕스 초기 상태를 스크립트로 주입

    /* 20.5.4 필요한 청크 파일 경로 추출하기 */
    // 미리 불러와야 하는 스타일/스크립트를 추출
    const tags = {
        scripts: stateScript + extractor.getScriptTags(), // 스크립트 앞부분에 리덕스 상태 넣기
        links: extractor.getLinkTags(),
        styles: extractor.getStyleTags()
    }
    res.send(createPage(root, tags)); // 결과물을 응답
};

const serve = express.static(path.resolve('./build'), {
    index: false // "/" 경로에서 index.html을 보여주지 않도록 설정
});

app.use(serve); // 순서가 중요함. serverRender 전에 위치해야 함
app.use(serverRender);

// 5000 포트로 서버를 가동
app.listen(5000, () => {
    console.log('Running on http://localhost:5000');
});