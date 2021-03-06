import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.items
);

export const selectCartItemsQty = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((acc, item) => acc + item.quantity, 0)
);


export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0)
);

export const selectCartDropDownVisible = createSelector(
    [selectCart],
    cart => cart.dropDownVisible
);
