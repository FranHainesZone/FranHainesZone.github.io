import { css } from "@emotion/core";

const getContainerCss = () => {
  return css`
    top: 850px;
    position: absolute;
    background-color: #3f51b5;
    width: 100%;
    padding: 50px 0px;
  `;
};

const getH2Styling = (theme) => {
  return css`
    color: white;
    font-family: ${theme.fontHeading};
    font-weight: 700;
    font-size: 3rem;
  `;
};

const getImageCss = () => {
  return css`
    width: 100%;
    padding-top: 35px;
  `;
};

const getWorkCardCss = () => {
  return css`
    color: transparent;
    &:hover span {
      color: white;
    }
  `;
};

const getWorkCardNumberCss = () => {
  return css`
    font-size: 6rem;
    position: absolute;
    line-height: 6rem;
    padding-left: 20px;
    font-family: "Lato";
    font-weight: 900;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: #fff;
    transition: color 0.15s cubic-bezier(0.25, 0.25, 0.75, 0.75);
  `;
};

export const getWorkCss = () => ({
  containerCss: getContainerCss,
  h2Styling: getH2Styling,
  imageCss: getImageCss,
  workCardCss: getWorkCardCss,
  workCardNumberCss: getWorkCardNumberCss,
});
