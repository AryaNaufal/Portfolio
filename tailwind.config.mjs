/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
      colors: {
        'orange': '#FF7E33',
        'main-background': '#2A233E'
      },
    },
	},
	plugins: [],
}
