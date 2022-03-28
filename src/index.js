import { CssBaseline } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import { ThemeProvider } from '@mui/material/styles';
// import theme from './style/theme'

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    {/* <ThemeProvider theme={theme}> */}

    <App />
    {/* </ThemeProvider> */}
  </React.StrictMode>,
  document.getElementById('root')
);
