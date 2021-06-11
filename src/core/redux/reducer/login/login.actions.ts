import { createAction } from "@reduxjs/toolkit";

import { DispatchType } from "core/redux/redux.utils";
import { TuyaDevice, TuyaSignInResponse } from "services/tuya/tuya.interfaces";
import TuyaService from "services/tuya/tuya.service";
import { SignInData } from "./login.interface";

export const setLoading = createAction<boolean>("SET_LOADING");
export const setToken = createAction<TuyaSignInResponse>("SET_TOKEN");
export const setDevices = createAction<TuyaDevice[]>("SET_DEVICES");

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
    console.log("oui");
    const {
      payload: { devices },
    } = await service.getDevices();
    dispatch(setDevices(devices));
  };
