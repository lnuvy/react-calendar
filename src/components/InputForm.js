import { getValue } from "@testing-library/user-event/dist/utils";
import moment from "moment";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { Button, Grid, Input } from "../elements";
import { actionCreators as todoActions } from "../redux/modules/todo";

const InputForm = (props) => {
  const dispatch = useDispatch();

  const [inputs, setInputs] = useState({
    color: "tomato",
    title: "",
    date: moment().format("YYYY-MM-DD"),
    location: "",
    memo: "",
  });

  const handleChange = (e) => {
    const { id } = e.target;
    const { value } = e.target;
    setInputs((values) => ({ ...values, [id]: value }));
  };

  const handleSubmit = () => {
    if (!inputs.title.trim()) {
      alert("제목이 비었음");
      return;
    }

    const todo = {
      ...inputs,
      date: parseInt(inputs.date.split("-").join("")),
      query: parseInt(inputs.date.slice(0, 5)),
      isDone: false,
    };
    dispatch(todoActions.addTodoFB(todo));
  };

  return (
    <Container>
      <Grid>
        <Input
          id="title"
          label="일정 제목*"
          _onChange={handleChange}
          value={inputs.title}
        />
        <Input
          id="location"
          label="장소"
          _onChange={handleChange}
          value={inputs.location}
        />
        <Input
          id="date"
          label="날짜*"
          _onChange={handleChange}
          value={inputs.date}
        />
        <Input
          id="memo"
          label="메모"
          _onChange={handleChange}
          value={inputs.memo}
        />
      </Grid>
      <Grid>
        <Button _onClick={handleSubmit}>일정 추가</Button>
      </Grid>
    </Container>
  );
};

export default InputForm;

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
`;
