export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'palette-pink': '#f9b2d7',
        'palette-blue': '#cfecf3',
        'palette-green': '#daf9de',
        'palette-cream': '#f6ffdc',
        navy: '#222831',
        ink: '#20252d',
        muted: '#68727f',
        warm: '#fafaf7',
        surface: '#ffffff',
      },
      boxShadow: {
        soft: '0 18px 45px rgb(34 40 49 / 0.08)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
}
