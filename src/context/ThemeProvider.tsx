import { typography } from '@styles';
import { colors } from '@styles';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Appearance } from 'react-native';
import { ColorsType } from '@types';

interface ThemeContextType {
	colorsState: ColorsType;
	typography: typeof typography;
	setTheme: (theme: 'light' | 'dark') => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
	children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
	const [colorsState, setColorsState] = useState<ColorsType>(colors);
	const [loaded, error] = useFonts({
		'Roboto-Black': require('../assets/fonts/roboto/Roboto-Black.ttf'),
		'Roboto-Bold': require('../assets/fonts/roboto/Roboto-Bold.ttf')
		// Add all fonts here...
	});

	// Function to change theme
	const setTheme = (theme: 'light' | 'dark') => {
		if (theme === 'dark') {
			setColorsState({ ...colors, ...colors.dark });
		} else {
			setColorsState({ ...colors, ...colors.light });
		}
	};

	// Detect system theme and update colors
	useEffect(() => {
		const colorScheme = Appearance.getColorScheme();
		if (colorScheme === 'dark') {
			setColorsState({ ...colors, ...colors.dark });
		} else {
			setColorsState({ ...colors, ...colors.light });
		}

		// Listen to system theme changes
		const listener = Appearance.addChangeListener(({ colorScheme }) => {
			if (colorScheme === 'dark') {
				setColorsState({ ...colors, ...colors.dark });
			} else {
				setColorsState({ ...colors, ...colors.light });
			}
		});

		return () => listener.remove();
	}, []);

	useEffect(() => {
		if (loaded || error) {
			SplashScreen.hideAsync().then(() => {
				console.log('Splash screen hidden');
			});
		}
	}, [loaded, error]);

	if (!loaded && !error) {
		return null;
	}

	return (
		<ThemeContext.Provider value={{ colorsState, typography, setTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

export const useTheme = (): ThemeContextType => {
	const context = useContext(ThemeContext);

	if (!context) {
		throw new Error('useTheme must be used within a ThemeProvider');
	}

	return context;
};
