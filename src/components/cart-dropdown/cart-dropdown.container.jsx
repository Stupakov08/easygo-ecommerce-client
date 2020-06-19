import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import CartDropdown from './cart-dropdown.component';

const mapStateToProps = ({ cart }) => ({
	cartItems: cart.cartItems,
	hidden: cart.hidden,
});

const CartDropdownContainer = compose(
	connect(mapStateToProps),
	withRouter
)(CartDropdown);

export default CartDropdownContainer;
