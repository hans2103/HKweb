module.exports = {
    root: true,
    // Make sure eslint picks up the config at the root of the directory
    parserOptions: {
        ecmaVersion: 2020,
        // Use the latest ecmascript standard
        sourceType: 'module',
        // Allows using import/export statements
        ecmaFeatures: {
            jsx: true // Enable JSX since we're using React
        }
    },
    settings: {
        react: {
            version: 'detect' // Automatically detect the react version
        }
    },
    env: {
        browser: true,
        // Enables browser globals like window and document
        amd: true,
        // Enables require() and define() as global variables as per the amd spec.
        node: true // Enables Node.js global variables and Node.js scoping.
    },
    plugins: ['simple-import-sort'],
    extends: [
        'next/core-web-vitals',
        'eslint:recommended',
        'plugin:@next/next/recommended',
        'plugin:prettier/recommended',
        'plugin:storybook/recommended'
    ],
    rules: {
        'prettier/prettier': [
            'error',
            {},
            {
                usePrettierrc: true
            }
        ],
        // Use our .prettierrc file as source
        'react/react-in-jsx-scope': 'off',
        'jsx-a11y/anchor-is-valid': [
            'error',
            {
                components: ['Link'],
                specialLink: ['hrefLeft', 'hrefRight'],
                aspects: ['invalidHref', 'preferButton']
            }
        ],
        'react/display-name': 'off'
    }
};
