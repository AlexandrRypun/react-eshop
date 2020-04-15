import { cartActionTypes } from './cart.types';

const initState = { dropDownVisible: false };
const cartReducer = (state = initState, action) => {
    switch (action.type) {
        case cartActionTypes.toggleDropDown:
            return {
                ...state,
                dropDownVisible: !state.dropDownVisible
            };
        default:
            return state;
    }
};

export default cartReducer;
