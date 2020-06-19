import React from 'react';
import { connect } from 'react-redux';

import Overview from './overview.component.jsx';
import { withRouter, Redirect } from 'react-router-dom';
import Shipping from '../../components/shipping/shipping.component';

import './checkout.styles.scss';

const Checkout = ({ cartItems, total, history }) => {
	if (!cartItems.length) return <Redirect to='/basket' />;
	return (
		<>
			<div className='checkout'>
				<div className='form-holder'>
					<Shipping />
				</div>
				<Overview />
			</div>
		</>
	);
};

const mapStateToProps = ({ cart }) => ({
	cartItems: cart.cartItems,
});

export default withRouter(connect(mapStateToProps)(Checkout));
