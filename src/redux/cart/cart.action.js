import { CartActionTypes } from './cart.type';

export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
})

export const addItem = (payload) => ({
    type: CartActionTypes.ADD_ITEM,
    payload,
})

export const removeItem = (payload) => ({
    type: CartActionTypes.REMOVE_ITEM,
    payload,
})

export const clearItemFromCart = (payload) => ({
    type: CartActionTypes.CLEAR_ITEM_FROM_CART,
    payload,
})