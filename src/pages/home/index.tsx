import React, { useCallback } from "react";
import { useDispatch } from "react-redux";

import withLayout from "HOC/withLayout/withLayout";
import { useAppSelector } from "core/redux/redux.hooks";
import DeviceCard from "components/device-card";
import { toggle } from "core/redux/reducer/login/login.actions";

const Home: React.FC = () => {
  const devices = useAppSelector((state) => state.loginReducer.devices);
  const dispatch = useDispatch();

  const handleOnDeviceClick = useCallback(
    (deviceId: string, state: boolean) => {
      dispatch(toggle(deviceId, state));
    },
    [dispatch]
  );

  return (
    <div className="home">
      <div className="home__devices-container">
        {devices.map((device) => (
          <DeviceCard
            key={device.id}
            device={device}
            onClick={handleOnDeviceClick}
          />
        ))}
      </div>
    </div>
  );
};

export default withLayout(Home);
