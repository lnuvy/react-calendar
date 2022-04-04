import styled from "styled-components";

const DefaultButton = styled.button`
  width: ${(props) => props.width};
  ${(props) => (props.padding ? `padding: ${props.padding};` : "")};
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")};
`;

const DefaultGrid = styled.div`
  ${(props) =>
    props.isFlex
      ? `display: flex; align-items: center; justify-content: space-between;`
      : null}

  height: 100%;
  width: ${(props) => props.width};
  ${(props) => (props.padding ? `padding: ${props.padding};` : null)}
  ${(props) => (props.margin ? `margin: ${props.margin};` : null)}
  ${(props) => (props.bg ? `background: ${props.bg};` : null)}
  ${(props) => (props.center ? `text-align: center;` : null)}
`;

const DefaultInput = styled.input``;

const DefaultText = styled.p`
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => (props.bold ? "600" : "400")};

  ${(props) => (props.margin ? `margin:${props.margin};` : "")}
`;

export { DefaultButton, DefaultGrid, DefaultInput, DefaultText };