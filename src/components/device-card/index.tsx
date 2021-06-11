import React, { useCallback } from "react";

import { TuyaDevice } from "services/tuya/tuya.interfaces";

interface IProps {
  device: TuyaDevice;
  onClick: (deviceId: string, state: boolean) => void;
}

const DeviceCard: React.FC<IProps> = (props: IProps) => {
  const { device, onClick } = props;
  const online = device.data.online || false;

  const handleOnClick = useCallback(() => {
    if (!online) {
      return;
    }
    onClick(device.id, device.data.state === "true" ? false : true);
  }, [online, device, onClick]);

  return (
    <div
      role="button"
      className="device-card"
      data-online={online}
      data-state={device.data.state || false}
      onClick={handleOnClick}
      tabIndex={online ? 0 : undefined}
    >
      <div className="device-card__name">{device.name}</div>

      <div
        className="device-card__image"
        style={{ backgroundImage: `url(${device.icon})` }}
      />
    </div>
  );
};

export default DeviceCard;
