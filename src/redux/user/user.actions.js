import { userActionTypes } from './user.types';

export const setCurrentUser = user => ({
    type: userActionTypes.setCurrentUser,
    payload: user
});

export const signInStart = data => ({
    type: userActionTypes.signInStart,
    payload: data
});

export const signInSuccess = user => ({
    type: userActionTypes.signInSuccess,
    payload: user
});

export const signInFailure = error => ({
    type: userActionTypes.signInFailure,
    payload: error
});

export const signOut = () => ({
    type: userActionTypes.signOut
});
