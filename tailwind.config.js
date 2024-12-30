import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#D99904",
                secondary: "#EEFF25",
            },
            fontFamily: {
                montserrat: ["Montserrat", "sans-serif"],
            },
            backgroundImage: {
                featured: 'url("./src/assets/home/featured.jpg")',
            },
        },
    },
    plugins: [daisyui],
};
