import React, { useEffect } from "react";
import Grid from '@material-ui/core/Grid'
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import theme from "./theme/theme";
import AppNavbar from "./components/layout/AppNavbar";
import ListaInmuebles from "./components/views/ListaInmuebles";
import RegistrarUsuario from "./components/views/RegistrarUsuario";
import Login from "./components/views/Login";
import { FirebaseContext } from "./server";


function App(props) {
  let firebase = React.useContext(FirebaseContext);
  const [autenticacionIniciada, setupFirebaseInicial] = React.useState(false);

  /* Estados con context */
  useEffect(() => {
    firebase.estaIniciado()
    .then(val => {
      setupFirebaseInicial(val);
    })
  })
  /* setupFirebaseInicial(true); */
  //autenticacionIniciada === true

  return autenticacionIniciada !== false ? (
    <Router>
      <MuiThemeProvider theme={theme}>
        <AppNavbar/>

        <Grid container>
        <Switch>

          <Route path="/" exact component={ ListaInmuebles }></Route>
          <Route path="/auth/resgistrarusuario" exact component={ RegistrarUsuario }></Route>
          <Route path="/auth/login" exact component={ Login }></Route>
        
        </Switch>

        </Grid>
      </MuiThemeProvider>
    </Router>
  ) : null;
}

export default App;
