import { TuyaDevice, TuyaSignInResponse } from "services/tuya/tuya.interfaces";

export interface LoginReducerState {
  loading: boolean;
  auth: TuyaSignInResponse;
  devices: TuyaDevice[];
}

export interface SignInData {
  email?: string;
  password?: string;
}
