import React from 'react';
import { connect } from 'react-redux';
import { clearItem } from '../../redux/cart/cart.actions';

import './checkout-item.styles.scss';

const CheckoutItem = ({ item, clearItem }) => (
    <div className='checkout-item'>
        <div className='image-container'>
            <img src={item.imageUrl} alt={item.name} />
        </div>
        <span className='name'>{item.name}</span>
        <span className='quantity'>{item.quantity}</span>
        <span className='price'>{item.price}</span>
        <div className='remove-button' onClick={() => clearItem(item.id)}>&#10005;</div>
    </div>
);

const mapDispatchToProps = dispatch => ({
    clearItem: itemId => dispatch(clearItem(itemId))
});
export default connect(null, mapDispatchToProps)(CheckoutItem);
