import ShopActionTypes from './shop.types';

const shopReducer = (
    state = {
        collections: null,
        isFetching: false,
        errorMessage: undefined,
    },
    action,
) => {
    const { payload, type } = action;
    switch (type) {
        case ShopActionTypes.FETCH_COLLECTIONS_START:
            return {
                ...state,
                isFetching: true,
            }
        case ShopActionTypes.FETCH_COLLECTIONS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                collections: payload,
            }
        case ShopActionTypes.FETCH_COLLECTIONS_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: payload,
            }
        default: 
            return state;
    }
}

export default shopReducer;