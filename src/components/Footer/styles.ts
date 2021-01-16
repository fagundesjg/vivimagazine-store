import styled from 'styled-components';

import { colors } from 'styles';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 100%;
  background-color: ${colors.dark};
  color: ${colors.white};
`;

export { Container };
