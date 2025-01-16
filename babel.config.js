module.exports = function (api) {
	api.cache(true);

	const plugins = [
		[
			'module-resolver',
			{
				root: ['./src'],
				alias: {
					'@assets': './src/assets',
					'@components': './src/components',
					'@config': './src/config',
					'@hooks': './src/hooks',
					'@navigation': './src/navigation',
					'@redux': './src/redux',
					'@screens': './src/screens',
					'@services': './src/services',
					'@styles': './src/styles',
					'@types': './src/types',
					'@utils': './src/utils',
				},
			},
		],
		['@babel/plugin-transform-private-methods', { loose: true }],
		['@babel/plugin-transform-private-property-in-object', { loose: true }],
		['@babel/plugin-transform-class-properties', { loose: true }],
		[
			'@babel/plugin-transform-react-jsx',
			{
				runtime: 'automatic'
			},
		],
	];

	return {
		presets: [
			[
				'module:metro-react-native-babel-preset', // Use Metro preset for React Native
				{
					useTransformReactJSXExperimental: true, // Enable experimental JSX transform support
				},
			],
			'@babel/preset-typescript', // TypeScript preset
		],
		plugins,
	};
};
