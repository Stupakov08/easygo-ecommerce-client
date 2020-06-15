import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import { connect } from 'react-redux';
import { useFormikContext } from 'formik';
import Button from '../primitives/button.styles';
import { fetchWithAuth } from '../../utils/AuthManager';
import styled from 'styled-components';
import { clearCart } from '../../redux/cart/cart.actions';

const BlueButton = styled(Button)`
	&& {
		background: linear-gradient(rgb(40, 160, 229), rgb(30, 120, 180));
		width: 100%;
		font-size: 16px;
		&:hover {
			color: rgb(30, 120, 180);
			border-color: rgb(30, 120, 180);
			background: rgba(30, 120, 180, 0.1);
		}
	}
`;

const StripeCheckoutButton = ({
	total,
	cartItems,
	formik,
	userId,
	clearCart,
}) => {
	const priceForStripe = total() * 100;
	const publishableKey = 'pk_test_cLI56toHxpAsfVYGbhGD4Cde00aLHacGnm';

	const onToken = (token) => {
		fetchWithAuth(`${process.env.REACT_APP_SERVER_URI}/orders/${userId}`, {
			method: 'POST',
			credentials: 'include',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				amount: priceForStripe,
				token: token,
				cartItems: cartItems,
				address: formik.values,
				currency: 'UAH',
			}),
		})
			.then((response) => {
				clearCart();
			})
			.catch((error) => {
				console.log('Payment error: ', error);
			});
	};

	return (
		<StripeCheckout
			name='EasyGO e-Commerce.'
			description={`Youe total is ${total()} ₴`}
			amount={priceForStripe}
			panelLabel='Pay with credit card'
			label={'Pay with Stripe Checkout'}
			token={onToken}
			stripeKey={publishableKey}
		>
			<BlueButton>Pay {total()} ₴</BlueButton>
		</StripeCheckout>
	);
};
const mapStateToProps = ({ cart, user }) => ({
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
	cartItems: cart.cartItems,
	userId: user.currentUser && user.currentUser.userId,
});
const mapDispatchToProps = (dispatch, ownProps) => ({
	clearCart: () => {
		dispatch(clearCart());
	},
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(StripeCheckoutButton);
