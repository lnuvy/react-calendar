import styled from "styled-components";

const DefaultBlock = styled.div`
  ${(props) => (props.today ? `background: tomato;` : null)}
  ${(props) =>
    props.thisMonth ? `color: black; font-weight: 600;` : `color: gray;`}
  border-right: 1px solid black;
  border-bottom: 1px solid black;
  ${(props) => (props.left ? `border-left: 1px solid black;` : "")}
`;

export { DefaultBlock };
