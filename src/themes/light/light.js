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

// Purple
const purpleLight = "#3f51b5";
const purpleDark = "#263377";

// Yellow
const yellow = "#fbde0d";

// Green
const green = "#70DCBA";

// Fonts
const fontLogo = "Fredoka One";
const fontHeading = "Baloo Bhai 2";
const fontBody = "Lato";
const fontNav = "Baloo Bhai 2";

const base = {
  background: green,
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

export const themeLight = { ...base, ...toggle, ...links, ...shapes };
