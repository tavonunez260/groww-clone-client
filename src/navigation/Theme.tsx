import { useColorScheme } from 'react-native';

import { colors } from '@styles';

interface ThemeColors {
	background: string;
	border: string;
	card: string;
	notification: string;
	text: string;
	primary: string;
}

interface Theme {
	dark: boolean;
	colors: ThemeColors;
}

export const lightTheme: Theme = {
	dark: false,
	colors: {
		background: colors.lightBackground,
		border: colors.lightBorder,
		card: colors.lightCard,
		notification: colors.notiCardLight,
		primary: colors.themeColor,
		text: colors.lightText
	}
};

export const darkTheme: Theme = {
	dark: true,
	colors: {
		background: colors.darkBackground,
		border: colors.darkBorder,
		card: colors.darkCard,
		notification: colors.notiCardDark,
		primary: colors.themeColor,
		text: colors.darkText
	}
};

export const useCustomTheme = (): Theme => {
	const scheme = useColorScheme();
	return scheme === 'dark' ? darkTheme : lightTheme;
};
