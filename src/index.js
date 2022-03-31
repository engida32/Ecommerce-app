import { CssBaseline } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// import { ThemeProvider } from '@mui/material/styles';
// import theme from './style/theme'
// import Context from "./context/Context";

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    {/* <Context> */}
      <App />
    {/* </Context> */}
  </React.StrictMode>,
  document.getElementById("root")
);
