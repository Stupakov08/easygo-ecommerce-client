import CartActionTypes from './cart.types';
import { addItemToCart, removeItemFromCart } from './cart.utils';

const INITIAL_STATE = {
	hidden: true,
	cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case CartActionTypes.TOGGLE_CART_HIDDEN:
			return {
				...state,
				hidden: !state.hidden,
			};
		case CartActionTypes.ADD_ITEM:
			return {
				...state,
				cartItems: addItemToCart(state.cartItems, action.payload),
			};
		case CartActionTypes.REMOVE_ITEM:
			return {
				...state,
				cartItems: removeItemFromCart(state.cartItems, action.payload),
			};
		case CartActionTypes.CLEAR_ITEM_FROM_CART:
			return {
				...state,
				cartItems: state.cartItems.filter(
					(cartItem) => cartItem.line.id !== action.payload.line.id
				),
			};
		case CartActionTypes.UPDATE_CART_FROM_SERVER:
			return {
				...state,
				cartItems: action.payload.cartItems,
			};
		case CartActionTypes.CLEAR_CART:
			return {
				...state,
				cartItems: [],
			};
		default:
			return state;
	}
};

export default cartReducer;
