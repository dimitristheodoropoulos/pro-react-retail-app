import storybook from "eslint-plugin-storybook";
import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import tseslint from "typescript-eslint"; // Χρειάζεται για το parsing των .ts αρχείων

/** @type {import('eslint').Linter.Config[]} */
export default [
  // Καθορισμός αρχείων που θα ελέγχονται
  { files: ["**/*.{js,mjs,cjs,jsx,ts,tsx}"] },
  { languageOptions: { globals: globals.browser } },
  
  // Base JS Recommended
  pluginJs.configs.recommended,
  
  // TypeScript Recommended
  ...tseslint.configs.recommended,
  
  // React Recommended & Settings
  {
    ...pluginReact.configs.flat.recommended,
    settings: {
      react: {
        version: "detect", // Διορθώνει το warning "React version not specified"
      },
    },
    rules: {
      "react/react-in-jsx-scope": "off", // Δεν χρειάζεται στην React 18
    },
  },
  
  // Storybook Configuration
  ...storybook.configs["flat/recommended"],
  
  // Ignores
  {
    ignores: ["dist", "node_modules", "debug-storybook.log"],
  },
];