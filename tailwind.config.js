/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        md: "2rem",
        lg: "10rem",
        xl: "10rem",
        "2xl": "10rem",
      },
    },
    fontFamily: {
      sans: ["Beatrice", "sans-serif"],
      serif: ["Domaine Text", "serif"],
      Texterius: ["The Texterius", "serif"],
      YuGothic: ["Yu Gothic", "serif"],
      MyriadPro: ["Myriad Pro", "serif"],
      Roobert: ["Roobert", "serif"],
    },
    letterSpacing: {
      tightest: "-0.06em",
      tighter: "-0.03em",
      tight: "-0.01em",
      normal: "0",
      wide: "0.01em",
      wider: "0.03em",
      widest: "0.06em",
    },
    screens: {
      xxs: "320px",
      xs: "375px",
      sm: "640px",
      sm_md: "701px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      max: "1600px",
    },
    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      1: "1px",
      2: "2px",
      3: "3px",
      4: "4px",
      5: "5px",
      6: "6px",
      8: "8px",
    },
    boxShadow: {
      primary: "0px 18px 60px rgba(218, 193, 107, 0.3)",
    },
    groups: ["nav-icon"],
    extend: {
      colors: {
        gray: {
          primary: "#ECECEC",
          secondary: "#F4F4F4",
        },
        accent: { DEFAULT: "#FFCD39", def: "#FFCD39", light: "#FFF3CD" },
        custom: { neutrals: "#121416", primary: "#212529" },
        marigold: {
          dark: "#A2790D",
          medium: "#A78B3F",
          light: "#c6a652",
          lighter: "#ffe48c",
          bright: "#FFCE29",
          brighter: "#FFDC66",
        },
        red: {
          error: "#DC3545",
        },
        green: {
          success: "#28A745",
        },
      },
      fontSize: {
        xxs: "0.625rem", // - 10px (small disclaimer text)
        xs: ".75rem", // - 12px (disclaimer text)
        sm: ".875rem", // modified - 14px (Small Body text)
        base: "1rem", // 16px (Body text)
        lg: "1.125rem", // - 18px
        xl: "1.25rem", // - 20px (H5)
        "2xl": "1.5rem", // - 24px (H4)
        "3xl": "1.75rem", // - 28px (H3)
        "4xl": "2rem", // modified - 32px (H2)
        "5xl": "2.5rem", // modified - 40px (H1)
        "5-5xl": "3.5rem",
      },
      height: () => ({
        fit: "fit-content",
        "custom-inherit": "inherit",
        22: "1.375rem",
      }),
      spacing: () => ({
        "custom-2": "0.125rem",
        "custom-3": "0.1875rem",
        "custom-4": "0.25rem",
        "custom-3.5": "0.219rem",
        "custom-5": "0.313rem", // 5px
        "custom-5.5": "0.344rem",
        "custom-6": "0.4375rem",
        "custom-7": "0.438rem",
        "custom-9": "0.563rem",
        "custom-10": "0.625rem",
        "custom-12": "12px",
        "custom-15": "0.9375rem",
        "custom-16": "1rem",
        "custom-17": "1.0625rem",
        "custom-20": "1.25rem",
        "custom-25": "25px",
        "custom-26": "1.625rem",
        "custom-27": "1.688rem",
        "custom-28": "1.75rem",
        "custom-30": "1.875rem",
        "custom-33": "2.063rem",
        "custom-40": "2.5rem",
        "custom-42": "2.625rem",
        "custom-50": "3.125rem",
        "custom-60": "3.75rem",
        "custom-70": "4.375rem",
        "custom-75": "4.688rem",
        "custom-80": "5rem",
        "custom-90": "5.625rem",
        "custom-100": "6.25rem",
        "custom-108": "6.75rem",
        "custom-110": "6.875rem",
        "custom-120": "7.5rem",
        "custom-150": "9.375rem",
        "custom-160": "10rem",
        "custom-190": "11.875rem",
        "custom-200": "12.5rem",
        "custom-240": "15rem",
        "custom-281": "17.5625rem",
        "custom-288": "18rem",
        "custom-300": "18.75rem",
        "custom-310": "19.375rem",
        "custom-320": "20rem",
        "custom-375": "23.438rem",
        "custom-400": "25rem",
        "custom-440": "27.5rem",
        "custom-450": "28.125rem",
        "custom-465": "29.063rem",
        "custom-484": "30.25rem",
        "custom-485": "30.313rem",
        "custom-486": "30.4rem",
        "custom-500": "31.25rem",
        "custom-516": "32.25rem",
        "custom-530": "33.125rem",
        "custom-560": "35rem",
        "custom-585": "36.563rem",
        "custom-600": "37.5rem",
        "custom-604": "37.75rem",
        "custom-640": "40rem",
        "custom-645": "40.313rem",
        "custom-658": "41.125rem",
        "custom-665": "41.563rem",
        "custom-700": "43.75rem",
        "custom-750": "46.875rem",
        "custom-760": "47.5rem",
        "custom-788": "49.25rem",
        "custom-792": "49.5rem",
        "custom-800": "50rem",
        "custom-855": "53.438rem",
        "custom-880": "55rem",
        "custom-996": "62.25rem",
        "custom-1042": "65.125rem",
        "custom-1200": "75rem",
        "custom-1296": "81rem",
      }),
      width: () => ({
        fit: "fit-content",
        "1/2-screen": "50vw",
        "custom-90%": "90%",
      }),
      minWidth: {
        14: "0.875rem",
        20: "5rem",
        27: "6.75rem",
        50: "3.125rem",
        "custom-22": "1.375rem",
        "custom-32": "2rem",
        "custom-60": "3.75rem",
        "custom-120": "7.5rem",
        "custom-175": "11rem",
        "custom-220": "13.75rem",
        "custom-496": "31rem",
        "custom-unset": "unset",
        "custom-review": "calc(100vw - 4rem)",
      },
      maxWidth: {
        "custom-50%": "50%",
        "custom-85%": "85%",
        "custom-90%": "90%",
        "custom-95%": "95%",
        "custom-27": "1.688rem",
        "custom-32": "2rem",
        "custom-60": "3.75rem",
        "custom-68": "4.25rem",
        "custom-80": "5rem",
        "custom-108": "6.75rem",
        "custom-110": "6.875rem",
        "custom-120": "7.5rem",
        "custom-196": "12.25rem",
        "custom-248": "15.5rem",
        "custom-300": "18.75rem",
        "custom-350": "21.875rem",
        "custom-355": "22.188rem",
        "custom-361": "22.563rem",
        "custom-375": "23.438rem",
        "custom-400": "25rem",
        "custom-410": "25.625rem",
        "custom-450": "28.125rem",
        "custom-465": "29.063rem",
        "custom-484": "30.25rem",
        "custom-485": "30.313rem",
        "custom-486": "30.4rem",
        "custom-500": "31.25rem",
        "custom-516": "32.25rem",
        "custom-550": "34.375rem",
        "custom-580": "36.25rem",
        "custom-600": "37.5rem",
        "custom-640": "40rem",
        "custom-650": "40.625rem",
        "custom-656": "41rem",
        "custom-665": "41.563rem",
        "custom-700": "43.75rem",
        "custom-720": "45rem",
        "custom-750": "46.875rem",
        "custom-760": "47.5rem",
        "custom-788": "49.25rem",
        "custom-800": "50rem",
        "custom-845": "52.813rem",
        "custom-850": "53.125rem",
        "custom-855": "53.438rem",
        "custom-900": "56.25rem",
        "custom-950": "59.375rem",
        "custom-1000": "62.5rem",
        "custom-1020": "63.75rem",
        "custom-1042": "65.125rem",
        "custom-1050": "65.625rem",
        "custom-1100": "68.75rem",
        "custom-1150": "71.875rem",
        "custom-1200": "75rem",
        "custom-1296": "81rem",
        "custom-1440": "90rem",
        "custom-1600": "100rem",
      },
      lineHeight: {
        "custom-100": "100%",
        "custom-105": "105%",
        "custom-115": "115%",
        "custom-125": "125%",
        "custom-145": "145%",
        "feature-list-text": "1.178rem",
        "ordered-list-text": "1.375rem",
      },
      maxHeight: {
        14: "0.875rem",
        15: "3.75rem",
        50: "3.125rem",
        "custom-60": "3.75rem",
        "custom-361": "22.563rem",
        "custom-500": "31.25rem",
        "custom-560": "35rem",
        "custom-658": "41.125rem",
      },
      minHeight: {
        14: "0.875rem",
        20: "5rem",
        21: "5.25rem",
        22: "5.5rem",
        22.5: "5.75rem",
        24: "6rem",
        27.5: "6.875rem",
        28: "7rem",
        50: "3.125rem",
        max: "max-content",
        // 32
        "custom-32": "2rem",
        "custom-60": "3.75rem",
        "custom-320": "20rem",
        "custom-424": "26.5rem",
        "custom-464": "29rem",
        "custom-585": "36.563rem",
        "custom-400": "25rem",
        "custom-1080": "67.5rem",
      },
      padding: {
        2.375: "0.59375rem",
        3.5: "0.875rem",
        3.75: "0.938rem",
        4.5: "1.125rem",
        5.5: "1.375rem",
        7.5: "1.875rem",
        13: "3.125rem",
        17: "4.125rem",
        22: "5.5rem",
        21: "5.25rem",
        26: "6.5rem",
        27: "6.75rem",
        29: "7.125rem",
      },
      backgroundImage: {
        "primary-gradient":
          "linear-gradient(90deg, #E1AB3E 0%, #E6CE7F 68.75%)",
      },
      backgroundSize: {
        "size-130": "8.125rem",
        "size-360": "22.5rem",
      },
      backgroundPosition: {
        "bottom-center": "bottom center",
        "position-50": "50%",
      },
    },
  },
  plugins: [],
};
