import React, { useState } from "react";
import { Button, Grid, Text } from "../elements";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { actionsCreators as dateActions } from "../redux/modules/date";

const Header = () => {
  const dispatch = useDispatch();
  const current = useSelector((state) => state.date.current);

  const lastMonth = () => {
    dispatch(dateActions.setDate(current.clone().subtract(1, "month")));
  };

  const nextMonth = () => {
    dispatch(dateActions.setDate(current.clone().add(1, "month")));
  };

  return (
    <>
      <Grid isFlex>
        <Button _onClick={lastMonth}>이전</Button>
        <Text bold>{current.format("YYYY년 MM월")}</Text>
        <Button _onClick={nextMonth}>다음</Button>
      </Grid>
    </>
  );
};

export default Header;
