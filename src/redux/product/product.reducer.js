import ProductActionTypes from './product.types';

const INITIAL_STATE = {
	list: null,
	loading: false,
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
				totalCount: action.payload.totalCount,
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
