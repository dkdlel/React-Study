import axios from 'axios';
const URL = 'http://devapi.ajoonamu.com/api'

export const postLogin = async ({ email, password }) => {
    const REQUEST_URL = URL + '/user/login';

    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);

    const res = await axios.post(REQUEST_URL, formData);
    return res;
}

export const postGetLoginInfo = async (token) => {
    const REQUEST_URL = URL + '/user/me';

    axios.defaults.headers['Content-Type'] = 'application/json';
    axios.defaults.headers['Authorization'] = `Bearer ${token}`;

    const res = await axios.post(REQUEST_URL);
    return res;
}