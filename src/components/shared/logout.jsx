import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../redux/user/user.actions';

const Logout = ({ signOut }) => {
	signOut();
	return null;
};
const mapDispatchToProps = (dispatch, ownProps) => ({
	signOut: () => {
		dispatch(signOut());
	},
});
export default connect(null, mapDispatchToProps)(Logout);
