import { createReducer } from "@reduxjs/toolkit";

import {
  setLoading,
  setToken,
  setDevices,
  updateDeviceState,
} from "./login.actions";
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
  [updateDeviceState.type]: (state, action: any) => {
    const newDevices = [...state.devices];
    const wantedDevice = newDevices.find(
      (device) => device.id === action.payload.deviceId
    );

    if (!wantedDevice) {
      return;
    }

    wantedDevice.data.state = action.payload.state.toString();
    state.devices = newDevices;
  },
});

export default mainReducer;
