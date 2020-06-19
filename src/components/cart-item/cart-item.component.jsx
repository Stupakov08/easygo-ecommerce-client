import React from 'react';

import './cart-item.styles.scss';

const CartItem = ({
	item: {
		line: { id, title, price, images },
		quantity,
	},
}) => {
	return (
		<div className='cart-item'>
			<div className='img'>
				<img src={images && images[0].url} alt='item' />
			</div>
			<div className='item-details'>
				<a className='name' href={`/product/${id}`}>
					{title}
				</a>
				<span className='price'>
					{quantity} x {price} ₴
				</span>
			</div>
		</div>
	);
};

export default React.memo(CartItem);
