export const addItemToCart = (cartItems, cartItemToAdd) => { 
    const existingCartItems = cartItems.find(x => x.id === cartItemToAdd.id);
    
    if(existingCartItems) {
        return cartItems.map(x => 
            x.id === cartItemToAdd.id
            ? { ...x,
                quantity: x.quantity + 1,
                subPrice: (x.quantity + 1) * x.price,
            }
            : x
        )
    }

    return [...cartItems, { ...cartItemToAdd, quantity: 1, subPrice: cartItemToAdd.price}]
}


export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(
      cartItem => cartItem.id === cartItemToRemove.id
    );
  
    if (existingCartItem.quantity === 1) {
      return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
    }
  
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
};