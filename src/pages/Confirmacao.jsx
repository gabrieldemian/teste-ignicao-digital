import React from 'react'
import { makeStyles, Grid, Typography, Box } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  center: {
    margin: 'auto',
  },
  titleWrapper: {
    marginTop: '-120px',
    marginBottom: theme.spacing(1)
  },
  wrapper: {
    height: '100vh',
    display: 'flex'
  },
  agostinho: {
    width: '316px',
    height: '265px',
    '& img': {
      width: 'inherit',
      height: 'inherit'
    }
  },
  step: {
    marginBottom: theme.spacing(2)
  }
}));

export default function Confirmacao() {

  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <Grid container item lg={8} className={classes.center} justify="center">

        <Grid item lg={12} className={classes.titleWrapper}>
          <Typography variant="h5" align="center">
            Pronto! para fazer login,
          </Typography>

          <Typography variant="h6" align="center">
            Basta seguir os passos abaixo
          </Typography>
        </Grid>

        <Grid item lg={4}>
          <Typography className={classes.step}>1 - Acesse seu email</Typography>
          <Typography className={classes.step}>2 - Abra o nosso email</Typography>
          <Typography className={classes.step}>3 - Clique no link de login</Typography>
        </Grid>

        <Grid item lg={4}>
          <Box boxShadow={9} className={classes.agostinho}>
            <img src={require('../assets/alexturner.jpg')} />
          </Box>
        </Grid>
      </Grid>
    </div>
  )
}
