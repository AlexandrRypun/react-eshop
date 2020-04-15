import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/cart-item.component';

const CartDropdown = ({ items }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {items.map(item => (<CartItem key={item.id} item={item} />))}
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
);

const mapStateToProps = state => ({
    items: state.cart.items
});

export default connect(mapStateToProps)(CartDropdown);
