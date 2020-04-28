import React, { useState } from 'react';

import { connect } from 'react-redux';

import './sign-up.styles.scss';

const SignUp = ({ signUpStart }) => {
	return (
		<div className='sign-up'>
			<h2 className='title'>I do not have a account</h2>
			<span>Sшgn up with your email and password</span>
			<form className='sign-up-form'>
				<button type='submit'>SIGN UP</button>
			</form>
		</div>
	);
};
const mapDispatchToProps = (dispatch) => ({});

export default connect(null, mapDispatchToProps)(SignUp);
