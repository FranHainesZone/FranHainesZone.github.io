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

// Icons
const iconColor =
  "invert(23%) sepia(5%) saturate(1108%) hue-rotate(201deg) brightness(95%) contrast(90%)";
const iconColorHover =
  "invert(29%) sepia(42%) saturate(2662%) hue-rotate(3deg) brightness(101%) contrast(98%)";

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
  linksBodyUnderline: green,
  linksBodyUnderlineSmall: orange,
  linksIcons: iconColor,
  linksIconsHover: iconColorHover,
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
  backgroundVariant3: pinkLight,
  backgroundGradient1: greenDark,
  backgroundGradient2: purpleLight,
  backgroundOverlay1: orangeGradient,
  backgroundOverlay2: pinkGradient,
  backgroundBorder: black,
};

export const themeLight = {
  ...base,
  ...toggle,
  ...links,
  ...shapes,
  ...backgrounds,
};
