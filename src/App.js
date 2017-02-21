import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import rootReducer from './reducers';
import Router from './Router'; 

class App extends Component {
	componentWillMount(){
		 const config = {
		    apiKey: "AIzaSyDUNIi6F3EDNv5pSrj2y3XLX3eAJdPs3jk",
		    authDomain: "employeemanager-81baf.firebaseapp.com",
		    databaseURL: "https://employeemanager-81baf.firebaseio.com",
		    storageBucket: "employeemanager-81baf.appspot.com",
		    messagingSenderId: "687189816890"
		  };

		  firebase.initializeApp(config);
	}
	render(){
		const store = createStore(rootReducer, {}, applyMiddleware(ReduxThunk));
		return (
			<Provider store={store}>
				<Router />
			</Provider>
		);
	}
}

export default App;