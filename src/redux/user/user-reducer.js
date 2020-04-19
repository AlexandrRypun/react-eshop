import { userActionTypes } from './user.types';

const INITIAL_STATE = { user: null, error: null };
const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case userActionTypes.setCurrentUser:
        case userActionTypes.signInSuccess:
            return {
                ...state,
                user: action.payload,
                error: null
            };
        case userActionTypes.signInFailure:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
};

export default userReducer;
