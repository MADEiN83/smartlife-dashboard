import { createReducer } from "@reduxjs/toolkit";

import { decrement, increment } from "./main.actions";
import { MainReducerState } from "./main.interface";

const initialState: MainReducerState = {
  value: 0,
};

const mainReducer = createReducer<MainReducerState>(initialState, {
  [increment.type]: (state) => {
    state.value++;
  },
  [decrement.type]: (state) => {
    state.value--;
  },
});

export default mainReducer;
