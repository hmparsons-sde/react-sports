import React from 'react';
import firebase from 'firebase';
import firebaseConfig from '../helpers/apiKeys';
import './App.scss';
import WrestlerForm from '../Components/WrestlerForm';

function App() {
  firebase.initializeApp(firebaseConfig);

  return (
    <div className='App'>
      <WrestlerForm></WrestlerForm>
    </div>
  );
}

export default App;
