import firebase from "firebase";

var firebaseConfig = {
	apiKey: "AIzaSyCTOERhvAkbJMRd0f4FrLgbcLN9wvFR5d8",
	authDomain: "dashboard-afce2.firebaseapp.com",
	databaseURL: "https://dashboard-afce2.firebaseio.com",
	projectId: "dashboard-afce2",
	storageBucket: "dashboard-afce2.appspot.com",
	messagingSenderId: "657903118681",
	appId: "1:657903118681:web:fcc089965705a1bf0d0448",
};
// Initialize Firebase
var fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref();
