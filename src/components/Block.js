import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Text } from "../elements";
import { DefaultBlock } from "./Styled";

const Block = (props) => {
  const dispatch = useDispatch();
  const reduxTest = useSelector((state) => state.date.current);

  const { children, today, thisMonth, _onClick = () => {} } = props;

  return (
    <DefaultBlock today={today} thisMonth={thisMonth} onClick={_onClick}>
      <Grid padding="10px" margin="5px 10px">
        {children}
      </Grid>
    </DefaultBlock>
  );
};

export default Block;
