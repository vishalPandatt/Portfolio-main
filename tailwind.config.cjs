module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], // ✅ existing font
      },
      keyframes: {
        glow: {
          '0%, 100%': { 
            boxShadow: '0 0 5px #a855f7, 0 0 10px #9333ea, 0 0 20px #7e22ce' 
          },
          '50%': { 
            boxShadow: '0 0 10px #c084fc, 0 0 20px #a855f7, 0 0 30px #9333ea' 
          },
        },
      },
      animation: {
        glow: 'glow 1.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
