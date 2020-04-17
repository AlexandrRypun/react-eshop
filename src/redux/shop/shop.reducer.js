import { shopActionTypes } from './shop.types';
const initState = {
    collections: null,
    isFetching: false,
    errorMessage: ''
}

const shopReducer = (state = initState, action) => {
    switch (action.type) {
        case shopActionTypes.fetchCollectionsStart:
            return {
                ...state,
                isFetching: true
            };
        case shopActionTypes.fetchCollectionsSuccess:
            return {
                ...state,
                isFetching: false,
                collections: action.payload
            };
        case shopActionTypes.fetchCollectionsFailure:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            };
        default:
            return state;
    }
}

export default shopReducer;
