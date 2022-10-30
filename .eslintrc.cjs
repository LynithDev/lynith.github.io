module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'airbnb-base',
        'plugin:svelte/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
        project: 'tsconfig.json',
        extraFileExtensions: ['.svelte'],
    },
    plugins: [
        '@typescript-eslint',
    ],
    overrides: [
        {
            files: ['*.svelte'],
            parser: 'svelte-eslint-parser',
            parserOptions: {
                parser: '@typescript-eslint/parser',
            },
        },
    ],
    rules: {
        'import/extensions': 'off',
        'import/no-unresolved': 'off',
        'no-console': 'off',
        'consistent-return': 'off',
        'array-callback-return': 'off',
        'no-undef': 'off',
        'no-bitwise': 'off',
        indent: [
            'error',
            4,
        ],
        'svelte/indent': [
            2,
            {
                indent: 4,
                ignoredNodes: [],
                switchCase: 0,
                alignAttributesVertically: false,
            },
        ],
        'svelte/html-quotes': [
            'error',
            {
                prefer: 'double',
                dynamic: {
                    quoted: false,
                    avoidInvalidUnquotedInHTML: false,
                },
            },
        ],
        eqeqeq: 'off',
        'max-len': 'off',
        'no-underscore-dangle': 'off',
        'no-plusplus': 'off',
        radix: 'off',
        index: 'off',
        'prefer-destructuring': 'off',
        'no-param-reassign': 'off',
        'no-await-in-loop': 'off',
        'linebreak-style': 'off',
        camelcase: 'off',
        'import/prefer-default-export': 'off',
        'no-unused-vars': 'off',
        'class-methods-use-this': 'off',
        'no-shadow': 'off',
        'no-script-url': 'off',
        'no-useless-constructor': 'off',
        'no-empty-function': 'off',
        'no-async-promise-executor': 'off',
        'no-prototype-builtins': 'off',
        'import/no-extraneous-dependencies': 'off',
        'import/no-mutable-exports': 'off',
        'no-new': 'off',
    },
};