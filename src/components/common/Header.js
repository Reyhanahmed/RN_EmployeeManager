import React from 'react';
import {
	Text,
	View,
	StyleSheet
} from 'react-native';

const Header = (props) => {
	return(
		<View style={styles.viewStyle}>
			<Text style={styles.textStyle}>{props.headerText}</Text>
		</View>
	); 
}

const styles = StyleSheet.create({
	textStyle: {
		fontSize: 20
	},
	viewStyle:{
		backgroundColor: '#F8F8F8',
		justifyContent: 'center',
		alignItems: 'center',
		height: 60,
		elevation: 4,
		position: 'relative'
	}
});

export {Header};