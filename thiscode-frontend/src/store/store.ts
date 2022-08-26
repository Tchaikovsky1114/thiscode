
import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook } from "react-redux/es/types";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { authApi, authReducer } from "./slices/authSlice";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

export const store = configureStore(
  {
  reducer:{
    auth:authReducer,
    [authApi.reducerPath]: authApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApi.middleware)
})

type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();

setupListeners(store.dispatch)