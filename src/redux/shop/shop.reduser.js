import ShopActionTypes from './shop.types';

const shopReducer = (state = { collections: null }, action) => {
    const { payload, type } = action;
    switch (type) {
        case ShopActionTypes.UPDATE_COLLECTIONS:
            return {
                ...state,
                collections: payload,
            }
        default: 
            return state;
    }
}

export default shopReducer;