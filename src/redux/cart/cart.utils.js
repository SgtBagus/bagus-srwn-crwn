export const addItemToCart = (cartItems, cartItemToAdd) => { 
    const existingCartItems = cartItems.find(x => x.id === cartItemToAdd.id);
    
    if(existingCartItems) {
        return cartItems.map(x => 
            x.id === cartItemToAdd.id
            ? { ...x, quantity: x.quantity + 1 }
            : x
        )
    }

    return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
}