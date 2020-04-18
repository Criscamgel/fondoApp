import app from 'firebase/app';
import 'firebase/firestore';

const config = {
  apiKey: "AIzaSyBzKAs22Cm9z76fWWFWnC7eBFPd48gdAYI",
  authDomain: "fondo-7def5.firebaseapp.com",
  databaseURL: "https://fondo-7def5.firebaseio.com",
  projectId: "fondo-7def5",
  storageBucket: "fondo-7def5.appspot.com",
  messagingSenderId: "206740598564",
  appId: "1:206740598564:web:470ef79b0ccb79abb9cdb1",
  measurementId: "G-0MLCFE346B",
};

class Firebase {
  
  constructor() {
    app.initializeApp(config);
    this.db = app.firestore();
  }
}

export default Firebase;
