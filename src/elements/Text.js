import React from "react";
import { DefaultText } from "./Styled";

const Text = (props) => {
  const { children, ...styles } = props;

  return <DefaultText {...styles}>{children}</DefaultText>;
};

export default Text;
