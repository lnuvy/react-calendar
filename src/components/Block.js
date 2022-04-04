import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Text } from "../elements";
import { DefaultBlock } from "./Styled";

const Block = (props) => {
  const dispatch = useDispatch();
  const reduxTest = useSelector((state) => state.date.current);

  const { children } = props;

  return <DefaultBlock>{children}</DefaultBlock>;
};

export default Block;
