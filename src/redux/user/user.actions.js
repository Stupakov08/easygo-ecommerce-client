import UserActionTypes from './user.types';
import { getFingerprint } from '../../utils/getFingerPrint';
import { getTokens, fetchWithAuth } from '../../utils/getTokenData';
import jwt from 'jwt-decode';

export const emailSignInStart = () => ({
	type: UserActionTypes.EMAIL_SIGN_IN_START,
});

export const emailSignInSuccess = (user) => ({
	type: UserActionTypes.SIGN_IN_SUCCESS,
	payload: user,
});

export const emailSignInFailer = (err) => ({
	type: UserActionTypes.SIGN_IN_FAILURE,
	payload: {
		loading: false,
		error: err,
	},
});

export const emailSignIn = ({ email, password }) => {
	return async (dispatch) => {
		let fingerprint = await getFingerprint();
		getTokens({
			email,
			password,
			fingerprint,
		})
			.then(({ accessToken }) => {
				const user = jwt(accessToken).payload;
				dispatch(emailSignInSuccess(user));
			})
			.catch((err) => {
				debugger;
				const message = err.response.error || err.response.message;
				dispatch(emailSignInFailer(message));
			});
	};
};
export const checkPrivateCall = () => {
	debugger;
	return async (dispatch) => {
		fetchWithAuth(`${process.env.REACT_APP_SERVER_URI}/check`)
			.then((res) => {
				debugger;
			})
			.catch((err) => {
				debugger;
			});
	};
};

export const clearUserError = () => ({
	type: UserActionTypes.CLEAR_USER_ERROR,
	payload: {
		error: null,
	},
});
