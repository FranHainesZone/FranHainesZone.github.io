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
    workCardLink,
  } = getWorkCss();

  return (
    <section css={containerCss}>
      <Container>
        <h2 css={h2Styling}>Coding</h2>

        <Row>
          <Col xs={12} sm={6}>
            <figure css={workCardCss}>
              <a href="" css={workCardLink}>
                <span css={workCardNumberCss}>01</span>
                <div css={workCardTextOverlayCss}></div>
                <figcaption css={workCardTextCss}>
                  <h3>Zone Website</h3>
                  <h4>
                    A fun project with which we wanted a lot of interactivity.
                  </h4>
                </figcaption>
                <img src={zoneWebsite} alt="alt" css={imageCss} />
              </a>
            </figure>
          </Col>
          <Col xs={12} sm={6}>
            <figure css={workCardCss}>
              <span css={workCardNumberCss}>02</span>
              <div css={workCardTextOverlayCss}></div>
              <figcaption css={workCardTextCss}>
                <h3>Hot Air Balloon Ride</h3>
                <h4>
                  An interactive Three.js side project used to demonstrate my
                  understanding of WebGL.
                </h4>
              </figcaption>
              <img src={hotAirBalloon} alt="alt" css={imageCss} />
            </figure>
          </Col>
          <Col xs={12} sm={6}>
            <figure css={workCardCss}>
              <span css={workCardNumberCss}>03</span>
              <div css={workCardTextOverlayCss}></div>
              <figcaption css={workCardTextCss}>
                <h3>MovieMania</h3>
                <h4>
                  A side project built with The Movie Database API and React.
                </h4>
              </figcaption>
              <img src={movieMania} alt="alt" css={imageCss} />
            </figure>
          </Col>
          <Col xs={12} sm={6}>
            <figure css={workCardCss}>
              <span css={workCardNumberCss}>04</span>
              <div css={workCardTextOverlayCss}></div>
              <figcaption css={workCardTextCss}>
                <h3>Giphy Search</h3>
                <h4>A search app built with the Giphy API and React.</h4>
              </figcaption>
              <img src={giphy} alt="alt" css={imageCss} />
            </figure>
          </Col>
          <Col xs={12} sm={6}>
            <figure css={workCardCss}>
              <span css={workCardNumberCss}>05</span>
              <div css={workCardTextOverlayCss}></div>
              <figcaption css={workCardTextCss}>
                <h3>Personal Assistant</h3>
                <h4>
                  I built in-browser personal assistant app using the Speech
                  Recognition API and JS.
                </h4>
              </figcaption>
              <img src={personalAssistant} alt="alt" css={imageCss} />
            </figure>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Work;
