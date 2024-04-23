
import userReducer from './Userslice';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers, configureStore } from '@reduxjs/toolkit';


const rootReducer = combineReducers({ user: userReducer });

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
  };

const persistedReducer = persistReducer(persistConfig, rootReducer);
  
export const store = configureStore({
    reducer:  persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });

  export const persistor = persistStore(store);