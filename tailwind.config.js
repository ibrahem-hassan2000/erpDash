/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        main: "#026980",
        gray: "#747474",
      },
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
        xxl: "1536px",
      },
      fontFamily: {
        Thin: "IBMPlexSansArabicThin", // 100
        ExtraLight: "IBMPlexSansArabicExtraLight", // 200
        Light: "IBMPlexSansArabicLight", // 300
        Regular: "IBMPlexSansArabicRegular", // 400
        Medium: "IBMPlexSansArabicMedium", // 500
        SemiBold: "IBMPlexSansArabicSemiBold", // 600
        Bold: "IBMPlexSansArabicBold", // 700
      },
    },
  },
  plugins: [],
};
