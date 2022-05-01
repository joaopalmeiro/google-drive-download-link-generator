module.exports = {
  content: ["./index.html", "./src/**/*.{svelte,js}"],
  theme: { extend: {} },
  plugins: [
    // https://github.com/tailwindlabs/tailwindcss-forms#using-only-global-styles-or-only-classes
    require("@tailwindcss/forms")({ strategy: "base" }),
  ],
};
