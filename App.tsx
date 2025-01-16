import { ThemeProvider } from '@context';
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import { Navigation } from '@navigation';

export default function App() {
	return (
		<ThemeProvider>
			<SafeAreaView style={styles.container}>
				<Navigation />
			</SafeAreaView>
		</ThemeProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
});
