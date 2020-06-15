import OrderHistoryActionTypes from './orderhistory.types';
import dataProvider from '../../utils/dataManagers';

export const getOrderHistory = (props) => {
	return async (dispatch, getState) => {
		const state = getState();
		const list = await dataProvider.cart.getOrders(
			props,
			state.user.currentUser && state.user.currentUser.userId
		);
		let { totalCount } = list;
		totalCount = parseInt(totalCount);
		dispatch(getOrderHistoryFinish(list, { ...props, totalCount }));
	};
};

export const getOrderHistoryFinish = (list, pagination) => ({
	type: OrderHistoryActionTypes.GET_ORDERS,
	payload: { list, pagination: { ...pagination } },
});

export const getOrder = (id) => {
	return async (dispatch, getState) => {
		const order = await dataProvider.cart.getOrder(id);
		dispatch(getOrderFinish(order));
	};
};

export const getOrderFinish = (order) => ({
	type: OrderHistoryActionTypes.GET_ORDER,
	payload: order,
});
