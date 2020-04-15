import React from 'react';
import { connect } from 'react-redux';
import { clearItem, addItem, removeItem } from '../../redux/cart/cart.actions';

import './checkout-item.styles.scss';

const CheckoutItem = ({ item, addItem, removeItem, clearItem }) => (
    <div className='checkout-item'>
        <div className='image-container'>
            <img src={item.imageUrl} alt={item.name} />
        </div>
        <span className='name'>{item.name}</span>
        <span className='quantity'>
            <div className='arrow' onClick={() => removeItem(item.id)}>&#10094;</div>
            <span className='value'>{item.quantity}</span>
            <div className='arrow' onClick={() => addItem(item)}>&#10095;</div>
        </span>
        <span className='price'>{item.price}</span>
        <div className='remove-button' onClick={() => clearItem(item.id)}>&#10005;</div>
    </div>
);

const mapDispatchToProps = dispatch => ({
    clearItem: itemId => dispatch(clearItem(itemId)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item)),
});
export default connect(null, mapDispatchToProps)(CheckoutItem);
