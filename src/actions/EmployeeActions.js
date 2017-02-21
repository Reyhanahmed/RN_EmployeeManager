import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

import {
	EMPLOYEE_UPDATE
} from './constants';

export const employeeUpdate = ({ prop, value }) => {
	return {
		type: EMPLOYEE_UPDATE,
		payload: { prop, value }
	}
}

export const employeeCreate = ({ name, phone, shift }) => {
	const { currentUser } = firebase.auth();

	// as it requires redux thunk to do async actions but we don't want any response back,
	// therefore we pretend that we are using redux thunk
	return () => {		
		firebase.database().ref(`/users/${currentUser.uid}/employees`)
			.push({ name, phone, shift })
			.then(() => Actions.employeeList());
	};
}