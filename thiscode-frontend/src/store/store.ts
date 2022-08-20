
import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook } from "react-redux/es/types";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { composeWithDevTools } from "redux-devtools-extension";
import { authReducer } from "./slices/authSlice";

export const store = configureStore({
  reducer:{auth:authReducer}
})



type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
