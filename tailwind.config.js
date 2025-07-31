module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "blue-custom": "#2563eb",
        "purple-custom": "#7c3aed",
        "gray-dark": "#1f2937",
      },
      animation: {
        slideInLeft: "slideInLeft 0.8s ease-out forwards",
        slideInRight: "slideInRight 0.8s ease-out forwards",
        sidebarSlide: "sidebarSlide 1s ease-out forwards",
        iconPop: "iconPop 3s ease-in-out forwards",
      },
      keyframes: {
        slideInLeft: {
          "0%": { transform: "translateX(-20%)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        slideInRight: {
          "0%": { transform: "translateX(20%)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        sidebarSlide: {
          "0%": { transform: "translateX(-100%)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        blink: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0 },
        },
        iconPop: {
          "0%": { transform: "scale(0) rotate(0deg)", opacity: 0 },
          "50%": { transform: "scale(1.5) rotate(360deg)", opacity: 1 },
          "100%": { transform: "scale(1) rotate(720deg)", opacity: 0 },
        },
      },
    },
  },
  plugins: [],
};
