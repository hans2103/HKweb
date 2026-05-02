import nextCoreWebVitals from 'eslint-config-next/core-web-vitals';
import simpleImportSort from 'eslint-plugin-simple-import-sort';

const config = [
    {
        ignores: ['.next/**', 'node_modules/**', 'public/**', 'certificates/**']
    },
    ...nextCoreWebVitals,
    {
        plugins: {
            'simple-import-sort': simpleImportSort
        },
        rules: {
            'react/react-in-jsx-scope': 'off',
            'react/display-name': 'off',
            'jsx-a11y/anchor-is-valid': [
                'error',
                {
                    components: ['Link'],
                    specialLink: ['hrefLeft', 'hrefRight'],
                    aspects: ['invalidHref', 'preferButton']
                }
            ],
            'simple-import-sort/imports': 'warn',
            'simple-import-sort/exports': 'warn'
        }
    }
];

export default config;
