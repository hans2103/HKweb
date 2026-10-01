import localFont from 'next/font/local';

export const switzera = localFont({
    src: './SwitzeraADFRegular.woff2',
    variable: '--font-switzera',
    weight: '400',
    style: 'normal',
    display: 'swap',
    fallback: ['Verdana', 'arial', 'sans-serif']
});
