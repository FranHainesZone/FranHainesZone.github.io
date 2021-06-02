// Colours
// Basic
const white = "#FFFFFF";
const black = "#2f2f38";

// Blue
const blueDark = "#3e5a98";

// Pink
const pinkLight = "#fdd7eb";
const pinkDark = "#ff58ae";
const pinkDarker = "#B05589";
const pinkDarkest = "#5f2141";

// Orange
const orange = "#ff9650";

// Purple
const purpleLight = "#3f51b5";
const purpleDark = "#1f3a76";

// Yellow
const yellow = "#fafbb2;";

// Green
const green = "#70DCBA";
const greenDark = "#57ad92";

// Fonts
const fontLogo = "Fredoka One";
const fontHeading = "Nunito";
const fontBody = "Lato";
const fontNav = "Nunito";

// Icons
const iconColor =
  "invert(100%) sepia(100%) saturate(0%) hue-rotate(284deg) brightness(110%) contrast(101%)";
const iconColorHover =
  "invert(79%) sepia(19%) saturate(4799%) hue-rotate(323deg) brightness(101%) contrast(101%)";

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
  linksBodyUnderline: greenDark,
  linksBodyUnderlineSmall: orange,
  linksIcons: iconColor,
  linksIconsHover: iconColorHover,
};

const shapes = {
  circleForeground: pinkDark,
  circleBackgroundStart: green,
  circleBackgroundEnd: black,
  triangle: purpleLight,
};

const backgrounds = {
  backgroundVariant1: black,
  backgroundVariant2: purpleDark,
  backgroundVariant3: pinkDarkest,
  backgroundGradient1: black,
  backgroundGradient2: purpleDark,
  backgroundOverlay1: green,
  backgroundOverlay2: greenDark,
  backgroundBorder: white,
};

export const themeDark = {
  ...base,
  ...toggle,
  ...links,
  ...shapes,
  ...backgrounds,
};
