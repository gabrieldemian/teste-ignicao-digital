import React from 'react'
import { Grid, Button } from '@material-ui/core';
import Cadastro from './Cadastro';

export default function Disponiveis() {

  const [open, setOpen] = React.useState(false);
  function handleClickOpen() {
    setOpen(true);
  }

  const handleClose = value => {
    setOpen(false);
  };

  return (
    <div>
      <Grid container>
        <Grid item lg={6} className="firstColumn">

        <Grid container alignContent="center">
          <Grid lg>
            <p>
              <strong>#1 </strong>
              Normal 2018
            </p>
          </Grid>
        </Grid>

        <Grid container alignContent="center">
          <Grid lg>
            <p>
              <strong>#2 </strong>
              Normal 2018
            </p>
          </Grid>
        </Grid>

        <Grid container alignContent="center">
          <Grid lg>
            <p>
              <strong>#3 </strong>
              VIP 2018
            </p>
          </Grid>
        </Grid>
      </Grid>

        <Grid item lg={6} className="secondColumn">
          <div className="buttonWrapper">
            <div>
              <Cadastro open={open} onClose={handleClose}/>

              <Button onClick={handleClickOpen} size="small" variant="outlined">Cadastrar <br /> participante</Button>
              <Button size="small" variant="outlined">Enviar <br /> Convite</Button>
              <Button size="small" variant="outlined">Fazer upgrade <br /> para VIP</Button>
            </div>

            <div>
              <Button onClick={handleClickOpen} size="small" variant="outlined">Cadastrar <br /> participante</Button>
              <Button size="small" variant="outlined">Enviar <br /> Convite</Button>
              <Button size="small" variant="outlined">Fazer upgrade <br /> para VIP</Button>
            </div>

            <div>
              <Button onClick={handleClickOpen} size="small" variant="outlined">Cadastrar <br /> participante</Button>
              <Button size="small" variant="outlined">Enviar <br /> Convite</Button>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}
