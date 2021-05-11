/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Row, Col, Container } from "react-bootstrap";

import useMousePosition from "../../hooks/useMousePosition";
import { useTheme } from "../../context/ThemeContext";
import { getHeroCss } from "./hero.styles";

export const Hero = () => {
  const theme = useTheme();

  const {
    heroWrapper,
    foregroundCircle,
    backgroundCircle,
    triangle,
    textWrapper,
    shapeContainer,
    h1,
    h2,
  } = getHeroCss(theme);

  let { x, y } = useMousePosition();

  return (
    <section css={heroWrapper}>
      <Container>
        <Row>
          <Col>
            <div className="d-flex">
              <div css={textWrapper}>
                <h1 css={h1}>
                  Hi there, I'm Fran.{" "}
                  <span
                    role="img"
                    aria-label="Cartoon image of woman with red hair."
                  >
                    👩🏻‍🦰
                  </span>
                </h1>
                <h2 css={h2}>A Front-end Developer based in Bristol.</h2>
                <p>
                  Originally from a small town in the West Midlands, I decided
                  to move to Bristol shortly after a stint living in Cardiff.
                  I've never looked back since and I absolutely cannot imagine
                  living anywhere else.
                </p>
                <p>
                  I work at{" "}
                  <a
                    href="http://zonedigital.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Zone
                  </a>{" "}
                  and I'm currently working with Vue, CSS and JS. I love my job
                  and try to give back to the community by mentoring at both{" "}
                  <a
                    href="http://codebar.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Codebar
                  </a>{" "}
                  and a local Bristol school through{" "}
                  <a
                    href="https://technologyvolunteers.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Technology Volunteers
                  </a>
                  .
                </p>
                <p>
                  I love being outdoors - I'm really into running, cycling and
                  swimming. I've ran a handful of half marathons, a full
                  marathon and I'm doing my first Triathlon later this year. I
                  also love video games (Switch and PS4) and reading (mainly
                  feminism, sociology and tech). I'm also really into music and
                  have sang in a handful of national choirs in the UK - the most
                  recent being the{" "}
                  <a
                    href="https://www.bbc.co.uk/programmes/profiles/4Kj19qxQxH7lqrD6qBkpRFt/chorus"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    BBC National Chorus of Wales
                  </a>
                  . In a post-pandemic world you can usually find me at gigs in
                  and around Bristol.
                </p>
              </div>

              <div className="ml-auto" css={shapeContainer}>
                <div
                  css={foregroundCircle}
                  style={{
                    marginLeft: `calc(-${x}px * 0.03)`,
                    marginTop: `calc(-${y}px * 0.03)`,
                  }}
                ></div>
                <div
                  css={backgroundCircle}
                  style={{
                    marginRight: `calc(-${x}px * 0.01)`,
                    marginBottom: `calc(-${y}px * 0.01)`,
                  }}
                ></div>
                <div
                  css={triangle}
                  style={{
                    marginRight: `calc(-${x}px * 0.05)`,
                    marginTop: `calc(-${y}px * 0.05)`,
                  }}
                ></div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
