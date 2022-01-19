import { CartActionTypes } from './cart.type';
import { addItemToCart, removeItemFromCart } from './cart.utils'

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
        case CartActionTypes.REMOVE_ITEM:
            return {
                ...state,
                cartItems: removeItemFromCart(cartItems, payload)
            }
        case CartActionTypes.CLEAR_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: cartItems.filter(x => x.id !== payload.id)
            }
        default:
            return state;
    }
}

export default cartReducer;