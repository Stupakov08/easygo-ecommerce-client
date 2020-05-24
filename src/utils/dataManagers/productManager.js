import { parseStatus } from '../AuthManager';
const makeUrlParams = (params) => {
	let string = '';
	for (let [key, value] of Object.entries(params)) {
		string += value ? (!string.length ? '?' : '&') + `${key}=${value}` : '';
	}
	return string;
};
const productManager = {
	getList: (props) => {
		const params = makeUrlParams(props);
		return fetch(`${process.env.REACT_APP_SERVER_URI}/products${params}`, {
			method: 'GET',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		}).then((res) => parseStatus(res.status, res));
	},
	getProduct: (props) => {
		const { id } = props;
		return fetch(`${process.env.REACT_APP_SERVER_URI}/products/${id}`, {
			method: 'GET',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		}).then((res) => parseStatus(res.status, res));
	},
};
export default productManager;
