const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBlue: "#111827",
        lightBlue: "#1F2937",
        primary: "#0079ff",
        light: "#f6f8ff",
        primaryLight: "#4b6a9b",
        danger: "#d33",
      },
    },
  },
  daisyui: {
    themes: false,
  },
  plugins: [require("daisyui")],
});
