// import js from '@eslint/js';
// import globals from 'globals';
// import reactHooks from 'eslint-plugin-react-hooks';
// import reactRefresh from 'eslint-plugin-react-refresh';

// export default [

//     { ignores: ['dist', 'node_modules'] },
//     {
//         files: ['**/*.{js,jsx}'],
//         languageOptions: {
//             ecmaVersion: 2020,
//             globals: globals.browser,
//             parserOptions: {
//                 ecmaVersion: 'latest',
//                 ecmaFeatures: { jsx: true },
//                 sourceType: 'module',
//             },
//         },
//         plugins: {
//             'react-hooks': reactHooks,
//             'react-refresh': reactRefresh,
//         },
//         rules: {
//             ...js.configs.recommended.rules,
//             ...reactHooks.configs.recommended.rules,
//             'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
//             'react-refresh/only-export-components': [
//                 'warn',
//                 { allowConstantExport: true },
//             ],
//             'react-hooks/rules-of-hooks': 'error',
//             'react-hooks/exhaustive-deps': 'warn',
//             'no-undef': 'error',
//         },
//     }
// ];
import eslintPluginReact from "eslint-plugin-react";
import eslintPluginJsxA11y from "eslint-plugin-jsx-a11y";
import eslintPluginImport from "eslint-plugin-import";
import eslintPluginPrettier from "eslint-plugin-prettier";
import eslintPluginReactHooks from "eslint-plugin-react-hooks";
import parserTypeScript from "@typescript-eslint/parser";
import eslintPluginTypeScript from "@typescript-eslint/eslint-plugin";

export default [
    {
        files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"],
        languageOptions: {
            parser: parserTypeScript,
            parserOptions: {
                ecmaVersion: "latest",
                sourceType: "module",
                ecmaFeatures: {
                    jsx: true
                }
            }
        },
        plugins: {
            react: eslintPluginReact,
            "jsx-a11y": eslintPluginJsxA11y,
            import: eslintPluginImport,
            prettier: eslintPluginPrettier,
            "@typescript-eslint": eslintPluginTypeScript,
            "react-hooks": eslintPluginReactHooks
        },
        rules: {
            "prettier/prettier": "error",
            "react/react-in-jsx-scope": "off", // Next.js doesn't need React in scope
            "react/jsx-uses-react": "off", // deprecated but sometimes still useful
            "react-hooks/rules-of-hooks": "error",
            "react-hooks/exhaustive-deps": "warn",
            "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
            "import/order": [
                "warn",
                {
                    groups: [["builtin", "external"], "internal", ["parent", "sibling", "index"]],
                    "newlines-between": "always"
                }
            ],
            "react/destructuring-assignment": ["error", "always", { ignoreClassFields: true }]
        },
        settings: {
            react: {
                version: "detect"
            }
        }
    }
];
