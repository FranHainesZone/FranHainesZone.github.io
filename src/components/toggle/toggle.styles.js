import { css } from "@emotion/core";

const getLabelCss = (theme) => {
  return css`
    margin: 0;
    padding: 0;
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(-50%, -50%);
    display: inline-block;
    width: 55px;
    height: 30px;
    background: ${theme.toggleBackground};
    border-radius: 3em;
    border: 0.125rem #ffffff solid;
    transition: background 0.25s ease-in-out;
    cursor: pointer;
    @media (min-width: 992px) {
      left: 50%;
    }

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: ${theme.togglePosition};
      width: 50%;
      height: 100%;
      background: ${theme.toggleForeground};
      border-radius: inherit;
      box-shadow: 0 0 7px 1px ${theme.toggleForeground};
      transition: background 0.25s ease-in-out, box-shadow 0.25s ease-in-out,
        left 0.25s ease-in-out;
    }
  `;
};

const getInputCss = () => {
  return css`
    display: none;
  `;
};

const getWrapperCss = () => {
  return css``;
};

export const getToggleCss = () => ({
  labelCss: getLabelCss,
  inputCss: getInputCss,
  wrapperCss: getWrapperCss,
});
