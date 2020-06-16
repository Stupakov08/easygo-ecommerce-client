import { fetchWithAuth, parseStatus } from '../AuthManager';

const CategoriesManager = {
	getCategories: () => {
		return fetch(`${process.env.REACT_APP_SERVER_URI}/categories/`, {
			method: 'GET',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		}).then((res) => {
			return parseStatus(res.status, res);
		});
	},
};
export default CategoriesManager;
