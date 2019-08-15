import React from 'react'
import { Grid, Button, Container } from '@material-ui/core';

export default function ConvitesEnviados() {
  return (
    <Container>
      <Grid container>
        <Grid item lg={6} className="firstColumn">

          <Grid container alignContent="center">
            <p>
              <strong>#1 </strong>
              Normal 2018
            </p>
          </Grid>

          <Grid container alignContent="center">
            <p>
              <strong>#2 </strong>
              Normal 2018
            </p>
          </Grid>
          
        </Grid>

        <Grid item lg={6} className="secondColumn">
          <div className="buttonWrapper">
            <div>
              <Button size="small" variant="outlined">Reenviar <br /> convite</Button>
              <Button size="small" variant="outlined">Cancelar <br /> Convite</Button>
            </div>

            <div>
              <Button size="small" variant="outlined">Reenviar <br /> convite</Button>
              <Button size="small" variant="outlined">Cancelar <br /> Convite</Button>
            </div>

          </div>
        </Grid>
      </Grid>
    </Container>
  )
}
