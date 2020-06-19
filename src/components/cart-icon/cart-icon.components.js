import React from 'react';
import { connect } from 'react-redux';
import IconButton from '@material-ui/core/IconButton';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import './cart-icon.styles.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
// import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

const CartIcon = ({ toggleCartHidden, itemCount, hidden }) => (
	<div
		className='cart-icon'
		onClick={() => {
			toggleCartHidden(!hidden);
		}}
	>
		<IconButton>
			<ShoppingIcon className='shopping-icon' />
			<span className='item-count'>{itemCount() || 0}</span>
		</IconButton>
	</div>
);
const mapDispatchToProps = (dispatch) => ({
	toggleCartHidden: (hidden) => {
		return dispatch(toggleCartHidden(hidden));
	},
});

const mapStateToProps = ({ cart }) => ({
	itemCount: () => {
		return (
			cart.cartItems &&
			cart.cartItems.reduce(
				(accumalatedQuantity, cartItem) =>
					accumalatedQuantity + cartItem.quantity,
				0
			)
		);
	},
	hidden: cart.hidden,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
