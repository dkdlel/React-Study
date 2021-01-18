import axios from 'axios';
const URL = 'http://devapi.ajoonamu.com/api'

/* 로그인 */
export const postLogin = async ({ email, password }) => {
    const REQUEST_URL = URL + '/user/login';

    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);

    const res = await axios.post(REQUEST_URL, formData);
    return res;
}

/* 회원가입 */
export const postRegister = async ({ email, password, password_confirm, agree_marketing }) => {
    const REQUEST_URL = URL + '/user/register';

    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);
    formData.append('password_confirm', password_confirm);
    formData.append('agree_marketing', agree_marketing);

    const res = await axios.post(REQUEST_URL, formData);
    return res;
}

/* 토큰 새로 고침 */
export const postTokenRefresh = async (token) => {
    const REQUEST_URL = URL + 'user/refresh';

    axios.defaults.headers['Content-Type'] = 'application/json';
    axios.defaults.headers['Authorization'] = `Bearer ${token}`;

    const res = await axios.post(REQUEST_URL);
    return res;
}

/* 로그인 정보 가져오기 */
export const postGetLoginInfo = async (token) => {
    const REQUEST_URL = URL + '/user/me';

    axios.defaults.headers['Content-Type'] = 'application/json';
    axios.defaults.headers['Authorization'] = `Bearer ${token}`;

    const res = await axios.post(REQUEST_URL);
    return res;
}

/* 로그아웃 */
export const postLogout = async (token) => {
    const REQUEST_URL = URL + '/user/logout';

    axios.defaults.headers['Content-Type'] = 'application/json';
    axios.defaults.headers['Authorization'] = `Bearer ${token}`;

    const res = await axios.post(REQUEST_URL);
    return res;
}