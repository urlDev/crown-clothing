import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer.jsx';
import cartReducer from './cart/cart.reducer';
import directoryReducer from "./directory/directory.reducer";
import shopReducer from "./shop/shop.reducer";

const persistConfig = {
    // we want to start from root, for storing
    key: 'root',
    storage,
    // array that we want to store reducers into
    // we wrote only cart here because userReducer is stored by auth in firebase
    whitelist: ['cart']
};

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer
});

// we will export modified version of rootreducer with persistconfig
// to store cart items
export default persistReducer(persistConfig, rootReducer);