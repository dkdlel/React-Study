# Hooks

## useState
* 함수형 컴포넌트에서도 가변적인 상태를 지님

## useEffect
* 렌더링될 때마다 특정 작업을 수행하도록 설정
* componentDidMount + componentDidUpdate

* 처음 렌더링될 때만(마운트될 때만) 실행할 경우 함수의 두번째 파라미터로 비어 있는 배열을 넣어줌
* 배열 안에 검사하고 싶은 값을 넣어주면 특정 값이 변경될 때만 호출

* 컴포넌트가 언마운트되기 전이나 업데이트 되기 직전에 어떠한 작업을 수행하려면 뒷정리(cleanup) 함수를 반환

## useReducer
* 장점 : 컴포넌트 업데이트 로직을 컴포넌트 바깥으로 빼낼수 있다는 것
* useState보다 더 다양한 상태를 다른 값으로 업데이트해 주고 싶을 때 사용
* 업데이트를 위해 필요한 정보를 담은 액션(action) 값을 전달받아 새로운 상태를 반환하는 함수
* 새로운 상태를 만들 때는 반드시 불변성을 지켜야 함
```
function reducer(state, action){
    return { ... }; // 불변성을 지키면서 업데이트한 새로운 상태를 반환
}

const [state, dispatch] = useReducer(reducer, { value: 0 });
- 첫번째 파라미터 : 리듀서 함수
- 두번째 파라미터 : 해당 리듀서의 기본값
- state : 현재 가리키고 있는 상태
- dispatch : 액션을 발생시키는 함수
```
    - Counter.js, Info.js 참고

## useMemo
* 함수형 컴포넌트 내부에서 발생하는 연산을 최적화할 수 있
* 렌더링 과정에서 특정 값이 바뀌었을 때만 연산 실행, 값이 바뀌지 않았다면 이전에 연산했던 결과를 다시 사용

## useCallback
* 렌더링 성능을 최적화해야하는 상황에서 사용
    - 첫번째 파라미터 : 생성하고 싶은 함수
    - 두번째 파라미터 : 배열
        + 어떤 값이 바뀌었을때 함수를 새로 생성해야 하는지 명시
* 함수 내부에서 상태 값에 의존해야 할 때는 그 값을 반드시 두 번째 파라미터 안에 포함해야 함

## useRef
* 함수형 컴포넌트에서 ref를 쉽게 사용할 수 있도록 해줌
* 로컬변수(렌더링과 상관없이 바뀔수 있는 값)를 사용할 때도 활용

## 다른 Hooks
* https://nikgraf.github.io/react-hooks/
* https://github.com/rehooks/awesome-react-hooks
