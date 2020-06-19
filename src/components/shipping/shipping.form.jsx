import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormControl from '../primitives/form-control.styles';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '../primitives/input.styles';
import InputLabel from '@material-ui/core/InputLabel';
import { connect } from 'react-redux';
import Button from '../primitives/button.styles';
import Alert from '../primitives/alert.component';
import StripeCheckoutButton from '../stripe-button/stripe-button.component';

const ShippingForm = ({ emailSignUp, error, clearError }) => {
	return (
		<>
			<Formik
				initialValues={{
					name: '',
					country: '',
					city: '',
					address: '',
					zip: '',
				}}
				onSubmit={(values) => {}}
				validationSchema={Yup.object().shape({
					name: Yup.string().required('Name is required'),
					country: Yup.string().required('Country is required'),
					city: Yup.string().required('Country is required'),
					address: Yup.string().required('Country is required'),
					zip: Yup.string().required('Country is required'),
				})}
			>
				{(props) => {
					return (
						<Form onSubmit={props.handleSubmit}>
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
							<FormControl
								error={props.touched['country'] && !!props.errors['country']}
							>
								<InputLabel htmlFor='country'>Country</InputLabel>
								<Input
									id='country'
									name='country'
									value={props.values['country']}
									onChange={props.handleChange}
								/>
								{props.touched['country'] && props.errors['country'] && (
									<FormHelperText id='country-text'>
										{props.errors['country']}
									</FormHelperText>
								)}
							</FormControl>
							<FormControl
								error={props.touched['city'] && !!props.errors['city']}
							>
								<InputLabel htmlFor='city'>City</InputLabel>
								<Input
									id='city'
									name='city'
									value={props.values['city']}
									onChange={props.handleChange}
								/>
								{props.touched['city'] && props.errors['city'] && (
									<FormHelperText id='city-text'>
										{props.errors['city']}
									</FormHelperText>
								)}
							</FormControl>
							<FormControl
								error={props.touched['address'] && !!props.errors['address']}
							>
								<InputLabel htmlFor='address'>Address</InputLabel>
								<Input
									id='address'
									name='address'
									value={props.values['address']}
									onChange={props.handleChange}
								/>
								{props.touched['address'] && props.errors['address'] && (
									<FormHelperText id='address-text'>
										{props.errors['address']}
									</FormHelperText>
								)}
							</FormControl>
							<FormControl
								error={props.touched['zip'] && !!props.errors['zip']}
							>
								<InputLabel htmlFor='zip'>Zip</InputLabel>
								<Input
									id='zip'
									name='zip'
									value={props.values['zip']}
									onChange={props.handleChange}
								/>
								{props.touched['zip'] && props.errors['zip'] && (
									<FormHelperText id='zip-text'>
										{props.errors['zip']}
									</FormHelperText>
								)}
							</FormControl>
							<FormControl>
								{props.submitCount > 0 &&
								Object.keys(props.errors).length == 0 ? (
									<StripeCheckoutButton
										price={100}
										type='submit'
										formik={props}
									></StripeCheckoutButton>
								) : (
									<Button type='submit'>Save Shipping address</Button>
								)}
							</FormControl>
						</Form>
					);
				}}
			</Formik>
			<Alert error={error} severity='error' onClose={clearError} />
		</>
	);
};

const mapStateToProps = ({ user }) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ShippingForm);
