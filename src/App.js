import React, { Component } from 'react';
import './App.css';
import firebase from 'firebase/app';
import 'firebase/database';
import RoomList from './components/RoomList';

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCEogYQDDUSTzNTqJ55tHdQnaf6paZ22b0",
    authDomain: "bloc-chat-react-70c81.firebaseapp.com",
    databaseURL: "https://bloc-chat-react-70c81.firebaseio.com",
    projectId: "bloc-chat-react-70c81",
    storageBucket: "bloc-chat-react-70c81.appspot.com",
    messagingSenderId: "73585857436"
  };
  firebase.initializeApp(config);

class App extends Component {

  render() {
    return (
      <div className="App">
       <h1>Bloc Chat</h1>
       <RoomList firebase={firebase}/>
      </div>
    );
  }
}


export default App;
