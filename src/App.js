import React from 'react';
import './App.css';
import Main from './pages/Main';
import ReceberAcesso from './pages/ReceberAcesso';
import Loading from './pages/Loading';
import Confirmacao from './pages/Confirmacao';

function App() {
  return (
    <>
      <Main />
      <ReceberAcesso />
      <Loading />
      <Confirmacao />
    </>
  );
}

export default App;
