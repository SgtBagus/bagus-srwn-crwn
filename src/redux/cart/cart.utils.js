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