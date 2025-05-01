/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
      extend: {},
    },
    plugins: [require("@tailwindcss/typography"), require("daisyui")],
    daisyui: {
      themes: [
        {
          light: {
            primary: "#2274a5",    // Your blue
            secondary: "#2274a5",  // Pink
            accent: "#22d3ee",     // Cyan
            neutral: "#3d4451",
            "base-100": "#ffffff", // Light background
            info: "#3abff8",
            success: "#36d399",
            warning: "#fbbd23",
            error: "#f87272",
          },
        },
        {
          dark: {
            primary: "#ec4899",    // Same blue for dark mode
            secondary: "#2274a5",  // Pink still pops on dark
            accent: "#22d3ee",
            neutral: "#1f2937",    // Darker neutral
            "base-100": "#21252d", // Dark background
            info: "#3abff8",
            success: "#36d399",
            warning: "#fbbd23",
            error: "#f87272",
          },
        },
        "synthwave", // You can keep extra themes if you want
        "business",
        "cupcake",
        "bumblebee",
        "emerald",
        "corporate",
        "retro",
        "cyberpunk",
        "valentine",
        "halloween",
        "garden",
        "forest",
        "aqua",
        "lofi",
        "pastel",
        "fantasy",
        "wireframe",
        "black",
        "luxury",
        "dracula",
        "cmyk",
        "autumn",
        "acid",
        "lemonade",
        "night",
        "coffee",
        "winter",
        "dim",
        "nord",
        "sunset",
      ],
    },
    darkMode: ['selector', '[data-theme="dark"]'], // Change to 'dark' if you are customizing it
  };
  