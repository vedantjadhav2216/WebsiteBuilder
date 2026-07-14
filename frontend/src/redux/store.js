/*import { configureStore } from "@reduxjs/toolkit";
import userSlice from './userSlice'

const store=configureStore({
    reducer:{
        user:userSlice
    }
})

export default store
*/

import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { 
  persistStore, 
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Defaults to localStorage for web
import userSlice from './userSlice'

// 1. Combine all your reducers
const rootReducer = combineReducers({
 user:userSlice,
});

// 2. Define the persistence configuration
const persistConfig = {
  key: 'VedSid-ai',
  storage:storage.default,
  // whitelist: ['auth'] // Optional: Only persist specific reducers
  // blacklist: ['counter'] // Optional: Exclude specific reducers
};

// 3. Create the persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// 4. Configure the store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore Redux Persist internal actions to prevent console warnings
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// 5. Create the persistor instance
export const persistor = persistStore(store);