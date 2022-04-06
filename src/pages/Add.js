import React from "react";
import styled from "styled-components";
import InputForm from "../components/InputForm";

const Add = () => {
  return (
    <Container>
      <InputForm />
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 50%;
  left: 50%;
  width: 90%;
  min-width: 320px;
  max-width: 500px;
  padding: 0 30px;
  transform: translate(-50%, -50%);
`;

export default Add;
