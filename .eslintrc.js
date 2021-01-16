/**
 * Module contains eslint configuration
 * @module _/.eslintrc.js
 * @author Igor Ivanov
 */

const fs = require('fs');
const path = require('path');

/**
 * Parses prettier config file to be used in configuration.
 * @type {any}
 */
const prettierOptions = JSON.parse(fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8'));

module.exports = {
    env: {
        jest: true,
        browser: true,
        node: true,
        es6: true,
    },
    parser: 'babel-eslint',
    extends: [
        'plugin:import/errors',
        'plugin:import/warnings',
        'airbnb',
        'prettier',
        'prettier/react',
        'guard/jsdoc',
    ],
    plugins: ['prettier', 'import', 'redux-saga', 'react', 'react-hooks', 'jsx-a11y'],
    globals: {
        exampleGlobalVariable: true,
    },
    rules: {
        'prettier/prettier': ['error', prettierOptions],
        strict: 1,
        'no-plusplus': [
            'error',
            {
                allowForLoopAfterthoughts: true,
            },
        ],
        'max-len': [2, { code: 110 }],
        eqeqeq: 1,
        indent: [
            'error',
            4,
            {
                SwitchCase: 1,
            },
        ],
        'no-tabs': 0,
        'arrow-body-style': [2, 'as-needed'],
        'class-methods-use-this': 0,
        'import/order': [
            'error',
            {
                groups: ['builtin', 'external', ['parent'], ['sibling', 'index']],
                'newlines-between': 'always',
                alphabetize: {
                    order: 'asc' /* sort in ascending order. Options: ['ignore', 'asc', 'desc'] */,
                    caseInsensitive: true /* ignore case. Options: [true, false] */,
                },
            },
        ],
        'import/no-unresolved': [2, { commonjs: true, amd: true }],
        'import/named': 2,
        'import/namespace': 2,
        'import/default': 2,
        'import/export': 2,
        'import/extensions': 0,
        'import/no-extraneous-dependencies': [
            'error',
            {
                devDependencies: true,
                optionalDependencies: false,
            },
        ],
        'jsx-a11y/aria-props': 2,
        'jsx-a11y/heading-has-content': 0,
        'jsx-a11y/label-has-associated-control': [
            2,
            {
                // NOTE: If this error triggers, either disable it or add
                // your custom components, labels and attributes via these options
                // prettier-ignore
                // eslint-disable-next-line max-len
                // See https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/label-has-associated-control.md
                controlComponents: ['StyledInput'],
            },
        ],
        'jsx-a11y/label-has-for': 0,
        'jsx-a11y/mouse-events-have-key-events': 2,
        'jsx-a11y/role-has-required-aria-props': 2,
        'jsx-a11y/role-supports-aria-props': 2,
        'multiline-ternary': ['error', 'always'],
        'newline-per-chained-call': 0,
        'no-confusing-arrow': 0,
        'no-console': 1,
        'no-unused-vars': 2,
        'no-use-before-define': 0,
        'prefer-template': 2,
        'react/destructuring-assignment': 0,
        'react-hooks/rules-of-hooks': 'error',
        'react/jsx-closing-tag-location': 0,
        'react/forbid-prop-types': 0,
        'react/jsx-first-prop-new-line': [2, 'multiline'],
        'react/jsx-filename-extension': 0,
        'react/jsx-no-target-blank': 0,
        'react/jsx-uses-vars': 2,
        'react/require-default-props': 0,
        'react/require-extension': 0,
        'react/self-closing-comp': 0,
        'react/sort-comp': 0,
        'redux-saga/no-yield-in-race': 2,
        'redux-saga/yield-effects': 2,
        'require-yield': 0,
    },
    settings: {
        'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            },
        },
    },
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
            modules: true,
        },
        project: ['./tsconfig.json'],
    },
};
