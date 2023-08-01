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

  const persistConfig = {
    key: "root",
    version: 1,
    storage,
  };

  const persistedReducer = persistReducer(persistConfig, CartSlice);

  export const store = configureStore({
    reducer: {
        cart: persistedReducer
    },
   middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
   })

  })

  export let persistor = persistStore(store);