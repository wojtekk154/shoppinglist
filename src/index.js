import React from 'react';
import ReactDOM from 'react-dom';

import injectTapEventPlugin from 'react-tap-event-plugin';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import MaterialIcon from 'material-icons-react';
import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyC2A4ikKgoUahSIsNMQ15BTZY8WwHjHe_A",
    authDomain: "shoppinglist-a3a02.firebaseapp.com",
    databaseURL: "https://shoppinglist-a3a02.firebaseio.com",
    projectId: "shoppinglist-a3a02",
    storageBucket: "shoppinglist-a3a02.appspot.com",
    messagingSenderId: "680456800696"
};

injectTapEventPlugin();

firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
