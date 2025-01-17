import { RFValue } from 'react-native-responsive-fontsize';

import { FontSizeVariant } from '@types';

export const getFontSize = (variant: FontSizeVariant, fontSize?: number): number => {
	switch (variant) {
		case 'h1':
			return RFValue(fontSize ?? 24);
		case 'h2':
			return RFValue(fontSize ?? 22);
		case 'h3':
			return RFValue(fontSize ?? 20);
		case 'h4':
			return RFValue(fontSize ?? 18);
		case 'h5':
			return RFValue(fontSize ?? 16);
		case 'h6':
			return RFValue(fontSize ?? 14);
		case 'h7':
			return RFValue(fontSize ?? 12);
		case 'h8':
			return RFValue(fontSize ?? 10);
		case 'h9':
			return RFValue(fontSize ?? 8);
		case 'body':
			return RFValue(fontSize ?? 14);
		default:
			return RFValue(fontSize ?? 12);
	}
};
