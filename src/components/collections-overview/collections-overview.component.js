import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector} from 'reselect';

import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import { selectShopConnections } from '../../redux/shop/shop.selectors';

const CollectionsOverview = ({ collections }) => (
    <div className='collections-overview'>
        {
            collections.map(({id, ...rest}) => (
                <CollectionPreview key={id} {...rest} />
            ))
        }
    </div>
);

const mapStoreToProps = createStructuredSelector({
    collections: selectShopConnections
});
export default connect(mapStoreToProps)(CollectionsOverview);
