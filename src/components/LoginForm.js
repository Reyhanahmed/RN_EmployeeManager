import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button, Spinner } from './common';
import { emailChange, passwordChange, loginUser } from '../actions';

class LoginForm extends Component{
	constructor(props){
		super(props);
		const { onEmailChange, onPasswordChange, onButtonPress } = this.props;
		this.onEmailChange = onEmailChange.bind(this);
		this.onPasswordChange = onPasswordChange.bind(this);
		this.onButtonPress = onButtonPress.bind(this);
	}

	onLogin(){
		const { password, email } = this.props;
		this.onButtonPress(email, password);
	}

	render(){
		return(
			<Card>
				<CardSection>
					<Input 
						label='Email'
						placeholder='test@example.com'
						onChangeText={this.onEmailChange}
						value={this.props.email}
					/>
				</CardSection>

				<CardSection>
					<Input 
						secureTextEntry
						label='Password'
						placeholder='Password'
						onChangeText={this.onPasswordChange}
						value={this.props.password}
					/>
				</CardSection>

				<Text style={ styles.errorTextStyle }>
					{this.props.error}
				</Text>

				<CardSection>
					<Button onPress={this.onLogin.bind(this)} loading={this.props.loading}>
						Login
					</Button>				
				</CardSection>
			</Card>
		);
	}
}

function mapDispatchToProps(dispatch, ownProps){
	return {
		onEmailChange: (text) => {
			dispatch(emailChange(text));
		},
		onPasswordChange: (text) => {
			dispatch(passwordChange(text));
		},
		onButtonPress: (email, password) => {
			dispatch(loginUser({email, password}));
		}  
	}
}

const mapStateToProps = ({ auth }) => {
	const { email, password, error, loading } = auth;
	return { email, password, error, loading };
}

const styles = StyleSheet.create({
	errorTextStyle: {
		color: 'red',
		fontSize: 20,
		alignSelf: 'center'
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);