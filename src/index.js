import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { red, blue } from '@material-ui/core/colors';
import { ThemeProvider } from '@material-ui/styles';
import { CssBaseline } from '@material-ui/core';

// Create a theme instance.
let theme = createMuiTheme({
  palette: {
    type: 'dark',
    spacing: 4,
    primary: {
      main: blue[500],
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    }
  },
});

theme = responsiveFontSizes(theme);

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>
  , document.getElementById('root'));