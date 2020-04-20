export const iniciarSesion = (dispatch, firebase, email, password) => {
  return new Promise((resolve, reject) => {
    firebase.auth.signInWithEmailandPassword(email, password)
    .then((auth) => {
      //auth.user.uid
      firebase.db
        .collection("Users")
        /* Pasandole ese Id me retornará en la promesa la info de ese mismo ID */
        .doc(auth.user.uid)
        .get()
        .then((doc) => {
          const usuarioDB = doc.data();
          /* Llamando al Reducer */
          dispatch({
            type: "INICIAR_SESION",
            sesion: usuarioDB,
            autenticado: true,
          });
          resolve();
        });
    })
    .catch(error => {
        console.log('error', error);        
    })
  });
};

export const crearUsuario = (dispatch, firebase, usuario) => {
    return new Promise ((resolve, reject))
}
