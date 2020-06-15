import { parseStatus } from '../AuthManager';
import { fetchWithAuth } from '../AuthManager';

const makeUrlParams = (params) => {
	let string = '';
	for (let [key, value] of Object.entries(params)) {
		string += value ? (!string.length ? '?' : '&') + `${key}=${value}` : '';
	}
	return string;
};
const CartManager = {
	syncCart: (cartItems, userId) => {
		return fetchWithAuth(`${process.env.REACT_APP_SERVER_URI}/cart/${userId}`, {
			method: 'POST',
			credentials: 'include',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				cartItems,
			}),
		});
	},
	getCart: (userId) => {
		return fetchWithAuth(`${process.env.REACT_APP_SERVER_URI}/cart/${userId}`, {
			method: 'GET',
			credentials: 'include',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		});
	},
	getOrders: (props, userId) => {
		const params = makeUrlParams(props);
		return fetchWithAuth(
			`${process.env.REACT_APP_SERVER_URI}/orders/user/${userId}${params}`,
			{
				method: 'GET',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
				},
			}
		);
	},
	getOrder: (id) => {
		return fetchWithAuth(
			`${process.env.REACT_APP_SERVER_URI}/orders/details/${id}`,
			{
				method: 'GET',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
				},
			}
		);
	},
};
export default CartManager;
