import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component.jsx';
import ShopPage from './pages/shop/shop.component.jsx';
import Header from './components/header/header.component.jsx';

function App() {
	return (
		<div>
			{/* exact means its true or false. If you dont say anything its true.as
            			as name suggests, its for url to be exact. path is what will show in url
            			and component is what will be put in there.
            			 */}
			<Header/> {/* header is here outside the switch so it would always be on top no matter which page we are in */}
			<Switch>	
				{/* switch means it will render only that page, thats matching to the url */}{' '}
				<Route exact path="/" component={HomePage} /> 
				<Route path="/shop/" component={ShopPage} />
			</Switch>
		</div>
	);
}

export default App;
