import React from 'react';
import { Route, Link, Switch } from 'react-router-dom'
import Home from './Home';
import About from './About';
import Profile from './Profile';
import Profiles from './Profiles';
import HistorySample from './HistorySample';

/* 13.1 SPA 란? */
// SPA(Single Page Application) : 한개의 페이지로 이루어진 애플리케이션
// 라우팅 : 다른 주소에 다른 화면을 보여 주는 것
// 리액트 라우터 : 클라이언트 사이드에서 이루어지는 라우팅을 아주 간단하게 구현

/* 13.1.1 SPA의 단점 */
// 앱의 규모가 커지면 js파일도 커진다

/* 13.2.1 라우터 라이브러리 설치 */
// yarn add react-router-dom

/* 13.2.2 프로젝트에 라우터 적용 */
// index.js에 import{BrowserRouter} from 'react-router-dom';

/* 13.2.3 페이지 만들기 */
// Home.js, About.js

/* 13.2.4 Route 컴포넌트로 특정 주소에 컴포넌트 연결 */
// Route 컴포넌트를 사용하면 어떤 규칙을 가진 경로에 어떤 컴포넌트를 보여 줄지 정의할 수 있음.
// 사용법 : <Route path="주소규칙" component={보여 줄 컴포넌트} />

// export default () => {

//   return (
//     <div>
//       <Route path="/" component={Home} exact={true} />
//       {/* /about경로와 / 규칙에도 일치하기 때문에 about을 들어가도 home이 같이 나옴. 따라서 Home에 exact라는 props를 true로 설정 */}
//       <Route path="/about" component={About} />
//     </div>
//   )
// }

/* 13.2.5 Link 컴포넌트를 사용하여 다른 주소로 이동하기 */
// Link : 클릭하면 다른 주소로 이동시켜 주는 컴포넌트, 컴포넌트 자체는 a태그로 이루어져 있지만, 페이지 전환을 방지하는 기능이 내장되어 있음.
// a태그 : 페이지를 새로 불러오기 때문에 애플리케이션이 들고 있던 상태들을 모두 날려 버리게 됨. 렌더링된 컴포넌트들도 모두 사라지고 처음부터 렌더링 하게 됨
// Link 컴포넌트를 사용하여 페이지를 전환하면, 페이지를 새로 불러오지 않고 애플리케이션은 그대로 유지한 상태에서 페이지의 주소만 변경
// 사용법 : <Link to="주소">내용</Link>

// export default ({ }) => {
//   return (
//     <div>
//       <ul>
//         <li>
//           <Link to="/">홈</Link>
//         </li>
//         <li>
//           <Link to="/about">소개</Link>
//         </li>
//       </ul>
//       <hr />
//       <Route path="/" component={Home} exact={true} />
//       <Route path="/about" component={About} />
//     </div>
//   )
// }

/* 13.3 Route 하나에 여러 개의 path 설정하기 */
// export default () => {

//   return (
//     <div>
//       <Route path="/" component={Home} exact={true} />
//       <Route path={['/about', '/info']} component={About} />
//       {/* <Route path="/about" component={About} /> */}
//       {/* <Route path="/info" component={About} /> */}

//     </div>
//   )
// }

/* 13.4 URL 파라미터와 쿼리 */
// 파라미터 예시 : /profiles/velopert
// 쿼리 예시 : /about?details=true

/* 13.4.1 URL 파라미터 */
// Profile.js

// export default ({ }) => {
//   return (
//     <div>
//       <ul>
//         <li>
//           <Link to="/">홈</Link>
//         </li>
//         <li>
//           <Link to="/about">소개</Link>
//         </li>
//         <li>
//           <Link to="/profile/velopert">velopert 프로필</Link>
//         </li>
//         <li>
//           <Link to="/profile/gildong">gildong 프로필</Link>
//         </li>
//       </ul>
//       <hr />
//       <Route path="/" component={Home} exact={true} />
//       <Route path={['/about', '/info']} component={About} />
//       {/* path 규칙에는 /profiles/:username이라고 넣으면 됨 */}
//       <Route path="/profile/:username" component={Profile} />
//     </div>
//   )
// }

/* 13.5 서브 라우트 */
// 서브 라우트 : 라우트 내부에 또 라우트를 정의하는 것
// Profiles 라우트 컴포넌트 안에 Profile 컴포넌트를 서브 라우트로 사용하도록 코딩
// Profiles.js

// export default ({ }) => {
//   return (
//     <div>
//       <ul>
//         <li>
//           <Link to="/">홈</Link>
//         </li>
//         <li>
//           <Link to="/about">소개</Link>
//         </li>
//         <li>
//           <Link to="/profiles">프로필</Link>
//         </li>
//       </ul>
//       <hr />
//       <Route path="/" component={Home} exact={true} />
//       <Route path={['/about', '/info']} component={About} />
//       <Route path="/profiles" component={Profiles} />
//     </div>
//   )
// }

/* 13.6 리액트 라우터 부가 기능 */
/* 13.6.1 history */
// history : 이 객체를 통해 컴포넌트 내에 구현하는 메서드에서 라우터 API를 호출할 수 있음
// HistorySample.js

// export default ({ }) => {
//   return (
//     <div>
//       <ul>
//         <li>
//           <Link to="/">홈</Link>
//         </li>
//         <li>
//           <Link to="/about">소개</Link>
//         </li>
//         <li>
//           <Link to="/profiles">프로필</Link>
//         </li>
//         <li>
//           <Link to="/history">History 예제</Link>
//         </li>
//       </ul>
//       <hr />
//       <Route path="/" component={Home} exact={true} />
//       <Route path={['/about', '/info']} component={About} />
//       <Route path="/profiles" component={Profiles} />
//       <Route path="/history" component={HistorySample} />
//     </div>
//   )
// }

/* 13.6.2 withRouter */
// withRouter 함수는 HoC(Higher-order Component)
// 라우트로 사용된 컴포넌트가 아니어도 match, location, history 객체 접근
// WithRouterSample.js

/* 13.6.3 Switch */
// Switch : 여러 Route를 감싸서 그중 일치하는 단 하나의 라우트만을 렌더링, 모든 규칙과 일치하지 않을 때 Not Found 페이지 구현도 가능

export default ({ }) => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profiles">프로필</Link>
        </li>
        <li>
          <Link to="/history">History 예제</Link>
        </li>
      </ul>
      <hr />
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path={['/about', '/info']} component={About} />
        <Route path="/profiles" component={Profiles} />
        <Route path="/history" component={HistorySample} />
        <Route
          // path를 따로 정의하지 않으면 모든 상황에 렌더링 됨
          render={({ location }) => (
            <div>
              <h2>이 페이지는 존재하지 않습니다:</h2>
              <p>{location.pathname}</p>
            </div>
          )}
        />
      </Switch>
    </div>
  )
}

/* 13.6.4 NaLink */
// NavLink : 현재 경로와 Link에서 사용하는 경로가 일치하는 경우 특정 스타일 or CSS 클래스를 적용할 수 있는 컴포넌트
// Profiles.js

