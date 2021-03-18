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
    <Container>
      <section>
        <Row>
          <Col>
            <div css={heroWrapper} className="d-flex">
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
                  I love my job and try to pass that passion on by mentoring at
                  both Codebar and a local Bristol high school.{" "}
                </p>
                <p>
                  I love being outdoors - I'm really into running, cycling and
                  skateboarding. I also love video games (PlayStation fo' life).
                  In a post-pandemic world you can usually find me at gigs in
                  and around Bristol, kinda like the ginger version of Big Jeff.
                </p>
              </div>

              <div className="ml-auto">
                <div
                  css={foregroundCircle}
                  style={{
                    marginRight: `calc(-${x}px * 0.03)`,
                    marginTop: `calc(-${y}px * 0.03)`,
                  }}
                ></div>
                <div
                  css={backgroundCircle}
                  style={{
                    marginLeft: `calc(-${x}px * 0.01)`,
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
      </section>
    </Container>
  );
};

export default Hero;
