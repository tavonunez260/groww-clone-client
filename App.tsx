import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { ThemeProvider } from '@context';
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
