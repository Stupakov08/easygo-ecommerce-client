import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const AuthRoute = ({ isAuth, ...props }) => {
	return isAuth ? (
		<Route path={props.path} render={props.render} />
	) : (
		<Redirect
			to={{
				pathname: '/signin',
				state: { redirectUrl: props.location.pathname },
			}}
		/>
	);
};
const mapStateToProps = ({ user }) => ({
	isAuth: user.currentUser && user.currentUser.userId,
});
export default connect(mapStateToProps)(AuthRoute);
