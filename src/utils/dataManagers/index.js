import productManager from './productManager';
import cartManager from './basketManager';
import categoriesManager from './categoriesManager';

const dataManager = {
	product: productManager,
	cart: cartManager,
	categories: categoriesManager,
};

export default dataManager;
