import React from "react";
import { connect } from 'react-redux';
import './collection-item.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import { addItem } from '../../redux/cart/cart.actions';

const CollectionItem = ({ item, addToCart }) => {
    const { name, price, imageUrl } = item;
    return (
        <div className='collection-item'>
            <div className='image' style={{backgroundImage: `url(${imageUrl})`}}/>
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <CustomButton inverted onClick={() => addToCart(item)}>Add to cart</CustomButton>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    addToCart: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);
