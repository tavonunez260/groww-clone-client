export interface ThemeColors {
	background?: string;
	card?: string;
	text?: string;
	border?: string;
	notiCard?: string;
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