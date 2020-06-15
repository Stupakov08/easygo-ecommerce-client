import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Button from '../../components/primitives/button.styles';
import { withRouter } from 'react-router-dom';
import { getOrderHistory } from '../../redux/orderhistory/orderhistory.actions';
import OrderHistoryItem from '../../components/orderhistory-item/orderhistory-item.component';
import Pagination from '@material-ui/lab/Pagination';

import './orderhistory.styles.scss';
const queryString = require('query-string');

const OrdersPage = ({
	list,
	getList,
	history,
	location,
	pagination: { totalCount, itemsOnPage, _start, _end },
}) => {
	const [parsed, setParsed] = useState(1);
	useEffect(() => {
		const parsed = queryString.parse(location.search);
		setParsed({ _start, _end, ...parsed });
		getList({ totalCount, itemsOnPage, _start, _end, ...parsed });
	}, [location]);
	if (!list || list.length === 0)
		return (
			<div className='checkout-page'>
				<div className='empty-list'>You don't have orders yet.</div>
			</div>
		);
	return (
		<div className='orderhistory-page'>
			<table>
				<thead className='checkout-header'>
					<tr>
						<th className='header-block id'>
							<span>Order id</span>
						</th>
						<th className='header-block address'>
							<span>Shipping address</span>
						</th>
						<th className='header-block price'>
							<span>Name</span>
						</th>
						<th className='header-block price'>
							<span>Total price</span>
						</th>
						<th className='header-block price'>
							<span>Date</span>
						</th>
						<th className='processed'>
							<span>Processed</span>
						</th>
					</tr>
				</thead>
				<tbody>
					{list.length &&
						list.map((item) => (
							<OrderHistoryItem key={item.id} orderItem={item} />
						))}
				</tbody>
			</table>
			<Pagination
				count={Math.ceil(totalCount / itemsOnPage)}
				page={Math.ceil(_start / itemsOnPage) + 1}
				onChange={(e, p) => {
					history.push({
						pathname: '/orders',
						search:
							`?` +
							queryString.stringify({
								...parsed,
								_start: itemsOnPage * (p - 1),
								_end: itemsOnPage * p,
							}),
					});
				}}
			/>
		</div>
	);
};

const mapStateToProps = ({ order }) => ({
	list: order.list,
	pagination: order.pagination,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	getList: (props) => {
		dispatch(getOrderHistory(props));
	},
});

export default withRouter(
	connect(mapStateToProps, mapDispatchToProps)(withRouter(OrdersPage))
);
