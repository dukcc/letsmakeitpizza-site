/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {

		spacing: {
			0: "0px",
			2: "2px",
			4: "4px",
			6: "6px",
			8: "8px",
			10: "10px",
			12: "12px",
			14: "14px",
			16: "16px",
			18: "18px",
			20: "20px",
			22: "22px",
			24: "24px",
			26: "26px",
			28: "28px",
			32: "32px",
			36: "36px",
			40: "40px",
			48: "48px",
			64: "64px",
			72: "72px",
			80: "80px",
			96: "96px",
			128: "128px",
			192: "192px",
			256: "256px",
			512: "512px",
		  },
		extend: {
			colors: {
				brand: "#FF5942",
				primary: "#FF5942",
				"brand-dark": "#9D2515",
				bg: "#EEEEEE",
				fg: "#F6F6F6",
				"fg-big": "#ffffff",
				"secondary": "#ffffff",
			}
		},
	},
	plugins: [],
}
