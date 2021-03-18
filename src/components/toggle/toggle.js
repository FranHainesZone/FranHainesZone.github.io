import { Fragment } from "react";
/** @jsx jsx */
import { jsx } from "@emotion/core";

import { useTheme } from "../../context/ThemeContext";
import { getToggleCss } from "./toggle.styles";

export const Toggle = () => {
  const theme = useTheme();

  const { labelCss, inputCss, wrapperCss } = getToggleCss(theme);

  return (
    // call toggle function provided through ThemeContext
    // sets the LS var dark to true and theme dark var to true
    <Fragment>
      {/* use Bootstrap here */}
      <div css={wrapperCss}>
        <label css={labelCss} htmlFor="theme-switch"></label>
        <input
          css={inputCss}
          id="theme-switch"
          type="checkbox"
          onClick={() => theme.toggle()}
        />
      </div>
    </Fragment>
  );
};

export default Toggle;
