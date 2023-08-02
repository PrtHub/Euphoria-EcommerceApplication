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
 import favReducer from "./favReducer";
 import cartReducer from "./cartReducer";

  const persistConfig = {
    key: "root",
    version: 1,
    storage,
  };

  const persistedReducer = persistReducer(persistConfig, cartReducer, favReducer);

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