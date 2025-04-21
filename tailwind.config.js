module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      colors: {
        macColor: {
          100: "#2F3139",
          200: "#41424B",
          300: "#5F6168",
          400: "#FFA009",
          500: "#28C840",
          600: "#FEBC2E",
          700: "#FF5F57",
          800: "#777B81",
        },
      },
      gridTemplateColumns: {
        'custom': '500px 1fr 2fr',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
