import { css } from "@emotion/core";

const getWrapperCss = (theme) => {
  return css`
    background: ${theme.backgroundVariant1};
    padding: 3.125rem 0;
  `;
};

export const getHeaderCss = () => ({
  wrapperCss: getWrapperCss,
});
