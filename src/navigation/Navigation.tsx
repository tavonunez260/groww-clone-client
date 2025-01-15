import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { useCustomTheme } from '@navigation';
import { HomeScreen, LoginScreen } from '@screens';
import { navigationRef } from '@utils';

const Stack = createNativeStackNavigator();

export const Navigation = () => {
	const theme = useCustomTheme();

	const myTheme = {
		...DefaultTheme,
		colors: {
			...DefaultTheme.colors,
			background: theme.colors.background,
			text: theme.colors.text,
			card: theme.colors.card,
			border: theme.colors.border,
			notification: theme.colors.notification,
			primary: theme.colors.primary
		}
	};

	return (
		<NavigationContainer ref={navigationRef} theme={myTheme}>
			<Stack.Navigator>
				<Stack.Screen name="HomeScreen" component={HomeScreen} />
				<Stack.Screen name="LoginScreen" component={LoginScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};
