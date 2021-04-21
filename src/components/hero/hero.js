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
                  to move to Bristol shortly after a stint living in Cardiff
                  following on from university. I have never looked back since
                  and I absolutely cannot imagine living anywhere else.
                </p>
                <p>
                  I currently work at Zone - working with Vue, CSS and JS,
                  mostly. I love my job and try to give back to the community by
                  mentoring at both Codebar and a local Bristol high school.
                </p>
                <p>
                  I love being outdoors - I'm really into running, cycling and
                  swimming. I've ran a handful of half marathons, a full
                  marathon and I'm doing a Triathlon later this year (which is
                  held in the Avon, so wish me luck with the swimming!). I also
                  love video games - I'm a Playstation gal usually but have been
                  playing a lot of my Switch recently. In a post-pandemic world
                  you can usually find me at gigs in and around Bristol.
                </p>
              </div>

              <div className="ml-auto">
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
