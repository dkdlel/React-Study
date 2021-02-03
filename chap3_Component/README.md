# 컴포넌트

## 컴포넌트의 기능
1. 데이터가 주어졌을 때 이에 맞추어 UI를 만들어 줌
2. 라이프사이클 API를 이용하여 컴포넌트가 화면에서 나타날 때, 사라질 때, 변화가 일어날 때 주어진 작업들을 처리
3. 임의 메서드를 만들어 특별한 기능을 붙여줄 수 있음

## 클래스형 컴포넌트 vs 함수형 컴포넌트
* 클래스형 컴포넌트
    - 라이프사이클 기능 사용, 임의 메서드를 정의
    - render 함수가 꼭 있어야 하고, JSX를 반환
* 함수형 컴포넌트
    - 클래스형 컴포넌트보다 선언하기가 훨씬 편함
    - 메모리 자원을 덜 사용
    - 배포시 결과물의 파일 크기가 더 작음
    - state와 라이프사이클 API의 사용이 불가능
        + Hooks를 통해 비슷한 작업 가능

## 모듈 내보내기 및 불러오기
* export : 모듈 내보내기
* import : 모듈 불러오기

## props
* properties를 줄인 표현으로 컴포넌트 속성을 설정할 때 사용하는 요소
* 부모 컴포넌트가 설정
* defaultProps
    ```
    functionName.defaultProps = {
        props: defaultValue,
    };
    ```
* propTypes, isRequired
    ```
    functionName.propTypes = {
        props: PropTypes.type,
        props: PropTypes.type.isRequired, // 필수 propTypes 설정
    };
    ```

## children
* 컴포넌트 태그 사이의 내용을 보여 주는 props

## 비구조화 할당(구조 분해 문법)
* 객체에서 값을 추출하는 문법
* 배열 비구조화 할당
    ```
    const array = [1,2]; const one = array[0]; const two = array[1];
    -> const array = [1,2]; const[one,two] = array;

## state
* 컴포넌트 내부에서 바뀔 수 있는 값
* 세터(Setter)함수 : 상태를 바꾸어 주는 함수
* spread 연산자(깊은 복사) : 객체에 대한 사본을 만듬(...)