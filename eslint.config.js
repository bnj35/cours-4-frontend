import pluginVue from 'eslint-plugin-vue';
import pluginCypress from "eslint-plugin-cypress";
export default [
    ...pluginVue.configs['flat/recommended'],
  {
    plugins: {
      cypress: pluginCypress
    },
    rules: {
      semi: "error",
      "no-unused-vars": "error",
      "no-undef": "error",
      "no-const-assign": "error",
      "no-var": "error",
      "no-extra-semi": "error",
      "no-unreachable": "error",
      "no-unsafe-finally": "error",
      "prefer-const": "error",
      'cypress/unsafe-to-chain-command': 'error'
    },
    files: ["**/*.js", "**/*.ts", "**/*.jsx", "**/*.tsx", "**/*.vue"],
  },
];