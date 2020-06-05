import ProductActionTypes from './product.types';

const INITIAL_STATE = {
	list: null,
	loading: false,
	pagination: {
		totalCount: 0,
		_start: 0,
		_end: 3,
		itemsOnPage: 3,
	},
};

const productReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case ProductActionTypes.GET_PRODUCT_START:
		case ProductActionTypes.GET_LIST_START:
			return {
				...state,
				loading: true,
			};
		case ProductActionTypes.GET_LIST_FINISH:
			return {
				...state,
				list: action.payload.list,
				loading: false,
				pagination: {
					...state.pagination,
					totalCount: action.payload.pagination.totalCount,
					_start: action.payload.pagination._start,
					_end: action.payload.pagination._end,
				},
			};
		case ProductActionTypes.GET_PRODUCT_FINISH:
			return {
				...state,
				details: action.payload.details,
				loading: false,
			};

		default:
			return state;
	}
};

export default productReducer;
