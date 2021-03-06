import React from 'react';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import CustomButton from '../primitives/button.styles';
import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems, history, hidden, dispatch }) => (
	<>
		<div className='cart-dropdown'>
			<div className='cart-items'>
				{cartItems && cartItems.length ? (
					cartItems.map((cartItem) => (
						<CartItem key={cartItem.line._id} item={cartItem} />
					))
				) : (
					<span className='empty-message'>You cart is empty</span>
				)}
			</div>
			<CustomButton
				onClick={() => {
					history.push('/basket');
					dispatch(toggleCartHidden(true));
				}}
			>
				GO TO CART
			</CustomButton>
		</div>
		<div
			className='click-trap'
			onClick={() => {
				dispatch(toggleCartHidden(true));
			}}
		></div>
	</>
);

export default CartDropdown;
