import { combineReducers } from 'redux';

import userReducer from './user/user.reduces';
import cartReducer from './cart/cart.reduces';

export default combineReducers({
    user: userReducer,
    cart: cartReducer
});