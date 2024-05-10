/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        pixelify: ["pixelify", "sans-serif"],
        poppins: ["poppins", "sans-serif"],
      },
      colors: {
        primary: {
          100: "#E7EDDF",
          200: "#DAE5CF",
          300: "#CEDCBF",
          400: "#9DB97F",
          500: "#85A75F",
          600: "#6A864C",
          700: "#506439",
          800: "#354326",
          900: "#1B2113",
        },
        secondary: {
          100: "#EDF5F2",
          200: "#DCECE5",
          300: "#CAE2D9",
          400: "#B9D9CC",
          500: "#A7CFBF",
          600: "#8BB0A1",
          700: "#6F9183",
          800: "#547165",
          900: "#385247",
        },
        accent: {
          100: "#E6F0F1",
          200: "#CDE1E3",
          300: "#B3D2D6",
          400: "#9AC3C8",
          500: "#81B4BA",
          600: "#699297",
          700: "#507174",
          800: "#384F52",
          900: "#1F2E2F",
        },
        base: {
          100: "#FDFEFC",
          200: "#FBFCFA",
          300: "#F9FBF7",
          400: "#F7F9F5",
          500: "#F5F8F2",
          600: "#D7E0CF",
          700: "#BAC7AC",
          800: "#9CAF8A",
          900: "#7F9667",
        },
        text: "D1FAF6",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#85A75F",
          secondary: "#A7CFBF",
          accent: "#81B4BA",
          neutral: "#ff00ff",
          "base-100": "#E7EDDF",
          info: "#0000ff",
          success: "#00ff00",
          warning: "#00ff00",
          error: "#ffff00",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
