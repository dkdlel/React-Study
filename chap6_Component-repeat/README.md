# 컴포넌트 반복

## map() 함수
* 내장함수인 map 함수를 사용하여 반복되는 컴포넌트를 렌더링 할 수 있음.
* 파라미터로 전달된 함수를 사용해서 배열 내 각 요소를 원하는 규칙에 따라 변환 후 그 결과로 새로운 배열을 생성
```
arr.map(callback,[thisArg])
callback : 새로운 배열의 요소를 생성하는 함수
    - currentValue : 현재 처리하고 있는 요소
    - index : 현재 처리하고 있는 요소의 index 값
    - array : 현재 처리하고 있는 원본 배역
thisArg(선택 항목) : callback 함수 내부에서 사용할 this reperence
```
* map 함수에서 JSX를 작성할 때는 DOM 요소를 작성해도 되고, 컴포넌트를 사용해도 됨

## key
* 컴포넌트 배열을 렌더링했을 때 어떤 원소에 변동이 있었는지 알아내려고 사용
    - key가 없을 때는 Virtual DOM을 비교하는 과정에서 리스트를 순차적으로 비교하면서 변화를 감지
    - key가 있다면 이 값을 사용하여 어떤 변화가 일어났는지 더욱 빠르게 알아낼 수 있음
* key의 값은 언제나 유일해야함

## concat
* 새로운 항목을 추가한 배열을 만듬
```
const newArray = array.concat({...}); // 뒤에 내용을 추가하고
setArray(newArray); // 새로운 배열을 set
```
## concat vs push
* 최적화를 위한 불변성 유지(기존 상태를 그대로 두면서 새로운 값을 상태로 설정)
|concat|push|
|:---:|:---:|
|새로운 배열을 만듬|기존 배열 자체를 변경|

## filter
* 데이터 제거 기능
* 불변성을 유지하면서 배열의 특정 항목을 지움
```
const newArray = array.filter(분류하고 싶은 조건을 반환); 
```