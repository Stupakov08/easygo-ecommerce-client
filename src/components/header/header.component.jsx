import React from 'react';
import { connect } from 'react-redux';
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
import { Content } from '../shared/content/content.styles';
import Dots from './dots/dots.component';
import Search from './search/search.component';
import ShopIcon from '../cart-icon/cart-icon.components';

const Header = ({ signOut, isAuth }) => {
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
				</HeaderContainer>
			</Content>
		</HeaderBar>
	);
};

const mapStateToProps = ({ user }) => ({
	isAuth: user.currentUser && user.currentUser.userId,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	signOut: (values) => {
		dispatch(signOut(values));
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
