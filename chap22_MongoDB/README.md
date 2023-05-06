# mongoose를 이용한 MongoDB 연동 실습

## MongoDB
* RDBMS(관계형 데이터베이스)의 한계를 극복한 문서 지향적 NoSQL 데아터베이스
    - 유동적인 스키마를 지닐 수 있음
    - 종류가 같은 데이터라도, 새로 등록해야 할 데이터 형식이 바뀐다 하더라도 기존 데이터까지 수정할 필요 없음
    - 서버의 데ㅣ터양이 늘어나도 여러 컴퓨터로 분산하여 처리할 수 있도록 확장하기 쉽게 설계
    - 데이터의 구조가 자주 바뀔때 유리
    - ACID 특성을 지킬때는 불리
        + 원자성(Atomicity), 일관성(Consistency), 고립성(Isolation), 지속성(Durability)
        + DB 트랜잭션이 안전하게 처리되는 것을 보장하기 위한 성질

## RDBMS(관계형 데이터베이스)
* MySQL, OracleDB, PostgreSQL
* RDBMS 한계
    - 데이터 스키마가 고정적
        + 스키마 : DB에 어떤 형식의 데이터를 넣을지에 대한 정보
    - 확장성
        + 처리해야 할 데이터양이 늘어나면 여러 컴퓨터에 분산시키는 것이 아닌 DB 서버의 성능을 업그레이드하는 방식으로 확장 해주어야 함

## 문서란?
* RDBMS의 레코드(raw)와 개념이 비슷
* 문서의 데이터 구조는 한 개 이상의 키-값 쌍으로 되어 있음
* BSON(바이너리 형태의 JSON) 형태로 저장

## 컬렉션이란?
* 여러 문서가 들어 있는 곳
* RDBMS의 테이블 개념을 사용, 각 테이블 마다 같은 스키마를 가지고 있어야 함

## 서브다큐먼트란?
* 문서 내부에 또 다른 문서가 위치하는 것
* 일반 문서를 다루는 것처럼 퀴리할 수 있음

## 설치 및 실행
* 설치
```
brew tap mongodb/brew
brew install mongodb-community@4.2
brew services start mongodb-community@4.2
```
* 실행
```
mongo
```

## dotenv
* 환경변수들을 파일에 넣고 사용할 수 있게 하는 개발 도구
* 민감하거나 환경별로 달라질 수 있는 값은 코드 안에 작성하지 않고, 환경변수로 설정하는 것이 좋음

## 스키마
* 스키마(schema) : 컬렉션ㅇ에 들어가는 문서 내부의 각 필드가 어떤 형식으로 되어 있는지 정의하는 객체

|타입|설명|
|:---:|:---:|
|String|문자열|
|Number|숫자|
|Date|날짜|
|Buffer|파일을 담을 수 있는 버퍼|
|Boolean|true or false|
|Mixed(Schema.Types.Mixed)|어떤 데이터도 넣을 수 있는 형식|
|ObjectId(Schema.Types.ObjectId)|객체 아이디. 주로 다른 객체를 참조할 때 넣음|
|Array|배열 형태의 값으로 []로 감싸서 사용|

## 모델
* 모델(model): 스키마를 사용하여 만드는 인스턴스, DB에서 실제 작업을 처리할 수 있는 함수들을 지니고 있는 객체
* model()
    - 첫 번째 파라미터 : 스키마 이름
    - 두 번째 파라미터 : 스키마 객체
    - 세 번째 파라미터 : 컨벤션을 따르고 싶지 않을 때 원하는 이름을 입력

## MongooDB Compass의 설치 및 사용
* window : MongoDB 설치할 때 같이 설치
* macOS, 리눅스 : https://www.mongodb.com/download-center/compass

## 데이터 생성과 조회

### 데이터 생성
* 인스턴트를 만들 때 new 키워드를 사용, 생성자 함수의 파라미터에 정보를 지닌 객체를 넣음
* save() 함수를 실행시켜야 데이터베이스에 저장
* async/await과 try/catch문을 사용하여 대기할 수 있음

### 데이터 조회
* find() : 데이터 조회 시 사용
* findById() : 특정 데이터 조회 시 사용
* find() 함수를 호출한 후에는 exec()를 붙여야 서버에 쿼리를 요청

### 데이터 삭제
* remove() : 특정 조건을 만족하는 데이터를 모두 지움
* findByIdAndRemove() : id를 찾아서 지움
* findOneAndRemove() : 특정 조건을 만족하는 데이터 하나를 찾아서 제거

### 데이터 수정
* findByIdAndUpdate() : 데이터를 업데이트 시 사용
    - 첫 번째 파라미터 : id
    - 두 번째 파라미터 : 업데이트 내용
    - 세 번째 파라미터 : 업데이트 옵션

## 요청 검증

### ObjectId 검증
`````
import mongoose from 'mongoose';

const { ObjectId } = mongoose.Types;
ObjectId.isValid(id);
`````

* 미들웨어를 만들어서 중복 제거
`````
(...)
import mongoose from 'mongoose';

const { ObjectId } = mongoose.Types;

export const checkObjectid = (ctx, next) => {
    const { id } = ctx.params;
    if(!ObjectId.isValid(id)){
        ctx.status = 400; // Bad Request
        return;
    }
    return next();
};
(...)
`````

### Requesst Body 검증
* 객체를 수월하게 검증하기 위해 Joi 라이브러리 사용
`````
yarn add joi
`````

* 사용 예
`````
(...)
import Joi from 'joi';

(...)
export const write = async ctx => {
    const schema = Joi.object().keys({
        // 객체가 다음 필드를 가지고 있음을 검증
        title: Joi.string().required(), // required()가 있으면 필수 항목
        body: Joi.string().required(),
        tags: Joi.array()
            .items(Joi.string())
            .required(), // 문자열로 이루어진 배열
    });

    // 검증하고 나서 검증 실패인 경우 에러 처리
    const result = schema.validate(ctx.request.body);
    if(result.error){
        ctx.status = 400; // Bad Request
        ctx.body = result.error;
        return;
    }
    (...)
}
`````

## 페이지네이션 구현

### 보이는 개수 제한
* limit() : 개수를 제한할 때 사용
    - 파라미터 : 제한할 숫자

### 페이지 기능 구현
* skip() : 파라미터 값을 제외하고 그다음 데이터를 불러옴
    - 파라미터 : 제외할 갯수

### 마지막 페이지 번호 알려 주기
* Response 헤더 중 Link를 설정하는 방법, 커스텀 헤더를 설정하는 방법으로 알려 줄 수 있음
`````
ctx.set('Last-page', Math.ceil(postCoung / 10));
`````

### 내용 길이 제한
* lean() : 데이터를 처음부터 JSON 형태로 조회
* 사용 예시
`````
(...)
ctx.body = posts.map(post => ({
    ...post,
    body: post.body.length < 200 ? post.body : `${post.body.slice(0, 200)}...`,
}));
(...)
`````