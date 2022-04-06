import React from "react";
import styled from "styled-components";

const ColorBtns = (props) => {
  const { current, _onClick } = props;

  const label = {
    tomato: "#ff6347",
    darkRed: "#9A031E",
    Darkcyan: "#008B8B",
    Darkgreen: "#006400",
    Darkslateblue: "#483D8B",
    green: "#008000",
    Aqua: "#0F4C5C",
    Maroon: "#800000",
    violet: "#6D597A",
    Lightgreen: "#90EE90",
    Mediumblue: "#0000CD",
  };

  // { 0: ["brick", "#c8553d"], 1: [...], ... } 형식
  const labels = Object.entries(label);

  return (
    <Container>
      {labels.map((label, idx) => {
        return (
          <LabelBtn
            type="button"
            key={label[0]}
            id={label[0]}
            color={label[1]}
            current={current === label[0]} // 현재 색상과 해당 색상이 같으면 true 아니면 false
            onClick={_onClick}
          ></LabelBtn>
        );
      })}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 30px;
`;

const LabelBtn = styled.button`
  width: 20px;
  height: 20px;
  border: 3px solid ${({ current }) => (current ? "black" : "transparent")}; // 선택된 색상과 해당 색상이 같을 경우 h
  border-radius: 50%;
  background-color: ${({ color }) => color};
`;

export default ColorBtns;
