/* 20.4.6 redux-saga 코드 준비하기 */
import React from 'react';

const User = ({ user }) => {
    const { email, name, username } = user;
    return (
        <div>
            <h1>
                {username} ({name})
            </h1>
            <p>
                <b>email:</b> {email}
            </p>
        </div>
    )
}

export default User;