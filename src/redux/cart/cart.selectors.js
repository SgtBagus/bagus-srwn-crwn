import { createSelector } from 'reselect';

const selectCart = (state) => {
    const { cart } = state;
    return cart;
}

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => {
      const { cartItems } = cart;
      return cartItems;
  }
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity,
      0
    )
);