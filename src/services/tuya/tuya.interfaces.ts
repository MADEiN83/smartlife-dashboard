export interface TuyaSignInResponse {
  access_token?: string;
  refresh_token?: string;
  token_type?: "bearer";
  expires_in?: number;
  errorMsg?: string;
  responseStatus?: "error";
}

export interface TuyaDeviceResponce {
  payload: {
    devices: TuyaDevice[];
    scenes: [];
  };
  header: {
    code: "SUCCESS";
    payloadVersion: 1;
  };
}

export interface TuyaDevice {
  data: {
    brightness?: string;
    color_mode?: string;
    online?: boolean;
    state?: boolean | "false" | "true";
    color_temp?: number;
  };
  name: string;
  icon: string;
  id: string;
  dev_type: string;
  ha_type: string;
}
