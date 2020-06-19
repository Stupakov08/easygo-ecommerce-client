import React from 'react';

import { Row } from './order-detail-item.styles';

const OrderDetailsItem = ({
	item: {
		line: { id, title, price, images },
		quantity,
	},
}) => {
	return (
		<Row>
			<td className='tdimg'>
				<div className='img'>
					<img src={images && images[0].url} alt='item' />
				</div>
			</td>
			<td>
				<div className='item-details'>
					<a className='name' href={`/product/${id}`}>
						{title}
					</a>
				</div>
			</td>
			<td className='text-right'>
				<span className='price'>
					{quantity} x {price} ₴
				</span>
			</td>
		</Row>
	);
};

export default OrderDetailsItem;
