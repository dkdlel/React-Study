# ref: DOM에 이름 달기

## ref란?
* ref(reference) : 리액트 내부에서 DOM에 이름을 다는 방법
* DOM을 꼭 직접적으로 건드려야 할 때 사용

## DOM을 꼭 사용해야 하는 상황
* 특정 input에 포커스 주기
* 스크롤 박스 조작하가
* Canvas 요소에 그림 그리기 등

## Hook
* fowardRef
    - reference를 전달해주는 기능
    - 전달받은 ref 어트리뷰트를 하부 트리 내의 다른 컴포넌트로 전달하는 React 컴포넌트를 생성

* useImperativeHandle
    - 2개의 argument에서 처음은 부모가 보낸 reference, 그리고 두번째는 자식이 맞춰 보낼 reference로 이는 부모가 reference.current로 접속할 수 있게 맵핑을 해주고 있음
    - 즉, 부모에게 꼭 자식의 실제 reference를 보내지 않고 우리가 원하는 일종의 proxy reference를 보내는게 가능해진다는 것
    - 라이브러리를 wrapping 할때, 부모에게 자식의 메서드를 넘겨야하는 상황이 발생 할때 useImperativeHandle는 유용하게 사용할 곳이 많을 것 같다.
    ```
    const Child = forwardRef(({ props }, ref) => {
        ...
        useImperativeHandle(ref, () => ({
            ...
        }));
        ...
    }
    const App = () => {
        const inputRef = useRef(null);
        ...
        return(
            <Child ref={inputRef} />
        )
    }
    ```
    