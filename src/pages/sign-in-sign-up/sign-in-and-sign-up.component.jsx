import React, { useState, useEffect } from 'react';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';
import { Redirect, useLocation } from 'react-router-dom';
import { HomePageContainer } from './sign-in-and-sign-up.styles';
import { connect } from 'react-redux';

const SignInAndSignUpPage = ({ isAuth }) => {
	const location = useLocation();

	if (isAuth) {
		return (
			<Redirect to={(location.state && location.state.redirectUrl) || '/'} />
		);
	}
	return (
		<HomePageContainer>
			<SignIn />
			<SignUp />
		</HomePageContainer>
	);
};

const mapStateToProps = ({ user }) => ({
	isAuth: user.currentUser && user.currentUser.userId,
});

export default connect(mapStateToProps)(SignInAndSignUpPage);
