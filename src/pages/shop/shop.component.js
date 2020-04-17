import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector} from 'reselect';

import WithSpinner from '../../components/with-spinner/with-spinner.component';
import CollectionPage from '../collection/collection.component';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';
import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
    async componentDidMount() {
        const { fetchCollectionsStart } = this.props;
        fetchCollectionsStart();
    }

    render() {
        const { match, isFetching } = this.props;
        return (
            <div className='shop-page'>
                <Route exact path={match.path} render={props => (<CollectionsOverviewWithSpinner isLoading={isFetching} {...props} />)} />
                <Route path={`${match.path}/:collectionId`} render={props => (<CollectionPageWithSpinner isLoading={isFetching} {...props} />)} />
            </div>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    isFetching: selectIsCollectionFetching
});
const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});
export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
