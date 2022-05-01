// Source:
// - https://github.com/jerriclynsjohn/svelte-storybook-tailwind/blob/main/.eslintrc.js
// - https://github.com/sveltejs/eslint-plugin-svelte3#installation
// - https://github.com/sveltejs/eslint-plugin-svelte3/blob/master/OTHER_PLUGINS.md
// Note: Don't enable eslint-plugin-prettier on Svelte components. If you want to use Prettier, use it directly, along with appropriate plugins.
// - https://eslint.org/docs/rules/

module.exports = {
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: "module",
  },
  env: {
    es6: true,
    browser: true,
    // https://stackoverflow.com/a/70061596
    node: true,
  },
  plugins: ["svelte3"],
  overrides: [
    {
      files: ["*.svelte"],
      processor: "svelte3/svelte3",
    },
  ],
  extends: ["eslint:recommended"],
  rules: { eqeqeq: "error", "no-var": "error" },
};
