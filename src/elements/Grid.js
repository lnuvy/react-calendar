import React from "react";
import { DefaultGrid } from "./Styled";

const Grid = (props) => {
  const { children, ...styles } = props;

  return <DefaultGrid {...styles}>{children}</DefaultGrid>;
};

export default Grid;
