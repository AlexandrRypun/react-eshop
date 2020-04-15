import React from 'react';
import { connect } from 'react-redux';

import './checkout.styles.scss';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';
import { removeItem } from '../../redux/cart/cart.actions';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

const CheckoutPage = ({ items, total }) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>
        {
            items.map(item => (<CheckoutItem key={item.id} item={item}/>))
        }
        <div className='total'><span>TOTAL:{total}</span></div>
    </div>
);

const mapStateToProps = createStructuredSelector({
    items: selectCartItems,
    total: selectCartTotal
});
const mapDispatchToProps = dispatch => ({
    removeItem: itemId => dispatch(removeItem(itemId))
});
export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage);
