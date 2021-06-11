import React from "react";
import { useDispatch } from "react-redux";

import { useAppSelector } from "core/redux/redux.hooks";
import { increment, decrement } from "core/redux/reducer/main/main.actions";

const Home: React.FC = () => {
  const count = useAppSelector((state) => state.mainReducer.value);
  const dispatch = useDispatch();

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
};

export default Home;
