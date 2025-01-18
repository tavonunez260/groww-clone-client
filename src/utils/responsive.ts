import { Dimensions, PixelRatio } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';

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

export const normalizeModerately = (size: number, factor = 0.5): number => {
	return PixelRatio.roundToNearestPixel(moderateScale(size, factor));
};

export const normalizeWidth = (size: number): number => {
	return PixelRatio.roundToNearestPixel(scale(size));
};

export const normalizeHeight = (size: number): number => {
	return PixelRatio.roundToNearestPixel(verticalScale(size));
};

export const widthPercentage = (size: string): number => {
	return wp(size);
};
export const heightPercentage = (size: string): number => {
	return hp(size);
};

export const screenWidth: number = Dimensions.get('window').width;
export const screenHeight: number = Dimensions.get('window').height;
