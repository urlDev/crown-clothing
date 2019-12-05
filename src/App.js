import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from "react-redux";
import './App.css';

import HomePage from './pages/homepage/homepage.component.jsx';
import ShopPage from './pages/shop/shop.component.jsx';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx';
import Header from './components/header/header.component.jsx';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from "./redux/user/user.actions";

class App extends React.Component {
	unsubscribeFromAuth: null;

	componentDidMount() {
		const { setCurrentUser } = this.props;
		/* this is an auth object,  */
		/* this function comes from firebase auth. also user comes from google too.
		where we can see displayName and email of the user, which google stores */
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
			/*this.setState ({ currentUser: user });
			console.log(user); */

			// if userAuth is true, exists not null
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);

				// onSnapShot is a firebase function and we pass in snapshot we created
				userRef.onSnapshot((snapShot) => {
					setCurrentUser  ({
							// we used snapshot.id to get id but snapshot doesnt have other data like displayName
							// so we also used snapshot.data() to get the name and id together
							id: snapShot.id,
							...snapShot.data()
						});
						// we did it like this because setState is async.
						// to make it sync we call an anonymous function and put console log inside it
					}); //, () => {console.log(this.state);}
				
			} else {
				setCurrentUser(userAuth);
			}
		});
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
				<Header />
				{/*telling header to be aware of current user state */}
				{/* header is here outside the switch so it would always be on top no matter which page we are in */}{' '}
				<Switch>
					{' '}
					{/* switch means it will render only that page, thats matching to the url */} {' '}
					<Route exact path="/" component={HomePage} />
					<Route path="/shop" component={ShopPage} />
					<Route path="/signin" component={SignInAndSignUpPage} />{' '}
				</Switch>{' '}
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps)(App);
