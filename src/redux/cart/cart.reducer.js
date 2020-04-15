import { cartActionTypes } from './cart.types';
import { addItemToCart, removeItemFromCart } from './cart.utils';

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
        case cartActionTypes.removeItem:
            return {
                ...state,
                items: removeItemFromCart(state.items, action.payload)
            };
        case cartActionTypes.clearItem:
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload)
            };
        default:
            return state;
    }
};

export default cartReducer;
