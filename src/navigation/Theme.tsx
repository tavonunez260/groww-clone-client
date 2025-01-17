import { useColorScheme } from 'react-native';

import { colors } from '@styles';
import { ThemeType } from '@types';

export const lightTheme: ThemeType = {
	dark: false,
	colors: {
		background: colors.light.background,
		border: colors.light.border,
		card: colors.light.card,
		notification: colors.light.notification,
		primary: colors.themeColor,
		text: colors.light.text
	}
};

export const darkTheme: ThemeType = {
	dark: true,
	colors: {
		background: colors.dark.background,
		border: colors.dark.border,
		card: colors.dark.card,
		notification: colors.dark.notification,
		primary: colors.themeColor,
		text: colors.dark.text
	}
};

export const useCustomTheme = (): ThemeType => {
	const scheme = useColorScheme();
	return scheme === 'dark' ? darkTheme : lightTheme;
};
