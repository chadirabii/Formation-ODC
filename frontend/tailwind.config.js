module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBlue: "#141d2f",
        lightBlue: "#1e2a47",
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
};
