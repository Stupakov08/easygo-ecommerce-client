import React from 'react';
import { connect } from 'react-redux';
import IconButton from '@material-ui/core/IconButton';
// import { toggleCartHidden } from '../../redux/cart/cart.actions';
import './cart-icon.styles.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
// import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
	<div className='cart-icon' onClick={toggleCartHidden}>
		<IconButton>
			<ShoppingIcon className='shopping-icon' />
			<span className='item-count'>{itemCount || 0}</span>
		</IconButton>
	</div>
);
const mapDispatchToProps = (dispatch) => ({
	toggleCartHidden: () => {
		// return dispatch(toggleCartHidden());
	},
});

const mapStateToProps = ({ cart }) => ({
	// itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
