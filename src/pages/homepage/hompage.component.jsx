import React from 'react';
import { checkPrivateCall } from '../../redux/user/user.actions';
import { connect } from 'react-redux';

const HomePage = ({ call }) => {
	call();
	return <div>HomePage</div>;
};
const mapDispatchToProps = (dispatch) => ({
	call: () => {
		dispatch(checkPrivateCall());
	},
});

export default connect(null, mapDispatchToProps)(HomePage);
