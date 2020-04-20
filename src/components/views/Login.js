import React, { Component } from "react";
import { Avatar, Container, Typography, TextField, Grid, Button } from "@material-ui/core";
import LockoutLineIcon from "@material-ui/icons/LockOpenOutlined";
import { compose } from "recompose";
import { consumerFirebase } from "../../server";

const style = {
  paper: {
    marginTop: 9,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%",
    marginTop: 10,
  },
  avatar: {
    margin: 5,
    backgroundColor: "gray",
  },
  submit: {
    marginTop: 15,
    marginButtom: 15,
  }
};

class Login extends Component {

    state = {
        firebase: null,
        usuario: {
            email: '',
            password: ''
        }
    }

    static getDerivedStateFromProps(nextProps, prevState){
        if(nextProps.firebase === prevState.firebase){
            return null
        }

        return {
            firebase: nextProps.firebase
        }
    }

   ingresarPlataforma = e => {
    e.preventDefault();

    const { usuario, firebase } = this.state;

    firebase.auth
    .signInWithEmailAndPassword(usuario.email, usuario.password)
    .then(auth => {
        this.props.history.push('/');
    })
    .catch(error => {
        console.log(error, "Error");
        
    })

    console.log(this.state.usuario);
  }

  recibirValoresTextField = e => {
    
    const usuario = Object.assign({}, this.state.usuario);
    usuario[e.target.name] = e.target.value;
    this.setState({
        usuario: usuario
    })
  };

  render() {
    return (
      <Container maxWidth="xs">
        <div style={style.paper}>
          <Avatar style={style.avatar}>
            <LockoutLineIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Bienvenido, Ingresa al fondo
          </Typography>
        </div>
        
        <form style={style.form}>
        <Grid container spacing={2} justify="center">
        <Grid item md={12} xs={12}>
              <TextField
                variant="outlined"
                name="email"
                onChange={this.recibirValoresTextField}
                fullWidth
                value={this.state.usuario.email}
                label="Ingresa tu e-mail"
              />
        </Grid>
        <Grid item md={12} xs={12}>
              <TextField
                variant="outlined"
                type="password"
                onChange={this.recibirValoresTextField}
                name="password"
                fullWidth
                value={this.state.usuario.password}
                label="Ingresa tu contraseña"
              />
        </Grid>
        </Grid>
          <Grid container justify="center">
            <Grid item xs={12} md={6}>
              <Button
                type="submit"
                onClick={this.ingresarPlataforma}
                variant="contained"
                fullWidth
                size="large"
                color="primary"
                style={style.submit}>
                Ingresar
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    );
  }
}

export default compose(consumerFirebase)(Login);
