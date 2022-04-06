import React from "react";
import { useSelector } from "react-redux";
import Block from "../components/Block";

const useRenderDate = (start, now, current) => {
  const nowFormat = now.clone().format("YYYYMMDD"); // 오늘 날짜에만 별도로 표시하기 위해 사용
  const todoList = useSelector((state) => state.todo.list) || [];

  return (
    <>
      {
        // 7x6의 캘린더 이므로 Array(42)를 활용하여 캘린더 생성
        [...Array(42)].map((n, idx) => {
          let target = start.clone().add(idx, "d"); // 렌더할 날짜
          let today = target.clone().format("YYYYMMDD") === nowFormat; // 오늘인지 확인
          let thisMonth =
            target.clone().format("YYYYMM") ===
            current.clone().format("YYYYMM"); // 해당 날짜가 이번달인지 확인 (이번달이 아니면 날짜가 흐리게 보이도록 함)

          let list = todoList.filter(
            (todo) => todo.date === parseInt(target.format("YYYYMMDD"))
          );
          return (
            <Block key={idx} today={today} thisMonth={thisMonth} list={list}>
              {target.format("D")}
            </Block>
          );
        })
      }
    </>
  );
};

export default useRenderDate;
