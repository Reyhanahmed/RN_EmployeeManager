import React, { Component } from 'react';
import { Card, CardSection, Button} from './common';
import { connect } from 'react-redux';
import { employeeCreate } from '../actions';
import EmployeeForm from './EmployeeForm';


class EmployeeCreate extends Component{
	constructor(props){
		super(props);
	}

	onButtonPress(){
			const { name, phone, shift } = this.props;
			this.props.onPress({ name, phone, shift: shift || 'Monday' });
	}

	render(){
		return(
			<Card>
				<EmployeeForm {...this.props} />
				
				<CardSection>
					<Button onPress={this.onButtonPress.bind(this)}>
						Create
					</Button>	
				</CardSection>

			</Card>
		);
	}
}



function mapStateToProps(state) {
	const { name, phone, shift } = state.employeeForm;

	return { name, phone, shift};
}

function mapDispatchToProps(dispatch) {
	return {
		onPress: ({ name, phone, shift }) => {
			dispatch(employeeCreate({ name, phone, shift }));
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeCreate);