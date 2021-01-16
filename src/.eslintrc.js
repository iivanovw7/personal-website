// eslint-disable-next-line no-undef
module.exports = {
    extends: [],
    overrides: [
        {
            files: ['**/*.ts', '**/*.tsx'],
            extends: [],
            globals: {
                JSX: 'readonly',
            },
            parser: '@typescript-eslint/parser',
            plugins: ['@typescript-eslint'],
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
                project: ['../tsconfig.eslint.json'],
                // eslint-disable-next-line no-undef
                tsconfigRootDir: __dirname,
            },
            rules: {
                '@typescript-eslint/no-unsafe-call': 0,
                '@typescript-eslint/no-unsafe-assignment': 0,
                '@typescript-eslint/no-unsafe-member-access': 0,
                '@typescript-eslint/import/extensions': 0,
            },
        },
    ],
};
