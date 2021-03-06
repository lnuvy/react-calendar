import React from "react";
import styled from "styled-components";

const Todo = (props) => {
  const {
    isDone = false,
    bg = "rose",
    _onClick = () => {},
    children = null,
  } = props;

  return (
    <TodoBtn type="button" bg={bg} onClick={_onClick}>
      {isDone ? `(완)${children}` : `(미완)${children}`}
    </TodoBtn>
  );
};

const TodoBtn = styled.button`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  padding: 0 3px 2px 3px;
  margin-bottom: 3px;
  border-radius: 5px;
  color: black;
  background: ${(props) => props.bg};
  font-size: 12px;
  white-space: nowrap;
  overflow: hidden;
`;

export default Todo;
