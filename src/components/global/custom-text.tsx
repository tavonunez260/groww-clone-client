import React from 'react';
import { Text } from 'react-native';

import { typography } from '@styles';
import { CustomTextProps, FontSizeVariant } from '@types';
import { getFontSize } from '@utils';

export const CustomText: React.FC<CustomTextProps> = ({
	variant = FontSizeVariant.H1,
	fontFamily = typography.fontFamily.robotoRegular,
	fontSize,
	style,
	children,
	...rest
}) => {
	const computedFontSize = getFontSize(variant, fontSize);

	// Get the correct font family
	const fontFamilyStyle = typography.fontFamily[fontFamily as keyof typeof typography.fontFamily];

	return (
		<Text style={[style, { fontFamily: fontFamilyStyle, fontSize: computedFontSize }]} {...rest}>
			{children}
		</Text>
	);
};
