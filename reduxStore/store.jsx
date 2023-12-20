import { configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'

import scriptsSlice, { scriptsReducer } from './scriptsSlice';
import stylesheetsSlice, { stylesheetsReducer } from './stylesheetsSlice';

const reduxStore = configureStore({
    reducer: {
        [stylesheetsSlice.name]: stylesheetsReducer,
        [scriptsSlice.name]: scriptsReducer,
    },
    devTools: true,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: [],
        // Ignore these field paths in all actions
        ignoredActionPaths: [],
        // Ignore these paths in the state
        ignoredPaths: [],
      },
    }),
})

const createStore = () => reduxStore;

export const reduxWrapper = createWrapper(createStore);

export default reduxStore;