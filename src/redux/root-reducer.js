import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reduces';
import cartReducer from './cart/cart.reduces';
import directoryReducer from './directory/directory.reduser';
import shopReducer from './shop/shop.reduser';

const persistConfig = {
    key: 'root',
    storage,
    whiteList: ['cart'],
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer,
});

export default persistReducer(persistConfig, rootReducer);