const heading = {
    color: 'text',
    fontFamily: 'heading',
    fontWeight: 'heading',
}

export const base = {
    colors: {
        text: "000000",
        background: "FFFFFF",
        primary: "2EC4B6",
        secondary: "FF9F1C",
    },
    fonts: {
        body: "Josefin Sans, sans-serif",
        heading: "inherit",
        monospace: "Menlo, monospace",
    },
    fontWeights: {
        body: 200,
        heading: 400,
    },
    lineHeights: {
        body: 1.5,
        heading: 1.125,
    },
    fontSizes: [
        25, 28, 44, 58, 76
    ],
    space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
    styles: {
        root: {
            fontFamily: 'body',
            fontWeight: 'body',
        },
        h1: {
            variant: heading,
            fontSize: 76,
        },
        h2: {
            variant: heading,
            fontSize: 58,
        },
        h3: {
            variant: heading,
            fontSize: 44,
        },
        p: {
            variant: heading,
            fontSize: 25,
        },
        navbar: {
            variant: heading,
            fontSize: 28,
        }
    }
}