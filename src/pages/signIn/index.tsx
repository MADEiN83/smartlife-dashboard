import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";

import { useAppSelector } from "core/redux/redux.hooks";
import { signIn } from "core/redux/reducer/login/login.actions";
import { SignInData } from "core/redux/reducer/login/login.interface";
import withLayout from "HOC/withLayout/withLayout";
import Form from "./components/form";
import Message from "components/message";

const SignIn: React.FC = () => {
  const { loading, auth } = useAppSelector((state) => state.loginReducer);
  const dispatch = useDispatch();

  const [data, setData] = useState<SignInData>({});

  const handleOnChange = useCallback(
    (key: string) => {
      return (e: any) => {
        const { value } = e.currentTarget;
        setData({ ...data, [key]: value.trim() });
      };
    },
    [data]
  );

  const handleOnClick = useCallback(
    () => dispatch(signIn(data)),
    [dispatch, data]
  );

  return (
    <div>
      {!loading && auth.errorMsg && <Message>{auth.errorMsg}</Message>}
      <Form data={data} onChange={handleOnChange} onClick={handleOnClick} />
    </div>
  );
};

export default withLayout(SignIn);
