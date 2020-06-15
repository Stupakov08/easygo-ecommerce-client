import OrderHistoryActionTypes from './orderhistory.types';

const INITIAL_STATE = {
	list: [],
	pagination: {
		totalCount: 0,
		_start: 0,
		_end: 10,
		itemsOnPage: 10,
	},
	details: null,
};

const orderHistoryReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case OrderHistoryActionTypes.GET_ORDERS:
			return {
				...state,
				list: action.payload.list,
				pagination: action.payload.pagination,
			};
		case OrderHistoryActionTypes.GET_ORDER:
			return {
				...state,
				details: action.payload,
			};
		default:
			return state;
	}
};

export default orderHistoryReducer;
