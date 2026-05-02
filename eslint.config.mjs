import pandaPlugin from '@pandacss/eslint-plugin';
import nextCoreWebVitals from 'eslint-config-next/core-web-vitals';
import simpleImportSort from 'eslint-plugin-simple-import-sort';

const config = [
    {
        ignores: ['.next/**', 'node_modules/**', 'public/**', 'certificates/**', 'panda/**']
    },
    ...nextCoreWebVitals,
    {
        plugins: {
            '@pandacss': pandaPlugin,
            'simple-import-sort': simpleImportSort
        },
        rules: {
            'react/react-in-jsx-scope': 'off',
            'react/display-name': 'off',
            'simple-import-sort/imports': 'warn',
            'simple-import-sort/exports': 'warn',
            // Panda CSS rules — recommended set
            ...pandaPlugin.configs.recommended.rules
        }
    }
];

export default config;
