import UserActionTypes from './user.types';
import { getFingerprint } from '../../utils/getFingerPrint';
import {
	getTokens,
	signUpAndgetTokens,
	fetchWithAuth,
	signOutUser,
} from '../../utils/AuthManager';
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
		error: err,
	},
});

export const signOutStart = (err) => ({
	type: UserActionTypes.SIGN_OUT,
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
				const message = err.response.error || err.response.message;
				dispatch(emailSignInFailer(message));
			});
	};
};

export const emailSignUp = ({ email, password, passwordconf, name }) => {
	return async (dispatch) => {
		let fingerprint = await getFingerprint();
		signUpAndgetTokens({ email, password, passwordconf, name, fingerprint })
			.then(({ accessToken }) => {
				const user = jwt(accessToken).payload;
				dispatch(emailSignInSuccess(user));
			})
			.catch((err) => {
				const message = err.response.error || err.response.message;
				dispatch(emailSignInFailer(message));
			});
	};
};

export const signOut = () => {
	return async (dispatch) => {
		dispatch(signOutStart());
		signOutUser().catch((err) => {});
	};
};

export const checkPrivateCall = () => {
	return async (dispatch) => {
		fetchWithAuth(`${process.env.REACT_APP_SERVER_URI}/check`, {
			method: 'POST',
		})
			.then((res) => {})
			.catch((err) => {});
	};
};

export const clearUserError = () => ({
	type: UserActionTypes.CLEAR_USER_ERROR,
	payload: {
		error: null,
	},
});
