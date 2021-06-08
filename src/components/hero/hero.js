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
                  <span role="img" aria-label="Orange heart.">
                    🧡
                  </span>
                </h1>
                <h2 css={h2}>A Front-end Developer based in Bristol.</h2>
                <p>
                  What I love about working in tech is the power it has to shape
                  the world for the better, providing endless opportunities to
                  those who both use and work in it. I like to work on products
                  and with people who encompass this too.
                </p>
                <p>
                  I'm currently a developer at{" "}
                  <a
                    href="http://zonedigital.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Zone
                  </a>{" "}
                  and in my spare time I try to give back by helping people
                  become better coders. I mentor with two brilliant initiatives,{" "}
                  <a
                    href="http://codebar.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Codebar
                  </a>{" "}
                  and with a Bristol high school through{" "}
                  <a
                    href="https://technologyvolunteers.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Technology Volunteers
                  </a>{" "}
                  . I also love to{" "}
                  <a href="#writing" target="_blank" rel="noopener noreferrer">
                    write
                  </a>{" "}
                  by sharing what I've learnt during my time working in the tech
                  industry.
                </p>
                <p>
                  If you fancy working together in the future, feel free to{" "}
                  <a
                    href="#lets-chat"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    give me a hola
                  </a>
                  .{" "}
                  <span role="img" aria-label="Waving hand.">
                    👋🏻
                  </span>
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
