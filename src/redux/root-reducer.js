import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user-reducer'
import cartReducer from './cart/cart.reducer'

const cartPersistConfig = {
    key: 'cart',
    storage,
    whitelist: ['items']
};

const rootReducer = combineReducers({
    user: userReducer,
    cart: persistReducer(cartPersistConfig, cartReducer)
});

export default rootReducer;
