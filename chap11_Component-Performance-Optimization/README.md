# 컴포넌트 성능 최적화
* https://github.com/dkdlel/Todos

## Lodash란?
* A modern JavaScript utility library delivering modularity, performance & extras.
    - 모듈화, 성능 및 기타 기능을 제공하는 자바스크립트 유틸리티 라이브러리
[공식문서] : https://lodash.com/

* debounce
    ```
    _.debounce(func, [wait=0], [options={}])
    ```
    - 이벤트가 끝난 뒤에 설정해둔 시간(wait)이 지나야 콜백(func)이 실행
    - 검색기능 최적화

* throttle
    ```
    _.throttle(func, [wait=0], [options={}])
    ```
    - 콜백 함수(func)를 일정 주기(wait) 내에 한 번만 호출
    - 짧은 시간에 굉장히 많이 실행되는 이벤트에 사용
        + 지도
        + scroll
        + mousemove

|debounce|throttle|
|:---:|:---:|
|이벤트가 끝날 때까지 기다렸다가 시작|이벤트가 시작되면 일정 주기로 계속 실행|

[참고] : https://velog.io/@edie_ko/React-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-%EC%84%B1%EB%8A%A5-%ED%96%A5%EC%83%81-%EC%8B%9C%ED%82%A4%EA%B8%B0-feat.-Lodash-throttle-debounce