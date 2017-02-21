import React, { Component } from 'react';
import { Picker, Text, StyleSheet, View } from 'react-native';
import { Card, CardSection, Input, Button} from './common';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';


class EmployeeCreate extends Component{
	constructor(props){
		super(props);
		this.onNameChange = this.props.onNameChange.bind(this);
		this.onPhoneChange = this.props.onPhoneChange.bind(this);
		this.onShiftChange = this.props.onShiftChange.bind(this);
	}
	render(){
		return(
			<Card>
				<CardSection>
					<Input 
						label="Name" 
						placeholder="Ali"
						value={this.props.name}
						onChangeText={this.onNameChange}
					/>
				</CardSection>

				<CardSection>
					<Input 
						label="Phone"
						placeholder="555-555-5555"
						value={this.props.phone}
						onChangeText={this.onPhoneChange}
					/>
				</CardSection>

				<CardSection>
						<Text style={styles.pickerTextStyle}>Shift</Text>
						<Picker
							style={{ flex: 2 }}
							selectedValue={this.props.shift}
							onValueChange={this.onShiftChange}
						>
							<Picker.Item label="Monday" value="Monday" />
							<Picker.Item label="Tuesday" value="Tuesday" />
							<Picker.Item label="Wednesday" value="Wednesday" />
							<Picker.Item label="Thursday" value="Thursday" />
							<Picker.Item label="Friday" value="Friday" />
							<Picker.Item label="Saturday" value="Saturday" />
							<Picker.Item label="Sunday" value="Sunday" />
						</Picker>
				</CardSection>

				<CardSection>
					<Button>
						Create
					</Button>	
				</CardSection>

			</Card>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return {
		onNameChange: (value) => {
			dispatch(employeeUpdate({ prop: 'name', value }));
		},
		onPhoneChange: (value) => {
			dispatch(employeeUpdate({ prop: 'phone', value }));
		},
		onShiftChange: (value) => {
			dispatch(employeeUpdate({ prop: 'shift', value}))
		}
	}
}

function mapStateToProps(state) {
	const { name, phone, shift } = state.employeeForm;

	return { name, phone, shift};
}

const styles = StyleSheet.create({
	pickerTextStyle: {
		flex: 1,
		alignSelf: 'center',
		fontSize: 18,
		paddingLeft: 20
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeCreate);