import React from 'react';
import { connect } from 'react-redux';

import {toggleDropDownVisibility} from '../../redux/cart/cart.actions';
import { ReactComponent as ShoppingIcon} from '../../assets/cart-icon.svg';
import './cart-icon.styles.scss';

const CartIcon = ({ toggleVisible }) => (
    <div className='cart-icon' onClick={toggleVisible}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>0</span>
    </div>
);

const mapDispatchToProps = dispatch => ({
    toggleVisible: () => dispatch(toggleDropDownVisibility())
});
export default connect(null, mapDispatchToProps)(CartIcon);
