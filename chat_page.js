
const firebaseConfig = {
    apiKey: "AIzaSyD2fIxSpdQd_1UGE7L0o1-tjBIuvvqgJmI",
    authDomain: "projeto-100-6afb7.firebaseapp.com",
    projectId: "projeto-100-6afb7",
    storageBucket: "projeto-100-6afb7.appspot.com",
    messagingSenderId: "118949140938",
    appId: "1:118949140938:web:8997317313993460ae1733"
  };

  firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
    linke:0
  })