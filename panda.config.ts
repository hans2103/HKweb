import { defineConfig } from '@pandacss/dev';

export default defineConfig({
    // preflight off — its reset is more aggressive than styled-normalize was,
    // stripping list-style/heading sizes/default margins. Browser defaults match
    // the original site visuals.
    preflight: false,
    include: ['./src/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],
    exclude: [],
    jsxFramework: 'react',
    outdir: 'panda',

    // Hashing is disabled because Panda generates the runtime JSX helpers at
    // `prepare` time but the CSS file at `next build` time. On Vercel those run
    // with different NODE_ENV values, so a conditional hash produced HTML with
    // unhashed classes (e.g. `pos_relative`) against a CSS file with only
    // hashed selectors — none of the styles applied. Keep this off.
    hash: false,

    // Use Lightning CSS for faster parsing + better minification.
    lightningcss: true,

    // Type-safe tokens — using a non-existent token (e.g. mt="md") becomes a
    // build-time TS error. Raw values (mt="1.5rem") become errors too; wrap in
    // [brackets] to opt out: mt="[1.5rem]".
    strictTokens: true,

    theme: {
        breakpoints: {
            sm: '38rem',
            md: '48rem',
            lg: '62rem',
            xl: '75rem'
        },
        extend: {
            tokens: {
                spacing: {
                    0: { value: '0' },
                    xxs: { value: '0.125rem' },
                    xs: { value: '0.25rem' },
                    s: { value: '0.5rem' },
                    m: { value: '1rem' },
                    l: { value: '2rem' },
                    xl: { value: '4rem' },
                    xxl: { value: '8rem' },
                    xxxl: { value: '16rem' },
                    auto: { value: 'auto' },
                    // Page-level inline padding using viewport units
                    pageInline: { value: '3vw' },
                    pageBottom: { value: '9vh' }
                },
                sizes: {
                    0: { value: '0' },
                    xxs: { value: '0.125rem' },
                    xs: { value: '0.25rem' },
                    s: { value: '0.5rem' },
                    m: { value: '1rem' },
                    l: { value: '2rem' },
                    xl: { value: '4rem' },
                    xxl: { value: '8rem' },
                    xxxl: { value: '16rem' },
                    full: { value: '100%' },
                    auto: { value: 'auto' },
                    // Hero: viewport minus header (4rem) and footer (33px)
                    heroHeight: { value: 'calc(100vh - 4rem - 33px)' },
                    heroMin: { value: '20rem' },
                    bodyMaxWidth: { value: '48rem' }
                },
                colors: {
                    bg: { value: 'hsl(148,9%,88%)' },
                    base: { value: 'hsl(209,14%,37%)' },
                    light: { value: 'hsl(0,0%,60%)' },
                    primary: { value: 'hsl(209,14%,37%)' },
                    accent: { value: 'hsl(14,84%,55%)' },
                    hover: { value: 'hsl(14,84%,55%)' },
                    focus: { value: 'hsl(14,84%,55%)' },
                    selection: { value: 'hsl(52,100%,73%)' },
                    selectionAlpha: { value: 'hsla(52,100%,73%,0.25)' },
                    hero: { value: 'hsl(148,9%,88%)' },
                    // Semantic helper for "inherit color from parent"
                    currentColor: { value: 'currentColor' }
                },
                fonts: {
                    base: { value: 'var(--font-switzera), Verdana, arial, sans-serif' },
                    heading: { value: 'var(--font-switzera), Verdana, arial, sans-serif' }
                },
                fontSizes: {
                    base: { value: '1rem' },
                    xs: { value: '0.75rem' },
                    s: { value: '0.85rem' },
                    m: { value: '1rem' },
                    l: { value: '1.3rem' },
                    xl: { value: '1.8rem' },
                    xxl: { value: '2.4rem' },
                    xxxl: { value: '3.2rem' },
                    xxxxl: { value: '4.2rem' }
                },
                fontWeights: {
                    base: { value: '300' },
                    heading: { value: '300' },
                    bold: { value: '700' }
                },
                lineHeights: {
                    base: { value: '1.5' },
                    heading: { value: '1.1' }
                },
                letterSpacings: {
                    base: { value: '0' },
                    heading: { value: '0' }
                },
                radii: {
                    none: { value: '0' },
                    base: { value: '0.25em' },
                    round: { value: '99999em' }
                },
                shadows: {
                    cover: { value: '0 0 3px rgba(0, 0, 0, 0.05)' },
                    // Hero overlay text shadow for legibility on top of imagery
                    headline: {
                        value: '0px 4px 3px hsla(221, 45%, 28%, 0.4),0px 8px 13px hsla(221, 45%, 28%, 0.1),0px 18px 23px hsla(221, 45%, 28%, 0.1)'
                    }
                },
                borders: {
                    none: { value: 'none' },
                    thin: { value: '1px solid' },
                    focus: { value: '3px solid' }
                }
            },
            textStyles: {
                body: {
                    value: {
                        fontFamily: 'token(fonts.base)',
                        fontSize: 'token(fontSizes.m)',
                        fontWeight: 'token(fontWeights.base)',
                        lineHeight: 'token(lineHeights.base)',
                        color: 'token(colors.base)'
                    }
                },
                xsmall: {
                    value: {
                        fontFamily: 'token(fonts.base)',
                        fontSize: 'token(fontSizes.xs)',
                        fontWeight: 'token(fontWeights.base)',
                        lineHeight: 'token(lineHeights.base)',
                        color: 'token(colors.base)'
                    }
                },
                small: {
                    value: {
                        fontFamily: 'token(fonts.base)',
                        fontSize: 'token(fontSizes.s)',
                        fontWeight: 'token(fontWeights.base)',
                        lineHeight: 'token(lineHeights.base)',
                        color: 'token(colors.base)'
                    }
                },
                large: {
                    value: {
                        fontFamily: 'token(fonts.base)',
                        fontSize: 'token(fontSizes.l)',
                        fontWeight: 'token(fontWeights.base)',
                        lineHeight: 'token(lineHeights.base)',
                        color: 'token(colors.base)'
                    }
                }
            },
            recipes: {
                heading: {
                    className: 'heading',
                    base: {
                        margin: '0',
                        color: 'base',
                        fontFamily: 'heading',
                        fontWeight: 'bold',
                        lineHeight: 'heading'
                    },
                    variants: {
                        level: {
                            1: { fontSize: 'xl' },
                            2: { fontSize: 'l' },
                            3: { fontSize: 'm' }
                        }
                    }
                },
                blockStack: {
                    className: 'block-stack',
                    base: {
                        display: 'block'
                    },
                    variants: {
                        gap: {
                            xxs: { '& > * + *': { marginBlockStart: 'xxs' } },
                            xs: { '& > * + *': { marginBlockStart: 'xs' } },
                            s: { '& > * + *': { marginBlockStart: 's' } },
                            m: { '& > * + *': { marginBlockStart: 'm' } },
                            l: { '& > * + *': { marginBlockStart: 'l' } },
                            xl: { '& > * + *': { marginBlockStart: 'xl' } }
                        }
                    },
                    defaultVariants: {
                        gap: 'm'
                    }
                },
                srOnly: {
                    className: 'sr-only',
                    base: {
                        border: 0,
                        clip: 'rect(0 0 0 0)',
                        height: '1px',
                        margin: '-1px',
                        overflow: 'hidden',
                        padding: 0,
                        position: 'absolute',
                        width: '1px',
                        whiteSpace: 'nowrap',
                        wordWrap: 'normal'
                    }
                },
                skipLink: {
                    className: 'skip-link',
                    base: {
                        position: 'absolute',
                        left: 's',
                        top: 's',
                        paddingY: 's',
                        paddingX: 'm',
                        background: 'base',
                        color: 'bg',
                        textDecoration: 'none',
                        zIndex: 100,
                        transform: 'translateY(-200%)',
                        transition: 'transform 0.15s ease-out',
                        '&:focus': {
                            transform: 'translateY(0)',
                            outline: '2px solid token(colors.focus)',
                            outlineOffset: 2
                        }
                    }
                },
                socialItem: {
                    className: 'social-item',
                    base: {
                        margin: 0,
                        listStyle: 'none',
                        '& + &::before': {
                            content: '""',
                            display: 'inline-block',
                            verticalAlign: 'middle',
                            margin: '0 1ch',
                            width: '3px',
                            height: '3px',
                            borderRadius: '50%',
                            backgroundColor: 'currentColor'
                        }
                    }
                },
                link: {
                    className: 'link',
                    base: {
                        padding: '0',
                        background: 'none',
                        border: '0',
                        font: 'inherit',
                        textDecoration: 'underline',
                        color: 'primary',
                        '&:link, &:visited': {
                            color: 'primary'
                        },
                        '&:hover, &:active, &:focus-visible': {
                            color: 'accent',
                            cursor: 'pointer'
                        },
                        '&:focus-visible': {
                            outline: '2px solid',
                            outlineOffset: '2px'
                        }
                    }
                }
            }
        }
    },

    globalCss: {
        ':root': {
            fontSize: 'calc(1em + .16vw)',
            scrollBehavior: 'smooth'
        },
        '@media screen and (prefers-reduced-motion: reduce)': {
            ':root': { scrollBehavior: 'auto' }
        },
        body: {
            margin: '0',
            padding: '0',
            boxSizing: 'border-box',
            fontFamily: 'base',
            color: 'base'
        },
        'ul, ol': {
            padding: '1rem'
        },
        '@media print': {
            '@page': { size: 'auto', margin: '.5cm' },
            'html, body': { background: 'transparent' },
            'a::after': { fontSize: 'smaller', content: '" (" attr(href) ")"' },
            '.print\\:hide.print\\:hide': { display: 'none' }
        }
    }
});
