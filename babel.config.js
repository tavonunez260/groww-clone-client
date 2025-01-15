module.exports = function (api) {
	api.cache(true);

	const plugins = [
		[
			'module-resolver',
			{
				root: ['./src'],
				alias: {
					'@components': './src/components',
					'@constants': './src/constants',
					'@screens': './src/screens',
					'@utils': './src/utils',
					'@assets': './src/assets',
					'@navigation': './src/navigation'
				}
			}
		],
		['@babel/plugin-transform-private-methods', { loose: true }],
		['@babel/plugin-transform-private-property-in-object', { loose: true }],
		['@babel/plugin-transform-class-properties', { loose: true }]
	];

	return {
		presets: [
			'module:metro-react-native-babel-preset',
			'module:@react-native/babel-preset',
			'@babel/preset-react',
			'@babel/preset-typescript'
		],
		plugins
	};
};
