
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyCAd1nicLStCrrIKHNypYL4GWAhoP4vpr4",
      authDomain: "kwitter-e62c2.firebaseapp.com",
      databaseURL: "https://kwitter-e62c2-default-rtdb.firebaseio.com",
      projectId: "kwitter-e62c2",
      storageBucket: "kwitter-e62c2.appspot.com",
      messagingSenderId: "449383902209",
      appId: "1:449383902209:web:05dc0d9d7fc0911ea2a400"
    };
    firebase.intializeApp(firebaseConfig);

 user_name = localStorage.getItem("user_name");

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("room_name "+ Room_names);
       row = "<div class = 'room_name' id="+Room_names+" onclick ='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
       document.getElementById("output").innerHTML += row;
      });});}
getData();

function addRoom()
{
   room_name = document.getElementById("room_name").value;
   firebase.database().ref("/").child(room_name).update
   ({purpose : "adding room name"});
   localStorage.setItem("room_name", room_name);
   window.location = "index.html";
}
function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}
function logout()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}