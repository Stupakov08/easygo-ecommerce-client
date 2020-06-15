import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Button from '../../components/primitives/button.styles';
import { withRouter } from 'react-router-dom';
import { getOrder } from '../../redux/orderhistory/orderhistory.actions';
import OrderHistoryItem from '../../components/orderhistory-item/orderhistory-item.component';
import { Page } from './orderdetail.styles';

const OrderDetailPage = ({ order, getOrder, match }) => {
	useEffect(() => {
		getOrder(match.params.id);
	}, [match]);
	if (!order)
		return (
			<Page>
				<div className='empty-list'>Product does not exist</div>
			</Page>
		);
	return <div className='orderhistory-page'></div>;
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
