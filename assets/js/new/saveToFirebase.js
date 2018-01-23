var config = {
    apiKey: "AIzaSyAZ6Da-u3XFREP61aJdHTd7hCNmQ6Sg0nE",
    authDomain: "lightyourwaywebsite.firebaseapp.com",
    databaseURL: "https://lightyourwaywebsite.firebaseio.com",
    projectId: "lightyourwaywebsite",
    storageBucket: "lightyourwaywebsite.appspot.com",
    messagingSenderId: "844601455626"
  };
  firebase.initializeApp(config);
// Target the form elements by their ids

var nameInput = $("#email").val()

document.querySelector('form#myForm').addEventListener("submit", function (e) {
    e.preventDefault();

    console.log(nameInput);    
});


// // Listen to the form submit event
// $('#myForm').submit(function(evt) {
// console.log("TEST" + formData);
//   evt.preventDefault(); //Prevent the default form submit action

// // Use formData to push it to firebase:
//     firebase.database().ref('subscription-entries').push( formData )
//         .then(function(snapshot) {
//             success(); // some success method
//         }, function(error) {
//             console.log('error' + error);
//             error(); // some error method
//         });
// });

// function saveToFirebase(email) {
//     var emailObject = {
//         email: email
//     };
