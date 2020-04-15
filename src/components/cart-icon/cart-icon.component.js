import React from 'react';
import { connect } from 'react-redux';

import {toggleDropDownVisibility} from '../../redux/cart/cart.actions';
import { ReactComponent as ShoppingIcon} from '../../assets/cart-icon.svg';
import './cart-icon.styles.scss';
import { selectCartItemsQty } from '../../redux/cart/cart.selectors';

const CartIcon = ({ itemsQty, toggleVisible }) => (
    <div className='cart-icon' onClick={toggleVisible}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>{itemsQty}</span>
    </div>
);

const mapStateToProps = state => ({
    itemsQty: selectCartItemsQty(state)
});
const mapDispatchToProps = dispatch => ({
    toggleVisible: () => dispatch(toggleDropDownVisibility())
});
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
