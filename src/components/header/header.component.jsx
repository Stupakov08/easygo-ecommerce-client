import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getCart } from '../../redux/cart/cart.actions';
import { ReactComponent as Logo } from '../../assets/go.svg';
import {
	HeaderContainer,
	LogoContainer,
	HeaderBar,
	OptionsContainer,
	MenuOptionLink,
	Option,
} from './header.styles';
import { signOut } from '../../redux/user/user.actions';
import { clearCart } from '../../redux/cart/cart.actions';
import { Content } from '../shared/content/content.styles';
import Dots from './dots/dots.component';
import Search from './search/search.component';
import ShopIcon from '../cart-icon/cart-icon.components';
import CartDropdown from '../cart-dropdown/cart-dropdown.container';

const Header = ({ signOut, isAuth, hidden, getCart }) => {
	return (
		<HeaderBar>
			<Content>
				<HeaderContainer>
					<LogoContainer to='/'>
						<Logo className='logo' />
					</LogoContainer>
					<Option>
						<Search />
					</Option>
					<OptionsContainer>
						{isAuth ? null : (
							<MenuOptionLink to='/signin'>SIGN IN</MenuOptionLink>
						)}

						{!isAuth ? null : <Dots />}
					</OptionsContainer>
					<Option>
						<ShopIcon />
					</Option>
					{hidden ? null : <CartDropdown />}
				</HeaderContainer>
			</Content>
		</HeaderBar>
	);
};

const mapStateToProps = ({ user, cart }) => ({
	hidden: cart.hidden,
	isAuth: user.currentUser && user.currentUser.userId,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	signOut: (values) => {
		dispatch(signOut(values));
		dispatch(clearCart());
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
