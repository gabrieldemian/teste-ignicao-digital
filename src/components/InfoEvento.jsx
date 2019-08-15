import React from 'react'
import Icon from '@material-ui/core/Icon';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2)
  },
  title: {
    fontSize: 18,
    marginRight: theme.spacing(2)
  }
}));

export default function InfoEvento() {

  const classes = useStyles();

  return (
    <Grid container spacing={2}>
      <Grid item lg={8}>
        <Grid container alignItems="center">
          <Icon className={classes.icon} fontSize="large">calendar_today</Icon>
          <strong className={classes.title}>Data: </strong>
          <p className={classes.title}>De 30 a 2 de Novembro</p>
        </Grid>

        <Grid container alignItems="center">
          <Icon className={classes.icon} fontSize="large">access_alarm</Icon>
          <strong className={classes.title}>Horário: </strong>
          <p className={classes.title}>9h às 19h</p>
        </Grid>

        <Grid container alignItems="center" direction="row" wrap="nowrap">
          <Icon className={classes.icon} fontSize="large">place</Icon>
          <p>
          <strong className={classes.title}>Local: </strong>
          Transamerica Expo - Av. Dr. Mário
              Villas Boas Rodrigues, 387 - Santo Amaro -
              São Paulo - SP 04757-020 Brasil.
          </p>
        </Grid>

        <Grid container direction="row" wrap="nowrap" style={{marginTop: 20}}>
          <Icon style={{marginTop: 15}} className={classes.icon} fontSize="large">info</Icon>
          <p>
            <strong>Leia as informações a seguir: </strong>
            O credenciamento começa no dia 29/11/18 a partir das 14h e termina às 18h,
            no dia 30/11/18 se inicia às 7h00 e vai até as 8h00, afinal o evento começa
            às 9h.
            <br /> <br />
            O credenciamento será feito no local do evento!
          </p>
        </Grid>
      </Grid>

      <Grid item lg={4}>
        <div style={{width: '100%'}}><iframe width="100%" height="277px" src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;coord=-15.806541307920613, -47.88983345031738&amp;q=+(Igni%C3%A7%C3%A3o)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"><a href="https://www.maps.ie/coordinates.html">find my coordinates</a></iframe></div><br />
        <Grid container justify="flex-end" alignItems="flex-end" direction="column">
          <a href="">Abrir no maps</a>
          <a href="">Adicionar no Google calendar</a>
          <a href="">*Pedir um Uber</a>
        </Grid>
      </Grid>
    </Grid>
  )
}
