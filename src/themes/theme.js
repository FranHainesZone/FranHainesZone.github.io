import { themeDark } from "./dark";
import { themeLight } from "./light";

const theme = (mode) => (mode === "dark" ? themeDark : themeLight);

export default theme;
