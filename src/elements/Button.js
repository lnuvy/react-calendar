import React from "react";
import { DefaultButton } from "./Styled";

const Button = (props) => {
  const { children = null, _onClick = () => {}, ...styles } = props;

  return (
    <DefaultButton onClick={_onClick} {...styles}>
      {children}
    </DefaultButton>
  );
};

export default Button;
