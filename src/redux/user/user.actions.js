import UserActionTypes from './user.types';
import { getFingerprint } from '../../utils/getFingerPrint';
import {
	getTokens,
	signUpAndgetTokens,
	signOutUser,
	updateUserProfile,
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

export const updateProfile = ({ id, name }) => {
	return async (dispatch) => {
		updateUserProfile({ id, name }).then((res) => {
			dispatch(
				profileUpdated({ userId: res._id, name: res.name, email: res.email })
			);
		});
	};
};
export const profileUpdated = (user) => ({
	type: UserActionTypes.UPDATE_PROFILE,
	payload: user,
});
export const clearUserError = () => ({
	type: UserActionTypes.CLEAR_USER_ERROR,
	payload: {
		error: null,
	},
});
