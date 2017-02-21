import React, { Component } from 'react';
import { View, Text, Picker, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { CardSection, Input } from './common'
import { employeeUpdate } from '../actions';


class EmployeeForm extends Component{
	constructor(props){
		super(props);
		this.onNameChange = this.props.onNameChange.bind(this);
		this.onPhoneChange = this.props.onPhoneChange.bind(this);
		this.onShiftChange = this.props.onShiftChange.bind(this);
	}
	render(){
		return(
			<View>
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
			</View>
		);
	}
}

const styles = StyleSheet.create({
	pickerTextStyle: {
		flex: 1,
		alignSelf: 'center',
		fontSize: 18,
		paddingLeft: 20
	}
});

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

export default connect(null, mapDispatchToProps)(EmployeeForm);