import React, { Fragment } from "react";

import { GlobalStyle } from "./styles";
import { Routes } from "./routes";

const App: React.FC = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <Routes />
    </Fragment>
  );
};

export default App;
