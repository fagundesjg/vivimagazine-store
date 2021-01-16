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
`;
