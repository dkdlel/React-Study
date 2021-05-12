## const, let
* var변수를 대체
* const, let : 블록 스코프
    - var : 함수 스코프
    - 호이스팅 같은 문제도 해결
    - 코드 관리도 수월
* const
    - 한번 대입하면 다른 값을 대입할 수 없음
    - 초기화시 값을 대입하지 않으면 에러
* let
    - 다른 값 대입 가능

## 템플릿 문자열
* 큰따움표나 작은따옴푤로 감싸는 기존 문자열과 바르게 백틱(`)으로 감쌈

## 객체 리터럴
* 객체의 메서드에 함수를 연결할 때 콜론(:)과 function을 붙이지 않아도 됨
* 속성명과 변수명이 겹치는 경우에 한 번만 사용 하여 코드의 중복을 피함
* 객체의 속성명을 동적으로 생성 가능

## 화살표 함수 및 비구조화 할당 사용가능

## 프로미스
* new Promise로 생성
* resolve가 호출되면 then, reject가 호출되면 catch

## async/await
* 프로미스를 사용한 토드를 한 번 더 깔끔하게 줄여줌
* 일반 함수 선언부 대신 async function, 프로미스 앞에 await을 사용

## AJAX
* 비동기적 웹 서비스를 개발하기 위한 기법
* 페이지 이동없이 서버에 요청을 보내고 응답을 받는 기술

## FormData
* HTML form 태그의 데이터를 동적으로 제어할 수 있는 기능
* 주로 AJAX와 함께 사용

## encodeURLComponent, decodeURLComponent
* 한글 주소를 인코딩, 디코딩

## data attribute, dataset
* Front-End에 데이터를 내보낼때 보안을 첫 번째로 고려해야 함
* data attribute
    - HTML 태그의 속성으로, data-로 시작하는 것들을 넣어줌
    - 자바스크립트로 쉽게 접근 가능
    