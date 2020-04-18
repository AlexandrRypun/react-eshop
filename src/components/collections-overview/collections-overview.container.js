import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionsOverview from './collections-overview.component';
import WithSpinner from '../with-spinner/with-spinner.component';
import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors';

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionFetching
});
export default connect(mapStateToProps)(WithSpinner(CollectionsOverview));
