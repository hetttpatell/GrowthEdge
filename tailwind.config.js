/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#0B1F3A',
                    light: '#15335E',
                    dark: '#051223',
                },
                accent: {
                    DEFAULT: '#E63946',
                    light: '#EA5A65',
                    dark: '#D62839',
                },
            },
            fontFamily: {
                'outfit': ['Outfit', 'sans-serif'],
                'dm-sans': ['DM Sans', 'sans-serif'],
            },
            animation: {
                'gradient': 'gradient 15s ease infinite',
                'float': 'float 3s ease-in-out infinite',
                'fade-in': 'fadeIn 0.6s ease-out',
                'slide-up': 'slideUp 0.6s ease-out',
            },
            keyframes: {
                gradient: {
                    '0%, 100%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { opacity: '0', transform: 'translateY(30px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
            },
            screens: {
                'xs': '475px',
                '3xl': '1600px',
            },
            spacing: {
                '18': '4.5rem',
                '88': '22rem',
                '128': '32rem',
            },
            maxWidth: {
                '8xl': '88rem',
                '9xl': '96rem',
            },
            backdropBlur: {
                xs: '2px',
            },
        },
    },
    plugins: [],
}