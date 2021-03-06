import { css } from "@emotion/core";

const getH1Styling = (theme) => {
  return css`
    font-family: ${theme.fontHeading};
    color: ${theme.colorTagline};
    font-weight: 700;
    font-size: 2rem;
    @media (min-width: 992px) {
      font-size: 3rem;
    }
  `;
};

const getH2Styling = (theme) => {
  return css`
    font-family: ${theme.fontHeading};
    color: ${theme.black};
    font-weight: 700;
    font-size: 2.5rem;
    padding-bottom: 20px;
    @media (min-width: 992px) {
      font-size: 3.5rem;
    }
  `;
};

const getShapeContainer = () => {
  return css`
    @media (min-width: 992px) {
      height: 750px;
    }
  `;
};

const getForegroundCircle = (theme) => {
  return css`
    width: 10%;
    height: 0;
    display: block;
    right: -100px;
    border-radius: 50%;
    background: ${theme.circleForeground};
    mask: radial-gradient(transparent 65px, ${theme.circleForeground} 50px);
    mix-blend-mode: overlay;
    position: absolute;
    z-index: 2;
    height: 200px;
    width: 200px;
    @media (min-width: 992px) {
      position: relative;
      mask: radial-gradient(transparent 99px, ${theme.circleForeground} 100px);
      top: 250px;
      right: 135px;
      height: 300px;
      width: 300px;
    }
  `;
};

const getBackgroundCircle = (theme) => {
  return css`
    background: linear-gradient(
      -45deg,
      ${theme.circleBackgroundStart} 0%,
      ${theme.circleBackgroundEnd} 100%
    );
    animation: hue-rotation 10s infinite alternate;
    position: absolute;
    right: -50px;
    top: 125px;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    z-index: 1;
    @media (min-width: 992px) {
      position: relative;
      top: -310px;
      left: 30px;
      width: 500px;
      height: 500px;
    }
  `;
};

const getTriangle = (theme) => {
  return css`
    width: 0;
    height: 0;
    border-left: 100px solid transparent;
    border-right: 100px solid transparent;
    left: -100px;
    top: 350px;
    mix-blend-mode: overlay;
    transform: rotate(90deg);
    position: absolute;
    border-bottom: 150px solid ${theme.triangle};
    z-index: 5;
    @media (min-width: 992px) {
      position: relative;
      top: -275px;
      left: 10px;
      transform: rotate(75deg);
      border-left: 200px solid transparent;
      border-right: 200px solid transparent;
      border-bottom: 250px solid ${theme.triangle};
    }
  `;
};

const getTextWrapper = (theme) => {
  return css`
    z-index: 2;
    max-width: 500px;
    color: ${theme.body};
    font-family: ${theme.fontBody};
    margin-top: 0;
    padding-bottom: 40px;

    a {
      text-decoration: underline;
      color: ${theme.linksBodyUnderlineSmall};
    }

    p {
      font-size: 1.2rem;
    }
  `;
};

const getHeroWrapper = (theme) => {
  return css`
    background: ${theme.backgroundVariant1};
    z-index: 1;
    @keyframes hue-rotation {
      100% {
        filter: hue-rotate(360deg);
      }
    }
  `;
};

export const getHeroCss = () => ({
  foregroundCircle: getForegroundCircle,
  backgroundCircle: getBackgroundCircle,
  triangle: getTriangle,
  heroWrapper: getHeroWrapper,
  textWrapper: getTextWrapper,
  shapeContainer: getShapeContainer,
  h1: getH1Styling,
  h2: getH2Styling,
});
