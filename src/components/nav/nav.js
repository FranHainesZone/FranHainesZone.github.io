/** @jsx jsx */
import { jsx } from "@emotion/core";

import { useTheme } from "../../context/ThemeContext";
import { getNavCss } from "./nav.styles";

export const Nav = () => {
  const theme = useTheme();

  const { wrapperCss, ulCss, liCss, linkCss } = getNavCss(theme);

  return (
    <nav css={wrapperCss}>
      <ul css={ulCss}>
        <li css={liCss}>
          <a href="#coding" css={linkCss}>
            Coding
          </a>
        </li>
        <li css={liCss}>
          <a href="#writing" css={linkCss}>
            Writing
          </a>
        </li>
        <li css={liCss}>
          <a href="#lets-chat" css={linkCss}>
            Let's Chat!
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
