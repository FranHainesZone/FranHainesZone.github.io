import { css } from "@emotion/core";

// overall component container
const getContainerCss = (theme) => {
  return css`
    background-color: ${theme.backgroundVariant2};
    width: 100%;
    z-index: 2;
    padding: 3.8rem 0 3.5rem;

    @media (min-width: 992px) {
      padding: 5.8rem 0 5.4rem;
      font-size: 2.5rem;
    }
  `;
};

// article items containers
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
    &:last-of-type: {
    }
    &:hover span {
      color: white;
    }
    &:hover div {
      width: calc(100% - 30px);
    }

    @media (min-width: 992px) {
      margin: 0 30px 30px 0;

      &:hover div {
        width: calc(100% - 60px);
      }
    }
  `;
};

const getH2Styling = (theme) => {
  return css`
    color: white;
    font-family: ${theme.fontHeading};
    font-weight: 700;
    font-size: 2rem;

    @media (min-width: 992px) {
      font-size: 2.5rem;
    }
  `;
};

const getImageCss = () => {
  return css`
    width: 100%;
    height: 540px;
    padding-left: 5px;
    padding-top: 2rem;
    object-fit: cover;
    z-index: 2;
    object-position: top center;
  `;
};

const getWorkCardLink = (theme) => {
  return css`
    font-family: ${theme.fontBody};
  `;
};

const getWorkCardTextCss = (theme) => {
  return css`
    position: absolute;
    bottom: 55px;
    color: #fff;
    z-index: 10;
    padding: 0 40px;
    width: 90%;
    font-family: ${theme.fontBody};
    max-width: 550px;
    @media (min-width: 992px) {
      bottom: 75px;
    }
    @media (min-width: 1200px) {
      bottom: 65px;
    }
    h3 {
      font-family: ${theme.fontHeading};
      font-size: 1.5rem;
      font-weight: 700;

      @media (min-width: 1200px) {
        font-size: 2.5rem;
      }
    }
    h4 {
      font-family: ${theme.fontBody};
      font-size: 1rem;
      @media (min-width: 992px) {
        font-size: 1.2rem;
      }
      @media (min-width: 1200px) {
        font-size: 1.5rem;
      }
    }
  `;
};

const getWorkCardTextOverlayCss = (theme) => {
  return css`
    position: absolute;
    bottom: 0;
    left: 15px;
    right: 0;
    background: rgb(244, 135, 66);
    background: linear-gradient(
      156deg,
      ${theme.backgroundOverlay1} 0%,
      ${theme.backgroundOverlay2} 100%
    );
    opacity: 0.9;
    overflow: hidden;
    width: 0;
    margin-bottom: 1rem;
    height: calc(100% - 51px);
    z-index: 10;
    transition: 1s ease;

    @media (min-width: 992px) {
      margin-bottom: 1.8rem;
      height: calc(100% - 64px);
    }
  `;
};

const getWorkCardNumberCss = (theme) => {
  return css`
    font-size: 6rem;
    position: absolute;
    line-height: 6rem;
    left: 50px;
    z-index: 10;
    font-family: ${theme.fontBody};
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
