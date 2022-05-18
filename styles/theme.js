/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */

const breakpoints = ["1em", "30em", "45em", "64em", "80em", "86em", "100em"];

const [xs, sm, md, xm, lg, ml, xl] = breakpoints;
breakpoints.xs = xs;
breakpoints.sm = sm;
breakpoints.md = md;
breakpoints.xm = xm;
breakpoints.lg = lg;
breakpoints.ml = ml;
breakpoints.xl = xl;

// #endregion
// #region typography

const fonts = {
  primary: "Inter",
  secondary: "Polan",
};
// #endregion
// #region colors
const colorSets = [
  {
    name: "primary",
    colors: [{ name: 500, hex: "#FDF400" }],
  },
  {
    name: "red",
    colors: [],
  },
  {
    name: "grey",
    colors: [
      { name: "100", hex: "#ffffff1a" },
      { name: "200", hex: "#191919" },
      { name: 500, hex: "#454545" },
      { name: 600, hex: "#252525" },
    ],
  },
];

export const colors = colorSets.reduce(
  (colorMap, { name, alias = name, colors: colorSet }) => {
    const color = {};
    const cm = colorMap;
    for (let colorIndex = 0; colorIndex < colorSet.length; colorIndex++) {
      const { name: colorName, hex } = colorSet[colorIndex];
      color[colorIndex] = hex;
      color[colorName] = hex;
    }
    cm[name] = color;
    cm[alias] = color;
    return cm;
  },
  {
    // ...defaultTheme.colors,
    white: "#FFFFFF",
    "white.0": "#FFFFFF",
    black: "#000000",
    "black.0": "#000000",
  }
);

// #endregion
const radii = {
  small: "0.125rem",
  normal: "0.1875rem",
  large: "0.375rem",
  full: "10rem",
  square: 0,
};
const zIndices = {
  modal: 2000,
  tooltip: 5000,
  toast: 7000,
};

const shadows = [
  { name: "none", shadow: undefined },
  { name: "sm", shadow: "0 .075rem .15rem rgba(0,0,0,.15)" },
  { name: "xl", shadow: "0 0 1rem rgba(0,0,0,.15)" },
].reduce((shadowSet, { name, shadow }, index) => {
  const s = shadowSet;
  s[name] = shadow;
  s[index] = shadow;
  return s;
});

export const theme = {
  // ...defaultTheme,
  breakpoints,
  radii,
  colors,
  zIndices,
  shadows,
  fonts,
};
