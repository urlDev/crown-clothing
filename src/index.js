import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// Provider comes from react
import { Provider } from 'react-redux';

import { PersistGate } from 'redux-persist/integration/react';

import './index.css';
import App from './App';

import  { store, persistor } from './redux/store';

ReactDOM.render(
	// Provider must be parent of all components in order to work
	<Provider store={store}>
		<BrowserRouter>
			<PersistGate persistor={persistor}>
				<App />
			</PersistGate>
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);
