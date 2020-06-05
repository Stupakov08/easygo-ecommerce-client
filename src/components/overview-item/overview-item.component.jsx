import React from 'react';
import { connect } from 'react-redux';

import {
	clearItemFromCartSync,
	addItemSync,
	removeItemSync,
} from '../../redux/cart/cart.actions';

import './overview-item.styles.scss';

const OverviewItem = ({ cartItem, clearItem, removeItem, addItem }) => {
	const {
		line: { id, title, images, price },
		quantity,
	} = cartItem;
	return (
		<div className='overview-item'>
			<div className='image-container'>
				<img src={images && images[0].url} alt='item' />
			</div>
			<a className='name' href={`/product/${id}`}>
				{title}
			</a>
			<span className='quantity'>
				<span className='value'>{quantity}</span>
			</span>
			<span className='price'>{price} ₴</span>
		</div>
	);
};

export default OverviewItem;
