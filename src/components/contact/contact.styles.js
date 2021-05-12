import { css } from "@emotion/core";

const getContainerCss = (theme) => {
  return css`
    background: ${theme.backgroundVariant1};
  `;
};

export const getContactCss = () => ({
  containerCss: getContainerCss,
});
