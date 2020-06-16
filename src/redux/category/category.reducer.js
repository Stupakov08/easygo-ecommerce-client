import CategoryActionTypes from './category.types';

const INITIAL_STATE = {
	list: [],
};

const categoriesReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case CategoryActionTypes.GET_CATEGORIES:
			return {
				...state,
				list: action.payload,
			};
		default:
			return state;
	}
};

export default categoriesReducer;
