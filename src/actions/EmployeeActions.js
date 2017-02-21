import {
	EMPLOYEE_UPDATE
} from './constants';

export const employeeUpdate = ({ prop, value }) => {
	return {
		type: EMPLOYEE_UPDATE,
		payload: { prop, value }
	}
}