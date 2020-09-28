import { createGlobalStyle } from 'styled-components';

import { colors } from './colors';
import './fonts/font-faces.css';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
        font-size: 1em;
    }
    html, body, #root {
        background-color: ${colors.smoke};
    }
    body {
        -webkit-font-smoothing: antialiased !important;
        p {
            line-height: 24pt;
        }
    }
    button {
        cursor: pointer;
        text-transform: uppercase;
  font-weight: 1.2em;
  color: white;
  background-color: ${colors.dark};
  margin-top: 10px;
  height: 35px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: #222;
  }

  svg {
    margin-left: 10px;
  }
    }
`;
