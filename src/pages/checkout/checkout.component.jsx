import React from 'react';
import { connect } from 'react-redux';
import Button from '../../components/primitives/button.styles';

import BasketItem from '../../components/basket-item/basket-item.component';
import Overview from './overview.component.jsx';
import { withRouter } from 'react-router-dom';

import './checkout.styles.scss';

const Checkout = ({ cartItems, total, history }) => {
	return (
		<div className='checkout'>
			<div className='form-holder'></div>
			<Overview />
		</div>
	);
};

const mapStateToProps = ({ cart }) => ({});

export default withRouter(connect(mapStateToProps)(Checkout));
