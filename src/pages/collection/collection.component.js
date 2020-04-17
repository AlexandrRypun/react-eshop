import React from 'react';
import { connect } from 'react-redux';

import CollectionItem from '../../components/collection-item/collection-item.component';
import { selectShopCollection } from '../../redux/shop/shop.selectors';
import './collection.styles.scss';

const CollectionPage = ({ collection }) => (
    <div className='collection-page'>
        <h1 className='title'>{collection.name}</h1>
        <div className='items'>
            {
                collection.items.map(collectionItem => (<CollectionItem key={collectionItem.id} item={collectionItem} />))
            }
        </div>
    </div>
);

const mapStateToProps = (state, ownProps) => ({
    collection: selectShopCollection(Number(ownProps.match.params.collectionId))(state)
});
export default connect(mapStateToProps)(CollectionPage);
