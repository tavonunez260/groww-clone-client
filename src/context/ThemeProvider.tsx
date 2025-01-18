import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Appearance } from 'react-native';

import { colors } from '@styles';
import { typography } from '@styles';
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
		'Roboto-Bold': require('../assets/fonts/roboto/Roboto-Bold.ttf'),
		'Roboto-ExtraBold': require('../assets/fonts/roboto/Roboto-ExtraBold.ttf'),
		'Roboto-ExtraLight': require('../assets/fonts/roboto/Roboto-ExtraLight.ttf'),
		'Roboto-Light': require('../assets/fonts/roboto/Roboto-Light.ttf'),
		'Roboto-Medium': require('../assets/fonts/roboto/Roboto-Medium.ttf'),
		'Roboto-Regular': require('../assets/fonts/roboto/Roboto-Regular.ttf'),
		'Roboto-SemiBold': require('../assets/fonts/roboto/Roboto-SemiBold.ttf'),
		'Roboto-Thin': require('../assets/fonts/roboto/Roboto-Thin.ttf'),
		'Manrope-Bold': require('../assets/fonts/manrope/Manrope-Bold.ttf'),
		'Manrope-ExtraBold': require('../assets/fonts/manrope/Manrope-ExtraBold.ttf'),
		'Manrope-ExtraLight': require('../assets/fonts/manrope/Manrope-ExtraLight.ttf'),
		'Manrope-Light': require('../assets/fonts/manrope/Manrope-Light.ttf'),
		'Manrope-Medium': require('../assets/fonts/manrope/Manrope-Medium.ttf'),
		'Manrope-Regular': require('../assets/fonts/manrope/Manrope-Regular.ttf'),
		'Manrope-SemiBold': require('../assets/fonts/manrope/Manrope-SemiBold.ttf'),
		'Lato-Black': require('../assets/fonts/lato/Lato-Black.ttf'),
		'Lato-Bold': require('../assets/fonts/lato/Lato-Bold.ttf'),
		'Lato-Light': require('../assets/fonts/lato/Lato-Light.ttf'),
		'Lato-Regular': require('../assets/fonts/lato/Lato-Regular.ttf'),
		'Lato-Thin': require('../assets/fonts/lato/Lato-Thin.ttf')
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
			SplashScreen.hideAsync().then();
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
