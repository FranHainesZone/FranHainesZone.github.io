import { css } from "@emotion/core";

const getContainerCss = (theme) => {
  return css`
    font-family: ${theme.fontLogo};
    color: ${theme.colorLogo};
    font-weight: 700;
    font-size: 1.2rem;
    text-align: center;
    line-height: 2rem;
    letter-spacing: 4px;
    text-transform: uppercase;
    position: relative;
    display: inline-block;
    text-decoration: none;
    overflow: hidden;
    &::before {
      position: absolute;
      content: attr(data-content);
      top: 0;
      left: 0;
      width: 0;
      color: ${theme.colorLogoHover};
      white-space: nowrap;
      overflow: hidden;
      transition: width 275ms ease;
    }
    &:hover::before {
      width: 100%;
    }
  `;
};

export const getLogoCss = () => ({
  containerCss: getContainerCss,
});
