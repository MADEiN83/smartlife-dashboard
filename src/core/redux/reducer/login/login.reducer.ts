import { createReducer } from "@reduxjs/toolkit";

import { setLoading, setToken, setDevices } from "./login.actions";
import { LoginReducerState } from "./login.interface";

const initialState: LoginReducerState = {
  loading: false,
  auth: {},
  devices: [],
};

const mainReducer = createReducer<LoginReducerState>(initialState, {
  [setLoading.type]: (state, action: any) => {
    state.loading = action.payload;
  },
  [setToken.type]: (state, action: any) => {
    state.auth = action.payload;
  },
  [setDevices.type]: (state, action: any) => {
    state.devices = action.payload;
  },
});

export default mainReducer;
