import React from "react";

const withLayout = (WrappedComponent: React.FC<any>) => () => {
  return <WrappedComponent />;
};

export default withLayout;
