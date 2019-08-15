import React from 'react'
import { Grid, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles';

export default function Utilizados() {

  const useStyles = makeStyles(theme => ({
    grid: {
      '& p': {
        marginRight: theme.spacing(6)
      }
    }
  }));

  const classes = useStyles();

  return (
    <Grid container>
      <Grid item lg={7} className="firstColumn">
        <Grid container alignContent="center" className={classes.grid}>
          <Grid lg>
            <p>
              <strong>#1 </strong>
              Normal 2018
            </p>
          </Grid>

          <Grid lg>
            <p>
              Denizão Nunes
            </p>
          </Grid>
        </Grid>

        <Grid container alignContent="center" className={classes.grid}>
          <Grid lg>
            <p>
              <strong>#2 </strong>
              Normal 2018
            </p>
          </Grid>

          <Grid lg>
            <p>
              Augusto Santos Carrara
            </p>
          </Grid>
        </Grid>

        <Grid container alignContent="center" className={classes.grid}>
          <Grid lg>
            <p>
              <strong>#3 </strong>
              VIP 2018
            </p>
          </Grid>

          <Grid lg>
            <p>
              Harry Potter
            </p>
          </Grid>
        </Grid>
      </Grid>

      <Grid item lg={5} className="secondColumn">
        <div className="buttonWrapper">
          <div>
            <Button size="small" variant="outlined">Excluir <br /> participante</Button>
            <Button size="small" variant="outlined">Fazer upgrade <br /> para VIP</Button>
          </div>

          <div>
            <Button size="small" variant="outlined">Excluir <br /> participante</Button>
            <Button size="small" variant="outlined">Fazer upgrade <br /> para VIP</Button>
          </div>

          <div>
            <Button size="small" variant="outlined">Excluir <br /> participante</Button>
          </div>

        </div>
      </Grid>
    </Grid>
  )
}
