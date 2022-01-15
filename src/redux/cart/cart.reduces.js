import { CartActionTypes } from './cart.type';
import { addItemToCart } from './cart.utils'

const cartReducer = (
    state = {
        hidden: true,
        cartItems: [],
    },
    action,
) => {
    const { hidden, cartItems } = state;
    const { type, payload } = action;

    switch ( type ) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !hidden
            }
        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(cartItems, payload)
            }
        default:
            return state;
    }
}

export default cartReducer;