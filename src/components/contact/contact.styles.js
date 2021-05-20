import { css } from "@emotion/core";

const getContainerCss = (theme) => {
  return css`
    background: ${theme.backgroundVariant1};
    padding: 6rem 0;
  `;
};

export const getContactCss = () => ({
  containerCss: getContainerCss,
});
