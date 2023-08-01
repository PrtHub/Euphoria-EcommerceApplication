import { configureStore } from "@reduxjs/toolkit";

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from "redux-persist";
  import storage from "redux-persist/lib/storage";
  import CartSlice from "./CartSlice";
  import FavSlice from "./FavSlice";

  const persistConfig = {
    key: "root",
    version: 1,
    storage,
  };

  const persistedReducer = persistReducer(persistConfig, CartSlice, FavSlice);

  export const store = configureStore({
    reducer: {
        cart: persistedReducer,
        fav: persistedReducer
    },
   middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
   })

  })

  export let persistor = persistStore(store);