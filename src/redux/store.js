import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {   
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER, } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import phonebookReducer from './reducer';
import logger from 'redux-logger'

const middleware = [
    ...getDefaultMiddleware({
        serializableCheck: {
    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  }}),
  logger,
];

const persistConfig={
    key: 'contacts',
    storage,
    blacklist:["filter"],
}


const store = configureStore({
    reducer:{
    contacts:
    persistReducer(
        persistConfig,
        phonebookReducer)
    },
    middleware,
    devTools:process.env.NODE_ENV === 'development', 
});

const persistor = persistStore(store)

export  { store, persistor }