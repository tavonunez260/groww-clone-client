import React from 'react';
import { StyleSheet, View } from 'react-native';

import { CustomSafeAreaView, CustomText } from '@components';
import { typography } from '@styles';
import { FontSizeVariant } from '@types';

export const LoginScreen = () => {
	return (
		<CustomSafeAreaView>
			<View style={styles.container}>
				<CustomText variant={FontSizeVariant.H1} fontFamily={typography.fontFamily.robotoMedium}>
					Together we Groww
				</CustomText>
				<CustomText variant={FontSizeVariant.H7} fontFamily={typography.fontFamily.robotoBold}>
					Invest | Pay | Loans
				</CustomText>
			</View>
		</CustomSafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		justifyContent: 'center',
		paddingTop: 20
	}
});
