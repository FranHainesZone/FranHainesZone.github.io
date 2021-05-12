import { css } from "@emotion/core";

// overall section container
const getContainerCss = (theme) => {
  return css`
    background-color: ${theme.backgroundVariant3};
    color: ${theme.body};
    padding: 4rem 0;
    @media (min-width: 992px) {
      padding: 3.7rem 0 4rem;
    }
  `;
};

// article item containers
const getArticleContainer = () => {
  return css`
    padding: 1rem 0 2rem;
    &:last-of-type {
      padding: 1rem 0 0;
    }

    @media (min-width: 992px) {
      padding: 1.5rem 0;
    }
    &:first-of-type {
      @media (min-width: 992px) {
        padding: 0.5rem 0 1.5rem;
      }
    }
    &:last-of-type {
      @media (min-width: 992px) {
        padding: 1.5rem 0 0;
      }
    }
  `;
};

const getImageCss = (theme) => {
  return css`
    object-fit: cover;
    height: 100%;
    max-height: 230px;
    width: 100%;
    box-shadow: 0.5rem 0.5rem 0 0 ${theme.backgroundBorder};
    border: solid 2px ${theme.backgroundBorder};
    display: block;
    margin-bottom: 30px;
    filter: grayscale(100%);
    -webkit-filter: grayscale(100%);
    -moz-filter: grayscale(100%);
    transition: 0.3s;
    @media (min-width: 992px) {
      margin-bottom: 0;
    }
    &:hover {
      -webkit-filter: grayscale(0%);
      -moz-filter: grayscale(0%);
      filter: grayscale(0%);
    }
  `;
};

const getH2Styling = (theme) => {
  return css`
    color: #404049;
    font-family: ${theme.fontHeading};
    color: ${theme.body};
    font-weight: 700;
    font-size: 2rem;
    @media (min-width: 992px) {
      font-size: 2.5rem;
    }
  `;
};

const getH3Styling = (theme) => {
  return css`
    color: #404049;
    font-family: ${theme.fontHeading};
    font-weight: 700;
    font-size: 1.5rem;
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
    @media (min-width: 992px) {
      font-size: 2rem;
    }
  `;
};

const getTextContainerStyling = (theme) => {
  return css`
    padding: 0 3rem;
    font-family: ${theme.fontBody};
  `;
};

const getParagraphStyling = (theme) => {
  return css`
    font-size: 1rem;
    color: ${theme.body};
    font-family: ${theme.fontBody};
    font-style: italic;
    @media (min-width: 992px) {
      font-size: 1.2rem;
    }
  `;
};

const getLinkStyling = (theme) => {
  return css`
    color: ${theme.body};
    text-decoration: none;
    font-size: 1rem;
    font-weight: 700;
    font-family: ${theme.fontBody};
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
    @media (min-width: 992px) {
      font-size: 1.2rem;
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
