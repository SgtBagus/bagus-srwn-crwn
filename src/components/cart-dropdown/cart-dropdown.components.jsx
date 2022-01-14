import React from 'react';

import CustomButton from '../custom-button/custom-button.component';

import './cart-dropdown.style.scss';

const CardDropdown = () => (
    <div className="cart-dropdown">
        <div className="cart-item" />
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
)

export default CardDropdown;