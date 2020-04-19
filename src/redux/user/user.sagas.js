import { takeLatest, put, all, call } from 'redux-saga/effects';
import jwtDecode from 'jwt-decode';

import axios from '../../services/axios';
import { userActionTypes } from './user.types';
import { signInFailure, signInSuccess } from './user.actions';

export function* signIn(action) {
    try {
        const { email, password } = action.payload;
        const response = yield axios.post('auth/signin', { email, password });
        const { accessToken, refreshToken } = response.data;
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);
        const user = jwtDecode(accessToken);
        yield put(signInSuccess(user));
    } catch (e) {
        yield put(signInFailure(e.message));
    }
}

export function* onSignInStart() {
    yield takeLatest(userActionTypes.signInStart, signIn)
}

export default function* userSagas() {
    yield all([call(onSignInStart)]);
}
