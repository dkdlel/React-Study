# 컴포넌트 스타일링

|일반 CSS|컴포넌트를 스타일링 하는 가장 기본적인 방식|
|:---:|:---:|
|Sass|CSS 전처리기 중 하나로 확장된 CSS 문법을 사용|
|CSS Module|CSS 클래스가 다른 CSS 클래스의 이름과 절대 충돌하지 않도록 파일마다 고유한 이름을 자동으로 생성|
|styled-components|스타일을 자바스크립트 파일에 내장시키는 방식|

## 일반 CSS
* 중복되지 않는 클래스 이름 짓는 규칙
    - 클래스 이름에 컴포넌트 이름을 포함
    - BEM Naming : 해당 클래스가 어디에서 어떤 용도로 사용되는지 명확하게 작성하는 방식
* CSS Selector
    - CSS 클래스가 특정 클래스 내부에 있는 경우에만 스타일을 적용
    ```
    .App .logo{
        ...
    }
    ```

## Sass
* Sass(Syntactically Awesome Style Sheets)(문법적으로 매우 멋진 스타일시트)
    1. CSS 전처리기로 복잡한 작업을 쉽게 할 수 있도록 해줌
    2. 스타일 코드의 재활용성을 높여 줌
    3. 코드의 가독성을 높여 유지 보수를 더욱 쉽게 해줌
    4. 라이브러리를 쉽게 불러와서 사용할수 있음
        - 물결문자(~)를 통해 자동으로 node_modules에서 라이브러리 디렉터리를 탐지

* Sass vs Scss
|Sass|Scss|
|:---:|:---:|
|중괄호와 세미콜론을 사용하지 않음|기존 문법과 크게 다르지 않음|

## CSS Module
* 클래스 이름을 고유한 값인 [파일이름]_[클래스 이름]__[해식값] 형태로 자동으로 생성, 클래스 이름이 중첩되는 현상을 방지
* 스타일을 직접 불러온 컴포넌트 내부에서만 작동
* 전역으로 사용되는 경우라면 :global을 앞에 입력해줌
```
:global .something{
    ...
}
```
* JSX엘리멘트에 className={styles.[클래스 이름]} 형태로 전달
* 백틱(`)을 사용하여 템플릿 리터럴(Template Literal)을 사용하여 문자열을 만듬
    ### classnames
    * CSS 클래스를 조건부로 설정할때 classnames 라이브러리를 
    * classnames에 내장되어 있는 bind 함수를 사용하여 간결하게 사용가능
    ```
    import classNames from 'classnames/bind';
    ...
    const cx = classNames.bind(styles);
    ...
    <div className={cx('wrapper','inverted')}>
    ...
    ```

## styled-components
* 자바스크립트 파일 안에 스타일을 선언하는 방식(CSS-in-JS)
* 관련 라이브러리 : https://github.com/MicheleBertoli/css-in-js
* .css 또는 .scss 확장자를 가진 스타일 파일을 따로 만들지 않아도 됨
* props 값으로 전달해 주는 값을 쉽게 스타일에 적용할 수 있음
    ### Tagged 템플릿 리터럴
    * 자비스크립트 객체나 함수를 전달할 때 온전히 추출할 수 있음
    * 템플릿 리터럴을 사용하면 템플릿안에 넣은값을 문자열이 아닌 온전한 값으로 추출할 수 있음
    ```
    function tagged(...args){
        console.log(args);
    }
    tagged`hello ${{foo: 'bar'}} ${() => 'world'}!`
    ```
* 스타일 쪽에서 컴포넌트에게 전달된 props 값을 참조할 수 있음
    - StyledComponent.js 참고
