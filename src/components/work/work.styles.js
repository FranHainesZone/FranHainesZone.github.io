import { css } from "@emotion/core";

const getContainerCss = () => {
  return css`
    position: absolute;
    background-color: #3f51b5;
    width: 100%;
    padding: 50px 0px;
    z-index: 2;
    @media (min-width: 992px) {
      top: 850px;
    }
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
    cursor: pointer;
    &:hover span {
      color: white;
    }
    &:hover div {
      width: calc(100% - 30px);
    }
  `;
};

const getWorkCardTextCss = () => {
  return css`
    position: absolute;
    left: 50px;
    bottom: 50px;
    color: #fff;
    z-index: 10;
    max-width: 550px;
    h3 {
      font-family: "Nunito";
      font-size: 2.5rem;
      font-weight: 700;
    }
    h4 {
      font-family: "Lato";
    }
  `;
};

const getWorkCardTextOverlayCss = () => {
  return css`
    position: absolute;
    bottom: 0;
    left: 15px;
    right: 0;
    background: rgba(52, 180, 140, 0.8);
    overflow: hidden;
    width: 0;
    margin-bottom: 15px;
    height: calc(100% - 50px);
    transition: 0.5s ease;
  `;
};

const getWorkCardNumberCss = () => {
  return css`
    font-size: 6rem;
    position: absolute;
    line-height: 6rem;
    left: 50px;
    z-index: 10;
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
  workCardTextCss: getWorkCardTextCss,
  workCardTextOverlayCss: getWorkCardTextOverlayCss,
});
