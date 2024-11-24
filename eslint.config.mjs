import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      sourceType: "module",
      globals: {
        ...globals.browser,
        test: "readonly", // Add Jest global `test`
        expect: "readonly", // Add Jest global `expect`
        module: "readonly", // Add `module` global for tailwind.config.js
      },
    },
  },
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "module",
      globals: {
        ...globals.browser,
        test: "readonly", 
        expect: "readonly", 
        module: "readonly", // Add `module` global for tailwind.config.js
      },
    },
  },
  {
    languageOptions: {
      globals: globals.browser, // Browser globals
    },
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    settings: {
      react: {
        version: "detect", // Automatically detects React version
      },
    },
  },
  {
    rules: {
      "react/react-in-jsx-scope": "off", // Disable React in scope rule
    },
  },
];
