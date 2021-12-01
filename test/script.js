var currentUser = "";
if(document.cookie!=""){ 
  
  let temp = document.cookie.replace("user=", "");
  document.getElementById("logger").innerText = "You are logged in";
  currentUser = temp;
}

function login() {
  var m = document.getElementById("logbox").value;
 document.cookie = "user=" + m;
 currentUser = m; document.getElementById("logger").innerText = "You are logged in";
}


  var config = {
    apiKey: "AIzaSyCgDMqXYx3JLTgcY6Nc9xv6Rt2EOuU4cuk",
    authDomain: "shortener-97531.firebaseapp.com",
    databaseURL: "https://shortener-97531-default-rtdb.firebaseio.com/",
    projectId: "shortener-97531",
    storageBucket: "shortener-97531.appspot.com",
    messagingSenderId: "117527348315",
  };
  firebase.initializeApp(config);
var database = firebase.database();

function control(m){
  
     firebase.database().ref(currentUser).set(m);
  

  
  
}