import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// Provider comes from react
import { Provider } from "react-redux";

import './index.css';
import App from './App';

ReactDOM.render(
	// Provider must be parent of all components in order to work
	<Provider>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>,
	
	document.getElementById('root')
);
