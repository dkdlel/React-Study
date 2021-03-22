# 리덕스를 사용하여 리액트 애플리케이션 상태 관리하기
```
yarn add redux react-redux
```

## 가장 많이사용하는 패턴
* 프레젠테이셔널 컴포넌트와 컨테이너 컴포넌트를 분리
* 코드의 재사용성도 높아지고, 관심사의 분리가 이루어져 UI 작성시 좀 더 집중할 수 있음

|프레젠테이셔널|컨테이너|
|:---:|:---:|
|상태관리가 이루어지지 않음|리덕스와 연동되어 있는 컴포넌트|
|props를 받아 와서 화면에 UI를 보여 줌|상태를 받아오거나 스토어에 액션을 디스패치|

## Ducks 패턴
* 액션 타입, 액션 생성 함수, 리듀서 함수를 기능별로 파일 하나에 몰아서 다 작성하는 방식

## 모듈 작성
1. 액션 타입 정의
    * 액션 타입은 대문자로 정의
    * 문자열 내용은 '모듈 이름/액션 이름' 형태로 작성
2. 액션 생성 함수 만들기
3. 초기 상태 및 리듀서 함수 만들기
4. rootReducer 만들기
    - 모듈을 만들고 난 뒤 module/index.js파일 생성후 combineReducers라는 유틸 함수로 기존에 만든 리듀서를 하나로 합침

## 리덕스 적용하기
* src/index.js에 적용
1. 스토어 생성
```
const store = createStore(rootReducer);
```
2. Provider 컴포넌트를 사용하여 프로젝트에 리덕스 적용
```
 <Provider store={store}>
    <App />
  </Provider>,
```

## export vs export default    
|export|export default|
|:---:|:---:|
|여러 개를 내보낼 수 있음|단 한 개만 내보낼 수 있음|

## Redux DevTools의 설치 및 적용
* https://chrome.google.com/webstore/ 에서 Redux DevTools를 검색 후 설치
```
yarn add redux-devtools-extenstion
```
```
src/index.js

const store = createStore(rootReducer, composeWithDevTools());
```

## connect
* 컴포넌트를 리덕스와 연동하려면 react-redux에서 제공하는 connect 함수를 사용해야함
* connect(mapStateToProps, mapDispatchToPropx)(연동할 컴포넌트)
    - mapStateToProps : 리덕스 스토어 안의 상태를 컴포넌트의 props로 넘겨주는 함수
    - mapDispatchToProps : 액션 생성 함수를 컴포넌트의 props로 넘겨주는 함수
* connect는 다른 함수를 반환(반환된 함수에 컴포넌트를 파라미터로 넣어 주면 리덕스와 연동된 컴포넌트가 만들어 짐)
* 액션 생성 함수의 개수가 많아 진다면 bindActionCreators 유틸 함수를 사용하면 간편함
* mapDispatchToProps에 해당하는 파라미터를 함수 형태가 아닌 액션 생성 함수로 이루어진 객체 형태로 넣어 주는것도 방법

- containers/CounterContainer.js 참고

## redux-actions
```
yarn add redux-actions
```
* 액션 생성 함수를 createAction이란 함수를 사용하여 만듦
    - 필요한 추가 데이터는 payload라는 이름을 사용
    - 변형을 주고 싶다면 두 번째 함수에 payload를 정의하는 함수를 따로 선언
* 리듀서 함수를 handleActions라는 함수를 사용하여 만듦
    - 첫 번째 파라미터 : 각 액션에 대한 업데이트 함수
    - 두 번째 파라미터 : 초기 상태
* 객체 비구조화 할당 문법으로 action 값의 payload 이름을 새로 설정해 주면 정확히 어떤 값을 의미하는지 더 쉽게 파악 가능

## useSelector로 상태 조회하기
* connect 함수를 사용하지 않고 리덕스의 상태를 조회
```
const 결과 = useSelector(상태 선택 함수);
상태 선택 함수 : mapStateToProps와 형태가 같음
```

## useDispatch를 사용하여 액션 디스패치하기
* 스토어의 내장 함수 dispatch를 사용할 수 있게 해 줌
```
const dispatch = useDispatch();
dispatch({type: 'SAMPLE_ACTION' });
```

## useStore를 사용하여 리덕스 스토어 사용하기
* 정말 어쩌다가 스토어에 직접 접근해야 하는 상황에만 사용
    - 이를 사용해야 하는 상황은 흔치 않을 것

## useActions 유틸 Hook을 만들어서 사용
* 여러개의 액션을 사용해야 하는 경우 코드를 깔끔하게 정리하여 작성
* 참고 링크 : https://react-redux.js.org/next/api/hooks#recipe-useactions

## connect와 useSelector의 차이점
* connect
    - 부모 컴포넌트가 리렌더링될 때 해당 컴포넌트의 porps가 바뀌지 않았다면 리렌더링이 자동으로 방지
* useSelector
    - 최적화 작업이 자동으로 이루어지지 않으므로, React.memo를 통해 성능을 최적화
