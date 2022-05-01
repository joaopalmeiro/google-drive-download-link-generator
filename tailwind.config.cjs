module.exports = {
  content: ["./index.html", "./src/**/*.{svelte,js}"],
  theme: {
    extend: {
      // https://tailwindcss.com/docs/background-image#customizing-your-theme
      // https://github.com/tailwindlabs/tailwindcss/discussions/2599#discussioncomment-102667
      backgroundImage: {
        // Source: SendStack (https://getsendstack.com/)
        "sendstack-one":
          "radial-gradient(81.58% 81.58% at 50.39% 18.42%, #a8ecff 0, #4bd8ff 100%)",
        "sendstack-two":
          "radial-gradient(81.58% 81.58% at 50.39% 18.42%, #cff5ff 0, #70e0ff 100%)",
      },
      colors: {
        // Source: SendStack (https://getsendstack.com/)
        "sendstack-onyx": "#09181c",
        "sendstack-gemstone": "#25363a",
      },
    },
  },
  plugins: [
    // https://github.com/tailwindlabs/tailwindcss-forms#using-only-global-styles-or-only-classes
    require("@tailwindcss/forms")({ strategy: "base" }),
  ],
};
