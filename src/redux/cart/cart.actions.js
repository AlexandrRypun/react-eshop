import { cartActionTypes } from './cart.types';

export const toggleDropDownVisibility = () => ({
    type: cartActionTypes.toggleDropDown
});

export const addItem = item => ({
    type: cartActionTypes.addItem,
    payload: item
});

export const removeItem = itemId => ({
    type: cartActionTypes.removeItem,
    payload: itemId
});

export const clearItem = itemId => ({
    type: cartActionTypes.clearItem,
    payload: itemId
});
