import rootReducer from "../reducers/rootReducer";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: rootReducer,
});

// Infer the `RootState` type from the store itself
export type RootState = ReturnType<typeof store.getState>;
