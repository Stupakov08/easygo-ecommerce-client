import React from 'react';
import { connect } from 'react-redux';
import Button from '../../components/primitives/button.styles';
import { withRouter } from 'react-router-dom';

import BasketItem from '../../components/basket-item/basket-item.component';

import './basket.styles.scss';

const BasketPage = ({ cartItems, total, history }) => {
	if (!cartItems || cartItems.length === 0)
		return (
			<div className='checkout-page'>
				<div className='empty-list'>Your cart is empty</div>
			</div>
		);
	return (
		<div className='checkout-page'>
			<div className='checkout-header'>
				<div className='header-block'>
					<span>Product</span>
				</div>
				<div className='header-block name'>
					<span>Desciption</span>
				</div>
				<div className='header-block quantity'>
					<span>Quantity</span>
				</div>
				<div className='header-block price'>
					<span>Price</span>
				</div>
				<div className='header-block'>
					<span>Remove</span>
				</div>
			</div>
			{cartItems.length &&
				cartItems.map((cartItem) => (
					<BasketItem key={cartItem.line.id} cartItem={cartItem} />
				))}

			<div className='total'>
				<span>TOTAL: {total()} ₴</span>
			</div>
			<Button
				onClick={() => {
					history.push('/checkout');
				}}
			>
				Procced to Checkout
			</Button>
		</div>
	);
};

const mapStateToProps = ({ cart }) => ({
	cartItems: cart.cartItems,
	total: () => {
		return (
			cart.cartItems &&
			cart.cartItems.reduce(
				(accumalatedQuantity, cartItem) =>
					accumalatedQuantity + cartItem.quantity * cartItem.line.price,
				0
			)
		);
	},
});

export default withRouter(connect(mapStateToProps)(BasketPage));
