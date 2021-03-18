/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Row, Col } from "react-bootstrap";

import { Toggle } from "../toggle";
import { Nav } from "../nav";
import { Logo } from "../logo";
import { getHeaderCss } from "./header.styles";

export const Header = () => {
  const { wrapperCss } = getHeaderCss();

  return (
    <header css={wrapperCss}>
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
    </header>
  );
};

export default Header;
