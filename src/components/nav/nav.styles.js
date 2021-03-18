import { css } from "@emotion/core";

const getWrapperCss = () => {
  return css`
    line-height: 2rem;
    display: flex;
  `;
};

const getUlCss = () => {
  return css`
    list-style-type: none;
    margin: 0;
    padding: 0;
    margin-left: auto;
    margin-right: 0;
  `;
};

const getLiCss = () => {
  return css`
    display: inline;
    padding-left: 1.875rem;
    &:first-of-type {
      padding-left: 0px;
    }
  `;
};

const getLinkCss = (theme) => {
  return css`
    color: ${theme.body};
    text-decoration: none;
    font-size: 1.1rem;
    font-weight: 700;
    font-family: ${theme.fontNav};
    position: relative;
    position: relative;
    background-repeat: no-repeat;
    transition: background-size 0.3s linear, background-position 0.3s linear;
    background-size: 0px 20px, 100% 20px, 0px 10px;
    background-position: 150% 100%, 100% 100%, 0% 80%;
    background-image: linear-gradient(
        ${theme.linksNavUnderline},
        ${theme.linksNavUnderline}
      ),
      linear-gradient(#0000, #0000),
      linear-gradient(${theme.linksNavUnderline}, ${theme.linksNavUnderline});
    &:hover {
      color: ${theme.body};
      background-size: 0px 20px, 0 20px, 100% 10px;
      background-position: 150% 100%, 100% 100%, 0% 80%;
    }
  `;
};

export const getNavCss = () => ({
  wrapperCss: getWrapperCss,
  linkCss: getLinkCss,
  ulCss: getUlCss,
  liCss: getLiCss,
});
