import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.components';

import './cart-dropdown.style.scss';

const CardDropdown = ({ cartItems }) => (
    <div className="cart-dropdown">
        <div className="cart-item">
            {
                cartItems.map(x => (
                    <CartItem key={x.id} item={x} />
                ))
            }
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
)

const mapStateToProps = ({ cart: { cartItems } }) => ({
    cartItems,
})

export default connect(mapStateToProps)(CardDropdown);