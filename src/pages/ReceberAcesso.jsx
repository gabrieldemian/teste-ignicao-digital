import React from 'react'
import { makeStyles, Grid, Card, Tooltip, CardContent, Fab, Icon, Typography, TextField, Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  center: {
    margin: 'auto',
  },
  wrapper: {
    height: '100vh',
    display: 'flex'
  },
  input: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3)
  },
  warning: {
    marginTop: theme.spacing(3),
    backgroundColor: '#e2e252',
    color: '#757512',
    padding: theme.spacing(1)
  },
  fab: {
    position: 'fixed',
    bottom: theme.spacing(8),
    right: theme.spacing(8),
  }
}));


export default function ReceberAcesso() {
  
  const [email, setEmail] = React.useState('');
  const classes = useStyles();
  
  return (
    <div className={classes.wrapper}>
      <Grid item lg={4} className={classes.center}>
        <Card>
          <CardContent>
            <Typography variant="h4" align="center">
              Fórmula de lançamento
            </Typography>

            <Typography variant="h5" align="center">
              LANÇAMENTO AO VIVO
            </Typography>

            <TextField
            className={classes.input}
            margin="dense"
            onChange={() => setEmail()}
            label="Digite seu email para receber acesso rápido"
            type="email"
            fullWidth
            />

            <Button fullWidth variant="contained" color="primary">
              Receber meu acesso por email
            </Button>

            <div className={classes.warning}>
              <p><strong>Ops, </strong> Não encontramos o email digitado, favor conferir se está correto.</p>
              <p>Caso o email esteja correto, entre em contato com nosso suporte </p>
              <a>alunos@formuladelancamento.com</a>
            </div>
          </CardContent>
        </Card>
      </Grid>

      <Tooltip title="Posso ajudar?" placement="top">
        <Fab className={classes.fab} color="primary" aria-label="edit">
          <Icon fontSize="large">help</Icon>
        </Fab>
      </Tooltip>
    </div>
  )
}
