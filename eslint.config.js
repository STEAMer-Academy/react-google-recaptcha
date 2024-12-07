import js from "@eslint/js";
import react from "eslint-plugin-react";
import prettier from "eslint-plugin-prettier";
import jest from "eslint-plugin-jest";

export default [
  // Base configurations
  js.configs.recommended,

  // React plugin configuration
  {
    files: ["**/*.{js,jsx}"],
    plugins: {
      react,
    },
    languageOptions: {
      globals: {
        module: true,
        require: true,
        window: true, // If your code interacts with window
        document: true, // If your code interacts with document
      },
      sourceType: "module",
      ecmaVersion: "latest",
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      react: {
        version: "detect", // Automatically detect React version
      },
    },
    rules: {
      "react/jsx-uses-react": "error",
      "react/jsx-uses-vars": "error",
    },
  },

  // Jest-specific configuration for test files
  {
    files: ["test/**/*.js", "**/*.spec.js"],
    plugins: {
      jest,
    },
    languageOptions: {
      globals: {
        describe: true,
        it: true,
        beforeEach: true,
        afterEach: true,
        expect: true,
        jest: true,
        window: true, // If your test interacts with window
      },
    },
    rules: {
      ...jest.configs["flat/recommended"].rules,
      "jest/no-disabled-tests": "warn",
      "jest/no-focused-tests": "error",
      "jest/no-identical-title": "error",
      "jest/prefer-to-have-length": "warn",
      "jest/valid-expect": "error",
    },
  },

  // Node.js environment for jest.config.js
  {
    files: ["jest.config.js"],
    languageOptions: {
      globals: {
        module: true,
        require: true,
      },
    },
  },

  // Prettier plugin configuration
  {
    plugins: {
      prettier,
    },
    rules: {
      "prettier/prettier": "error",
    },
  },

  // Ignored files/directories
  {
    ignores: ["lib/**"],
  },
];
