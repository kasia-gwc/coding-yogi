const theme = {
  breakpoints: ['40em', '56em', '64em'],
  space: [
    0,
    '0.2rem',
    '0.4rem',
    '1rem',
    '1.6rem',
    '3.2rem',
    '6.4rem',
    '12.8rem',
    '25.6rem',
  ],
  fonts: {
    body:
      'Josefin Sans, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace',
  },
  fontSizes: [
    '1rem',
    '1.375rem',
    '1.5625rem',
    '2.125rem',
    '2.75rem',
    '3.8125rem',
  ],
  fontWeights: {
    body: 200,
    heading: 200,
    bold: 400,
  },
  lineHeights: {
    body: 1.25,
    heading: 1.125,
  },
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#2EC4B6',
    secondary: '#FF9F1C',
    muted: '#f6f6f6',
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
      fontSize: [0, null, 1],
    },
    h1: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'body',
      fontSize: [4, 5],
    },
    h2: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'body',
      fontSize: [3, 4],
    },
    h3: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'body',
      fontSize: [2, 3],
      mb: 4,
    },
    h4: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 2,
    },
    h5: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 1,
    },
    h6: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 0,
    },
    p: {
      color: 'text',
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
      fontSize: [0, 1],
      mb: 3,
    },
    a: {
      color: 'primary',
      fontSize: 2,
      fontWeight: 300,
    },
    pre: {
      fontFamily: 'monospace',
      overflowX: 'auto',
      code: {
        color: 'inherit',
      },
    },
    code: {
      fontFamily: 'monospace',
      fontSize: 'inherit',
    },
    table: {
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0,
    },
    th: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
    td: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
    img: {
      maxWidth: '100%',
    },
  },
  sizes: {
    container: 1050,
  },
  layout: {
    container: {
      width: ['95%', '90%', '80%'],
      alignItems: 'center',
      justifyContent: 'center',
      display: 'flex',
      flexDirection: 'column',
      mt: 5,
      px: [4, 2],
    },
  },
  buttons: {
    secondary: {
      color: 'background',
      bg: 'secondary',
      textTransform: 'uppercase',
      px: 4,
      borderRadius: 0,
      cursor: 'pointer',
    },
  },
}

export default theme
