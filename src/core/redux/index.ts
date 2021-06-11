import { configureStore } from "@reduxjs/toolkit";

import mainReducer from "./reducer/main/main.reducer";

const store = configureStore({
  reducer: { mainReducer },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
