import UserActionTypes from './user.types';

const INITIAL_STATE = {
	currentUser: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case UserActionTypes.EMAIL_SIGN_IN_START:
			return {
				...state,
				loading: true,
			};
		case UserActionTypes.SIGN_IN_SUCCESS:
			return {
				...state,
				currentUser: action.payload,
				error: null,
				loading: false,
			};
		case UserActionTypes.SIGN_UP_FAILURE:
		case UserActionTypes.SIGN_IN_FAILURE:
			return {
				...state,
				currentUser: null,
				error: action.payload.error,
				loading: false,
			};
		case UserActionTypes.CLEAR_USER_ERROR:
			return {
				...state,
				error: null,
			};
		case UserActionTypes.SIGN_OUT:
			return {
				...state,
				currentUser: null,
			};
		case UserActionTypes.UPDATE_PROFILE:
			return {
				...state,
				currentUser: action.payload,
			};
		default:
			return state;
	}
};

export default userReducer;
