import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/header/header.component';
import './App.css';
import { Content } from './components/shared/content/content.styles';
import AuthRoute from './components/auth-route/auth-route.component';

import HomePage from './pages/homepage/hompage.component';
import Profile from './pages/profile/profile.component';
import SignInAndSignUpPage from './pages/sign-in-sign-up/sign-in-and-sign-up.component';
import Verified from './pages/verified/verified.component';
import ProductList from './pages/product-list/product-list.component';
import ProductDetails from './pages/pdp/pdp.component';
import Basket from './pages/basket/basket.component';
import OrderHistory from './pages/orderhistory/orderhistory.component';
import Order from './pages/orderdetail/orderdetail.component';
import Checkout from './pages/checkout/checkout.component';
import NotFound from './pages/NotFound';
import { connect } from 'react-redux';
import { getCart } from './redux/cart/cart.actions';

function App({ getCart, isAuth }) {
	useEffect(() => {
		isAuth && getCart();
	}, [isAuth]);
	return (
		<div>
			<Header></Header>
			<Content>
				<Switch>
					<AuthRoute exact path='/profile' render={() => <Profile />} />
					<Route exact path='/signin' render={() => <SignInAndSignUpPage />} />
					<Route exact path='/verified' render={() => <Verified />} />
					<Route exact path='/list' render={() => <ProductList />} />
					<Route exact path='/product/:id' render={() => <ProductDetails />} />
					<Route exact path='/' render={() => <HomePage />} />
					<Route exact path='/basket' render={() => <Basket />} />
					<AuthRoute exact path='/orders' render={() => <OrderHistory />} />
					<AuthRoute exact path='/order/:id' render={() => <Order />} />
					<AuthRoute exact path='/checkout' render={() => <Checkout />} />
					<Route render={() => <NotFound />} />
				</Switch>
			</Content>
		</div>
	);
}

const mapDispatchToProps = (dispatch, ownProps) => ({
	getCart: () => {
		dispatch(getCart());
	},
});
const mapStateToProps = ({ user }) => ({
	isAuth: user.currentUser && user.currentUser.userId,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
