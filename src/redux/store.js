import storage from 'redux-persist/lib/storage'
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

import { configureStore } from "@reduxjs/toolkit";
import { rentCarsSlice } from "./rentCars/slice";
import { favoritesSlice } from "./favorites/slice";



const persistConfig = {
  key: 'favorites',
  storage
}

export const store = configureStore({
  reducer: {
    rentCars: rentCarsSlice.reducer,
    favorites: persistReducer(persistConfig, favoritesSlice.reducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);





