import React from 'react';
import { makeStyles, Toolbar, Typography, AppBar, Button, Tooltip } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';

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

export default function Navbar(props) {

  const classes = setStyles();
  const [icon, setIcon] = React.useState('brightness_3');

  const changeTheme = () => {
    props.changeType();
    let t = icon === 'brightness_3' ? 'brightness_7' : 'brightness_3'
    setIcon(t)
  }

  return (
    <>
      <AppBar className={classes.appBar} position="static">
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

            <Tooltip title="Mudar de tema" placement="bottom">
              <IconButton onClick={changeTheme} color="inherit" className={classes.button}>
                <Icon>{icon}</Icon>
              </IconButton>
            </Tooltip>

            <p>
              Agostinhocarrara@gmail.com
            </p>

            <Button color="inherit" className={classes.button}>
              Sair
            </Button>
          </div>
        </Toolbar>
      </AppBar>
      
      <div className={classes.appBar}></div>
    </>
  );
}
