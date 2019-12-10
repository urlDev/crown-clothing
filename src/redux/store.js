import { createStore, applyMiddleware } from 'redux';
// persiststore is needed for app to not to empty basket everytime we refresh the page
// to have a storage
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);

export default { store, persistStore };