/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/react-tailwindcss-select/dist/index.esm.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: "var(--font-montserrat)",
      },
      colors: {
        primary: {
          50: "#F0F2F6",
          200: "#BCC6D3",
          300: "#ACB2BA",
          500: "#353F4D",
          700: "#1F2937",
        },
        accent: {
          700: "#F6BA1F",
          800: "#C9991D",
        },
      },
      boxShadow: {
        testimonials: "0px 2px 4px  rgba(0, 0, 0, 0.3)",
        homeBlog: "0px 1px 3px  rgba(0, 0, 0, 0.24)",
      },
      backgroundImage: {
        "home-licensing": "url('/images/home-licensing.jpg')",
        "blog-bg": "url('/images/blog-bg.png')",
        "newsletter-bg": "url('/images/newsletter-bg.png')",
      },
    },
  },
  plugins: [],
};
