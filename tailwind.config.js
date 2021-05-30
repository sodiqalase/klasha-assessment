module.exports = {
	purge: ["./src/**/*.html", "./src/**/*.js"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		screens: { mobiles: { max: "500px" } },

		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
