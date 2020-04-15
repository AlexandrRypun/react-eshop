import axios from 'axios';

export async function refreshTokens(redirectToLogin = true) {
    let redirect = false;
    const oldRefreshToken = localStorage.getItem('refreshToken');
    if (oldRefreshToken) {
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('accessToken');
        try {
            const response = await axios.put(`${process.env.REACT_APP_API_DOMAIN}/auth/refreshTokens`, {}, {
                headers: { RefreshToken: oldRefreshToken }
            });
            const { accessToken, refreshToken } = response.data;
            localStorage.setItem('accessToken', accessToken);
            localStorage.setItem('refreshToken', refreshToken);

            return true;
        } catch (e) {
            redirect = true;
        }
    } else {
        redirect = true;
    }
    if (redirect) {
        window.location.replace('/signin');
    }
    return false;
}
