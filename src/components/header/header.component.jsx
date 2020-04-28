import React from 'react';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/go.svg';
import {
	HeaderContainer,
	LogoContainer,
	OptionsContainer,
	OptionLink,
} from './header.styles';

const Header = () => (
	<HeaderContainer>
		<LogoContainer to='/'>
			<Logo className='logo' />
		</LogoContainer>
		<OptionsContainer>
			<OptionLink to='/link'>link</OptionLink>
			<OptionLink to='/link'>link</OptionLink>
			<OptionLink as='div'>SIGN OUT</OptionLink>
			<OptionLink to='/signin'>SIGN IN</OptionLink>
		</OptionsContainer>
	</HeaderContainer>
);

const mapDispatchToProps = (dispatch) => ({});
export default connect(null, mapDispatchToProps)(Header);
