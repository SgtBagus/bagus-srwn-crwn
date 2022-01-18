import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { useNavigate } from 'react-router-dom';

import { selectCartItems } from '../../redux/cart/cart.selectors';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.components';

import './cart-dropdown.style.scss';

const CardDropdown = ({ cartItems, history }) => {
    const navigate = useNavigate();
    return (
        <div className="cart-dropdown">
            <div className="cart-item">
                {
                    cartItems.length ?
                    (
                        cartItems.map(x => (
                            <CartItem key={x.id} item={x} />
                        ))
                    ) : (
                        <span className="empty-message"> Your cart is empty </span>
                    )
                }
            </div>
            <CustomButton
                onClick={() => navigate('/checkout')}
            >
                GO TO CHECKOUT
            </CustomButton>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
})

export default connect(mapStateToProps)(CardDropdown);