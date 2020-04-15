import { cartActionTypes } from './cart.types';
import { addItemToCart } from './cart.utils';

const initState = {
    dropDownVisible: false,
    items: []
};
const cartReducer = (state = initState, action) => {
    switch (action.type) {
        case cartActionTypes.toggleDropDown:
            return {
                ...state,
                dropDownVisible: !state.dropDownVisible
            };
        case cartActionTypes.addItem:
            return {
                ...state,
                items: addItemToCart(state.items, action.payload)
            };
        default:
            return state;
    }
};

export default cartReducer;
