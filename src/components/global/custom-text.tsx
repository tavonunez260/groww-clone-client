import React from 'react';
import { Text } from 'react-native';

import { useTheme } from '@context';
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
	const { colorsState } = useTheme();

	return (
		<Text
			style={[style, { color: colorsState.text, fontFamily, fontSize: computedFontSize }]}
			{...rest}
		>
			{children}
		</Text>
	);
};
