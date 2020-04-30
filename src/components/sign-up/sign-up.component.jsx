import React from 'react';

import { connect } from 'react-redux';

import SignUpForm from './sign-up.form';

import './sign-up.styles.scss';

const SignUp = () => {
	return (
		<div className='sign-up'>
			<h2 className='title'>I do not have a account</h2>
			<span>Sign up with your email and password</span>
			<SignUpForm />
		</div>
	);
};
const mapDispatchToProps = (dispatch) => ({});

export default connect(null, mapDispatchToProps)(SignUp);
