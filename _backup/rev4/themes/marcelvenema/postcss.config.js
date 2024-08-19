let tailwindConfig = process.env.HUGO_FILE_TAILWIND_CONFIG_JS || './themes/marcelvenema/tailwind.config.js';
const tailwind = require('tailwindcss')(tailwindConfig);
const autoprefixer = require('autoprefixer');
const cssimport = require('postcss-import')({path: ['./themes/marcelvenema/assets/css/**/*.css']});

module.exports = {
	// eslint-disable-next-line no-process-env
	plugins: [ 
		tailwind,
		cssimport,
		autoprefixer,
		// ...(process.env.HUGO_ENVIRONMENT === 'production' ? [ autoprefixer ] : []) 
	]
};
