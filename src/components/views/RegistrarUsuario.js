import React, { Component } from "react";
import {
  Container,
  Typography,
  TextField,
  Grid,
  Avatar,
  Button,
} from "@material-ui/core";
import LockoutLineIcon from "@material-ui/icons/LockOpenOutlined";
import { compose } from "recompose";
import { consumerFirebase } from "../../server";

const style = {
  paper: {
    marginTop: 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: 8,
    backgroundColor: "#e53935",
  },
  form: {
    width: "100%",
    marginTop: 10,
  },
  textField: {
    margin: 10,
  },
  submit: {
    marginTop: 15,
    marginButtom: 15,
  },
};

const usuarioInicial = {
  nombres: "",
  apellidos: "",
  email: "",
  password: "",
};

class RegistrarUsuario extends Component {
  state = {
    firebase: null,
    usuario: {
      nombres: "",
      apellidos: "",
      email: "",
      password: "",
    },
  };

  /* Cambiar el estado de firebase */
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.firebase === prevState.firebase) {
      return null;
    }
    return {
      firebase: nextProps.firebase,
    };
  }

  recibirValoresInput = (e) => {
    /* Haciendo un duplicado del objeto usuario */
    const usuario = Object.assign({}, this.state.usuario);
    /* Igualandolo al valor y evento */
    usuario[e.target.name] = e.target.value;
    this.setState({
      usuario: usuario,
    });
  };

  registrarUsuario = (e) => {
    /* No hay submit ni refresh */
    e.preventDefault();
    const { usuario, firebase } = this.state;

    /* Crer usuario */
    firebase.auth
      .createUserWithEmailAndPassword(usuario.email, usuario.password)
      .then((auth) => {

        const usuarioDB = {
            usuarioid: auth.user.uid,
            email: usuario.email,
            nombres: usuario.nombres,
            apellidos: usuario.apellidos 
        }

        /* Ingresar a la base de datos - Almacenar los Usuarios en DB */
        firebase.db
          /* que se va añadir */
          .collection("Users")
          /* Mirar si fue correcto */
          .add(usuarioDB)
          .then((usuarioDespues) => {
            console.log("Usuario insertado", usuarioDespues);
            this.props.history.push("/")
            this.setState({
              usuario: usuarioInicial,
            });
          })
          .catch((error) => {
            console.log("Error", error);
          });


      })
      .catch(error => {
          console.log('Error', error);          
      });
  };

  render() {
    return (
      <Container maxWidth="md">
        <div style={style.paper}>
          <Avatar style={style.avatar}>
            <LockoutLineIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Registra tu cuenta
          </Typography>
        </div>
        <form style={style.form}>
          <Grid container spacing={5}>
            <Grid item md={6} xs={12}>
              <TextField
                variant="outlined"
                name="nombres"
                onChange={this.recibirValoresInput}
                value={this.state.usuario.nombres}
                fullWidth
                label="Ingresa tus nombres"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                variant="outlined"
                name="apellidos"
                onChange={this.recibirValoresInput}
                value={this.state.usuario.apellidos}
                fullWidth
                label="Ingresa tus apellidos"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                variant="outlined"
                name="email"
                onChange={this.recibirValoresInput}
                value={this.state.usuario.email}
                fullWidth
                label="Ingresa tu e-mail"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                type="password"
                variant="outlined"
                onChange={this.recibirValoresInput}
                name="password"
                value={this.state.usuario.password}
                fullWidth
                label="Ingresa tu contraseña"
              />
            </Grid>
          </Grid>
          <Grid container justify="center">
            <Grid item xs={12} md={6}>
              <Button
                type="submit"
                onClick={this.registrarUsuario}
                variant="contained"
                fullWidth
                size="large"
                color="primary"
                style={style.submit}
              >
                Registrarme
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    );
  }
}

export default compose(consumerFirebase)(RegistrarUsuario);
