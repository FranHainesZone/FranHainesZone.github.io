// Colours
// Basic
const white = "#FFFFFF";
const black = "#404049";

// Blue
const blueDark = "#3e5a98";

// Pink
const pinkLight = "#fdd7eb";
const pinkDark = "#ff58ae";
const pinkDarker = "#B05589";

// Orange
const orange = "#be4b02";

// Purple
const purpleLight = "#3f51b5";

// Yellow
const yellow = "#fafbb2;";

// Green
const green = "#70DCBA";
const greenDark = "#57ad92";

// Fonts
const fontLogo = "Fredoka One";
const fontHeading = "Baloo Bhai 2";
const fontBody = "Lato";
const fontNav = "Baloo Bhai 2";

const base = {
  background: black,
  colorLogo: green,
  colorLogoHover: greenDark,
  colorTagline: orange,
  body: white,
  fontLogo,
  fontBody,
  fontHeading,
  fontNav,
};

const toggle = {
  toggleBackground: blueDark,
  toggleForeground: yellow,
  togglePosition: "30px",
};

const links = {
  linksNavUnderline: pinkDarker,
};

const shapes = {
  circleForeground: pinkDark,
  circleBackgroundStart: green,
  circleBackgroundEnd: black,
  triangle: purpleLight,
};

export const themeDark = { ...base, ...toggle, ...links, ...shapes };
