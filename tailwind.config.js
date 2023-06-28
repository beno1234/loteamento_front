/* eslint-disable no-undef */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      "feature-thumb": {
        width: "100%",
        marginBottom: "20px",
      },
    },
    fontFamily: {
      storytella: ["Storytella"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
