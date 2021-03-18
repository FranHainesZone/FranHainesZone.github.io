/** @jsx jsx */
import { jsx } from "@emotion/core";

import { getLogoCss } from "./logo.styles";

export const Logo = () => {
  const { containerCss } = getLogoCss();

  return (
    <div css={containerCss} data-content="Fran Haines">
      Fran Haines
    </div>
  );
};

export default Logo;
