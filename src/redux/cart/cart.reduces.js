import { CartActionTypes } from './cart.type';

const cartReducer = ( state = { hidden: true }, action ) => {
    const { hidden } = state;
    const { type } = action;

    switch ( type ) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !hidden
            }
        default:
            return state;
    }
}

export default cartReducer;