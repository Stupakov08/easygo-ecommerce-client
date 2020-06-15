import React from 'react';

import { connect } from 'react-redux';

import ShippingForm from './shipping.form';

import './shipping.styles.scss';

const Shipping = () => {
	return (
		<div className='shipping-wrp'>
			<h2 className='title'>Shipping information</h2>
			<span>Please provide your shipping address below</span>
			<ShippingForm />
		</div>
	);
};
const mapDispatchToProps = (dispatch) => ({});

export default connect(null, mapDispatchToProps)(Shipping);
