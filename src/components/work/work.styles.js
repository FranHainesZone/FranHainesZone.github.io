import { css } from "@emotion/core";

const getContainerCss = (theme) => {
  return css`
    position: absolute;
    background-color: ${theme.backgroundVariant2};
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
    height: 540px;
    padding-top: 35px;
    object-fit: cover;
    z-index: 2;
    object-position: top center;
  `;
};

const getWorkCardLink = () => {
  return css`
    // nothing here yet
  `;
};

const getWorkCardCss = (theme) => {
  return css`
    color: transparent;
    background: rgb(34, 184, 137);
    background: linear-gradient(
      0deg,
      ${theme.backgroundGradient1} 93.5%,
      ${theme.backgroundGradient2} 93.5%
    );
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
    padding-right: 50px;
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
    background: rgb(244, 135, 66);
    background: linear-gradient(
      156deg,
      rgba(244, 135, 66, 1) 0%,
      rgba(255, 88, 174, 1) 100%
    );
    opacity: 0.9;
    overflow: hidden;
    width: 0;
    margin-bottom: 15px;
    height: calc(100% - 50px);
    z-index: 10;
    transition: 1s ease;
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
    background: transparent;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: #fff;
    transition: color 0.3s cubic-bezier(0.25, 0.25, 0.75, 0.75);
    z-index: 11;
  `;
};

export const getWorkCss = () => ({
  containerCss: getContainerCss,
  h2Styling: getH2Styling,
  imageCss: getImageCss,
  workCardCss: getWorkCardCss,
  workCardLink: getWorkCardLink,
  workCardNumberCss: getWorkCardNumberCss,
  workCardTextCss: getWorkCardTextCss,
  workCardTextOverlayCss: getWorkCardTextOverlayCss,
});
