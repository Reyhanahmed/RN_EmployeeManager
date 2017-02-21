import React, { Component } from 'react';
import { Router, Scene, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';

class RouterComponent extends Component {
	render(){
		return(
			<Router sceneStyle={{ paddingTop: 60 }}>
				<Scene key="auth">
					<Scene key="employeeCreate" component={EmployeeCreate} title="Create Employee"/>
					<Scene key="login" component={LoginForm} title="Please Login" />
				</Scene>

				<Scene key="main">
					<Scene
						onRight={() => Actions.employeeCreate()} 
						rightTitle="Add"
						key="employeeList" 
						component={EmployeeList} 
						title="Employees"
						initial
					/>
				</Scene>
			</Router>
		);
	}
}

export default RouterComponent;