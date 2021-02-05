# 이벤트 핸들링

## 이벤트란?
* 사용자가 웹 브라우저 에서 DOM 요소들과 상호 작용하는 것

## 이벤트를 사용할 때 주의 사항
* 이벤트 이름은 커멜 표기법으로 작성
    - ex) onclick -> onClick, onkeyup -> onKeyUP

* 이벤트에 실행할 자바스크립트 코드를 전달하는 것이 아니라, 함수 형태의 값을 전달
    - HTML에서는 " "안에 실행할 코드를 넣었지만, 리액트에서는 함수 형태의 객체를 전달

* DOM 요소에만 이벤트를 설정할 수 있음
    - div, button, input, form, span등 DOM 요소에 이벤트를 설정

## onKeyPress vs onKeyDown
<table style="text-align: center;">
    <tbody>
        <tr>
            <th>onKeyPress</th><th>onKeyDown</th>
        </tr>
        <tr>
            <td colspan="2">키를 눌렀을 때 이벤트 발생</td>
        <tr>
        <tr>
            <td>ASCII 값</td>
            <td>Keycode값</td>
        <tr>
    </tbody>
</table>