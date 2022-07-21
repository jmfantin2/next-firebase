module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        auth: "url('https://64.media.tumblr.com/9926e2c39c165eb39505134a2c7c7e27/b894ff9d14c18512-5c/s2048x3072/08f766bd836cdd2400b33e64f34b9f418005bd8c.pnj')",
        dash: "url('https://64.media.tumblr.com/5a85b9f90c36a8f1c2e9e59d5a2a07c2/1a8b6e3ca448cb94-10/s2048x3072/eeb96ee5bc9cae1ac81ec1bcec855c7cd2629c67.pnj')"
      },
      fontFamily:{
        sans: 'Roboto, sans-serif',
      },
      colors: {
        accent: '#FF9F00',
        accent_light: '#ffa445',
        accent_greyed: '#e8a14c',
        green: {
          300: '#00B37E',
          500: '#00875F',
          700: '#015F43',
        },
        blue: {
          500: '#81D8F7',
        },
        orange: {
          500: '#FBA94C',
        },
        red: {
          500: '#F75A68',
        },
        gray: {
          100: '#E1E1E6',
          200: '#C4C4CC',
          300: '#8D8D99',
          500: '#323238',
          600: '#29292E',
          700: '#121214',
          900: '#09090A',
        },
      }
    },
  },
  plugins: [require('flowbite/plugin')],
}