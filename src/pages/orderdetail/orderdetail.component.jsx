import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getOrder } from '../../redux/orderhistory/orderhistory.actions';
import OrderDetailsItem from '../../components/order-detail-item/order-detail-item.component';

import {
	Page,
	OrderDetail,
	Title,
	ColumnWrp,
	Column,
	Row,
	Table,
	SubTitle,
	Notes,
	Total,
} from './orderdetail.styles';

const OrderDetailPage = ({ details, getOrder, match }) => {
	useEffect(() => {
		if (match.params.id) {
			getOrder(match.params.id);
		}
	}, []);

	if (!details)
		return (
			<Page>
				<div className='empty-list'>Order does not exist</div>
			</Page>
		);
	const {
		orderId,
		processed,
		createdAt,
		address,
		payment,
		cartItems,
	} = details;

	return (
		<OrderDetail>
			<Title>Order no.: {orderId}</Title>
			<Notes>Created: {new Date(createdAt).toDateString()}</Notes>
			<Notes>Processed: {processed.toString()}</Notes>
			<ColumnWrp>
				<Column>
					<Table>
						<thead>
							<Row>
								<td colSpan='2'>
									<SubTitle>Shipping info:</SubTitle>
								</td>
							</Row>
						</thead>
						<tbody>
							<Row>
								<td className='name'>Name:</td>
								<td>{address.name}</td>
							</Row>
							<Row>
								<td className='name'>Country:</td>
								<td>{address.country}</td>
							</Row>
							<Row>
								<td className='name'>City:</td>
								<td>{address.city}</td>
							</Row>
							<Row>
								<td className='name'>Address:</td>
								<td>{address.address}</td>
							</Row>
							<Row>
								<td className='name'>Zip:</td>
								<td>{address.zip}</td>
							</Row>
						</tbody>
					</Table>
				</Column>
				<Column>
					<Table>
						<thead>
							<Row>
								<td colSpan='2'>
									<SubTitle>Payment info:</SubTitle>
								</td>
							</Row>
						</thead>
						<tbody>
							<Row>
								<td className='name'>Amount:</td>
								<td>{payment.amount / 100} ₴</td>
							</Row>
							<Row>
								<td className='name'>Currency:</td>
								<td>{payment.currency}</td>
							</Row>
							<Row>
								<td className='name'>Card:</td>
								<td>{`${payment.payment_method_details.card.brand.toUpperCase()} ${
									payment.payment_method_details.card.last4
								}`}</td>
							</Row>
							<Row>
								<td className='name'>Paid:</td>
								<td>{payment.paid.toString()}</td>
							</Row>
							<Row>
								<td className='name'>Status:</td>
								<td>{payment.status}</td>
							</Row>
							<Row>
								<td className='name'>Receipt:</td>
								<td>
									<a href={payment.receipt_url}>> Go to receipt</a>
								</td>
							</Row>
						</tbody>
					</Table>
				</Column>
			</ColumnWrp>

			<Table>
				<thead>
					<Row>
						<td colSpan='3'>
							<SubTitle>Ordered products:</SubTitle>
						</td>
					</Row>
				</thead>
				<tbody>
					{cartItems &&
						cartItems.map((item) => (
							<OrderDetailsItem key={item.line.id} item={item} />
						))}
				</tbody>
				<tfoot>
					<Row>
						<td colSpan='2'></td>
						<td>
							<Total>Total: {payment.amount / 100} ₴</Total>
						</td>
					</Row>
				</tfoot>
			</Table>
		</OrderDetail>
	);
};

const mapStateToProps = ({ order }) => ({
	details: order.details,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	getOrder: (props) => {
		dispatch(getOrder(props));
	},
});

export default withRouter(
	connect(mapStateToProps, mapDispatchToProps)(withRouter(OrderDetailPage))
);
