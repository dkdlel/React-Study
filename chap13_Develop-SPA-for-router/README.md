# 리액트 라우터로 SPA 개발하기
```
yarn add react-router-dom
```

## SPA란?
* SPA : Single Page Application(싱글 페이지 애플리케이션)
* 라우팅 : 다른 주소에 다른 화면을 보여 주는 것(react-router, reach-router, Next.js)

    ### 기존 웹페이지
    * 사용자가 다른 페이지로 이동할 때마다 새로운 html을 받아온 뒤 페이지를 로딩할 때마다 서버에서 리소스를 전달받아 해석한 뒤 화면에 보여줌
        - 사용자에게 보이는 화면은 서버 측에서 준비
            + 사전에 html 파일을 만들어서 제공함
            + 데이터에 따라 유동적인 html을 생성해 주는 템플릿 엔진을 사용
    * 서버 측에서 모든 뷰를 준비한다면 많은 정보를 담고있는 새로운 화면을 보여 줄때마다 성능상의 문제가 발생
        - 트래픽
        - 서버 부하
        - 화면 전환시 서버에 새로운 html을 요청하면 사용자의 인터페이스에서 현재 상태 유지가 번거로움
        - 바뀌지 않는 부분까지 새로 불러오기 때문에 불필요한 로딩 발생

    ### 라이브러리 or 프레임워크
    * 뷰 렌더링을 사용자의 브라우저가 담당
    * 사용자와의 인터랙션이 발생하면 필요한 부분만 자바스크립트를 사용하여 업데이트

    ### 단점
    * 앱의 규모가 커지면 자바스크립트 파일이 너무 커짐
        - 코드 스플리팅(code splitting)을 통해 트래픽과 로딩 속도를 개선
    * 자바스크립트를 실행하지 않는 일반 크롤러에서는 페이지의 정보를 제대로 수집하지 못함
    * 자바스크립트가 실행될 때까지 페이지가 비어 있기 때문에 로딩되어 실행되는 짧은 시간동안 흰 페이지가 나타날 수 있음
        - 서버 사이드 렌더링(server-side rendering)을 통해 모두 해결 가능

## 프로젝트에 라우터 적용
```
    src/index.js
    ...
    ReactDom.render(
        <BrowserRouter>
            <App />
        </BrowserRouter>,
        document.getElementById('root')
    );
    ...
```

## 사용방식
```
    <Route path="주소 규칙" component={보여 줄 컴포넌트} />
    * exact : 주소가 완전히 일치

    여러개 사용
    <Route path={["주소 규칙", "주소 규칙"]} component={보여 줄 컴포넌트} />
```

## Link(페이지 전환을 방지하는 기능이 내장)
* 페이지를 새로 불러오지 않고 애플리케이션은 유지한 상태에서 HTML5 History API를 사용하여 페이지의 주소만 변경
* a 태그를 사용할 경우 페이지를 전환하는 과정에서 새로 불러오기 때문에 애플리케이션이 들고 있던 상태들을 모두 날려버림
* 따라서, a 태그는 렌더링된 컴포넌트들도 모두 사라지고 다시 처음부터 렌더링
```
    <Link to="주소">내용</Link>
```

## 파라미터 & 쿼리
* 파라미터 
    - 아이디 혹은 이름을 사용하여 조회할 때
        + URL 예시 : /주소/params
    - 라우터로 사용되는 컴포넌트에서 받아오는 match라는 객체안의 params를 참조
        + path 예시 : /주소/:params

* 쿼리 
    - 어떤 키워드를 검색하거나 페이지에 필요한 옵션을 전달할 때
        + 예시 : /주소?query
        + 여러개 넘길때 : /주소?query&query
    - 라우터로 사용되는 컴포넌트에서 받아오는 location 객체안의 search를 참조
    - 쿼리 문자열을 객체로 변환할떄는 qs 라이브러리 사용
        + yarn add qs
    - 자료형은 언제나 문자열이기 때문에 형변환이 필요
    ```
        const query = qs.parse(location.search,{
            ignoreQueryPrefix: true // 맨 앞의 ?를 생략
        })
    ```

## 서브 라우터
* 라우터 내부에 또 라우터를 정의하는 것
* 라우터로 사용되고 있는 컴포넌트의 내부에 Route 컴포넌트를 또 사용

## 리액트 라우터 부가 기능
* history
    - 컴포넌트 내에 구현하는 메서드에서 라우터 API를 호출할 수 있음
        + 예시 : 뒤로 가기, 화면 전환, 다른페이지로 이탈 방지
    - [참고] : https://github.com/dkdlel/React-Study/blob/master/chap13_Develop-SPA-for-router/src/HistorySample.js

* withRouter
    - HoC(Higher-order Component)
    - 라우터로 사용된 컴포넌트가 아니어도 match, location, history 객체를 접근
    - [참고] : https://github.com/dkdlel/React-Study/blob/master/chap13_Develop-SPA-for-router/src/WithRouterSample.js
    
* Switch
    - 여러 Route를 감싸서 그중 일치하는 단 하나의 라우트만을 렌더링
    - 모든 규칙과 일치하지 않을 떄 보여줄 Not Found(404) 페이지도 구현 가능

* NavLink
    - 현재 경로가 Link에서 사용하는 경로와 일치하는 경우 특정 스타일 혹은 CSS 클래스를 적용할 수 있는 컴포넌트
    - 활성화가 되었을 경우 스타일을 적용할때는 activeStyle, CSS 클래스를 적용할때는 activeClassName 값을 props로 전달
    - [참고] : https://github.com/dkdlel/React-Study/blob/master/chap13_Develop-SPA-for-router/src/Profiles.js