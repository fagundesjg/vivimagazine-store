import styled from "styled-components";
import { colors } from "../../styles";

const Container = styled.div`
  user-select: none;
  cursor: pointer;
  display: flex;
  &:hover {
    color: green;
  }
`;

const OptionsContainer = styled.span`
  position: absolute;
  background-color: ${colors.white};
  display: flex;
  flex-direction: column;
  top: 100px;
  -webkit-box-shadow: 10px 10px 34px -16px rgba(184, 184, 184, 1);
  -moz-box-shadow: 10px 10px 34px -16px rgba(184, 184, 184, 1);
  box-shadow: 10px 10px 34px -16px rgba(184, 184, 184, 1);
`;

const Item = styled.div`
  align-self: flex-start;
  padding: 0 20px;
  width: 100%;
  &:hover {
    color: green;
    background-color: #eee;
  }
`;

export { Container, OptionsContainer, Item };
