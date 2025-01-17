import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { CustomSafeAreaViewProps } from '@types';

export const CustomSafeAreaView: React.FC<CustomSafeAreaViewProps> = ({ children, style }) => {
	return (
		<SafeAreaView style={[styles.container, style]}>
			<View style={[styles.container, style]}>{children}</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
});
