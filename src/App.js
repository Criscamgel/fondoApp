import React from "react";
import Grid from '@material-ui/core/Grid'
import "./App.css";
import ListaInmuebles from "./components/views/listaInmuebles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import theme from "./theme/theme";
import AppNavbar from "./components/layout/AppNavbar";
import RegistrarUsuario from "./components/security/RegistrarUsuario";


function App() {
  return (
    <Router>
      <MuiThemeProvider theme={theme}>
        <AppNavbar/>

        <Grid container>
        <Switch>
        <Route path="/" exact component={ListaInmuebles}></Route>
        <Route path="/auth/resgistrarusuario" exact component={RegistrarUsuario}></Route>
        
        </Switch>

        </Grid>
      </MuiThemeProvider>
    </Router>
  );
}

export default App;
