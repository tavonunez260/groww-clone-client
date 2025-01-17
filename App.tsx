import { ThemeProvider } from '@context';
import React from 'react';
import { StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Navigation } from '@navigation';

export default function App() {
	return (
		<GestureHandlerRootView>
			<SafeAreaProvider>
				<ThemeProvider>
					<Navigation />
				</ThemeProvider>
			</SafeAreaProvider>
		</GestureHandlerRootView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
});
