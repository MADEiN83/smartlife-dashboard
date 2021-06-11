export const withPayloadType = <T>() => {
  return (type: T) => ({ payload: type });
};

export type DispatchType = <T>(p: { payload: T; type: string }) => void;
