/** @type {import('tailwindcss').Config} */
export default {
    // darkMode: ["class"],
    content: ["index.js",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layout/**/*.{js,ts,jsx,tsx,mdx}",

  ],
theme: {
    extend: {
      colors:{
        CardColor:'#F0F0F0',
        textColor:'#151515'
      },
      fontFamily: {
        pp: ["PP Neue Montreal", "sans-serif"], 
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
