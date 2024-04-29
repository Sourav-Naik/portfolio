/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        "pulse-slow": "pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "pulse-slow-rev": "pulse-slow-rev 6s linear infinite",
      },
      keyframes: {
        "pulse-slow": {
          "0%, 100%": {
            opacity: "0.4",
          },
          "50%": {
            opacity: "1",
          },
        },
        "pulse-slow-rev": {
          "0%, 100%": {
            opacity: "0.8",
          },
          "50%": {
            opacity: "0.3",
          },
        },
      },
    },
  },
  plugins: [],
};
