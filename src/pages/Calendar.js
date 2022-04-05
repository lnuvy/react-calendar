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

  const weekArr = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const dates = useRenderDate(startDate, today, current);

  return (
    <Container>
      <CalendarWeek>
        {weekArr.map((el, i) => {
          return <WeekBox key={i}>{el}</WeekBox>;
        })}
      </CalendarWeek>
      <CalendarDate>{dates}</CalendarDate>
    </Container>
  );
};

const Container = styled.div`
  border-left: 1px solid black;
`;

const CalendarWeek = styled.div`
  display: grid;
  grid-template-columns: repeat(7, calc(100% / 7));
  height: 30px;
  border-top: 1px solid black;
`;

const WeekBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
`;

const CalendarDate = styled.div`
  display: grid;
  grid-template-columns: repeat(7, calc(100% / 7));
  grid-template-rows: 50px;
  height: 30px;
  grid-template-rows: repeat(6, calc((100vh - 150px) / 6));
`;

export default Calendar;
