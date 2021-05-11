import { css } from "@emotion/core";

const getImageCss = (theme) => {
  return css`
    object-fit: cover;
    height: 100%;
    max-height: 250px;
    width: 100%;
    box-shadow: 0.5rem 0.5rem 0 0 ${theme.backgroundBorder};
    border: solid 2px ${theme.backgroundBorder};
    display: block;
    filter: grayscale(100%);
    -webkit-filter: grayscale(100%);
    -moz-filter: grayscale(100%);
    transition: 0.3s;
    &:hover {
      -webkit-filter: grayscale(0%);
      -moz-filter: grayscale(0%);
      filter: grayscale(0%);
    }
  `;
};

const getContainerCss = (theme) => {
  return css`
    background-color: ${theme.backgroundVariant3};
    color: ${theme.body};
    padding: 50px 0px;
  `;
};

const getH2Styling = (theme) => {
  return css`
    color: #404049;
    font-family: ${theme.fontHeading};
    color: ${theme.body};
    font-weight: 700;
    font-size: 3rem;
  `;
};

const getH3Styling = (theme) => {
  return css`
    color: #404049;
    font-family: ${theme.fontHeading};
    font-weight: 700;
    font-size: 2rem;
    color: ${theme.body};
    position: relative;
    background-repeat: no-repeat;
    transition: background-size 0.3s linear, background-position 0.3s linear;
    background-size: 0px 20px, 100% 20px, 0px 10px;
    background-position: 150% 100%, 100% 100%, 0% 80%;
    background-image: linear-gradient(
        ${theme.linksBodyUnderline},
        ${theme.linksBodyUnderline}
      ),
      linear-gradient(#0000, #0000),
      linear-gradient(${theme.linksBodyUnderline}, ${theme.linksBodyUnderline});
    &:hover {
      color: ${theme.body};
      background-size: 0px 20px, 0 20px, 100% 10px;
      background-position: 150% 100%, 100% 100%, 0% 80%;
    }
  `;
};

const getTextContainerStyling = () => {
  return css`
    padding: 0 3rem;
  `;
};

const getArticleContainer = () => {
  return css`
    &:first-of-type {
      padding: 1.5rem 0 2rem;
    }
    padding: 2.5rem 0;
  `;
};

const getParagraphStyling = (theme) => {
  return css`
    font-size: 1.5rem;
    color: ${theme.body};
    font-family: ${theme.fontBody};
    font-style: italic;
  `;
};

const getLinkStyling = (theme) => {
  return css`
    color: ${theme.body};
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: 700;
    font-family: ${theme.fontNav};
    position: relative;
    position: relative;
    background-repeat: no-repeat;
    transition: background-size 0.3s linear, background-position 0.3s linear;
    background-size: 0px 20px, 100% 20px, 0px 10px;
    background-position: 150% 100%, 100% 100%, 0% 80%;
    background-image: linear-gradient(
        ${theme.linksBodyUnderline},
        ${theme.linksBodyUnderline}
      ),
      linear-gradient(#0000, #0000),
      linear-gradient(${theme.linksBodyUnderline}, ${theme.linksBodyUnderline});
    &:hover {
      color: ${theme.body};
      background-size: 0px 20px, 0 20px, 100% 10px;
      background-position: 150% 100%, 100% 100%, 0% 80%;
    }
  `;
};

export const getArticlesCss = () => ({
  containerCss: getContainerCss,
  h2Styling: getH2Styling,
  h3Styling: getH3Styling,
  imageCss: getImageCss,
  textContainerStyling: getTextContainerStyling,
  articleContainer: getArticleContainer,
  paragraphStyling: getParagraphStyling,
  linkStyling: getLinkStyling,
});
