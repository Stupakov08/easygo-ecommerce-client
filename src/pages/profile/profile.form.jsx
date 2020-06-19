import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormControl from '../../components/primitives/form-control.styles';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '../../components/primitives/input.styles';
import InputLabel from '@material-ui/core/InputLabel';
import { connect } from 'react-redux';
import Button from '../../components/primitives/button.styles';
import { updateProfile } from '../../redux/user/user.actions';

const ProfileForm = ({ user, updateProfile, id }) => {
	return (
		<>
			<Formik
				initialValues={{ email: user.email, name: user.name }}
				onSubmit={(values) => {
					updateProfile({ name: values.name, id: user.userId });
				}}
				validationSchema={Yup.object().shape({
					email: Yup.string()
						.email('Email ivalid')
						.required('Email is required'),
					name: Yup.string().required('Name is required'),
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
									disabled
								/>
								{props.touched['email'] && props.errors['email'] && (
									<FormHelperText id='email-text'>
										{props.errors['email']}
									</FormHelperText>
								)}
							</FormControl>
							<FormControl
								error={props.touched['name'] && !!props.errors['name']}
							>
								<InputLabel htmlFor='name'>Name</InputLabel>
								<Input
									id='name'
									name='name'
									value={props.values['name']}
									onChange={props.handleChange}
								/>
								{props.touched['name'] && props.errors['name'] && (
									<FormHelperText id='name-text'>
										{props.errors['name']}
									</FormHelperText>
								)}
							</FormControl>
							<FormControl>
								<Button variant='outlined' color='primary' type='submit'>
									SAVE PROFILE
								</Button>
							</FormControl>
						</Form>
					);
				}}
			</Formik>
		</>
	);
};

const mapStateToProps = ({ user }) => ({
	user: user.currentUser,
});
const mapDispatchToProps = (dispatch) => ({
	updateProfile: (props) => dispatch(updateProfile(props)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileForm);
