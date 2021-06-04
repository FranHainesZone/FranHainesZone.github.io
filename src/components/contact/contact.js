/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Row, Col, Container } from "react-bootstrap";

import selfPortrait from "../../images/self-portrait.svg";
import shapesFirst from "../../images/shapes-first.svg";
import shapesSecond from "../../images/shapes-second.svg";
import shapesThird from "../../images/shapes-third.svg";
import iconTwitter from "../../images/icon-twitter.svg";
import iconLinkedin from "../../images/icon-linkedin.svg";
import iconGithub from "../../images/icon-github.svg";
import iconCodepen from "../../images/icon-codepen.svg";
import { getContactCss } from "./contact.styles";
import useMousePosition from "../../hooks/useMousePosition";

export const Contact = () => {
  const {
    containerCss,
    h2Styling,
    paragraphStyling,
    iconStyling,
    selfPortraitStyling,
    imageWrapperStyling,
  } = getContactCss();

  let { x, y } = useMousePosition();

  return (
    <section css={containerCss} id="lets-chat">
      <Container>
        <Row>
          <Col sm={12} md={6}>
            <h2 css={h2Styling}>Let's Chat!</h2>

            <div css={paragraphStyling}>
              <p>
                I love meeting other developers and sharing projects so get in
                touch for a chat!
              </p>
              <p>
                <a href="mailto:hello@franhaines.com">Send me an email</a> at
                hello@franhaines.com or check out my social channels. Feel free
                to have a stalk of some of my dev projects too. 👀{" "}
              </p>
            </div>

            <div css={iconStyling}>
              <a href="https://twitter.com/frontendfran">
                <img src={iconTwitter} alt="Twitter Icon" />
              </a>
              <a href="https://www.linkedin.com/in/fran-haines-6b296515b">
                <img src={iconLinkedin} alt="LinkedIn Icon" />
              </a>
              <a href="http://github.com/franhaineszone">
                <img src={iconGithub} alt="Github Icon" />
              </a>
              <a href="https://codepen.io/franhaines">
                <img src={iconCodepen} alt="Codepen Icon" />
              </a>
            </div>
          </Col>
          <Col sm={12} md={6}>
            <img
              src={shapesFirst}
              alt=""
              css={imageWrapperStyling}
              style={{
                marginLeft: `calc(-${x}px * 0.01)`,
                marginTop: `calc(-${y}px * 0.01)`,
              }}
            />
            <img
              src={shapesSecond}
              alt=""
              css={imageWrapperStyling}
              style={{
                marginLeft: `calc(-${x}px * 0.02)`,
                marginTop: `calc(-${y}px * 0.02)`,
              }}
            />
            <img
              src={shapesThird}
              alt=""
              css={imageWrapperStyling}
              style={{
                marginLeft: `calc(-${x}px * 0.015)`,
                marginTop: `calc(-${y}px * 0.015)`,
              }}
            />
            <img src={selfPortrait} alt="" css={selfPortraitStyling} />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
