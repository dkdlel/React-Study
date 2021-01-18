import React, { useEffect } from 'react';
import { unstable_batchedUpdates } from 'react-dom';
import Sample from '../components/Sample';
import { connect } from 'react-redux';
import { getPost, getUsers } from '../modules/sample'

// const SampleContainer = ({ getPost, getUsers, post, users, loadingPost, loadingUsers }) => {
//     useEffect(() => {
//         getPost(1);
//         getUsers(1);
//     }, [getPost, getUsers]);
//     return (
//         <Sample post={post} users={users} loadingPost={loadingPost} loadingUsers={loadingUsers} />
//     )
// }

// export default connect(({ sample }) => ({
//     post: sample.post,
//     users: sample.users,
//     loadingPost: sample.loading.GET_POST,
//     loadingUsers: sample.loading.GET_USERS
// }), { getPost, getUsers })(SampleContainer);

/* 18.3.1.5 리팩토링 */
const SampleContainer = ({ getPost, getUsers, post, users, loadingPost, loadingUsers }) => {
    useEffect(() => {
        getPost(1);
        getUsers(1);
    }, [getPost, getUsers]);
    return (
        <Sample post={post} users={users} loadingPost={loadingPost} loadingUsers={loadingUsers} />
    )
}

export default connect(({ sample, loading }) => ({
    post: sample.post,
    users: sample.users,
    loadingPost: loading['sample/GET_POST'],
    loadingUsers: loading['sample/GET_USERS']
}), { getPost, getUsers })(SampleContainer);