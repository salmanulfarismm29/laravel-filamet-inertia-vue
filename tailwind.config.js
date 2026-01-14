/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.{vue,js,ts}",
        "./resources/**/*.{js,ts}",
        "./app/Filament/**/*.{php,blade}",
        "./vendor/filament/**/*.blade.php",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}