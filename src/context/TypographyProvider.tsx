import { typography, TypographyType } from '@styles';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import React, { createContext, useContext, ReactNode, useEffect } from 'react';

const TypographyContext = createContext<TypographyType | undefined>(undefined);

interface TypographyProviderProps {
	children: ReactNode;
}

export const TypographyProvider = ({ children }: TypographyProviderProps) => {
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
		'Lato-Thin': require('../assets/fonts/lato/Lato-Thin.ttf'),
	});

	useEffect(() => {
		if (loaded || error) {
			SplashScreen.hideAsync().then();
		}
	}, [loaded, error]);

	if (!loaded && !error) {
		return null;
	}

	return (
		<TypographyContext.Provider value={typography}>
			{children}
		</TypographyContext.Provider>
	);
};

export const useTypography = (): TypographyType => {
	const context = useContext(TypographyContext);

	if (!context) {
		throw new Error('useTypography must be used within a TypographyProvider');
	}

	return context;
};
