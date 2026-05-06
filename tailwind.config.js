export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        sage: {
          50: '#f6f8f4',
          100: '#e8efe2',
          200: '#d5e2c8',
          300: '#b8cc9f',
          400: '#96b274',
          500: '#789957',
          600: '#5d7942',
          700: '#4b6037',
          800: '#3f4f31',
          900: '#36452d',
        },
        ink: '#223029',
        muted: '#65736b',
        warm: '#fbfaf5',
      },
      boxShadow: {
        soft: '0 18px 45px rgba(68, 92, 74, 0.08)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
}
