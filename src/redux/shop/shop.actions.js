import { firestore, convertCollectionSnapshotToMap } from '../../firebase/firebase.utils';

import ShopActionTypes from './shop.types';

export const fetchCollectionsStart = () => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = collectionsMap => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap,
});

export const fetchCollectionsFailure = errorMessage => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage,
})

export const fetchCollectionsStartAsync = () => {
    return dispatch => {
        const collectionRef = firestore.collection('collections');
        dispatch(fetchCollectionsStart());
        
        collectionRef.get().then(async snapshot => {
            const collectionMap = convertCollectionSnapshotToMap(snapshot);
            dispatch(fetchCollectionsSuccess(collectionMap));
        }).catch(err => dispatch(fetchCollectionsSuccess(err.message)));
    }
}