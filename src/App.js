import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component.jsx';
import ShopPage from './pages/shop/shop.component.jsx';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx';
import Header from './components/header/header.component.jsx';
import { auth } from './firebase/firebase.utils';

class App extends React.Component {
	constructor(props) {
		super(props);
		

		this.state = {
			currentUser: null
		}
	}

	unsubscribeFromAuth: null
	
	componentDidMount () {
		/* this function comes from firebase. also user comes from google too.
		where we can see displayName and email of the user, which google stores */
		this.unsubscribeFromAuth = auth.onAuthStateChanged( user => {
			this.setState ({ currentUser: user });

			console.log(user);
		})
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}


	render() {
		return (
			<div>
				{' '}
				{/* exact means its true or false. If you dont say anything its true.as
                        			as name suggests, its for url to be exact. path is what will show in url
                        			and component is what will be put in there.
                        			 */}{' '}
				<Header currentUser={this.state.currentUser}/>{/*telling header to be aware of current user state */}
				{/* header is here outside the switch so it would always be on top no matter which page we are in */}{' '}
				<Switch>
					{' '}
					{/* switch means it will render only that page, thats matching to the url */}  {' '}
					<Route exact path="/" component={HomePage} /> <Route path="/shop" component={ShopPage} />{' '}
					<Route path="/signin" component={SignInAndSignUpPage} />{' '}
				</Switch>{' '}
			</div>
		);
	}
}

export default App;
