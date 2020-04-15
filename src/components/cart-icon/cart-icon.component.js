import React from 'react';
import { connect } from 'react-redux';

import {toggleDropDownVisibility} from '../../redux/cart/cart.actions';
import { ReactComponent as ShoppingIcon} from '../../assets/cart-icon.svg';
import './cart-icon.styles.scss';

const CartIcon = ({ items, toggleVisible }) => (
    <div className='cart-icon' onClick={toggleVisible}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>{items.reduce((acc, item) => acc + item.quantity, 0)}</span>
    </div>
);

const mapStateToProps = state => ({
    items: state.cart.items
});
const mapDispatchToProps = dispatch => ({
    toggleVisible: () => dispatch(toggleDropDownVisibility())
});
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
