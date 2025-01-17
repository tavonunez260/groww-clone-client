import React, { ReactNode } from 'react';
import { StyleProp, TextProps, TextStyle, ViewStyle } from 'react-native';

import { typography } from '@styles';

export interface CustomSafeAreaViewProps {
	children: ReactNode;
	style?: StyleProp<ViewStyle>;
}

export enum FontSizeVariant {
	H1 = 'h1',
	H2 = 'h2',
	H3 = 'h3',
	H4 = 'h4',
	H5 = 'h5',
	H6 = 'h6',
	H7 = 'h7',
	H8 = 'h8',
	H9 = 'h9',
	Body = 'body'
}

export interface CustomTextProps extends TextProps {
	variant?: FontSizeVariant;
	fontFamily?: keyof typeof typography.fontFamily;
	fontSize?: number;
	style?: StyleProp<TextStyle>;
	children?: React.ReactNode;
}
