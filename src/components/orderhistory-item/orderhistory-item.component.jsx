import React from 'react';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';

import './orderhistory-item.styles.scss';

const OrderHistoryItem = ({ orderItem, clearItem, removeItem, addItem }) => {
	const { id, orderId, payment, createdAt, processed, address } = orderItem;

	return (
		<tr className='orderhistory-item'>
			<td className='id'>
				<a className='id' href={`/order/${id}`}>
					{orderId}
				</a>
			</td>
			<td className='address'>{`${address.address}, ${address.city}, ${address.country}, ${address.zip}`}</td>
			<td className='price'>{address.name}</td>
			<td className='price'>{payment.amount / 100} ₴</td>
			<td className='price'>{new Date(createdAt).toLocaleDateString()}</td>
			<td className='price'>{!processed ? <CloseIcon /> : <CheckIcon />}</td>
		</tr>
	);
};

export default OrderHistoryItem;
