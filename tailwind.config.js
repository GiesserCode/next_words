/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                gblue: "#33817C",
                ggreen: "#3B8547",
                darkBackground: "#0B0B0B",
                transBackground: "#444",
                lightBackground: "#777",
                main: "#ddd",
                second: "#aaa"
            },
            blur: {
                big: "500px"
            }
        },
    },
    plugins: [],
}
