import React from 'react';
import { connect } from 'react-redux';

import {
	clearItemFromCartSync,
	addItemSync,
	removeItemSync,
} from '../../redux/cart/cart.actions';

import './basket-item.styles.scss';

const CheckoutItem = ({ cartItem, clearItem, removeItem, addItem }) => {
	const {
		line: { id, title, images, price },
		quantity,
	} = cartItem;
	return (
		<div className='checkout-item'>
			<div className='image-container'>
				<img src={images && images[0].url} alt='item' />
			</div>
			<a className='name' href={`/product/${id}`}>
				{title}
			</a>
			<span className='quantity'>
				<div className='arrow' onClick={() => removeItem(cartItem)}>
					&#10094;
				</div>
				<span className='value'>{quantity}</span>
				<div className='arrow' onClick={() => addItem(cartItem)}>
					&#10095;
				</div>
			</span>
			<span className='price'>{price} ₴</span>
			<span className='remove-button' onClick={() => clearItem(cartItem)}>
				&#10005;
			</span>
		</div>
	);
};
const mapDispatchToProps = (dispatch) => ({
	clearItem: (item) => dispatch(clearItemFromCartSync(item)),
	addItem: (item) => dispatch(addItemSync(item)),
	removeItem: (item) => dispatch(removeItemSync(item)),
});
export default connect(null, mapDispatchToProps)(CheckoutItem);
