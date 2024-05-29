/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./utils/**/*.{js,ts,jsx,tsx}"],
  plugins: [require("daisyui")],
  darkTheme: "dark",
  darkMode: ["selector", "[data-theme='dark']"],
  // DaisyUI theme colors
  daisyui: {
    themes: [
      {
        light: {
          primary: "#7E2E84",
          "primary-content": "#212638",
          secondary: "#DAE8FF",
          "secondary-content": "#212638",
          accent: "#93BBFB",
          "accent-content": "#212638",
          neutral: "#4F4F4F",
          "neutral-content": "#ffffff",
          "base-100": "#ffffff",
          "base-200": "#f4f8ff",
          "base-300": "#DAE8FF",
          "base-content": "#212638",
          info: "#93BBFB",
          success: "#34EEB6",
          warning: "#FFCF72",
          error: "#FF8863",

          "--rounded-btn": "9999rem",

          ".tooltip": {
            "--tooltip-tail": "6px",
          },
          ".link": {
            textUnderlineOffset: "2px",
          },
          ".link:hover": {
            opacity: "80%",
          },
        },
      },
      {
        dark: {
          primary: "#7E2E84",
          "primary-content": "#212638",
          secondary: "#DAE8FF",
          "secondary-content": "#212638",
          accent: "#93BBFB",
          "accent-content": "#212638",
          neutral: "#4F4F4F",
          "neutral-content": "#ffffff",
          "base-100": "#ffffff",
          "base-200": "#f4f8ff",
          "base-300": "#DAE8FF",
          "base-content": "#212638",
          info: "#93BBFB",
          success: "#34EEB6",
          warning: "#FFCF72",
          error: "#FF8863",

          "--rounded-btn": "9999rem",

          ".tooltip": {
            "--tooltip-tail": "6px",
          },
          ".link": {
            textUnderlineOffset: "2px",
          },
          ".link:hover": {
            opacity: "80%",
          },
        },
      },
    ],
  },
  theme: {
    extend: {
      boxShadow: {
        center: "0 0 12px -2px rgb(0 0 0 / 0.05)",
        primary: "0 0 12px -2px rgba(126, 46, 132, 0.25)",
      },
      backgroundImage: {
        heroPattern: "url('../public/hero_bg.svg')",
      },
      animation: {
        "pulse-fast": "pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      colors: {
        active: "#68CC58",
        darkOrange: "#E97D1A",
        lightOrange: "#F3B353",
        lightYellow: "#FFFBEF",
        ocre: "#988D3D",
        darkGreen: "#1A3F37",
        lightGreen: "#F6FFEE",
        darkGrey: "#828282",
        lightGrey: "rgba(0,0,0,0.2)",
        grey: "#4F4F4F",
        orangeGrey: "#4B4B4B",
        borderGrey: "#CDCDCD",
        progressGrey: "#E5E5E5",
        beige: "#FBE5D1",
        lightBeige: "#F9F5E3",
        pink: "#EF798A",
      },
      height: {
        heroHeight: "675px",
      },
      fontSize: {
        h1: "40px",
        h2: "50px",
        h3: "30px",
        title: "23px",
        h4: "20px",
        p: "20px",
        subP: "15px",
        btn:"12px",
        copyRight: "16px",
      },
    },
  },
};
