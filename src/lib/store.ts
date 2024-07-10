import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./baseApi";

const rootReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
});

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (gdm) => gdm().concat(baseApi.middleware),
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
