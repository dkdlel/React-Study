/* 20.4.2 Users, UsersContainer 컴포넌트 준비하기 */
// import React from 'react';
// import UsersContainer from '../containers/UsersContainer';

// const UsersPage = () => {
//     return <UsersContainer />;
// };

// export default UsersPage;

/* 20.4.6 redux-saga 코드 준비하기 */
import React from 'react';
import { Route } from 'react-router';
import UserContainer from '../containers/UserContainer';
import UsersContainer from '../containers/UsersContainer';

const UsersPage = () => {
    return (
        <>
            <UsersContainer />
            <Route path="/users/:id" render={({ match }) => <UserContainer id={match.params.id} />} />
        </>
    )
}

export default UsersPage;