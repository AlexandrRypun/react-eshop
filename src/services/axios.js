import axios from 'axios';
import { refreshTokens } from './auth';

axios.interceptors.request.use(config => {
    config.baseURL = `${process.env.REACT_APP_API_DOMAIN}/`;

    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
}, error => {
    if (error) {

    }
    return Promise.reject(error);
});

axios.interceptors.response.use(response => {
    return response;
}, async error => {
    if (error.response && error.response.status === 401) {
        const s = await refreshTokens();
        if (s) {
            return axios.request(error.config);
        }
    }
    return Promise.reject(error);

});

export default axios;
