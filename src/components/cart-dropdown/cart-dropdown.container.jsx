import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import CartDropdown from './cart-dropdown.component';
import { getCart } from '../../redux/cart/cart.actions';

const mapStateToProps = ({ cart }) => ({
	cartItems: cart.cartItems,
});

const CartDropdownContainer = compose(
	connect(mapStateToProps),
	withRouter
)(CartDropdown);

export default CartDropdownContainer;
