import React, { useState } from "react";
import { Grid } from "../elements";
import moment from "moment";
import { useSelector } from "react-redux";

const Calendar = () => {
  const current = useSelector((state) => state.date.current);
  console.log(current);

  // 14, 18 등 숫자형으로 들어옴
  const firstWeek = current.clone().startOf("month").week();
  const lastWeek =
    current.clone().endOf("month").week() === 1
      ? 53
      : current.clone().endOf("month").week();

  const weekArr = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const calendarArr = () => {
    let result = [];
    let week = firstWeek;
    for (week; week <= lastWeek; week++) {
      result = result.concat(
        <tr key={week}>
          {Array(7)
            .fill(0)
            .map((data, index) => {
              let days = current
                .clone()
                .startOf("year")
                .week(week)
                .startOf("week")
                .add(index, "day");

              if (moment().format("YYYYMMDD") === days.format("YYYYMMDD")) {
                return (
                  <td key={index} style={{ backgroundColor: "red" }}>
                    <span>{days.format("D")}</span>
                  </td>
                );
              } else if (days.format("MM") !== current.format("MM")) {
                return (
                  <td key={index} style={{ backgroundColor: "gray" }}>
                    <span>{days.format("D")}</span>
                  </td>
                );
              } else {
                return (
                  <td key={index}>
                    <span>{days.format("D")}</span>
                  </td>
                );
              }
            })}
        </tr>
      );
    }
    return result;
  };

  return (
    <Grid>
      <table>
        <thead>
          <tr>
            {weekArr.map((el, i) => {
              return <td key={`${i}_${el}`}>{el}</td>;
            })}
          </tr>
        </thead>
        <tbody>{calendarArr()}</tbody>
      </table>
    </Grid>
  );
};

export default Calendar;
