//YOUR FIREBASE LINKS
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
    
    room_name = localStorage.getItem("room_name");
    user_name = localStorage.getItem("user_name");

    function logout()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}

    function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            like: 0
      });
      document.getElementById("msg").value="";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name = message_data['name'];
message = message_data['message'];
like = message_data['like'];
name_with_tag  = "<h4>"+name+ "<img class='user_tick' src='tick.png'></h4>";
message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
like_button = "<button"
//End code
      } });  }); }
getData();
