import { createAction } from "@reduxjs/toolkit";

import { DispatchType } from "core/redux/redux.utils";

export const increment = createAction("INCREMENT");

export const decrement = createAction("DECREMENT");

export const scenario = () => async (dispatch: DispatchType) => {
  dispatch(increment());
  dispatch(decrement());
};
