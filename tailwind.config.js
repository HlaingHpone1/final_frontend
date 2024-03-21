/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'primary': "#189AB4",
                'secondary': "#75E6DA",
                'tertiary': "#D4F1F4",
                'fourth': "#05445E",
                'nav': '#05445E',

            },
            fontFamily: {
                'Roboto': ['Roboto', 'sans-serif'],
                'Roboto-Slab': ['Roboto Slab', 'serif'],
            },
            fontWeight: {
                'active': 'bold',
            },

            maxWidth: {
                '1240px': '1240px',
            },
            opacity: {
                'active': '1',
            },
            backgroundImage: {
                'gradient': 'linear-gradient(-45deg, rgba(24,154,180,1) 50%, rgba(37,118,152,1) 50%)',
            },
            screens: {
                xs: "460px",
                xs2: "320px"
            }
        },
    },
    plugins: [],
}