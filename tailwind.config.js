/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'primary': "#1A5DB4",
                'secondary': "#EBEBEB",
                'tertiary': "#D4F1F4",
                'nav': '#1A5DB4',
                'background': '#EBEBEB',
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
            },
            boxShadow: {
                'custom': '0px 0px 10px 0px rgba(0,0,0,0.3)',
            },
            gridTemplateColumns: {
                'home3': 'repeat(4, minmax(0, 295px))',
                'home2': 'repeat(3, minmax(0, 295px))',
                'home1': 'repeat(1, minmax(0, 295px))',

            }
        },
    },
    plugins: [
        require('tailwind-scrollbar'),
        require('tailwind-scrollbar-hide')
    ]
}