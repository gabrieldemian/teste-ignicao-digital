import React from 'react';
import { Container, Card, CardContent, AppBar, Tabs, Tab, Box, Typography, makeStyles, Paper } from '@material-ui/core';
import Disponiveis from '../components/Disponiveis';
import Utilizados from '../components/Utilizados';
import ConvitesEnviados from '../components/ConvitesEnviados';
import InfoEvento from '../components/InfoEvento';
import Navbar from '../components/Navbar'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

export default function Main(props) {

  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  const useStyles = makeStyles(theme => ({
    card: {
      marginTop: theme.spacing(6)
    }
  }));

  const classes = useStyles();

  return (
    <>
    <Navbar changeType={props.changeType} />

    <Container maxWidth="md">

      <Card className={classes.card}>
        <AppBar position="static" color="primary">
          <Container>
            <h2>Meus Tickets</h2>
          </Container>
        </AppBar>

        <Paper>
          <Tabs
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            value={value}
            onChange={handleChange}
          >
            <Tab label="Disponíveis" />
            <Tab label="Já utilizados" />
          </Tabs>
        </Paper>

        <CardContent>
          <TabPanel value={value} index={0}>
            <Disponiveis />
          </TabPanel>

          <TabPanel value={value} index={1}>
            <Utilizados />
          </TabPanel>
        </CardContent>
      </Card>

      <Card className={classes.card}>
        <AppBar position="static" color="primary">
          <Container>
            <h2>Convites Enviados</h2>
          </Container>
        </AppBar>
        
        <CardContent>
          <ConvitesEnviados />
        </CardContent>
      </Card>

      <Card className={classes.card}>
        <AppBar position="static" color="primary">
          <Container>
            <h2>Informações do Evento</h2>
          </Container>
        </AppBar>

        <CardContent>
          <InfoEvento />
        </CardContent>
      </Card>

    </Container>
    </>
  );
}
