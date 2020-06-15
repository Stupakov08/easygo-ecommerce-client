import CartActionTypes from './cart.types';
import dataProvider from '../../utils/dataManagers';
import { signOut } from '../user/user.actions';

export const toggleCartHidden = () => ({
	type: CartActionTypes.TOGGLE_CART_HIDDEN,
});
export const toggleCartHiddenTimeOut = (time) => {
	return async (dispatch) => {
		dispatch(toggleCartHidden());
		setTimeout(() => {
			dispatch(toggleCartHidden());
		}, time);
	};
};

export const addItemSync = (cartItems) => {
	return async (dispatch, getState) => {
		dispatch(addItem(cartItems));
		const state = getState();
		if (!state.user.currentUser) return;
		const cart = await dataProvider.cart.syncCart(
			state.cart.cartItems,
			state.user.currentUser.userId
		);
		dispatch(updateCart(cart));
	};
};

export const addItem = (item) => ({
	type: CartActionTypes.ADD_ITEM,
	payload: item,
});

export const removeItemSync = (cartItems) => {
	return async (dispatch, getState) => {
		dispatch(removeItem(cartItems));
		const state = getState();
		if (!state.user.currentUser.userId) return;
		const cart = await dataProvider.cart.syncCart(
			state.cart.cartItems,
			state.user.currentUser.userId
		);
		dispatch(updateCart(cart));
	};
};

export const removeItem = (item) => ({
	type: CartActionTypes.REMOVE_ITEM,
	payload: item,
});

export const clearItemFromCartSync = (cartItems) => {
	return async (dispatch, getState) => {
		dispatch(clearItemFromCart(cartItems));
		const state = getState();
		if (!state.user.currentUser.userId) return;
		const cart = await dataProvider.cart.syncCart(
			state.cart.cartItems,
			state.user.currentUser.userId
		);
		dispatch(updateCart(cart));
	};
};

export const clearItemFromCart = (item) => ({
	type: CartActionTypes.CLEAR_ITEM_FROM_CART,
	payload: item,
});

export const clearCart = () => ({
	type: CartActionTypes.CLEAR_CART,
});
export const updateCart = (cart) => ({
	type: CartActionTypes.UPDATE_CART_FROM_SERVER,
	payload: cart,
});

export const getCart = (cartItems) => {
	return async (dispatch, getState) => {
		const state = getState();
		if (!state.user.currentUser) return;
		let cart = [];
		try {
			cart = await dataProvider.cart.getCart(state.user.currentUser.userId);
		} catch (e) {
			dispatch(signOut());
		}
		if (cart.cartItems != null) {
			dispatch(updateCart(cart));
		}
	};
};
