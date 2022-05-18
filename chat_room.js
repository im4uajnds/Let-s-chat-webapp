
var firebaseConfig = {
      apiKey: "AIzaSyAHi2qZ5Gkn2uNAo0bTn1aV1hiARzf1AF4",
      authDomain: "kwitter-d8461.firebaseapp.com",
      databaseURL: "https://kwitter-d8461-default-rtdb.firebaseio.com",
      projectId: "kwitter-d8461",
      storageBucket: "kwitter-d8461.appspot.com",
      messagingSenderId: "280451573806",
      appId: "1:280451573806:web:e609b03103779c44f957bf"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="welcome "+ user_name+ " !";

    function addRoom(){
          room_name=document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose: "adding room name"
          });
          localStorage.setItem("room_name", room_name);
          window.location="chat_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("room name-"+ Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      
      });});}
getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="chat_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}


