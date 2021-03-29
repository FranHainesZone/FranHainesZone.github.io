/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Row, Col, Container } from "react-bootstrap";

import { Toggle } from "../toggle";
import { Nav } from "../nav";
import { Logo } from "../logo";
import { getHeaderCss } from "./header.styles";

export const Header = () => {
  const { wrapperCss } = getHeaderCss();

  return (
    <header css={wrapperCss}>
      <Container fluid>
        <Row>
          <Col>
            <Logo />
          </Col>
          <Col xs={8} className="d-none d-lg-block">
            <Nav />
          </Col>
          <Col xs={1}>
            <Toggle />
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
