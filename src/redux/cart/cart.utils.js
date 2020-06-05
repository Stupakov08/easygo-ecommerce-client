export const addItemToCart = (cartItems, productToAdd) => {
	const existingCartItem = cartItems.find(
		(cartItem) =>
			cartItem.line._id === (productToAdd._id || productToAdd.line._id)
	);
	if (existingCartItem) {
		return cartItems.map((cartItem) =>
			cartItem.line._id === (productToAdd._id || productToAdd.line._id)
				? { ...cartItem, quantity: cartItem.quantity + 1 }
				: cartItem
		);
	}

	return [...cartItems, { line: productToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
	const existingCartItem = cartItems.find(
		(cartItem) => cartItem.line._id === cartItemToRemove.line._id
	);

	if (existingCartItem.quantity === 1) {
		return cartItems.filter((i) => i.line._id !== cartItemToRemove.line._id);
	}

	return cartItems.map((cartItem) =>
		cartItem.line._id === cartItemToRemove.line._id
			? {
					...cartItem,
					quantity: cartItem.quantity - 1,
			  }
			: cartItem
	);
};
