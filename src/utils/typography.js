import Typography from 'typography';

const typography = new Typography({
  googleFonts: [
    {
      name: 'Roboto',
      styles: ['300', '400', '700'],
    },
  ],
  baseLineHeight: 1.45,
  headerFontFamily: ['Roboto', 'Arial'],
  bodyFontFamily: ['Roboto', 'Arial'],
  headerWeight: 700,
  overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
    html: {
      overflowY: 'auto',
    },
  }),
});

typography.injectStyles();

export default typography;
