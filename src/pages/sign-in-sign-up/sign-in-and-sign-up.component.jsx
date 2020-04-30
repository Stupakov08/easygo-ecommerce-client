import React from 'react';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';
import { Redirect } from 'react-router-dom';
import { HomePageContainer } from './sign-in-and-sign-up.styles';
import { connect } from 'react-redux';

const SignInAndSignUpPage = ({ isAuth }) => {
	if (isAuth) {
		return <Redirect to='/' />;
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
