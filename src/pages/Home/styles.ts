import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProductsContainer = styled.div`
  margin-top: 15px;
  padding-top: 100px;
  z-index: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  & > * {
    margin: 5px;
  }
`;

const SeeMore = styled.button`
  margin: 15px 0;
  height: 50px;
  width: 150px;
  border: none;
  background-color: white;
  text-transform: uppercase;
  font-family: "Roboto", sans-serif;
  border: 1px solid white;
  &:hover {
    color: green;
    border: 1px solid green;
  }
  &:focus {
    outline: none;
  }
`;

export { Container, ProductsContainer, SeeMore };
