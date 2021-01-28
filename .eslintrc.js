/**
 * Module contains eslint configuration
 * @module _/.eslintrc.js
 * @author Igor Ivanov
 */

module.exports = {
    env: {
        jest: true,
        browser: true,
        node: true,
        es6: true,
    },
    parser: 'babel-eslint',
    'extends': [
        'plugin:import/errors',
        'plugin:import/warnings',
        'ts-guard/optimum-next',
        'ts-guard/editor',
        'ts-guard/jsdoc',
    ],
    plugins: ['import', 'redux-saga', 'react', 'react-hooks', 'jsx-a11y'],
    globals: {
        exampleGlobalVariable: true,
    },
    rules: {
        'import/order': [
            'error',
            {
                groups: ['builtin', 'external', ['parent'], ['sibling', 'index'] ],
                'newlines-between': 'always',
                alphabetize: {
                    order: 'asc' /* sort in ascending order. Options: ['ignore', 'asc', 'desc'] */,
                    caseInsensitive: true /* ignore case. Options: [true, false] */,
                },
            },
        ],
        'import/no-extraneous-dependencies': [
            'error',
            {
                devDependencies: true,
                optionalDependencies: false,
            },
        ],

        'jsx-a11y/label-has-associated-control': [
            2,
            {
                // NOTE: If this error triggers, either disable it or add
                // your custom components, labels and attributes via these options
                // prettier-ignore
                // See https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/label-has-associated-control.md
                controlComponents: ['StyledInput'],
            },
        ],
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
