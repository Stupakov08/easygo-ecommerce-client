import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import productReducer from './product/product.reducer';

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['user'],
};

const rootReducer = combineReducers({
	user: userReducer,
	product: productReducer,
});

export default persistReducer(persistConfig, rootReducer);
