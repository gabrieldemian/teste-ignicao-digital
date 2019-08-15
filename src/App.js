import React, { useState } from 'react';
import './App.css';
import Main from './pages/Main';
import ReceberAcesso from './pages/ReceberAcesso';
import Loading from './pages/Loading';
import Confirmacao from './pages/Confirmacao';
import { ThemeProvider } from '@material-ui/styles';
import { CssBaseline } from '@material-ui/core';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { red, blue } from '@material-ui/core/colors';

function App() {
  
  const [type, setType] = useState('dark')

  // Create a theme instance.
  let themeObj = createMuiTheme({
    palette: {
      type: type,
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

  themeObj = responsiveFontSizes(themeObj);

  const changeType = () => {
    let t = type === 'light' ? 'dark' : 'light'
    setType(t)
  }

  return (
    <ThemeProvider theme={themeObj}>
      <CssBaseline />
      <Main changeType={changeType} />
      <ReceberAcesso />
      <Loading />
      <Confirmacao />
    </ThemeProvider>
  );
}

export default App;
