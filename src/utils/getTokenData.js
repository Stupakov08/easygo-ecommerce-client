import { getFingerprint } from '../utils/getFingerPrint';
import jwt from 'jwt-decode';

function saveToken(token) {
	sessionStorage.setItem('tokenData', token);
	return token;
}

function parseStatus(status = 200, res) {
	res = res.json();
	return new Promise((resolve, reject) => {
		debugger;
		if (status && status >= 200 && status < 300) {
			res.then((response) => {
				resolve(response);
			});
		} else {
			res.then((response) => {
				debugger;
				reject({ status, response });
			});
		}
	});
}

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

const refreshToken = async (token) => {
	debugger;
	let fingerprint = await getFingerprint();
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
	debugger;
	const loginUrl = '/signIn';
	let tokenData = null;

	if (sessionStorage.tokenData) {
		tokenData = JSON.parse(sessionStorage.tokenData);
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
		const refreshToken = tokenData.refreshToken;
		const expired = jwt(refreshToken).exp * 1000;

		if (Date.now() >= expired) {
			try {
				await refreshToken(tokenData.refreshToken);
			} catch (e) {
				return window.location.replace(loginUrl); //logout
			}
		}

		options.headers.Authorization = `Bearer ${tokenData.accessToken}`;
	}

	return fetch(url, options);
};

export { getTokens, refreshToken, fetchWithAuth };
