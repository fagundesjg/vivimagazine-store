import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  width: 100%;
`;

const ProductsContainer = styled.div`
  padding: 0 5%;
  margin-top: 15px;
  padding-top: 100px;
  z-index: 1;
  flex: 1;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 576px) {
    justify-content: space-between;
  }

  & > * {
    margin: 5px;
  }
`;

const SeeMore = styled.button`
  cursor: pointer;
  margin: 15px 8px;
  height: 50px;
  width: 150px;
  border: none;
  background-color: white;
  color: black;
  text-transform: uppercase;
  font-family: 'Roboto', sans-serif;
  border: 1px solid white;
  &:hover {
    color: green;
    border: 1px solid green;
  }
  &:focus {
    outline: none;
  }

  &:disabled {
    background-color: #efefef;
    color: #ccc;
    border: 1px solid #efefef;
    cursor: default;
    &:hover {
      color: #ccc;
      background-color: #efefef;
      border: 1px solid #efefef;
    }
  }
`;

export { Container, ProductsContainer, SeeMore };
