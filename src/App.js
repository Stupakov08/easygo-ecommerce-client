import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/header/header.component';
import './App.css';
import { Content } from './components/shared/content/content.styles';
import AuthRoute from './components/auth-route/auth-route.component';

import HomePage from './pages/homepage/hompage.component';
import Profile from './pages/profile/profile.component';
import SignInAndSignUpPage from './pages/sign-in-sign-up/sign-in-and-sign-up.component';
import Verified from './pages/verified/verified.component';

function App() {
	return (
		<div>
			<Header></Header>
			<Content>
				<Switch>
					<AuthRoute exact path='/profile' render={() => <Profile />} />
					<Route exact path='/signin' render={() => <SignInAndSignUpPage />} />
					<Route exact path='/verified' render={() => <Verified />} />
					<Route exact path='/' render={() => <HomePage />} />
				</Switch>
			</Content>
		</div>
	);
}

export default App;
