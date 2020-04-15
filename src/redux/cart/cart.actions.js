import { cartActionTypes } from './cart.types';

export const toggleDropDownVisibility = () => ({
    type: cartActionTypes.toggleDropDown
});

export const addItem = item => ({
    type: cartActionTypes.addItem,
    payload: item
});

export const removeItem = item => ({
    type: cartActionTypes.removeItem,
    payload: item
});
