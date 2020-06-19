import { getFingerprint } from './getFingerPrint';
import jwt from 'jwt-decode';

function saveToken(token) {
	localStorage.setItem('tokenData', token);
	return token;
}

export function parseStatus(status = 200, res) {
	let totalCount = res.headers && res.headers.get('X-Total-Count');
	res = res.json();
	return new Promise((resolve, reject) => {
		if (status && status >= 200 && status < 300) {
			res.then((response) => {
				response.totalCount = totalCount;
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
			saveToken(
				JSON.stringify({
					accessToken: res.accessToken,
					refreshToken: res.refreshToken,
				})
			);
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
	let fingerprint = await getFingerprint();
	let tokenData = null;

	if (!localStorage.tokenData) Promise.reject({ status: 401 });

	tokenData = JSON.parse(localStorage.tokenData);
	const refreshToken = tokenData.refreshToken;
	const expired = jwt(refreshToken).exp * 1000;

	if (Date.now() >= expired) Promise.reject({ status: 401 });

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
			saveToken(
				JSON.stringify({
					accessToken: res.accessToken,
					refreshToken: res.refreshToken,
				})
			);
			return res;
		});
};

const refreshTokensOrLogOut = async (token) => {
	let res;
	try {
		res = await refreshToken(token);
	} catch (e) {
		return Promise.reject(e); //logout
	}
	return Promise.resolve(res);
};

let isRefreshing = false;

const fetchWithAuth = async (url, options = {}) => {
	let tokenData = null;

	if (localStorage.tokenData) {
		tokenData = JSON.parse(localStorage.tokenData);
	} else {
		return Promise.reject({ status: 401 }); //logout
	}

	if (!options.headers) {
		options.headers = {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		};
	}

	if (tokenData) {
		options.headers.Authorization = `Bearer ${tokenData.accessToken}`;
	}

	return fetch(url, options)
		.then((res) => parseStatus(res.status, res))
		.catch(async (err) => {
			if (err.status !== 401) {
				return Promise.reject(err);
			}
			return new Promise((resolve, reject) => {
				if (!isRefreshing) {
					isRefreshing = true;
					return refreshTokensOrLogOut(tokenData.refreshToken)
						.then(async () => {
							document.dispatchEvent(new Event('refreshed'));
							resolve(await fetchWithAuth(url, options));
						})
						.catch(reject);
				} else {
					document.addEventListener(
						'refreshed',
						async () => {
							try {
								resolve(await fetchWithAuth(url, options));
							} catch (e) {
								reject(e);
							}
						},
						false
					);
				}
			});
		});
};

const updateUserProfile = async ({ id, name }) => {
	return fetchWithAuth(`${process.env.REACT_APP_SERVER_URI}/auth/user/${id}`, {
		method: 'PUT',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ name }),
	});
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
	updateUserProfile,
};
