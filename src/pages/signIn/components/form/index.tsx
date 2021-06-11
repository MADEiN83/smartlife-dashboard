import React from "react";

import { SignInData } from "core/redux/reducer/login/login.interface";
import { useAppSelector } from "core/redux/redux.hooks";

interface IProps {
  data: SignInData;
  onChange: (key: string) => (e: any) => void;
  onClick: () => void;
}

const Form: React.FC<IProps> = (props: IProps) => {
  const { data, onChange, onClick } = props;
  const loading = useAppSelector((state) => state.loginReducer.loading);

  return (
    <>
      <input
        onChange={onChange("email")}
        value={data.email}
        style={{ width: "100%" }}
        disabled={loading}
      />

      <input
        onChange={onChange("password")}
        type="password"
        value={data.password}
        style={{ width: "100%" }}
        disabled={loading}
      />

      <button onClick={onClick} disabled={loading}>
        Sign In
      </button>
    </>
  );
};

export default Form;
