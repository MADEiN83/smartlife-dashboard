import { createAction } from "@reduxjs/toolkit";

import { DispatchType } from "core/redux/redux.utils";
import { TuyaSignInResponse } from "services/tuya/tuya.interfaces";
import TuyaService from "services/tuya/tuya.service";
import { SignInData } from "./login.interface";

export const setLoading = createAction<boolean>("SET_LOADING");
export const setToken = createAction<TuyaSignInResponse>("SET_TOKEN");

export const signIn = (data: SignInData) => async (dispatch: DispatchType) => {
  dispatch(setLoading(true));

  try {
    const tuyaService = new TuyaService();
    const response = await tuyaService.login(data);

    dispatch(setToken(response));
  } catch {}

  dispatch(setLoading(false));
};
