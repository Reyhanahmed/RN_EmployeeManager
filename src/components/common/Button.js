import React from 'react';
import {
	Text,
	StyleSheet,
	TouchableNativeFeedback,
	View
} from 'react-native';
import { Spinner } from './Spinner';

const Button = ({ onPress, children, loading }) => {
	return (
		 <TouchableNativeFeedback 
		 	onPress={onPress} 
		 	background={TouchableNativeFeedback.Ripple('#FFDDDDDD')}
		 > 
		 	<View style={styles.buttonStyle}> 
		 		{loading ? <Spinner size='small' color='#fff'/> :
		 				   <Text style={styles.textStyle}>
					 	   		{children}
					 	   </Text>
				} 
		 	</View> 
		 </TouchableNativeFeedback>
	);
};

const styles = StyleSheet.create({
	buttonStyle: {
		flex: 1,
		alignSelf: 'stretch',
		marginRight: 5,
		marginLeft: 5,
		backgroundColor: '#3498db',
		height: 45,
	},
	textStyle: {
		alignSelf: 'center',
		color: "#fff",
		fontSize: 18,
		fontWeight: 'bold',
		paddingTop: 10,
		paddingBottom: 10
	}
});

export {Button};