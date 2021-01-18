import React from 'react';
import { NavLink, Link, Route } from 'react-router-dom';
import Profile from './Profile'
import WithRouterSample from './WithRouterSample';

// export default ({ }) => {

//     return (
//         <div>
//             <h3>사용자 목록:</h3>
//             <ul>
//                 <li>
//                     <Link to="/profiles/velopert">velopert</Link>
//                 </li>
//                 <li>
//                     <Link to="/profiles/gildong">gildong</Link>
//                 </li>
//             </ul>

//             <Route
//                 path="/profiles"
//                 exact // default : true
//                 render={() => <div>사용자를 선택해 주세요.</div>} // 컴포넌트 자체를 전달하는 것이 아닌 보여 주고 싶은 JSX를 넣어 줄 수 있음
//             />
//             <Route path="/profiles/:username" component={Profile} />
//         </div>
//     )
// }

/* 13.6.2 withRouter */
// export default ({ }) => {

//     return (
//         <div>
//             <h3>사용자 목록:</h3>
//             <ul>
//                 <li>
//                     <Link to="/profiles/velopert">velopert</Link>
//                 </li>
//                 <li>
//                     <Link to="/profiles/gildong">gildong</Link>
//                 </li>
//             </ul>

//             <Route
//                 path="/profiles"
//                 exact // default : true
//                 render={() => <div>사용자를 선택해 주세요.</div>} // 컴포넌트 자체를 전달하는 것이 아닌 보여 주고 싶은 JSX를 넣어 줄 수 있음
//             />
//             <Route path="/profiles/:username" component={Profile} />
//             {/* <WithRouterSample /> */}
//             {/* 
//             match 객체에 params가 비어있음. withRouter를 사용하면 현재 자신이 보여 주고 있는 라우트 컴포넌트(Profiles)를 기준으로 match가 전달
//             Profiles를 위한 라우트 설정할 때는 path="/profiles"라고만 입력해서 username 파라미터를 읽어 오지 못함.
//             Profile 컴포넌트에 넣으면 파라미터가 제대로 나옴
//             */}
//         </div>
//     )
// }

/* 13.6.4 NavLink */
export default ({ }) => {
    const activeStyle = {
        background: 'black',
        color: 'white'
    };
    return (
        <div>
            <h3>사용자 목록:</h3>
            <ul>
                <li>
                    <NavLink activeStyle={activeStyle} to="/profiles/velopert" active>
                        velopert
                    </NavLink>
                </li>
                <li>
                    <NavLink activeStyle={activeStyle} to="/profiles/gildong" active>
                        gildong
                    </NavLink>
                </li>
            </ul>

            <Route
                path="/profiles"
                exact
                render={() => <div>사용자를 선택해 주세요.</div>}
            />
            <Route path="/profiles/:username" component={Profile} />
        </div>
    )
}