import React from 'react';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/go.svg';
import {
	HeaderContainer,
	LogoContainer,
	HeaderBar,
	OptionsContainer,
	OptionLink,
} from './header.styles';
import { signOut } from '../../redux/user/user.actions';
import { Content } from '../shared/content/content.styles';

const Header = ({ signOut, isAuth }) => {
	return (
		<HeaderBar>
			<Content>
				<HeaderContainer>
					<LogoContainer to='/'>
						<Logo className='logo' />
					</LogoContainer>
					<OptionsContainer>
						{!isAuth ? null : <OptionLink to='/profile'>PROFILE</OptionLink>}
						{!isAuth ? null : (
							<OptionLink as='div' to='#' onClick={() => signOut()}>
								SIGN OUT
							</OptionLink>
						)}
						{isAuth ? null : <OptionLink to='/signin'>SIGN IN</OptionLink>}
					</OptionsContainer>
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
