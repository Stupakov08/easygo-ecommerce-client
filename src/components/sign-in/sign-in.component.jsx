import React from 'react';
import './sign-in.styles.scss';
import SignInForm from './sign-in.form';

const SignIn = ({ emailSignInStart }) => {
	return (
		<div className='sign-in'>
			<h2>I already have an account</h2>
			<span>Sign in with your email and password</span>
			<SignInForm />
		</div>
	);
};

export default SignIn;
