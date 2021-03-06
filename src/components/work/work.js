/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Row, Col, Container } from "react-bootstrap";

import { getWorkCss } from "./work.styles";
import hotAirBalloon from "../../images/hot-air-balloon.svg";
import giphy from "../../images/giphy.svg";
import movieMania from "../../images/movie-mania.svg";
import personalAssistant from "../../images/personal-assistant.svg";
import zoneWebsite from "../../images/zone-website.svg";

export const Work = () => {
  const {
    containerCss,
    h2Styling,
    imageCss,
    workCardCss,
    workCardNumberCss,
    workCardTextCss,
    workCardTextOverlayCss,
  } = getWorkCss();

  return (
    <section css={containerCss} id="coding">
      <Container>
        <h2 css={h2Styling}>Coding</h2>

        <Row>
          <Col md={12} lg={6}>
            <figure css={workCardCss}>
              <a
                href="https://zonedigital.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span css={workCardNumberCss}>01</span>
                <div css={workCardTextOverlayCss}></div>
                <figcaption css={workCardTextCss}>
                  <h3>Zone Website</h3>
                  <h4>
                    A rebuild of the Zone website, utilising interesting
                    interaction throughout.
                  </h4>
                </figcaption>
                <img
                  src={zoneWebsite}
                  alt="Zone Website viewed on a laptop"
                  css={imageCss}
                />
              </a>
            </figure>
          </Col>
          <Col md={12} lg={6}>
            <figure css={workCardCss}>
              <a
                href="https://franhaineszone.github.io/movie-mania/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span css={workCardNumberCss}>02</span>
                <div css={workCardTextOverlayCss}></div>
                <figcaption css={workCardTextCss}>
                  <h3>MovieMania</h3>
                  <h4>
                    A personal project that was built with The Movie Database
                    API and React.
                  </h4>
                </figcaption>
                <img
                  src={movieMania}
                  alt="Movie Search app viewed on a laptop"
                  css={imageCss}
                />
              </a>
            </figure>
          </Col>
          <Col md={12} lg={6}>
            <figure css={workCardCss}>
              <a
                href="https://franhaineszone.github.io/giphy/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span css={workCardNumberCss}>03</span>
                <div css={workCardTextOverlayCss}></div>
                <figcaption css={workCardTextCss}>
                  <h3>Giphy Search</h3>
                  <h4>
                    A fun search app that utilises the Giphy API and React.
                  </h4>
                </figcaption>
                <img
                  src={giphy}
                  alt="Giphy web app viewed on a laptop"
                  css={imageCss}
                />
              </a>
            </figure>
          </Col>
          <Col md={12} lg={6}>
            <figure css={workCardCss}>
              <a
                href="https://franhaineszone.github.io/personal-assistant/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span css={workCardNumberCss}>04</span>
                <div css={workCardTextOverlayCss}></div>
                <figcaption css={workCardTextCss}>
                  <h3>Personal Assistant</h3>
                  <h4>
                    An app built using the SpeechRecognition and Speech-to-Text
                    APIs.
                  </h4>
                </figcaption>
                <img
                  src={personalAssistant}
                  alt="Personal Assistant app viewed on a laptop"
                  css={imageCss}
                />
              </a>
            </figure>
          </Col>
          <Col md={12} lg={6}>
            <figure css={workCardCss}>
              <a
                href="https://vigilant-raman-052bd0.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span css={workCardNumberCss}>05</span>
                <div css={workCardTextOverlayCss}></div>
                <figcaption css={workCardTextCss}>
                  <h3>Hot Air Balloon Ride</h3>
                  <h4>
                    An interactive Three.js side project used whilst learning
                    WebGL.
                  </h4>
                </figcaption>
                <img
                  src={hotAirBalloon}
                  alt="3D app of a hot air balloon"
                  css={imageCss}
                />
              </a>
            </figure>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Work;
