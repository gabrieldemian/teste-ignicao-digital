import React from 'react'
import { Dialog, Select, Grid, makeStyles, TextField, DialogContent, DialogActions, DialogTitle, MenuItem, AppBar, Button } from '@material-ui/core';

export default function Cadastro(props) {

  const useStyles = makeStyles(theme => ({
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: '100%'
    },
    select: {
      marginTop: theme.spacing(3)
    },
    dialog: {
      width: '350px'
    }
  }));

  let { onClose, open } = props;

  const [values, setValues] = React.useState({
    nome: '',
    doc: '',
    desc: '',
    docDesc: '',
    email: '',
    telefone: '',
    sexo: ''
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const classes = useStyles();

  return (
    <div>
      <Dialog onClose={onClose} open={open}>

        <AppBar color="primary" position="static">
          <DialogTitle>Cadastrar Participante</DialogTitle>
        </AppBar>

        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            onChange={handleChange('name')}
            label="Digite o nome completo do participante"
            type="text"
            fullWidth
          />

          <Grid container item lg={12} spacing={2}>
            <Grid item lg={4}>
              <Select
                displayEmpty
                fullWidth
                className={classes.select}
                margin="dense"
                value={values.doc}
                onChange={handleChange('doc')}
              >
                <MenuItem value="">Outro</MenuItem>
                <MenuItem value="doc1">Documento 1</MenuItem>
                <MenuItem value="doc2">Documento 2</MenuItem>
              </Select>
            </Grid>

            <Grid item lg={4}>
              <TextField
                margin="dense"
                onChange={handleChange('desc')}
                label="Descrição"
                type="text"
              />
            </Grid>

            <Grid item lg={4}>
              <TextField
                margin="dense"
                onChange={handleChange('docDesc')}
                label="Descrição do documento"
                type="text"
              />
            </Grid>

          </Grid>

          <TextField
            margin="dense"
            onChange={handleChange('email')}
            label="Digite seu email"
            type="email"
            fullWidth
          />

          <TextField
            margin="dense"
            onChange={handleChange('telefone')}
            label="Digite seu telefone com DDD"
            type="text"
            fullWidth
          />

            <Select
              displayEmpty
              fullWidth
              className={classes.select}
              value={values.sexo}
              onChange={handleChange('sexo')}
            >
              <MenuItem value="">Masculino</MenuItem>
              <MenuItem value="f">Feminino</MenuItem>
            </Select>
        </DialogContent>

        <DialogActions>
          <Button variant="contained" color="primary">Salvar</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
