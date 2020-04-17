import { shopActionTypes } from './shop.types';
const initState = {
    collections: null
}

const shopReducer = (state = initState, action) => {
    switch (action.type) {
        case shopActionTypes.updateCollections:
            return {
                ...state,
                collections: action.payload
            };
        default:
            return state;
    }
}

export default shopReducer;
