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
          <a href="/hi" css={linkCss}>
            Writing
          </a>
        </li>
        <li css={liCss}>
          <a href="/hi" css={linkCss}>
            Coding
          </a>
        </li>
        <li css={liCss}>
          <a href="/hi" css={linkCss}>
            Chatting
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
