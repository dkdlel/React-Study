# 일정 관리 웹 애플리케이션 만들기

## 기본설정
1. .prettierrc
```
{
    "singleQuote": true,
    "semi": true,
    "useTabs": false,
    "tabWidth": 2,
    "trailingComma": "all",
    "printWidth": 80
}
```

2. index.css
```
{
    body{
        margin: 0;
        padding: 0;
        background: #e9ecef;
    }
}
```

3. UI
* TodoTemplate : 화면을 가운데 정렬, 앱 타이틀을 보여줌
* TodoInsert : 새로운 항목을 입력하고 추가할 수 있는 컴포넌트
* TodoListItem : 각 할 일 항목에 대한 정보를 보여 주는 컴포넌트
* TodoList : todos 배열을 props로 받아 온 후, TodoListItem 컴포넌트로 변환

4. 리액트 개발자 도구
* 크롬 웹 스토어에서 React Developer Tools 검색
* 크롬 웹 스토어 : https://chrome.google.com/webstore/category/extensions