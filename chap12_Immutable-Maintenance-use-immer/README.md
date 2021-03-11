# immer를 사용하여 더 쉽게 불변성 유지히ㅏ기
* immer 라이브러리를 사용하면 구조가 복잡한 객체도 불변성을 유지하며 쉽고 잛게 업데이트 할 수 있음
* 불변성을 유지하는 코드가 복잡할 때만 사용해도 충분
```
예시코드
import produce from 'immer';
const nextState = produce(originalState, draft => {
    // 바꾸고 싶은 값 바꾸기
    draft.somewhere.deep.inside = 5;
});
첫번째 파라미터 : 수정하고 싶은 상태
두번째 파라미터 : 상태를 어떻게 업데이트할지 정의하는 함수(불변성 유지)
```