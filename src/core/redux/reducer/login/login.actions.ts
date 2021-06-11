import { createAction } from "@reduxjs/toolkit";

import { DispatchType } from "core/redux/redux.utils";
import { TuyaDevice, TuyaSignInResponse } from "services/tuya/tuya.interfaces";
import TuyaService from "services/tuya/tuya.service";
import { SignInData } from "./login.interface";

export const setLoading = createAction<boolean>("SET_LOADING");
export const setToken = createAction<TuyaSignInResponse>("SET_TOKEN");
export const setDevices = createAction<TuyaDevice[]>("SET_DEVICES");
export const updateDeviceState = createAction<{
  deviceId: string;
  state: boolean;
}>("UPDATE_DEVICE_STATE");

export const signIn = (data: SignInData) => async (dispatch: DispatchType) => {
  dispatch(setLoading(true));

  try {
    const tuyaService = new TuyaService();
    const response = await tuyaService.login(data);

    dispatch(setToken(response));

    await getDevices(tuyaService)(dispatch);
  } catch {}

  dispatch(setLoading(false));
};

export const getDevices =
  (service: TuyaService) => async (dispatch: DispatchType) => {
    const {
      payload: { devices },
    } = await service.getDevices();
    dispatch(setDevices(devices));
  };

export const toggle =
  (deviceId: string, state: boolean) => async (dispatch: DispatchType) => {
    const tuyaService = new TuyaService();
    const {
      header: { code },
    } = await tuyaService.toggle(deviceId, state);

    if (code !== "SUCCESS") {
      return;
    }

    dispatch(updateDeviceState({ deviceId, state }));
  };
