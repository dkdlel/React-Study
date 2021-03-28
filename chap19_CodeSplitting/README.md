# 코드 스플리팅
* 파일을 분리하는 작업

## 웹팩(webpack)
* 리액트 프로젝트를 사용자에게 제공할 때는 빌드 작업을 거쳐서 배포해야 함
    - .js에 불필요한 주석, 경고 메세지, 공백등을 제거하여 파일 크기를 최소화
    - 브라우저에서 JSX 문법이나 다른 최신 자바스크립트 문법이 원활하게 실행되도록 코드의 트랜스파일 작업도 가능
    - 이미지와 같은 정적 파일이 있다면 해당 파일을 위한 경로도 설정
* 별도의 설정을 하지 않을 경우
    - 프로젝트에서 사용중인 모든 자바스크립트 파일이 하나의 파일로 합쳐짐
    - 모든 CSS 파일도 하나의 파일로 합쳐짐

## 빌드
```
yarn build
```
* 파일이름에 해시값이 포함되어 있음
    - 빌드하는 과젱에서 해당 파일의 내용에 따라 생성
    - 브라우저가 새로 파일을 받아야 할지 받지 말아야 할지 알 수 있음
* 2로 시작하는 파일
    - React, ReactDOM등 node_modules에서 불러온 라이브러리 관련 코드
    - SplitChunks라는 웹팩 기능을 통해 자주 바뀌지 않는 코드들이 들어 있어 캐싱의 이점을 더 오래 누릴 수 있음
* main으로 시작하는 파일
    - 직접 프로젝트에 작성하는 APP 같은 컴포넌트에 대한 코드

## 비동기 로딩
* 코드 스플리팅 방법 중 하나로서 자바스크립트 함수, 객체, 컴포넌트를 필요한 시점에 불러와서 사용할 수 있음

## dynamic import
* import를 상단에서 하지 않고 import() 함수 형태로 메서드 안에서 사용
    - 파일을 따로 분리시켜서 저장
    - 실제 함수가 필요한 지점에 파일을 불러와서 함수를 사용할 수 있음
* Promise를 반환
```
App.js

import('./notify').then(result => result.default());
```

## 컴포넌트의 코드 스플리팅
* state를 사용하여 코드 스플리팅
    - 매번 state를 선언해 주어야 한다는 점이 조금 불편

## React.lazy와 Suspense
* state를 따로 선언하지 않고도 간편하게 컴포넌트 코드 스플리팅을 할 수 있음
* React.lazy
    - 컴포넌트를 렌더링하는 시점에서 비동기적으로 로딩할 수 있게 해주는 유틸 함수

[공식문서] : https://reactjs.org/docs/code-splitting.html#reactlazy
```
예시
const SplitMe = React.lazy(() => import('./SplitMe'));
```
* Suspense
    - 리액트 내장 컴포넌트
    - 코드 스플리팅된 컴포넌트를 로딩하도록 발동
    - 로딩이 끝나지 않았을 때 보여주는 UI를 설정
    - fallback props를 통해 로딩 중에 보여줄 JSX 지정가능
```
예시
<Suspense fallback={<div>lading...</div>}>
    {visible && <SplitMe />}
</Suspense>
```

## Loadable Components
* 코드 스플리팅을 편하게 하도록 도와주는 서드파티 라이브러리
* 장점
    - 서버 사이드 렌더링을 지원
    - 렌더링하기 전에 필요할 때 스플리팅된 파일을 미리 불러올 수 있음
    
[공식문서] : https://loadable-components.com/docs/getting-started/
```
yarn add @loadable/component
```
```
const SplitMe = loadable(() => import('./SplitMe'));

// 로딩 중에 다른 UI를 보여주고 싶다면 loadable을 사용하는 부분을 수정
const SplitMe = loadable(() => import('./SplitMe'), {
  fallback: <div>loading...</div>
});

// preload : 컴포넌트를 미리 불러오는 방법
SplitMe.preload();
```