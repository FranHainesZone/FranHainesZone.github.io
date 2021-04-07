import { css } from "@emotion/core";

const getWrapperCss = (theme) => {
  return css`
    background: ${theme.background};
    padding: 3.125rem 0;
  `;
};

export const getHeaderCss = () => ({
  wrapperCss: getWrapperCss,
});
