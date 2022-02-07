import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  firestore, convertCollectionSnapshotToMap,
} from '../../firebase/firebase.utils.js';
import { updateCollections } from '../../redux/shop/shop.actions';

import WithSpinner from '../../components/with-spinner/with-spinner.component.js';
import CollectionOverview from '../../components/collection-overview/collection-overview.components';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionOverview);

class ShopPage extends Component {
    state = {
        loading: true,
    };

    unsubscribeFromSnapshot = null;
  
    componentDidMount = () => {
        const { updateCollections } = this.props;
        const collectionRef = firestore.collection('collections');
        
        collectionRef.get().then(async snapshot => {
            const collectionMap = convertCollectionSnapshotToMap(snapshot);
            updateCollections(collectionMap);
            this.setState({ loading: false });
        });
    }
 
    render () {
        const { loading } = this.state;
        return (
            <div className="shop-page">
                <CollectionsOverviewWithSpinner isLoading={loading}/>
            </div>
        )
    }  
}

const mapDispatchToProps = (dispatch) => ({
    updateCollections: (collectionsMap) => dispatch(updateCollections(collectionsMap)),
});
  
export default connect(null, mapDispatchToProps)(ShopPage);
