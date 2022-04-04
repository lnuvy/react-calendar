import React, { useState } from "react";
import { Grid } from "../elements";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import Block from "../components/Block";
import styled from "styled-components";
import useRenderDate from "../redux/useRenderDate";

const Calendar = (props) => {
  const dispatch = useDispatch();
  const current = useSelector((state) => state.date.current);
  console.log(current);

  const today = moment();

  const firstDay = current.clone().startOf("month");
  const startDate = firstDay.clone().subtract(firstDay.day(), "day");

  console.log("firstDay, startDay", firstDay, startDate);

  const weekArr = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const dates = useRenderDate(startDate, today, current);

  return (
    <Grid>
      <Grid isFlex padding="15px">
        {weekArr.map((el, i) => {
          return <Grid key={`${i}_${el}`}>{el}</Grid>;
        })}
      </Grid>
      <CalendarDate>{dates}</CalendarDate>
    </Grid>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(7, calc(100% / 7));
  grid-template-rows: 30px;
  height: 30px;
`;

const CalendarDate = styled.div`
  display: grid;
  grid-template-columns: repeat(7, calc(100% / 7));
  grid-template-rows: 30px;
  height: 30px;
  grid-template-rows: repeat(6, calc((100vh - 90px) / 6));
`;

export default Calendar;
