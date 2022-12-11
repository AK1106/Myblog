
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqEoM5P4abyJYx5YJv_F3MVFnaslMHXK0",
  authDomain: "kwitter-b9d8b.firebaseapp.com",
  databaseURL: "https://kwitter-b9d8b-default-rtdb.firebaseio.com",
  projectId: "kwitter-b9d8b",
  storageBucket: "kwitter-b9d8b.appspot.com",
  messagingSenderId: "353504047048",
  appId: "1:353504047048:web:812fb286ccf0bfd13a5afd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS
function addUser() {
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child("user_name").update({
        purpose: "adding user"
    });

}