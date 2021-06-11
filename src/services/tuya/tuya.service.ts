import store from "core/redux";
import { SignInData } from "core/redux/reducer/login/login.interface";
import { TuyaDeviceResponce, TuyaSignInResponse } from "./tuya.interfaces";
import TUYA_ROUTES from "./tuya.routes";

const { REACT_APP_BASE_URL } = process.env;

class TuyaService {
  login = async (data: SignInData): Promise<TuyaSignInResponse> => {
    const body = new URLSearchParams();
    body.append("userName", data.email as string);
    body.append("password", data.password as string);
    body.append("countryCode", "eur");
    body.append("bizType", "smart_life");
    body.append("from", "tuya");

    return await this.post(TUYA_ROUTES.LOGIN, body, {
      "Content-Type": "application/x-www-form-urlencoded",
    });
  };

  getDevices = async (): Promise<TuyaDeviceResponce> => {
    const body = {
      header: {
        name: "Discovery",
        namespace: "discovery",
        payloadVersion: 1,
      },
      payload: {
        accessToken: this.getAccessToken(),
      },
    };

    return await this.post(TUYA_ROUTES.SKILL, JSON.stringify(body));
  };

  /**
   * UTILS
   */
  private post = async (
    endpoint: string,
    body?: any,
    headers?: HeadersInit
  ) => {
    const url = `${REACT_APP_BASE_URL}${endpoint}`;
    return await fetch(url, {
      headers,
      method: "POST",
      body,
    }).then((r) => r.json());
  };

  private getAccessToken = (): string | undefined => {
    const {
      loginReducer: {
        auth: { access_token },
      },
    } = store.getState();
    return access_token;
  };
}

export default TuyaService;
