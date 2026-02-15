/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#0EA5E9", // Sky 500
                secondary: "#64748B",
                accent: "#F472B6", // Pink 400
            }
        },
    },
    plugins: [],
}
