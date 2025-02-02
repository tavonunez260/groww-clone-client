import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

import { CustomSafeAreaView } from '@components';
import { CustomText } from '@components';
import { useTheme } from '@context';

export const HomeScreen = () => {
	const { colorsState, setTheme } = useTheme();

	const backgroundColor = colorsState.background;
	const textColor = colorsState.text;

	return (
		<CustomSafeAreaView>
			<View style={[styles.container, { backgroundColor }]}>
				<CustomText style={{ color: textColor }}>
					This is a {backgroundColor === '#121212' ? 'Dark' : 'Light'} themed screen!
				</CustomText>

				<View style={styles.buttonContainer}>
					<Button title="Switch to Light Theme" onPress={() => setTheme('light')} />
					<Button title="Switch to Dark Theme" onPress={() => setTheme('dark')} />
				</View>
			</View>
		</CustomSafeAreaView>
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
		justifyContent: 'center'
	}
});
