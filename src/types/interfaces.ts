export interface ThemeColors {
	primary: string;
	background: string;
	card: string;
	text: string;
	border: string;
	notification: string;
}

export interface ColorsType extends ThemeColors {
	themeColor: string;
	profit: string;
	loss: string;
	errorColor: string;
	activeTab: string;
	inactiveTab: string;
	dark: ThemeColors;
	light: ThemeColors;
}

export interface ThemeType {
	dark: boolean;
	colors: ThemeColors;
}
