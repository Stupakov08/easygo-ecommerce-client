import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormControl from '../primitives/form-control.styles';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '../primitives/input.styles';
import InputLabel from '@material-ui/core/InputLabel';
import { connect } from 'react-redux';
import { emailSignIn, clearUserError } from '../../redux/user/user.actions';
import Button from '../primitives/button.styles';
import Alert from '../primitives/alert.component';

const SignInForm = ({ emailSignIn, error, clearError }) => {
	return (
		<>
			<Formik
				initialValues={{ email: '', password: '' }}
				onSubmit={(values) => {
					emailSignIn(values);
				}}
				validationSchema={Yup.object().shape({
					email: Yup.string()
						.email('Email ivalid')
						.required('Email is required'),
					password: Yup.string().required('Password is required'),
				})}
			>
				{(props) => {
					return (
						<Form onSubmit={props.handleSubmit}>
							<FormControl
								error={props.touched['email'] && !!props.errors['email']}
							>
								<InputLabel htmlFor='email'>Email</InputLabel>
								<Input
									id='email'
									name='email'
									value={props.values['email']}
									onChange={props.handleChange}
								/>
								{props.touched['email'] && props.errors['email'] && (
									<FormHelperText id='email-text'>
										{props.errors['email']}
									</FormHelperText>
								)}
							</FormControl>
							<FormControl
								error={props.touched['password'] && !!props.errors['password']}
							>
								<InputLabel htmlFor='password'>Password</InputLabel>
								<Input
									id='password'
									name='password'
									type='password'
									value={props.values['password']}
									onChange={props.handleChange}
								/>
								{props.touched['password'] && props.errors['password'] && (
									<FormHelperText id='password-text'>
										{props.errors['password']}
									</FormHelperText>
								)}
							</FormControl>
							<FormControl>
								<Button variant='outlined' color='primary' type='submit'>
									SIGN IN
								</Button>
							</FormControl>
						</Form>
					);
				}}
			</Formik>
			<Alert error={error} severity='error' onClose={clearError} />
		</>
	);
};

const mapStateToProps = ({ user }) => ({
	error: user.error,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	emailSignIn: (values) => {
		dispatch(emailSignIn(values));
	},
	clearError: () => {
		dispatch(clearUserError());
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm);
