import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
import { selectIsCollectionFetching, selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors';

import WithSpinner from '../../components/with-spinner/with-spinner.component.js';
import CollectionOverview from '../../components/collection-overview/collection-overview.components';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionOverview);

class ShopPage extends Component {
    componentDidMount = () => {
        const { fetchCollectionsStartAsync } = this.props;
        fetchCollectionsStartAsync();
    }
 
    render () {
        const { isCollectionsLoaded } = this.props;
        return (
            <div className="shop-page">
                <CollectionsOverviewWithSpinner isLoading={isCollectionsLoaded}/>
            </div>
        )
    }  
}

const mapStateToProps = createStructuredSelector({
    isCollectionFetching: selectIsCollectionFetching,
    isCollectionsLoaded: selectIsCollectionsLoaded,
})

const mapDispatchToProps = (dispatch) => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});
  
export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
