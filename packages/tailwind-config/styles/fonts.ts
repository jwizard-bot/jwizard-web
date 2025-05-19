type FontConfig = {
  name: string;
  twKey: string;
  fallbacks: string[];
};

const fontsConfig: FontConfig[] = [
  {
    name: 'JWSans',
    twKey: 'sans',
    fallbacks: ['system-ui', 'sans-serif'],
  },
  {
    name: 'JWLogo',
    twKey: 'logo',
    fallbacks: ['system-ui', 'sans-serif'],
  },
  {
    name: 'JWPixelated',
    twKey: 'pixelated',
    fallbacks: ['system-ui', 'sans-serif'],
  },
];

const twFontFamily = fontsConfig.reduce(
  (acc, { name, twKey, fallbacks }) => ({
    ...acc,
    [twKey]: [name, ...fallbacks],
  }),
  {}
);

const twFontDeclarations = fontsConfig.map(({ name, twKey }) => ({
  '@font-face': {
    fontFamily: name,
    src: `url('../../../packages/assets/font/${twKey}.woff2') format('woff')`,
  },
}));

export { twFontFamily, twFontDeclarations };
