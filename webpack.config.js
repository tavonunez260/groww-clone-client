const path = require('path');

module.exports = {
	resolve: {
		extensions: ['.js', '.jsx', '.ts', '.tsx'],
		alias: {
			'@constants': path.resolve(__dirname, 'src/constants'),
			'@components': path.resolve(__dirname, 'src/components'),
			'@screens': path.resolve(__dirname, 'src/screens'),
			'@utils': path.resolve(__dirname, 'src/utils'),
			'@assets': path.resolve(__dirname, 'src/assets')
		}
	}
};
