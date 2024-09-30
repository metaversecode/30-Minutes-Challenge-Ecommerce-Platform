var firebaseConfig = {
    apiKey: "AIzaSyAdpWl1bNV7n0iSNSVHEYz1JYQv3SHv1R0",
    authDomain: "sos-app-react.firebaseapp.com",
    databaseURL: "https://sos-app-react-default-rtdb.firebaseio.com",
    projectId: "sos-app-react",
    storageBucket: "sos-app-react.appspot.com",
    messagingSenderId: "90538932445",
    appId: "1:90538932445:web:26bbe09a8a8a785a024334",
    measurementId: "G-LGC1RSBLEC"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var database = firebase.database();

// Example: Read data from Firebase Realtime Database
database.ref('user/').on('value', function(snapshot) {
    ui("load").style.display = "none";
    ui("mainn").style.display = "flex"
    ui("img1").src = snapshot.val().img;
    ui("phone").innerHTML = "Phone - " + snapshot.val().mobile
    ui("name").innerHTML = "Name - " + snapshot.val().namer
    ui("hostel").innerHTML = "Hostel - " + snapshot.val().hostel
    ui("hostelroom").innerHTML = "Hostel Room - " + snapshot.val().hostelroom

});
function ui(name){
    return document.getElementById(name);
}
    ui("load").style.display = "block";
    ui("mainn").style.display = "none"