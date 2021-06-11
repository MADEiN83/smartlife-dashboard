import { TuyaSignInResponse } from "services/tuya/tuya.interfaces";

export interface LoginReducerState {
  loading: boolean;
  auth: TuyaSignInResponse;
}

export interface SignInData {
  email?: string;
  password?: string;
}
