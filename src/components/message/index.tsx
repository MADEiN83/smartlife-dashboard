import React from "react";

interface IProps {
  children: string;
  type?: "danger";
}

const Message: React.FC<IProps> = (props: IProps) => {
  const { children, type = "danger" } = props;

  return (
    <div className="message" data-type={type}>
      {children}
    </div>
  );
};

export default Message;
