import React from "react";
import styled from "styled-components";
import { Text } from "../elements";

const ModalHeader = (props) => {
  const { color, title, isDone } = props;

  return (
    <Header color={color}>
      <Text>{isDone ? "완료" : "미완료"}</Text>
      <Text bold>{title}</Text>
    </Header>
  );
};

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;

  height: 30%;
  background-color: ${(props) => (props.color ? `${props.color};` : "rose")};
  padding: 20px;
`;
