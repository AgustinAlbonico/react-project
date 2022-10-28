/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
		extend: {},
		colors: {
			darkblue: "#2493bf",
			midblue: "#18bsd9",
			skyblue: "#05dbf2",
			salmon: "#f2bea0",
			white: "#ffffff",
		},
	},
	plugins: [],
};

