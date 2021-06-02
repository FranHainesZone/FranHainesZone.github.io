import { css } from "@emotion/core";

const getContainerCss = (theme) => {
  return css`
    background: ${theme.backgroundVariant1};
    padding: 6rem 0;
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

const getParagraphStyling = (theme) => {
  return css`
    font-size: 1.2rem;
    color: ${theme.body};

    a {
      text-decoration: underline;
      color: ${theme.linksBodyUnderlineSmall};
    }
  `;
};

const getIconStyling = (theme) => {
  return css`
    img {
      filter: ${theme.linksIcons};
      width: 50px;
      height: 50px;
      padding: 0 20px;
      margin-bottom: 20px;
      transition: 0.3s;
      &:first-of-type {
        padding: 0 20px 0 0;
      }
      &:hover {
        filter: ${theme.linksIconsHover};
      }
    }
  `;
};

const getSelfPortraitStyling = (theme) => {
  return css`
    width: 100%;
  `;
};

export const getContactCss = () => ({
  containerCss: getContainerCss,
  h2Styling: getH2Styling,
  paragraphStyling: getParagraphStyling,
  iconStyling: getIconStyling,
  selfPortraitStyling: getSelfPortraitStyling,
});
