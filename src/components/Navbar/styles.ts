import styled from "styled-components";
import { colors } from "../../styles";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: fixed;
  z-index: 100;

  div {
    display: flex;
    height: 50px;
    align-items: center;
    padding: 0 20px;
  }

  & > :first-child {
    background-color: ${colors.smoke};
  }

  & > :last-child {
    background-color: ${colors.white};
    -webkit-box-shadow: 10px 10px 22px -18px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 10px 10px 22px -18px rgba(0, 0, 0, 0.75);
    box-shadow: 10px 10px 22px -18px rgba(0, 0, 0, 0.75);
  }
`;

const Logo = styled.h6`
  display: flex;
  font-family: "Courgette", cursive;
  cursor: pointer;
  user-select: none;
  color: green;
`;

const MenuContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 1;

  span,
  svg {
    font-family: "Roboto", sans-serif;
    text-transform: uppercase;
    font-size: 0.7em;
    cursor: pointer;
    &:hover {
      color: green;
    }
  }

  & > :not(:last-child) {
    margin-right: 20px;
  }
`;

export { Container, MenuContainer, Logo };
