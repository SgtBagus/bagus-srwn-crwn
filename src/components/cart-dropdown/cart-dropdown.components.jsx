import React from 'react';
import { connect } from 'react-redux';

import { selectCartItems } from '../../redux/cart/cart.selectors';

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

const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state),
})

export default connect(mapStateToProps)(CardDropdown);