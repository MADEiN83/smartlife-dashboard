import React from "react";
import { useDispatch } from "react-redux";

import { useAppSelector } from "core/redux/redux.hooks";
import { increment, decrement } from "core/redux/reducer/main/main.actions";
import withLayout from "HOC/withLayout/withLayout";

const SignIn: React.FC = () => {
  const count = useAppSelector((state) => state.mainReducer.value);
  const dispatch = useDispatch();

  return <div>SignIn</div>;
};

export default withLayout(SignIn);
