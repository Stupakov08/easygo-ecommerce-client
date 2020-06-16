import CategoryActionTypes from './category.types';
import dataProvider from '../../utils/dataManagers';

export const getCategoriesFinish = (categories) => ({
	type: CategoryActionTypes.GET_CATEGORIES,
	payload: categories,
});

export const get = () => {
	return async (dispatch, getState) => {
		let categories = [];

		try {
			categories = await dataProvider.categories.getCategories();
		} catch (e) {}
		if (categories != null) {
			dispatch(getCategoriesFinish(categories));
		}
	};
};
