// Colours
// Basic
const black = "#404049";

// Blue
const blueLight = "#93e6ef";

// Pink
const pinkLight = "#fdd7eb";
const pinkDark = "#ff58ae";

// Orange
const orange = "#be4b02";
const orangeGradient = "#f48642";

// Purple
const purpleLight = "#3f51b5";
const purpleDark = "#263377";
const pinkGradient = "#ff58ae";

// Yellow
const yellow = "#fbde0d";

// Green
const green = "#70DCBA";
const greenDark = "#22b888";

// Fonts
const fontLogo = "Fredoka One";
const fontHeading = "Nunito";
const fontBody = "Lato";
const fontNav = "Nunito";

const base = {
  colorLogo: purpleLight,
  colorLogoHover: purpleDark,
  colorTagline: orange,
  body: black,
  fontLogo,
  fontBody,
  fontHeading,
  fontNav,
};

const toggle = {
  toggleBackground: blueLight,
  toggleForeground: yellow,
  togglePosition: "0px",
};

const links = {
  linksNavUnderline: pinkLight,
};

const shapes = {
  circleForeground: pinkDark,
  circleBackgroundStart: green,
  circleBackgroundEnd: pinkLight,
  triangle: purpleLight,
};

const backgrounds = {
  backgroundVariant1: green,
  backgroundVariant2: purpleLight,
  backgroundGradient1: greenDark,
  backgroundGradient2: purpleLight,
  backgroundOverlay1: orangeGradient,
  backgroundOverlay2: pinkGradient,
};

export const themeLight = {
  ...base,
  ...toggle,
  ...links,
  ...shapes,
  ...backgrounds,
};
