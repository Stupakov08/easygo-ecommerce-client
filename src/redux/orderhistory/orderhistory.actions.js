import OrderHistoryActionTypes from './orderhistory.types';
import dataProvider from '../../utils/dataManagers';
import { signOut } from '../user/user.actions';

export const getOrderHistory = (props) => {
	return async (dispatch, getState) => {
		const state = getState();

		let list;
		let totalCount;
		try {
			list = await dataProvider.cart.getOrders(
				props,
				state.user.currentUser && state.user.currentUser.userId
			);
			totalCount = parseInt(list.totalCount);
		} catch (err) {
			err.status === 401 && dispatch(signOut());
		}

		dispatch(getOrderHistoryFinish(list, { ...props, totalCount }));
	};
};

export const getOrderHistoryFinish = (list, pagination) => ({
	type: OrderHistoryActionTypes.GET_ORDERS,
	payload: { list, pagination: { ...pagination } },
});

export const getOrder = (id) => {
	return async (dispatch, getState) => {
		let order;
		try {
			order = await dataProvider.cart.getOrder(id);
		} catch (err) {
			err.status === 401 && dispatch(signOut());
		}
		dispatch(getOrderFinish(order));
	};
};

export const getOrderFinish = (order) => ({
	type: OrderHistoryActionTypes.GET_ORDER,
	payload: order,
});
