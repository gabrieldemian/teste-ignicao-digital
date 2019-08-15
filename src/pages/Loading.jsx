import React from 'react'
import { makeStyles, Grid, LinearProgress, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  center: {
    margin: 'auto',
  },
  wrapper: {
    height: '100vh',
    display: 'flex'
  },
  bar: {
    width: '100%'
  }
}));

export default function Loading() {

  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <Grid container item lg={2} className={classes.center}>
        <Typography className={classes.center}>Carregando</Typography>
        <LinearProgress className={classes.bar} color="primary" variant="determinate" value={50}/>
      </Grid>
    </div>
  )
}
