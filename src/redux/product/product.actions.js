import ProductActionTypes from './product.types';
import dataManager from '../../utils/dataManagers/productManager';

export const getListStart = () => ({
	type: ProductActionTypes.GET_LIST_START,
});
export const getProductStart = () => ({
	type: ProductActionTypes.GET_PRODUCT_START,
});
export const getListFinish = (res, pagination) => ({
	type: ProductActionTypes.GET_LIST_FINISH,
	payload: { list: res, pagination: { ...pagination } },
});
export const getProductFinish = (res) => ({
	type: ProductActionTypes.GET_PRODUCT_FINISH,
	payload: { details: res },
});

export const getList = ({ q, c, _start, _end, _sort, _order }) => {
	return async (dispatch) => {
		dispatch(getListStart());
		if (c) {
			q = undefined;
		}
		dataManager.getList({ q, c, _start, _end, _sort, _order }).then((res) => {
			const { totalCount } = res;
			dispatch(getListFinish(res, { totalCount, _start, _end }));
		});
	};
};
export const getProduct = (id) => {
	return async (dispatch) => {
		dispatch(getProductStart());
		dataManager.getProduct({ id }).then((res) => {
			dispatch(getProductFinish(res));
		});
	};
};
