import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import HomePage from './pages/homepage/homepage.component.jsx';

const HatsPage = () => (
	<div>
		<h1>HATS PAGE</h1>
	</div>
);

function App() {
	return (
		<div>
			{/* exact means its true or false. If you dont say anything its true.as
			as name suggests, its for url to be exact. path is what will show in url
			and component is what will be put in there.
			 */}
			<Switch> {/* switch means it will render only that page, thats matching to the url */}
				<Route exact path="/" component={HomePage} />
				<Route path="/shop/hats" component={HatsPage} />
			</Switch>
		</div>
	);
}

export default App;
