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

  const cartPersistConfig = {
    key: "cart",
    version: 1,
    storage,
  };

  const favPersistConfig = {
    key: "fav",
    version: 1,
    storage,
  };

  const persistedCartReducer = persistReducer(cartPersistConfig, cartReducer);
  const persistedFavReducer = persistReducer(favPersistConfig, favReducer);

  export const store = configureStore({
    reducer: {
        cart: persistedCartReducer,
        fav: persistedFavReducer,
    },
   middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
   })

  })

  export let persistor = persistStore(store);