import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import productReducer from './product/product.reducer';
import cartReducer from './cart/cart.reducer';
import orderReducer from './orderhistory/orderhistory.reducer';

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['user', 'cart'],
};

const rootReducer = combineReducers({
	user: userReducer,
	product: productReducer,
	cart: cartReducer,
	order: orderReducer,
});

export default persistReducer(persistConfig, rootReducer);
