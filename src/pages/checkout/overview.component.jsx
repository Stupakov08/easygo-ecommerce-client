import React from 'react';
import { connect } from 'react-redux';

import OverviewItem from '../../components/overview-item/overview-item.component';

import './overview.styles.scss';

const Overview = ({ cartItems, total, history }) => {
	return (
		<div className='overview'>
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
			</div>
			{cartItems.length &&
				cartItems.map((cartItem) => (
					<OverviewItem key={cartItem.line.id} cartItem={cartItem} />
				))}

			<div className='total'>
				<span>TOTAL: {total()} ₴</span>
			</div>
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

export default connect(mapStateToProps)(Overview);
