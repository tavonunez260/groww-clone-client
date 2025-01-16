import { useTheme } from '@context';
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export const HomeScreen = () => {
	const { colorsState, setTheme } = useTheme();

	const backgroundColor = colorsState.background;
	const textColor = colorsState.text;

	return (
		<View style={[styles.container, { backgroundColor }]}>
			<Text style={[styles.text, { color: textColor }]}>
				This is a {backgroundColor === '#121212' ? 'Dark' : 'Light'} themed screen!
			</Text>

			<View style={styles.buttonContainer}>
				<Button title="Switch to Light Theme" onPress={() => setTheme('light')} />
				<Button title="Switch to Dark Theme" onPress={() => setTheme('dark')} />
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	buttonContainer: {
		marginTop: 20,
		paddingHorizontal: 20,
		width: '100%'
	},
	container: {
		alignItems: 'center',
		flex: 1,
		justifyContent: 'center',
		padding: 20
	},
	text: {
		fontSize: 18,
		fontWeight: 'bold'
	}
});
