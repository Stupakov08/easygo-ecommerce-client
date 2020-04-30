import { getFingerprint } from './getFingerPrint';
import jwt from 'jwt-decode';

function saveToken(token) {
	localStorage.setItem('tokenData', token);
	return token;
}

function parseStatus(status = 200, res) {
	res = res.json();
	return new Promise((resolve, reject) => {
		if (status && status >= 200 && status < 300) {
			res.then((response) => {
				resolve(response);
			});
		} else {
			res.then((response) => {
				reject({ status, response });
			});
		}
	});
}
const signUpAndgetTokens = async (body) => {
	return fetch(`${process.env.REACT_APP_SERVER_URI}/auth/signup`, {
		method: 'POST',
		credentials: 'include',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(body),
	})
		.then((res) => parseStatus(res.status, res))
		.then((res) => {
			saveToken(JSON.stringify(res));
			return res;
		});
};
const getTokens = async (body) => {
	return fetch(`${process.env.REACT_APP_SERVER_URI}/auth/signin`, {
		method: 'POST',
		credentials: 'include',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(body),
	})
		.then((res) => parseStatus(res.status, res))
		.then((res) => {
			saveToken(JSON.stringify(res));
			return res;
		});
};

const isAuth = () => {
	let token;
	try {
		token =
			localStorage.tokenData && JSON.parse(localStorage.tokenData).accessToken;
		token = jwt(token);
	} catch (e) {
		return false;
	}
	if (Date.now() - 20000 <= token.exp) {
		return true;
	}
	return false;
};

const refreshToken = async (token) => {
	const loginUrl = '/signIn';
	let fingerprint = await getFingerprint();
	let tokenData = null;

	if (!localStorage.tokenData) return window.location.replace(loginUrl); //logout

	tokenData = JSON.parse(localStorage.tokenData);
	const refreshToken = tokenData.refreshToken;
	const expired = jwt(refreshToken).exp * 1000;

	if (Date.now() >= expired) window.location.replace(loginUrl); //logout

	return fetch(`${process.env.REACT_APP_SERVER_URI}/auth/refresh-tokens`, {
		method: 'POST',
		credentials: 'include',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			refreshToken: token,
			fingerprint,
		}),
	})
		.then((res) => parseStatus(res.status, res))
		.then((res) => {
			saveToken(JSON.stringify(res));
			return res;
		});
};

const fetchWithAuth = async (url, options = {}) => {
	const loginUrl = '/signIn';
	let tokenData = null;

	if (localStorage.tokenData) {
		tokenData = JSON.parse(localStorage.tokenData);
	} else {
		return window.location.replace(loginUrl); //logout
	}

	if (!options.headers) {
		options.headers = {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		};
	}

	if (tokenData) {
		const accessToken = tokenData.accessToken;
		const expired = jwt(accessToken).exp * 1000;

		if (Date.now() + 20000 >= expired) {
			try {
				await refreshToken(tokenData.refreshToken);
			} catch (e) {
				return window.location.replace(loginUrl); //logout
			}
		}

		options.headers.Authorization = `Bearer ${tokenData.accessToken}`;
	}

	return fetch(url, options).then((res) => parseStatus(res.status, res));
};

const signOutUser = async () => {
	let fingerprint = await getFingerprint();
	let tokenData = null;

	if (!localStorage.tokenData) return Promise.resolve();

	tokenData = JSON.parse(localStorage.tokenData);
	const refreshToken = tokenData.refreshToken;

	return fetch(`${process.env.REACT_APP_SERVER_URI}/auth/signout`, {
		method: 'POST',
		credentials: 'include',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			refreshToken,
			fingerprint,
		}),
	})
		.then((res) => parseStatus(res.status, res))
		.then((res) => {
			localStorage.removeItem('tokenData');
			return Promise.resolve();
		});
};

export {
	getTokens,
	refreshToken,
	fetchWithAuth,
	isAuth,
	signOutUser,
	signUpAndgetTokens,
};
