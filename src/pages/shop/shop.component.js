import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import WithSpinner from '../../components/with-spinner/with-spinner.component';
import CollectionPage from '../collection/collection.component';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import { updateCollections } from '../../redux/shop/shop.actions';

import SHOP_DATA from './shop.data';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
    state = {
        isLoading: true
    };

    async componentDidMount() {
        const { updateCollections } = this.props;
        const collections = await new Promise(res => setTimeout(() => res(SHOP_DATA), 2000));
        updateCollections(collections);
        this.setState({ isLoading: false });
    }

    render() {
        const { match } = this.props;
        return (
            <div className='shop-page'>
                <Route exact path={match.path} render={props => (<CollectionsOverviewWithSpinner isLoading={this.state.isLoading} {...props} />)} />
                <Route path={`${match.path}/:collectionId`} render={props => (<CollectionPageWithSpinner isLoading={this.state.isLoading} {...props} />)} />
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    updateCollections: collections => dispatch(updateCollections(collections))
});
export default connect(null, mapDispatchToProps)(ShopPage);
