import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Text } from "../elements";
import { DefaultBlock } from "./Styled";
import Todo from "./Todo";

const Block = (props) => {
  const dispatch = useDispatch();
  const reduxTest = useSelector((state) => state.date.current);

  const {
    children,
    today,
    thisMonth,
    _onClick = () => {},
    left = false,
    list = null,
  } = props;

  console.log(list);

  return (
    <DefaultBlock
      left={left}
      today={today}
      thisMonth={thisMonth}
      onClick={_onClick}
    >
      <Grid padding="10px" margin="5px 10px">
        {children}
      </Grid>
      {list.map((todo) => {
        console.log("todo 맵", todo.color);
        return (
          <Todo
            key={todo.id}
            isCompleted={todo.isDone}
            bg={todo.color}
            _onClick={() => {
              console.log("모달 열어야함");
              // showModal(todo.id)
            }}
          >
            {todo.title}
          </Todo>
        );
      })}
    </DefaultBlock>
  );
};

export default Block;
