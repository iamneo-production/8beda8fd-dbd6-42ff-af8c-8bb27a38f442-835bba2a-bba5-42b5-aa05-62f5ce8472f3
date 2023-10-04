
import { createStore, combineReducers } from 'redux';
import userReducer from './reducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
  user: userReducer,
  
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user'], 
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer);

export const persistor = persistStore(store);

export default store;
