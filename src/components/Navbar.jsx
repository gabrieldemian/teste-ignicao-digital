import React from 'react';
import { makeStyles, Toolbar, Typography, AppBar, Button, Link } from '@material-ui/core';

const setStyles = makeStyles(theme => ({
  button: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(3)
  },
  appBar: {
    marginBottom: theme.spacing(12)
  },
  listEnd: {
    right: 0,
    display: 'flex',
    position: 'absolute'
  }
  
}));

export default function components() {

  const classes = setStyles();

  return (
    <>
      <AppBar className={classes.appBar} position="initial">
        <Toolbar variant="dense">
          
          <Typography
            component="h2"
            variant="h5"
            color="inherit"
            align="center"
            noWrap
          >
            Fórmula de Lançamento
          </Typography>

          <div className={classes.listEnd}>
            <p>
              Agostinhocarrara@gmail.com
            </p>
            <Button className={classes.button}>
              Sair
            </Button>
          </div>
        </Toolbar>
      </AppBar>
      
      <div className={classes.appBar}></div>
    </>
  );
}
