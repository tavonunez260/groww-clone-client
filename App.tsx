import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import { Navigation } from '@navigation';
import { TypographyProvider } from 'src/context/TypographyProvider';

export default function App() {
	return (
		<SafeAreaView style={styles.container}>
			<TypographyProvider>
				<Navigation />
			</TypographyProvider>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
