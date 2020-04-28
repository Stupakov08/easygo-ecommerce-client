import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/header/header.component';
import './App.css';
import Spinner from './components/spinner/spinner.component';
import ErrorBoundary from './components/error-boundary/error-boundary.component';

const SignInAndSignUpPage = lazy(() =>
	import('./pages/sign-in-sign-up/sign-in-and-sign-up.component')
);
const HomePage = lazy(() => import('./pages/homepage/hompage.component'));

function App() {
	return (
		<div>
			<Header></Header>
			<Switch>
				<ErrorBoundary>
					<Suspense fallback={<Spinner />}>
						<Route
							exact
							path='/signin'
							render={() => <SignInAndSignUpPage />}
						/>
						<Route exact path='/' render={() => <HomePage />} />
					</Suspense>
				</ErrorBoundary>
			</Switch>
		</div>
	);
}

export default App;
