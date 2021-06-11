import { SignInData } from "core/redux/reducer/login/login.interface";
import { TuyaSignInResponse } from "./tuya.interfaces";

const { REACT_APP_BASE_URL } = process.env;

class TuyaService {
  login = async (data: SignInData): Promise<TuyaSignInResponse> => {
    const body = new URLSearchParams();
    body.append("userName", data.email as string);
    body.append("password", data.password as string);
    body.append("countryCode", "eur");
    body.append("bizType", "smart_life");
    body.append("from", "tuya");

    return await this.post("auth.do", body);
  };

  /**
   * UTILS
   */
  private post = async (endpoint: string, body?: any) => {
    const url = `${REACT_APP_BASE_URL}${endpoint}`;
    return await fetch(url, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      method: "POST",
      body,
    }).then((r) => r.json());
  };
}

export default TuyaService;
