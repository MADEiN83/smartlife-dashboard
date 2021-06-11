import { createReducer } from "@reduxjs/toolkit";

import { setLoading, setToken } from "./login.actions";
import { LoginReducerState } from "./login.interface";

const initialState: LoginReducerState = {
  loading: false,
  auth: {},
};

const mainReducer = createReducer<LoginReducerState>(initialState, {
  [setLoading.type]: (state, action: any) => {
    state.loading = action.payload;
  },
  [setToken.type]: (state, action: any) => {
    state.auth = action.payload;
  },
});

export default mainReducer;
